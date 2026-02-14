////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Exaggerated minimalism - massive typography, generous whitespace
// Reference: Swiss Modernism 2.0 principles
////////////////////////////////////////////////////////////////////////////////

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-zinc-950 to-zinc-950" />
      </div>

      {/* Minimal grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Pre-heading */}
          <p className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase mb-8">
            /// AI-Powered Enterprise Solutions ///
          </p>

          {/* Main headline - Exaggerated typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-10">
            <span className="text-zinc-50">We build </span>
            <span className="text-gradient">AI solutions</span>
            <br className="hidden sm:block" />
            <span className="text-zinc-50"> that transform how</span>
            <br className="hidden sm:block" />
            <span className="text-zinc-50">businesses operate.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-16">
            Enterprise AI customization and deployment. Individual-empowering AI
            products. Singapore-based, globally delivered.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#enterprise"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-50 text-zinc-900 text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
            >
              Enterprise Solutions
              <svg
                className="ml-3 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 text-zinc-400 text-sm font-semibold hover:bg-zinc-900 hover:text-zinc-200 hover:border-zinc-700 transition-all duration-200 cursor-pointer"
            >
              Explore Products
            </a>
          </div>

          {/* Trust badge row */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs font-mono tracking-wider text-zinc-600">
            <span>Trusted by 50+ research labs</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Aligned with SG Budget 2026 AI initiatives</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-zinc-700">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
