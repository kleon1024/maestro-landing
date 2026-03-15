////////////////////////////////////////////////////////////////////////////////
// [Hero] S1: Dark hero — full viewport, pure typography
//
// Design: bg-m-black, min-h-screen, serif headline, cyan CTA
// Copy: CMO v2 hero section verbatim
////////////////////////////////////////////////////////////////////////////////

export function Hero() {
  return (
    <section className="relative bg-m-black text-white min-h-screen flex items-center">
      {/* Optional subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at 50% 40%, rgba(34,211,238,0.06), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-40">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-muted mb-8">
          MAESTRO AI
        </p>

        {/* H1 */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
          We turn data engineering projects into compounding infrastructure.
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-m-body-dark leading-relaxed max-w-2xl mb-12">
          Every project we deliver produces two things: the client&apos;s result,
          and a reusable pipeline module that makes the next project faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://ra.maestro.onl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 bg-m-accent text-black font-medium px-8 hover:bg-cyan-300 transition-colors"
          >
            See it in action
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 border border-zinc-700 text-zinc-300 font-medium px-8 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Get in touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
