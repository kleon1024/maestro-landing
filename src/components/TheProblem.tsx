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
          $200B
        </p>
        <p className="font-mono text-sm uppercase tracking-wider text-m-muted mb-10">
          Spent annually on data engineering
        </p>

        {/* Body */}
        <div className="space-y-6 text-lg text-m-body leading-relaxed">
          <p>
            Most of that spend is labor: engineers writing bespoke (custom-built)
            code for each project, each client, each dataset. The code ships,
            the project closes, and the next project starts from zero.
          </p>
          <p>
            This is structurally inefficient. A county-level spatial join in
            climate research uses the same logic as a zip-code mapping in
            insurance analytics. A boundary crosswalk for Chinese administrative
            changes is the same class of problem as a product code concordance
            (standardized mapping) in trade data.
          </p>
        </div>

        {/* Punchline */}
        <p className="font-serif text-2xl lg:text-3xl font-bold text-m-ink mt-12 leading-tight">
          The operations repeat.
          <br />
          The implementations do not get reused.
        </p>
      </div>
    </section>
  );
}
