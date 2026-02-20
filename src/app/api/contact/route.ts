////////////////////////////////////////////////////////////////////////////////
// [Contact API] Responsibility: Handle contact form submissions
//
// Validates input, sends email via Resend to sales@maestro.onl
// Invariants: all required fields must be non-empty strings
// Failure modes: returns 400 for validation errors, 500 for email send failures
////////////////////////////////////////////////////////////////////////////////

import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  message: string;
}

const VALID_INQUIRY_TYPES = [
  "Enterprise AI",
  "Research Data",
  "Partnership",
  "Other",
];

function validatePayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const { name, email, company, inquiryType, message } = body as Record<
    string,
    unknown
  >;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { ok: false, error: "Name is required" };
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { ok: false, error: "Valid email is required" };
  }
  if (!inquiryType || !VALID_INQUIRY_TYPES.includes(inquiryType as string)) {
    return { ok: false, error: "Valid inquiry type is required" };
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { ok: false, error: "Message is required" };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      company: company && typeof company === "string" ? company.trim() : undefined,
      inquiryType: inquiryType as string,
      message: message.trim(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validatePayload(body);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { data } = result;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Maestro Contact <noreply@maestro.onl>",
      to: ["sales@maestro.onl"],
      replyTo: data.email,
      subject: `[${data.inquiryType}] New inquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company ? `Company: ${data.company}` : null,
        `Inquiry Type: ${data.inquiryType}`,
        "",
        "Message:",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
