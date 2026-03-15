////////////////////////////////////////////////////////////////////////////////
// [FlagshipRA] S4: Proof of Concept — dark section, metrics + CTA
//
// Design: bg-m-black, 4 metrics grid, cyan CTA
// Copy: CMO v2 "Flagship: RA Data" verbatim
////////////////////////////////////////////////////////////////////////////////

const METRICS = [
  { value: "70M+", label: "Rows delivered" },
  { value: "94.9%", label: "OCR accuracy" },
  { value: "100x", label: "GPU speedup" },
  { value: "NUS", label: "CUHK-SZ · Stanford" },
];

export function FlagshipRA() {
  return (
    <section id="proof" className="bg-m-black text-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent mb-6">
          PROOF OF CONCEPT
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
          Academic research data — our first vertical.
        </h2>
        <p className="font-serif text-xl text-m-body-dark mb-8">
          Live and revenue-generating.
        </p>

        {/* Body */}
        <p className="text-lg text-m-body-dark leading-relaxed max-w-3xl mb-12">
          RA Data serves economists, political scientists, and social science
          researchers who need research-grade panel data but cannot build it
          themselves. The vertical is deliberately chosen. Academic data
          engineering is high-complexity but low-volume per client — perfect for
          proving the compounding thesis: every project stretches our Skill
          library into a new capability, while the academic market provides a
          steady stream of diverse problems that keep the library growing.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-m-line-dark border border-m-line-dark mb-12">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-m-near-black p-6 text-center">
              <div className="font-mono text-3xl lg:text-4xl font-bold text-white">
                {m.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 mt-2">
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
          className="inline-flex items-center justify-center h-12 border border-m-accent text-m-accent font-medium px-8 hover:bg-m-accent hover:text-black transition-colors"
        >
          Explore RA Data
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
