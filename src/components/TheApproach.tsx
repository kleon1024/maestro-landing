////////////////////////////////////////////////////////////////////////////////
// [TheApproach] S3: Skill Flywheel — offwhite bg, flywheel + stats
//
// Design: bg-m-offwhite, max-w-5xl, CSS flywheel diagram, 4-stat grid
// Copy: CMO v2 "The Approach" verbatim
////////////////////////////////////////////////////////////////////////////////

const STATS = [
  { value: "12", label: "Skills in production" },
  { value: "8", label: "Atomic capabilities" },
  { value: "5+", label: "Projects delivered" },
  { value: "\u2193", label: "Marginal cost" },
];

const FLYWHEEL_STEPS = [
  { label: "SKILL LIBRARY", sub: "12 skills" },
  { label: "CLIENT REQUEST", sub: "arrives" },
  { label: "FASTER DELIVERY", sub: "from reuse" },
  { label: "PROJECT DELIVERED", sub: "to client" },
  { label: "NEW SKILL EXTRACTED", sub: "into library" },
];

export function TheApproach() {
  return (
    <section id="approach" className="bg-m-offwhite py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent-dim mb-6">
          HOW WE BUILD
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-m-ink leading-tight mb-6">
          Every project leaves behind a building block.
        </h2>

        {/* Body */}
        <div className="max-w-3xl text-lg text-m-body leading-relaxed mb-12 space-y-4">
          <p>When we deliver a data engineering project, we produce two outputs:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong className="text-m-ink">The client deliverable</strong> — a
              clean, documented, reproducible dataset or pipeline.
            </li>
            <li>
              <strong className="text-m-ink">A Skill</strong> — a tested,
              versioned, reusable pipeline module extracted from the project.
            </li>
          </ol>
          <p>
            Our AI agents orchestrate a growing library of these Skills. The more
            projects we complete, the wider our capability surface. The wider the
            surface, the faster we deliver. The faster we deliver, the lower our
            marginal cost.
          </p>
        </div>

        {/* Flywheel diagram — CSS version */}
        <div className="border border-m-line-light bg-white p-6 md:p-10 mb-12">
          {/* Desktop: circular-ish layout */}
          <div className="hidden md:block">
            <div className="flex flex-col items-center gap-4">
              {/* Top node */}
              <div className="border border-m-accent/40 bg-m-accent/5 px-6 py-3 text-center">
                <p className="font-mono text-xs font-bold tracking-wider text-m-accent-dim">
                  {FLYWHEEL_STEPS[0].label}
                </p>
                <p className="font-mono text-[10px] text-m-muted mt-0.5">
                  {FLYWHEEL_STEPS[0].sub}
                </p>
              </div>

              {/* Arrow down */}
              <svg className="w-4 h-6 text-m-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 24">
                <path d="M8 0v20M2 16l6 6 6-6" />
              </svg>

              {/* Middle row: 3 steps */}
              <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
                {FLYWHEEL_STEPS.slice(1, 4).map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="border border-m-line-light px-4 py-2 text-center">
                      <p className="font-mono text-xs font-bold tracking-wider text-m-ink">
                        {step.label}
                      </p>
                      <p className="font-mono text-[10px] text-m-muted mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                    {i < 2 && (
                      <svg className="w-6 h-4 text-m-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 16">
                        <path d="M0 8h20M16 2l6 6-6 6" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrow up */}
              <svg className="w-4 h-6 text-m-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 24">
                <path d="M8 24V4M2 8l6-6 6 6" />
              </svg>

              {/* Bottom node */}
              <div className="border border-m-accent/40 bg-m-accent/5 px-6 py-3 text-center">
                <p className="font-mono text-xs font-bold tracking-wider text-m-accent-dim">
                  {FLYWHEEL_STEPS[4].label}
                </p>
                <p className="font-mono text-[10px] text-m-muted mt-0.5">
                  {FLYWHEEL_STEPS[4].sub}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden flex flex-col items-center gap-3">
            {FLYWHEEL_STEPS.map((step, i) => (
              <div key={step.label}>
                <div className="border border-m-line-light px-5 py-3 text-center">
                  <p className="font-mono text-xs font-bold tracking-wider text-m-ink">
                    {step.label}
                  </p>
                  <p className="font-mono text-[10px] text-m-muted mt-0.5">
                    {step.sub}
                  </p>
                </div>
                {i < FLYWHEEL_STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="w-4 h-5 text-m-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 16 20">
                      <path d="M8 0v16M2 12l6 6 6-6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center text */}
          <p className="text-center font-mono text-xs text-m-muted mt-6">
            More projects = wider surface = faster delivery = lower marginal cost
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-m-line-light border border-m-line-light">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center">
              <div className="font-mono text-4xl lg:text-5xl font-bold text-m-ink">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-m-muted mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
