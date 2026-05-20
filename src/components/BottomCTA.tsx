////////////////////////////////////////////////////////////////////////////////
// [BottomCTA] S8: Bottom CTA — DARK, dual CTA + copyright
//
// Design: bg-m-black, centered text, cyan primary CTA
// Rhythm: DARK
////////////////////////////////////////////////////////////////////////////////

import { CONTACT } from "@/lib/constants";

export function BottomCTA() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="bg-m-black text-white py-24 lg:py-32"
    >
      <div className="max-w-3xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          See it in action.
        </h2>

        {/* Body */}
        <p className="text-lg text-m-body-dark leading-relaxed mb-12">
          Start with research infrastructure, business automation, or market
          intelligence. RA Data is the live proof point.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://ra.maestro.onl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 bg-m-accent text-black font-medium px-10 hover:bg-cyan-300 transition-colors"
          >
            Explore RA Data
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
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center h-14 border border-zinc-700 text-zinc-300 font-medium px-10 hover:border-zinc-400 hover:text-white transition-colors"
          >
            Get in touch
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
          </a>
        </div>

        {/* Email */}
        <p className="font-mono text-xs text-zinc-500">
          {CONTACT.email}
        </p>
      </div>
    </section>
  );
}
