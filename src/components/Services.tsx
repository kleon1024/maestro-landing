import { SERVICES, CONTACT } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Services] Responsibility: Enterprise AI Solutions section
//
// Layout: Section header + 3-col service card grid + policy callout banner
// Design: zinc-950/900 dark theme, Swiss Modernism style
// Invariants: Exactly 3 service items from SERVICES constant
////////////////////////////////////////////////////////////////////////////////

const ICON_MAP: Record<string, React.ReactNode> = {
  cpu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  graduation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
};

const INCENTIVES = [
  "400% tax deduction on qualifying AI spending (EIS)",
  "Productivity Solutions Grant (PSG) for AI adoption",
  "AI Champions Programme support",
];

export function Services() {
  return (
    <section id="enterprise" className="section-padding bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase mb-6">
            /// Enterprise ///
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-6 tracking-tight">
            Enterprise AI Solutions
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            From strategy to deployment, we partner with businesses to create AI
            solutions that deliver measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-zinc-600 transition-all duration-300"
            >
              {/* Top row: number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-zinc-600">
                  {service.number}
                </span>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-950/40 text-blue-400">
                  {ICON_MAP[service.icon]}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-50 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-zinc-400 mb-6">
                {service.description}
              </p>

              {/* Features 2-col grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs text-zinc-500 font-mono"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors duration-200 tracking-wider"
              >
                CONTACT SALES
                <span className="ml-2 text-zinc-700 group-hover:text-zinc-500 transition-colors">
                  &gt;&gt;&gt;
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Policy callout banner */}
        <div className="mt-12 bg-zinc-900/50 border border-zinc-800 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase">
              SG Budget 2026
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-zinc-50 mb-6">
            Leverage Singapore&apos;s AI Incentives
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {INCENTIVES.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${CONTACT.sales}`}
            className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-6"
          >
            Talk to Us About Incentives
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
