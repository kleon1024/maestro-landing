////////////////////////////////////////////////////////////////////////////////
// [FlagshipRA] S4: First Wedge — DARK, big monospace metrics
//
// Design: bg-m-black, 4 metrics with oversized numbers, cyan CTA
// Rhythm: DARK (continues from S3 — but separated by visual weight)
////////////////////////////////////////////////////////////////////////////////

const METRICS = [
  { value: "70M+", label: "Rows delivered" },
  { value: "94.9%", label: "OCR accuracy" },
  { value: "100x", label: "GPU speedup" },
  { value: "NUS", label: "CUHK-SZ \u00b7 Stanford" },
];

export function FlagshipRA() {
  return (
    <section
      id="proof"
      data-theme="dark"
      className="bg-m-black text-white min-h-[80vh] flex items-center py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-[11px] font-bold tracking-widest uppercase text-cyan-400 mb-8">
          FIRST WEDGE — LIVE
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 max-w-4xl">
          RA Data is the entry point,
          <br className="hidden md:block" /> not the whole company.
        </h2>
        <p className="text-lg text-m-body-dark mb-12 max-w-2xl leading-relaxed">
          We start where the pain is immediate: researchers need paper-ready
          datasets, transparent QA, and reproducible delivery. That work gives
          Maestro the contracts and agent modules for the broader research
          infrastructure layer.
        </p>

        {/* Metrics — oversized monospace numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-m-line-dark border border-m-line-dark mb-14">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-m-near-black p-8 text-center">
              <div className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
                {m.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://ra.maestro.onl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-13 border border-m-accent text-m-accent font-medium px-8 hover:bg-m-accent hover:text-black transition-colors"
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
      </div>
    </section>
  );
}
