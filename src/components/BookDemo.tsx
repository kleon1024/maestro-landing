"use client";

import { FormEvent, useState } from "react";
import { CAPABILITY_GROUPS, CONTACT } from "@/lib/constants";

const WORKFLOW_OPTIONS = [
  "Research infrastructure",
  "Business automation",
  "Market intelligence",
  "Not sure yet",
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function BookDemo() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      workflow: String(formData.get("workflow") || ""),
      message: String(formData.get("message") || ""),
      source: "maestro.onl/book-demo",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Lead capture failed.");
      }

      event.currentTarget.reset();
      setSubmitState("success");
    } catch (submitError) {
      setSubmitState("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : `Please email ${CONTACT.email}.`,
      );
    }
  }

  return (
    <section
      id="book-demo"
      data-theme="dark"
      className="bg-m-black text-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent mb-8">
              BOOK A DEMO
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Bring a workflow.
              <br />
              We map the system.
            </h2>
            <p className="text-lg text-m-body-dark leading-relaxed max-w-xl mb-10">
              We work best when there is real source material: files, emails,
              portal steps, CRM records, call notes, invoices, forms, or a
              repeatable workflow that currently depends on manual judgment.
            </p>

            <div className="grid gap-px bg-m-line-dark border border-m-line-dark">
              {CAPABILITY_GROUPS.map((group) => (
                <div key={group.name} className="bg-m-near-black p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {group.name}
                  </h3>
                  <p className="text-sm text-m-body-dark leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.examples.map((example) => (
                      <span
                        key={example}
                        className="border border-zinc-700 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-zinc-400"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-m-line-dark bg-m-near-black p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 mb-2">
                  Name
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full h-12 bg-black border border-zinc-700 px-4 text-white outline-none focus:border-m-accent"
                />
              </label>
              <label className="block">
                <span className="block text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 mb-2">
                  Work email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full h-12 bg-black border border-zinc-700 px-4 text-white outline-none focus:border-m-accent"
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="block text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 mb-2">
                Company
              </span>
              <input
                name="company"
                autoComplete="organization"
                className="w-full h-12 bg-black border border-zinc-700 px-4 text-white outline-none focus:border-m-accent"
              />
            </label>

            <label className="block mt-4">
              <span className="block text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 mb-2">
                Workflow area
              </span>
              <select
                name="workflow"
                className="w-full h-12 bg-black border border-zinc-700 px-4 text-white outline-none focus:border-m-accent"
                defaultValue="Business automation"
              >
                {WORKFLOW_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block mt-4">
              <span className="block text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 mb-2">
                What should the system handle?
              </span>
              <textarea
                name="message"
                rows={6}
                placeholder="Example: We receive customer requests by email, collect files in a portal, check ERP records, prepare invoices, and update CRM manually."
                className="w-full bg-black border border-zinc-700 p-4 text-white outline-none focus:border-m-accent resize-y placeholder:text-zinc-600"
              />
            </label>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center h-14 bg-m-accent text-black font-medium px-8 hover:bg-cyan-300 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState === "submitting" ? "Sending..." : "Book a demo"}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            {submitState === "success" && (
              <p className="mt-4 text-sm text-m-accent">
                Request received. We will reply by email.
              </p>
            )}
            {submitState === "error" && (
              <p className="mt-4 text-sm text-red-300">
                {error} Direct email: {CONTACT.email}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
