////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Split 12-col grid - left text (col-span-7) + right panel (col-span-5)
// Reference: ra.maestro.onl hero pattern adapted for parent brand
// Container: max-w-[1400px]
////////////////////////////////////////////////////////////////////////////////

const STATS = [
  { value: "7", label: "Products Shipped" },
  { value: "50+", label: "Projects Delivered" },
  { value: "<24h", label: "Response Time" },
];

const FEATURED_PRODUCTS = [
  { name: "RA Suite", tag: "Research Infrastructure", url: "https://ra.maestro.onl" },
  { name: "Econ", tag: "Behavioural Economics", url: "https://econ.maestro.onl" },
  { name: "Kairos", tag: "AI Productivity", url: "https://kairos.maestro.onl" },
  { name: "Growth Foundry", tag: "Growth Marketing", url: "https://growth.maestro.onl" },
];

const TAGS = ["AI Product Dev", "Data Infrastructure", "AI Strategy", "Research Tools"];

export function Hero() {
  return (
    <section className="relative bg-white pt-[72px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left panel */}
          <div className="lg:col-span-7 lg:border-r lg:border-slate-200 px-6 py-20 lg:py-28 flex flex-col justify-center">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-8 border-b border-slate-900 pb-2 self-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-slate-700">
                Accepting Projects
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[3.75rem] font-medium text-slate-900 leading-[0.95] tracking-tight mb-6">
              Enterprise AI.<br />
              Built to<br />
              Specification.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              We design and ship custom AI systems for enterprises, research institutions, and government agencies. Singapore-based, globally delivered.
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-slate-600 border border-slate-200 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 rounded-none bg-slate-900 text-white font-medium px-8 text-sm hover:bg-blue-600 transition-colors"
              >
                Request a Consultation
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center h-12 rounded-none border-2 border-slate-300 bg-white text-slate-900 font-medium px-8 text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Our Products
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden lg:flex lg:col-span-5 flex-col px-6 py-20 lg:py-28 justify-center gap-8">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white p-5 text-center">
                  <div className="font-serif text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Product list */}
            <div>
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                Featured Products
              </div>
              <div className="flex flex-col gap-2">
                {FEATURED_PRODUCTS.map((product) => (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-100 bg-slate-50 p-3 flex items-center justify-between hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-sm text-slate-700 group-hover:text-blue-700 transition-colors">{product.name}</div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5">{product.tag}</div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
