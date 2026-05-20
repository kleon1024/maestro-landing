import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  workflow?: string;
  message?: string;
  source?: string;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function leadEmailHtml(payload: Required<LeadPayload>) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "Not provided"],
    ["Workflow", payload.workflow || "Not provided"],
    ["Source", payload.source],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
      <h2>New Maestro demo lead</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:700;width:140px">${label}</td>
                <td style="padding:8px 12px;border:1px solid #e5e7eb">${value}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h3>Need</h3>
      <p style="white-space:pre-wrap">${payload.message || "Not provided"}</p>
    </div>
  `;
}

async function sendLeadEmail(payload: Required<LeadPayload>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.LEAD_TO_EMAIL || "hello@maestro.onl";
  const from = process.env.LEAD_FROM_EMAIL || "Maestro Website <hello@maestro.onl>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Demo lead: ${payload.company || payload.name}`,
      html: leadEmailHtml(payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend failed: ${response.status} ${errorText}`);
  }

  return true;
}

async function postLeadWebhook(payload: Required<LeadPayload>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Lead webhook failed: ${response.status} ${errorText}`);
  }

  return true;
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const raw = body as LeadPayload;
  const payload: Required<LeadPayload> = {
    name: clean(raw.name, 120),
    email: clean(raw.email, 160).toLowerCase(),
    company: clean(raw.company, 160),
    workflow: clean(raw.workflow, 120),
    message: clean(raw.message, 2000),
    source: clean(raw.source, 120) || "maestro.onl/book-demo",
  };

  if (!payload.name || !EMAIL_PATTERN.test(payload.email)) {
    return NextResponse.json(
      { error: "Name and a valid work email are required." },
      { status: 400 },
    );
  }

  try {
    const [emailSent, webhookSent] = await Promise.all([
      sendLeadEmail(payload),
      postLeadWebhook(payload),
    ]);

    if (!emailSent && !webhookSent) {
      return NextResponse.json(
        {
          error:
            "Lead capture is not configured. Please email hello@maestro.onl.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Lead capture failed. Please email hello@maestro.onl." },
      { status: 502 },
    );
  }
}
