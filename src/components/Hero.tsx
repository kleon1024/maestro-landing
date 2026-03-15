////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Split 12-col grid - left text (col-span-7) + right panel (col-span-5)
// Right panel: Key stats + infrastructure layer diagram + flagship link
// Container: max-w-[1400px]
//
// Positioning: AI Infrastructure Company — RA Data is the flagship proof point
////////////////////////////////////////////////////////////////////////////////

const STATS = [
  { value: "8", label: "Atomic Capabilities" },
  { value: "70M+", label: "Data Rows Processed" },
  { value: "8", label: "Projects Delivered" },
];

const TAGS = [
  "AI Product Development",
  "Data & Research Infrastructure",
  "AI Strategy & Training",
];

// Infrastructure stack layers for right panel visualization
const INFRA_LAYERS = [
  {
    label: "Vertical Applications",
    items: ["RA Data", "RA Analysis", "RA Paper"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    label: "AI Agent Orchestration",
    items: ["Maestro Skills", "Agent Teams", "Quality Gates"],
    color: "bg-slate-50 border-slate-200 text-slate-600",
  },
  {
    label: "Composable Data Operations",
    items: ["Acquisition", "Alignment", "Transformation", "Computation"],
    color: "bg-slate-100 border-slate-300 text-slate-700",
  },
];

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
              AI Infrastructure<br />
              for Research<br />
              &amp; Enterprise.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              We orchestrate AI agents to solve data engineering at scale.
              RA Data is our flagship — serving researchers across 5 regions
              with 8 specialized data pipelines.
            </p>

            {/* Service line tags */}
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
                href="https://ra.maestro.onl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 rounded-none bg-slate-900 text-white font-medium px-8 text-sm hover:bg-blue-600 transition-colors"
              >
                Explore RA Data
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 rounded-none border-2 border-slate-300 bg-white text-slate-900 font-medium px-8 text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contact Us
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

            {/* Infrastructure stack diagram */}
            <div>
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                Infrastructure Stack
              </div>
              <div className="flex flex-col gap-2">
                {INFRA_LAYERS.map((layer) => (
                  <div
                    key={layer.label}
                    className={`border ${layer.color} p-3`}
                  >
                    <div className="font-mono text-[9px] uppercase tracking-wider mb-1.5 opacity-70">
                      {layer.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] bg-white/60 border border-current/10 px-2 py-0.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RA Data flagship link */}
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-200 bg-blue-50 p-4 flex items-center justify-between hover:border-blue-400 hover:bg-blue-100 transition-colors group"
            >
              <div>
                <div className="font-medium text-sm text-blue-700">RA Data — Flagship Product</div>
                <div className="font-mono text-[10px] text-blue-400 mt-0.5">
                  Research Data Engineering at Scale · ra.maestro.onl
                </div>
              </div>
              <svg
                className="w-4 h-4 text-blue-300 group-hover:text-blue-500 transition-colors shrink-0 ml-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
