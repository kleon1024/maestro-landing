////////////////////////////////////////////////////////////////////////////////
// [FlagshipRA] Responsibility: Showcase RA Suite as the flagship product
//
// Design: Institutional light theme (Playfair headings, navy/gold palette)
// Features: 3 service cards (Data, Website, Paper) + stats + CTA
// Position: Between Hero and Products sections
////////////////////////////////////////////////////////////////////////////////

const RA_SERVICES = [
  {
    number: "/01",
    title: "RA Data",
    description:
      "Turn messy public data sources into paper-ready datasets. Automated cleaning, merging, and visualization pipelines.",
    specs: [
      "Stata / R / Python",
      "Complex Merges & Joins",
      "Regression Output",
      "GIS & Spatial Analysis",
      "Multi-Source Integration",
      "Replication Package Audit",
    ],
    icon: "database",
  },
  {
    number: "/02",
    title: "RA Website",
    description:
      "Research platforms, experiment interfaces, and lab management systems built for academic workflows.",
    specs: [
      "oTree / Qualtrics Integration",
      "Lab CMS & Dashboards",
      "Participant Management",
      "Multi-language Support",
      "Interactive Data Viz",
      "Server Maintenance",
    ],
    icon: "globe",
  },
  {
    number: "/03",
    title: "RA Paper",
    description:
      "Collaborative LaTeX editing with real-time compilation, AI proofreading, and journal-ready templates.",
    specs: [
      "Real-time Compilation",
      "Git Integration",
      "AI Proofreader",
      "Journal Templates",
      "Reference Management",
      "Figure Control",
    ],
    icon: "file-text",
  },
] as const;

const STATS = [
  { value: "50+", label: "Labs Supported" },
  { value: "2M+", label: "Lines Delivered" },
  { value: "100%", label: "Replication Rate" },
] as const;

// Inline SVG icons to avoid external dependencies
function DatabaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  database: <DatabaseIcon />,
  globe: <GlobeIcon />,
  "file-text": <FileTextIcon />,
};

export function FlagshipRA() {
  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest border border-blue-200 bg-blue-50 px-2 py-1">01</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.2em]">FLAGSHIP PRODUCT</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight">
            RA Suite
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Our most complex delivery: a full research infrastructure platform serving 50+ labs across 5 regions. Built from scratch, maintained in production.
          </p>
        </div>

        {/* Service cards - 3 column grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {RA_SERVICES.map((service) => (
            <div
              key={service.number}
              className="group bg-white border border-slate-200 p-8 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium text-[#B8860B] tracking-wider">
                  {service.number}
                </span>
                <div className="w-10 h-10 bg-blue-50 flex items-center justify-center text-blue-700">
                  {serviceIcons[service.icon]}
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-semibold text-[#1A2744] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                {service.specs.map((spec) => (
                  <span
                    key={spec}
                    className="font-mono text-[11px] text-slate-500 border border-slate-200 px-2 py-0.5 truncate"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="https://ra.maestro.onl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors duration-200"
              >
                LEARN MORE
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="border-t border-b border-slate-200 py-10 mb-16">
          <div className="grid grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="https://ra.maestro.onl"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 rounded-none bg-slate-900 hover:bg-blue-600 text-white font-medium px-8 text-sm transition-colors inline-flex items-center justify-center cursor-pointer"
          >
            Explore RA Suite
            <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <span className="text-sm text-slate-400">
            Active project · Accepting new clients
          </span>
        </div>
      </div>
    </section>
  );
}
