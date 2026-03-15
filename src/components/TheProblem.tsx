////////////////////////////////////////////////////////////////////////////////
// [TheProblem] S2: The Problem — light, text-only, narrow column
//
// Design: bg-white, max-w-3xl centered, serif heading
// Copy: CMO v2 "The Problem We Solve" verbatim
////////////////////////////////////////////////////////////////////////////////

export function TheProblem() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent-dim mb-6">
          THE PROBLEM
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-m-ink leading-tight mb-8">
          Data engineering is a $200B market where every project starts from scratch.
        </h2>

        {/* Body */}
        <div className="space-y-6 text-lg text-m-body leading-relaxed">
          <p>
            Enterprises and researchers spend billions annually on data engineering.
            Most of that spend is labor: engineers writing bespoke code for each
            project, each client, each dataset. The code ships, the project closes,
            and the next project starts from zero.
          </p>
          <p>
            This is structurally inefficient. Data engineering tasks are not as
            unique as they appear. A county-level spatial join in climate research
            uses the same logic as a zip-code mapping in insurance analytics. A
            boundary crosswalk for Chinese administrative changes is the same class
            of problem as a product code concordance in trade data.
          </p>
          <p>
            The operations repeat. The implementations do not get reused.
          </p>
        </div>

        {/* Punchline */}
        <p className="font-serif text-xl lg:text-2xl font-semibold text-m-ink mt-10">
          We fix that.
        </p>
      </div>
    </section>
  );
}
