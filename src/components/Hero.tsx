////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Institutional enterprise aesthetic - Playfair serif headline,
// light gradient bg, clean CTA pair, no decorative overlays.
////////////////////////////////////////////////////////////////////////////////

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Pre-heading */}
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-700 mb-8">
            Enterprise AI Solutions
          </p>

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A2744] leading-[1.05] mb-10">
            We build AI solutions that transform how businesses operate.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-16">
            Enterprise AI customization and deployment. Individual-empowering AI
            products. Singapore-based, globally delivered.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#enterprise"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A3A6B] text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
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
              className="inline-flex items-center justify-center px-8 py-4 border border-[#1A3A6B] text-[#1A3A6B] text-sm font-semibold hover:bg-blue-50 transition-all duration-200 cursor-pointer"
            >
              Explore Products
            </a>
          </div>

          {/* Trust badge row */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span>Trusted by 50+ research labs</span>
            <span> · </span>
            <span>Aligned with SG Budget 2026 AI initiatives</span>
          </div>
        </div>
      </div>
    </section>
  );
}
