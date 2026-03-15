////////////////////////////////////////////////////////////////////////////////
// [BusinessLines] S5: Revenue Structure — accordion list, 4 items
//
// Design: bg-white, Palantir-style list with status badges
// Copy: CMO v2 "Business Lines" verbatim
////////////////////////////////////////////////////////////////////////////////

import { BUSINESS_LINES, type BusinessLineStatus } from "@/lib/constants";

function StatusBadge({ status, label }: { status: BusinessLineStatus; label: string }) {
  const styles: Record<BusinessLineStatus, string> = {
    live: "bg-green-400/20 text-green-500 border-green-400/30",
    roadmap: "bg-blue-400/20 text-blue-400 border-blue-400/30",
    "on-demand": "bg-zinc-400/20 text-zinc-400 border-zinc-400/30",
  };

  const dotStyles: Record<BusinessLineStatus, string> = {
    live: "bg-green-400",
    roadmap: "bg-blue-400",
    "on-demand": "bg-zinc-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 border ${styles[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {label}
    </span>
  );
}

export function BusinessLines() {
  return (
    <section id="revenue" className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent-dim mb-6">
          REVENUE STRUCTURE
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-m-ink leading-tight mb-12">
          Four lines. One infrastructure.
        </h2>

        {/* Accordion list */}
        <div className="border-t border-m-line-light">
          {BUSINESS_LINES.map((line) => (
            <div
              key={line.name}
              className="border-b border-m-line-light py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-8">
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-m-ink">
                    {line.name}
                  </h3>
                  <StatusBadge status={line.status} label={line.statusLabel} />
                </div>
              </div>
              <p className="text-base text-m-body leading-relaxed mt-3 max-w-3xl">
                {line.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
