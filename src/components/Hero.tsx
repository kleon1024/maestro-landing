////////////////////////////////////////////////////////////////////////////////
// [Hero] Responsibility: Landing page hero section
//
// Design: Split 12-col grid - left text (col-span-7) + right panel (col-span-5)
// Right panel: RA Suite stats + abstract capability icon grid + flagship link
// Container: max-w-[1400px]
////////////////////////////////////////////////////////////////////////////////

const STATS = [
  { value: "50+", label: "Labs Supported" },
  { value: "2M+", label: "Rows Delivered" },
  { value: "100%", label: "Replication Rate" },
];

const TAGS = ["AI Product Dev", "Research Data", "RA Suite", "AI Strategy"];

// Abstract capability icons for RA Suite
function IconShapefile() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <polygon points="12,3 20,8 20,16 12,21 4,16 4,8" strokeLinejoin="round" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="20" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="20" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="21" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPdfOcr() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      <line x1="7.5" y1="13" x2="16.5" y2="13" strokeLinecap="round" />
      <line x1="7.5" y1="15.5" x2="16.5" y2="15.5" strokeLinecap="round" />
      <line x1="7.5" y1="18" x2="13" y2="18" strokeLinecap="round" />
      {/* scan line */}
      <line x1="5" y1="10.5" x2="19" y2="10.5" strokeLinecap="round" strokeDasharray="2 1.5" strokeWidth={1} />
    </svg>
  );
}

function IconRegression() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      {/* axes */}
      <path strokeLinecap="round" d="M4 20V4M4 20h16" />
      {/* scatter dots */}
      <circle cx="7" cy="17" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="19" cy="6" r="1.2" fill="currentColor" stroke="none" />
      {/* trend line */}
      <line x1="5" y1="19" x2="20" y2="5" strokeWidth={1} strokeDasharray="2 1.5" />
    </svg>
  );
}

function IconReplication() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      {/* folder */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      {/* checkmark */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l2 2 4-4" strokeWidth={1.5} />
    </svg>
  );
}

function IconMultimodal() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      {/* stacked layers */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
    </svg>
  );
}

function IconPanel() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      {/* table grid */}
      <rect x="2.25" y="3" width="19.5" height="18" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2.25" y1="8.25" x2="21.75" y2="8.25" />
      <line x1="2.25" y1="13.5" x2="21.75" y2="13.5" />
      <line x1="8.25" y1="3" x2="8.25" y2="21" />
      <line x1="15.75" y1="8.25" x2="15.75" y2="21" />
    </svg>
  );
}

const RA_CAPABILITY_ICONS = [
  { label: "Shapefile / GIS", Icon: IconShapefile },
  { label: "PDF / OCR", Icon: IconPdfOcr },
  { label: "Regression", Icon: IconRegression },
  { label: "Replication Pkg", Icon: IconReplication },
  { label: "Multimodal", Icon: IconMultimodal },
  { label: "Panel Data", Icon: IconPanel },
];

export function Hero() {
  return (
    <section className="relative bg-white pt-[72px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left panel */}
          <div className="lg:col-span-7 lg:border-r lg:border-slate-200 px-6 py-20 lg:py-28 flex flex-col justify-center">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-8 border-b border-slate-900 pb-2 self-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-slate-700">
                Accepting Projects
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[3.75rem] font-medium text-slate-900 leading-[0.95] tracking-tight mb-6">
              Enterprise AI.<br />
              Built to<br />
              Specification.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              We design and ship custom AI systems — anchored by RA Suite, our research infrastructure platform serving 50+ labs worldwide.
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-slate-600 border border-slate-200 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://ra.maestro.onl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 rounded-none bg-slate-900 text-white font-medium px-8 text-sm hover:bg-blue-600 transition-colors"
              >
                Explore RA Suite
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 rounded-none border-2 border-slate-300 bg-white text-slate-900 font-medium px-8 text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden lg:flex lg:col-span-5 flex-col px-6 py-20 lg:py-28 justify-center gap-8">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white p-5 text-center">
                  <div className="font-serif text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Capability icon grid */}
            <div>
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                RA Suite Capabilities
              </div>
              <div className="grid grid-cols-3 gap-2">
                {RA_CAPABILITY_ICONS.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="border border-slate-100 bg-slate-50 p-3 flex flex-col items-center gap-2 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                      <Icon />
                    </span>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wide text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RA Suite flagship link */}
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-200 bg-blue-50 p-4 flex items-center justify-between hover:border-blue-400 hover:bg-blue-100 transition-colors group"
            >
              <div>
                <div className="font-medium text-sm text-blue-700">RA Suite</div>
                <div className="font-mono text-[10px] text-blue-400 mt-0.5">
                  Flagship · Research Infrastructure · ra.maestro.onl
                </div>
              </div>
              <svg
                className="w-4 h-4 text-blue-300 group-hover:text-blue-500 transition-colors shrink-0 ml-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
