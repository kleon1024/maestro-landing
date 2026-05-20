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
          WORK
        </p>
        <p className="font-mono text-sm uppercase tracking-wider text-m-muted mb-10">
          Sources / evidence / workflow / deliverable
        </p>

        {/* Body */}
        <div className="space-y-6 text-lg text-m-body leading-relaxed">
          <p>
            The valuable work is not a chat prompt. It is buried in source
            documents, datasets, emails, websites, forms, spreadsheets, and
            domain judgment.
          </p>
          <p>
            Research, operations, and go-to-market teams share the same failure
            mode: evidence is scattered, workflows are manual, and every project
            starts without memory from the last one.
          </p>
        </div>

        {/* Punchline */}
        <p className="font-serif text-2xl lg:text-3xl font-semibold text-m-ink mt-12 leading-tight">
          AI only matters when it can own a workflow.
          <br />
          The workflow starts with evidence.
        </p>
      </div>
    </section>
  );
}
