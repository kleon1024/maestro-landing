////////////////////////////////////////////////////////////////////////////////
// [Hero] S1: Dark hero — full viewport, serif headline, dual CTAs
//
// Design: bg-m-black, min-h-screen, Fraunces headline, cyan CTA
// Rhythm: DARK
////////////////////////////////////////////////////////////////////////////////

export function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative bg-m-black text-white min-h-screen flex items-center"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at 50% 35%, rgba(34,211,238,0.04), transparent)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-8 py-32 md:py-40">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-muted mb-10 animate-fade-in">
          MAESTRO AI
        </p>

        {/* H1 — each line breathes */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-10 max-w-xs sm:max-w-lg md:max-w-5xl animate-fade-in-d1">
          AI infrastructure
          <br /> for evidence-heavy work.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-m-body-dark leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl mb-14 animate-fade-in-d2">
          Maestro builds reusable AI systems for research, business automation,
          and market intelligence — turning scattered sources into verified
          workflows, deliverables, and institutional memory.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xs sm:max-w-none animate-fade-in-d3">
          <a
            href="https://ra.maestro.onl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-13 bg-m-accent text-black font-medium px-8 hover:bg-cyan-300 transition-colors"
          >
            See it in action
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
            href="#book-demo"
            className="inline-flex items-center justify-center h-13 border border-zinc-700 text-zinc-300 font-medium px-8 hover:border-zinc-400 hover:text-white transition-colors"
          >
            Book a demo
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-chevron">
        <svg
          className="w-5 h-5 text-zinc-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
