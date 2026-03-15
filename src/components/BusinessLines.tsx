////////////////////////////////////////////////////////////////////////////////
// [BusinessLines] S5: Business Structure — LIGHT, card grid
//
// Design: bg-white, 4 cards with status badges, generous spacing
// Rhythm: LIGHT
////////////////////////////////////////////////////////////////////////////////

import { BUSINESS_LINES, type BusinessLineStatus } from "@/lib/constants";

function StatusBadge({
  status,
  label,
}: {
  status: BusinessLineStatus;
  label: string;
}) {
  const styles: Record<BusinessLineStatus, string> = {
    live: "bg-green-400/10 text-green-600 border-green-400/30",
    roadmap: "bg-blue-400/10 text-blue-500 border-blue-400/30",
    "on-demand": "bg-zinc-400/10 text-zinc-500 border-zinc-400/30",
  };

  const dotStyles: Record<BusinessLineStatus, string> = {
    live: "bg-green-500",
    roadmap: "bg-blue-400",
    "on-demand": "bg-zinc-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 border ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`}
      />
      {label}
    </span>
  );
}

export function BusinessLines() {
  return (
    <section
      id="services"
      data-theme="light"
      className="bg-white min-h-[80vh] flex items-center py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent-sky mb-8">
          BUSINESS STRUCTURE
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-m-ink leading-[1.1] mb-14">
          Four lines. One infrastructure.
        </h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_LINES.map((line) => (
            <div
              key={line.name}
              className="border border-m-line-light p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-m-ink">
                  {line.name}
                </h3>
                <StatusBadge status={line.status} label={line.statusLabel} />
              </div>
              <p className="text-base text-m-body leading-relaxed">
                {line.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
