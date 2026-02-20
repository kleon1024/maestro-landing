////////////////////////////////////////////////////////////////////////////////
// [BlogCTA] Responsibility: Call-to-action component for blog post pages
//
// Two variants:
// - "research": links to RA Suite for research-related articles
// - "enterprise": links to contact section for enterprise/business articles
//
// Invariants: variant must be "research" | "enterprise"
// Placed after article content, before share buttons
////////////////////////////////////////////////////////////////////////////////

interface BlogCTAProps {
  variant: "research" | "enterprise";
}

const CTA_CONFIG = {
  research: {
    label: "/// Research ///",
    heading: "Explore AI-Powered Research Data Services",
    description:
      "From dataset construction to replication packages, Maestro RA Suite handles the data pipeline so you can focus on the research.",
    buttonText: "Explore RA Suite",
    href: "https://ra.maestro.onl",
    external: true,
  },
  enterprise: {
    label: "/// Enterprise ///",
    heading: "Transform Your Business with AI",
    description:
      "Custom AI solutions, workflow automation, and team upskilling. Let us build the right AI stack for your business.",
    buttonText: "Get in Touch",
    href: "/#contact",
    external: false,
  },
} as const;

export function BlogCTA({ variant }: BlogCTAProps) {
  const config = CTA_CONFIG[variant];

  return (
    <aside className="my-12 rounded-lg border border-zinc-800 bg-zinc-900/60 p-8 md:p-10">
      <p className="text-xs font-mono tracking-[0.15em] text-zinc-600 uppercase mb-4">
        {config.label}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-zinc-50 mb-3">
        {config.heading}
      </h3>
      <p className="text-zinc-400 leading-relaxed mb-6 max-w-xl">
        {config.description}
      </p>
      <a
        href={config.href}
        {...(config.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        {config.buttonText}
        <svg
          className="w-4 h-4"
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
    </aside>
  );
}
