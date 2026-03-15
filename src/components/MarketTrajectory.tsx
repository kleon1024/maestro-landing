////////////////////////////////////////////////////////////////////////////////
// [MarketTrajectory] S6: Client Tiers — DARK, vertical timeline
//
// Design: bg-m-black, 4 tiers top-to-bottom with timeline badges
// Rhythm: DARK
////////////////////////////////////////////////////////////////////////////////

const TIERS = [
  {
    timeline: "NOW",
    name: "Research",
    description:
      "Individual professors, PhD students, research assistants. Relationship-driven, project-scoped. Our core market, Skill-building engine, and proof that the flywheel works.",
    active: true,
    link: "https://ra.maestro.onl",
  },
  {
    timeline: "H2 2026",
    name: "SMB + Institutional",
    description:
      "Research institutions, think tanks, policy departments. Standardized products, volume licensing — and the first expansion beyond data into document intelligence and compliance workflows.",
    active: false,
    link: `mailto:hello@maestro.onl`,
  },
  {
    timeline: "12\u201318 MONTHS",
    name: "Enterprise",
    description:
      "Corporate departments, consulting firms, government agencies. SLA-backed, integration-ready. Multiple engineering verticals served from a single module library.",
    active: false,
  },
  {
    timeline: "18\u201336 MONTHS",
    name: "Corporate",
    description:
      "Large-scale institutional deployments. Multi-year contracts, dedicated infrastructure, custom governance. The platform becomes the operating layer for complex automation.",
    active: false,
  },
];

export function MarketTrajectory() {
  return (
    <section
      data-theme="dark"
      className="bg-m-black text-white min-h-[80vh] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent mb-8">
          MARKET TRAJECTORY
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-16 max-w-4xl">
          Research today.
          <br /> Enterprise tomorrow.
        </h2>

        {/* Tier list */}
        <div className="space-y-0">
          {TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={`border-t border-m-line-dark py-8 md:py-10 ${
                i === TIERS.length - 1 ? "border-b" : ""
              } ${!tier.active ? "opacity-60" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                {/* Timeline badge */}
                <div className="md:w-40 shrink-0">
                  <span
                    className={`inline-block font-mono text-xs font-bold tracking-[0.15em] px-3 py-1.5 ${
                      tier.active
                        ? "bg-m-accent/15 text-m-accent border border-m-accent/30"
                        : "bg-zinc-900 text-zinc-500 border border-m-line-dark"
                    }`}
                  >
                    {tier.timeline}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-base text-m-body-dark leading-relaxed max-w-2xl">
                    {tier.description}
                  </p>
                  {tier.link && (
                    <a
                      href={tier.link}
                      target={tier.link.startsWith("http") ? "_blank" : undefined}
                      rel={
                        tier.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center text-sm font-medium text-m-accent hover:text-cyan-300 transition-colors mt-3"
                    >
                      {tier.link.startsWith("http")
                        ? "ra.maestro.onl"
                        : "Get in touch"}
                      <svg
                        className="ml-1 w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
