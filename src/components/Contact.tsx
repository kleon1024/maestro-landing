"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Contact] Responsibility: Contact section with form + fallback mailto links
//
// Form submits to ra.maestro.onl/api/contact (centralized CRM)
// Maps inquiry types to ra CRM categories (General/Data/Website/Paper)
// Keeps mailto links as secondary contact option
// Client component due to form state management
////////////////////////////////////////////////////////////////////////////////

type FormStatus = "idle" | "submitting" | "success" | "error";

const CONTACT_API =
  process.env.NODE_ENV === "development"
    ? "/api/contact"
    : "https://ra.maestro.onl/api/contact";

const INQUIRY_OPTIONS = [
  { label: "Enterprise AI", subject: "General" },
  { label: "Research Data", subject: "Data" },
  { label: "Website Development", subject: "Website" },
  { label: "Partnership", subject: "General" },
  { label: "Other", subject: "General" },
] as const;

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const inquiry = formData.get("inquiryType") as string;
    const company = (formData.get("company") as string)?.trim();
    const messageBody = formData.get("message") as string;

    // Map to ra CRM schema: { name, email, subject, message }
    const option = INQUIRY_OPTIONS.find((o) => o.label === inquiry);
    const subject = option?.subject ?? "General";
    const message = company
      ? `[Company: ${company}] [Via: maestro.onl - ${inquiry}]\n\n${messageBody}`
      : `[Via: maestro.onl - ${inquiry}]\n\n${messageBody}`;

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject,
      message,
      source: "maestro.onl",
      sourceCategory: inquiry,
    };

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-700 mb-6">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2744] mb-6 tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto">
            Ready to transform your workflows with AI? Get in touch.
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto mb-16">
          {status === "success" ? (
            <div className="p-8 bg-white border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2744] mb-2">
                Message Sent
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-blue-700 hover:text-blue-800 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Company */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="contact-inquiry"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Inquiry Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="contact-inquiry"
                    name="inquiryType"
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {INQUIRY_OPTIONS.map((opt) => (
                      <option key={opt.label} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-md bg-[#1A3A6B] py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Mailto fallback cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <p className="sm:col-span-2 text-center text-xs text-slate-400 mb-2">
            Or reach us directly via email
          </p>

          {/* Sales */}
          <a
            href={`mailto:${CONTACT.sales}`}
            className="group block p-6 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Sales</h3>
                <span className="text-sm text-blue-700 group-hover:text-blue-800 transition-colors">
                  {CONTACT.sales}
                </span>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </a>

          {/* Support */}
          <a
            href={`mailto:${CONTACT.support}`}
            className="group block p-6 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Support</h3>
                <span className="text-sm text-blue-700 group-hover:text-blue-800 transition-colors">
                  {CONTACT.support}
                </span>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
