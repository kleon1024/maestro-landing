////////////////////////////////////////////////////////////////////////////////
// [FlagshipRA] Responsibility: Showcase RA Data as the flagship product
//
// Design: Two-part layout
//   Part 1: Left label+stats | Right simplified ontology (4 operations)
//   Part 2: Key metrics bar + CTA
//
// Positioning: RA Data proves Maestro AI's infrastructure works.
// Simplified ontology framework + key numbers + deep-dive CTA.
////////////////////////////////////////////////////////////////////////////////

const RA_STATS = [
  { value: "8", label: "Atomic Capabilities" },
  { value: "3,232", label: "Prospects Identified" },
  { value: "70M+", label: "Data Rows Processed" },
  { value: "8", label: "Projects Delivered" },
];

const OPERATIONS = [
  {
    name: "Acquisition",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    examples: ["OCR", "Scraping", "API"],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "Alignment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <polygon points="12,3 20,8 20,16 12,21 4,16 4,8" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    examples: ["Spatial Join", "Crosswalk", "Entity Match"],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Transformation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M4 6h7M4 10h7M4 14h7" />
        <path strokeLinecap="round" d="M13 6h7M13 10h7M13 14h7" />
        <path d="M11 8L13 8M11 12L13 12" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    examples: ["Concordance", "Index Calc", "Imputation"],
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    name: "Computation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M4 20V4M4 20h16" />
        <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="11" cy="12" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="18" cy="6" r="1.2" fill="currentColor" stroke="none" />
        <line x1="6" y1="18" x2="19" y2="5" strokeWidth={1} strokeDasharray="2 1.5" />
      </svg>
    ),
    examples: ["GPU Accel", "Bootstrap", "Causal Inference"],
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
] as const;

export function FlagshipRA() {
  return (
    <section id="ra-suite" className="bg-white border-t border-b border-slate-200">

      {/* Part 1: Left label+stats | Right ontology */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Left: label + heading + stats */}
        <div className="lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest border border-blue-200 bg-blue-50 px-2 py-1">01</span>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.2em]">FLAGSHIP PRODUCT</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-slate-900 leading-[0.95] tracking-tight mb-4">
              RA Data
            </h2>
            <p className="font-mono text-[11px] text-blue-600 uppercase tracking-wider mb-6">
              Research Data Engineering at Scale
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Our most battle-tested product. Eight specialized pipelines
              covering the full research data lifecycle — from scanned archives
              to publication-ready panels.
            </p>
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 rounded-none bg-slate-900 hover:bg-blue-600 text-white font-medium px-7 text-sm transition-colors"
            >
              Deep Dive into RA Data
              <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {RA_STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-4">
                <div className="font-serif text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Simplified ontology — 4 operations */}
        <div className="lg:col-span-8 p-8 lg:p-12">
          <div className="mb-6">
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-2">
              Data Engineering Ontology
            </p>
            <p className="text-sm text-slate-600">
              Every research data project maps to four fundamental operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPERATIONS.map((op, idx) => (
              <div
                key={op.name}
                className="group bg-white border border-slate-200 p-5 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`${op.color}`}>{op.icon}</span>
                  <span className="font-mono text-[10px] text-slate-300 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-slate-900 mb-3">
                  {op.name}
                </h3>

                {/* Example capabilities */}
                <div className="space-y-1 mt-auto">
                  {op.examples.map((ex) => (
                    <div
                      key={ex}
                      className={`font-mono text-[10px] ${op.bg} ${op.color} px-2 py-0.5`}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Arrow flow indicator */}
          <div className="hidden lg:flex items-center justify-center mt-4 gap-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              Raw Data
            </span>
            <div className="flex-1 h-px bg-slate-200 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg className="w-3 h-3 text-slate-300" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M2 1l8 5-8 5V1z" />
                </svg>
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              Publication-Ready Panel
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
