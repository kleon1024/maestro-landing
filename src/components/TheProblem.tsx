////////////////////////////////////////////////////////////////////////////////
// [TheProblem] S2: The Problem — LIGHT, min-h-[80vh], narrow column
//
// Design: bg-white, max-w-2xl centered, big monospace number
// Rhythm: LIGHT
////////////////////////////////////////////////////////////////////////////////

export function TheProblem() {
  return (
    <section
      data-theme="light"
      className="bg-white min-h-[80vh] flex items-center py-24 lg:py-32"
    >
      <div className="max-w-2xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent-sky mb-8">
          THE PROBLEM
        </p>

        {/* Anchor */}
        <p className="font-mono text-5xl md:text-7xl font-light text-m-ink mb-6 leading-none">
          DATA
        </p>
        <p className="font-mono text-sm uppercase tracking-wider text-m-muted mb-10">
          Compute / datasets / experiments / evidence
        </p>

        {/* Body */}
        <div className="space-y-6 text-lg text-m-body leading-relaxed">
          <p>
            Research teams run on fragile infrastructure: scraped sources,
            panel datasets, code notebooks, experiments, model runs, and
            replication packages held together by ad hoc labor.
          </p>
          <p>
            The same pattern appears in enterprise data operations: real-world
            data must be collected, cleaned, checked, computed, packaged, and
            explained. The domain changes. The operating layer should not start
            from zero each time.
          </p>
        </div>

        {/* Punchline */}
        <p className="font-serif text-2xl lg:text-3xl font-semibold text-m-ink mt-12 leading-tight">
          Research is the first wedge.
          <br />
          Data-driven operations are the platform.
        </p>
      </div>
    </section>
  );
}
