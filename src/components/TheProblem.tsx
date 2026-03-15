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

        {/* Big number */}
        <p className="font-mono text-6xl md:text-8xl font-bold text-m-ink mb-6 leading-none">
          $1.8T
        </p>
        <p className="font-mono text-sm uppercase tracking-wider text-m-muted mb-10">
          Global enterprise automation spend by 2030
        </p>

        {/* Body */}
        <div className="space-y-6 text-lg text-m-body leading-relaxed">
          <p>
            Complex engineering tasks — data pipelines, document processing,
            compliance checks, workflow orchestration — share a structural
            problem: they are repetitive, expensive, expert-dependent, and
            knowledge never accumulates.
          </p>
          <p>
            A county-level spatial join in climate research uses the same logic
            as a zip-code mapping in insurance analytics. An invoice extraction
            pipeline for a law firm follows the same pattern as a medical record
            parser. The domains differ. The engineering does not.
          </p>
        </div>

        {/* Punchline */}
        <p className="font-serif text-2xl lg:text-3xl font-bold text-m-ink mt-12 leading-tight">
          The operations repeat.
          <br />
          The implementations never compound.
        </p>
      </div>
    </section>
  );
}
