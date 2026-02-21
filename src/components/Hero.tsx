////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Split layout - left text panel, right stats + product preview
// Reference: ra.maestro.onl split hero pattern, elevated for parent brand
////////////////////////////////////////////////////////////////////////////////

export function Hero() {
  const STATS = [
    { value: "7", label: "Products Shipped" },
    { value: "50+", label: "Projects Delivered" },
    { value: "< 24h", label: "Response Time" },
  ];

  const FEATURED_PRODUCTS = [
    { name: "RA Suite", tag: "Research Infrastructure", color: "from-blue-100 to-blue-50", border: "border-blue-200", url: "https://ra.maestro.onl" },
    { name: "Econ", tag: "Behavioural Economics", color: "from-emerald-100 to-emerald-50", border: "border-emerald-200", url: "https://econ.maestro.onl" },
    { name: "Kairos", tag: "AI Productivity", color: "from-indigo-100 to-indigo-50", border: "border-indigo-200", url: "https://kairos.maestro.onl" },
    { name: "Growth Foundry", tag: "Growth Marketing", color: "from-amber-100 to-amber-50", border: "border-amber-200", url: "https://growth.maestro.onl" },
  ];

  const TAGS = ["AI Product Dev", "Data Infrastructure", "AI Strategy", "Research Tools"];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">

          {/* Left panel */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-700">
                Accepting Projects
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#1A2744] leading-[1.05] mb-6">
              Enterprise AI.<br />
              Built to<br />
              Specification.
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl">
              We design and ship custom AI systems for enterprises, research institutions, and government agencies. Singapore-based, globally delivered.
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1A3A6B] text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Request a Consultation
                <svg
                  className="ml-3 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#1A3A6B] text-[#1A3A6B] text-sm font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                View Our Products
              </a>
            </div>
          </div>

          {/* Right panel - hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg border border-slate-200 p-4 text-center"
                >
                  <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A2744] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Product preview 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {FEATURED_PRODUCTS.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${product.color} rounded-lg border ${product.border} p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer`}
                >
                  <div className="text-sm font-semibold text-[#1A2744] mb-1">
                    {product.name}
                  </div>
                  <div className="text-xs text-slate-500">{product.tag}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
