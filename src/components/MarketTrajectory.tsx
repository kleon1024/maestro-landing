////////////////////////////////////////////////////////////////////////////////
// [MarketTrajectory] S6: Where We're Going — timeline bars + pullquote
//
// Design: bg-m-offwhite, cyan progress bars, serif italic pullquote
// Copy: CMO v2 "Market Trajectory" verbatim
////////////////////////////////////////////////////////////////////////////////

const TIERS = [
  {
    timeline: "NOW",
    name: "Research",
    description:
      "Individual professors, PhD students, research assistants. Relationship-driven, project-scoped. Our core market and our Skill-building engine.",
    barWidth: "w-full",
    link: "https://ra.maestro.onl",
  },
  {
    timeline: "12-18 MONTHS",
    name: "SMB + Institutional",
    description:
      "Research institutions, think tanks, policy departments with recurring data needs. Standardized products, volume licensing.",
    barWidth: "w-2/3",
  },
  {
    timeline: "18-36 MONTHS",
    name: "Enterprise",
    description:
      "Corporate data departments, consulting firms, government agencies. SLA-backed, integration-ready, compliance-grade.",
    barWidth: "w-1/3",
  },
];

export function MarketTrajectory() {
  return (
    <section className="bg-m-offwhite py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent-dim mb-6">
          WHERE WE&apos;RE GOING
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-m-ink leading-tight mb-12">
          Research today. Enterprise tomorrow.
        </h2>

        {/* Timeline */}
        <div className="space-y-10 mb-12">
          {TIERS.map((tier) => (
            <div key={tier.name}>
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-muted mb-2">
                {tier.timeline}
              </p>
              <div className={`h-1 bg-m-accent ${tier.barWidth} mb-3`} />
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-m-ink mb-2">
                {tier.name}
              </h3>
              <p className="text-base text-m-body leading-relaxed max-w-3xl">
                {tier.description}
              </p>
              {tier.link && (
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-m-accent-dim hover:text-m-ink transition-colors mt-2"
                >
                  ra.maestro.onl
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Pullquote */}
        <blockquote className="max-w-3xl">
          <p className="font-serif text-lg lg:text-xl italic text-slate-700 leading-relaxed">
            &ldquo;We do not need to hire 50 engineers to serve 50 enterprise
            clients. We need to deploy 50 Skills.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
