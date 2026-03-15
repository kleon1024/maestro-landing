////////////////////////////////////////////////////////////////////////////////
// [TheApproach] S3: Skill Flywheel — DARK, flywheel + stats
//
// Design: bg-m-black, max-w-7xl, CSS flywheel, 4-stat grid
// Rhythm: DARK
////////////////////////////////////////////////////////////////////////////////

const STATS = [
  { value: "12", label: "Skills in production" },
  { value: "8", label: "Atomic modules" },
  { value: "5+", label: "Projects delivered" },
  { value: "\u2193", label: "Decreasing cost" },
];

const FLYWHEEL_NODES = [
  { label: "CLIENT REQUEST", position: "top-left" },
  { label: "PROJECT DELIVERY", position: "top-right" },
  { label: "SKILL CREATED", position: "bottom-right" },
  { label: "SKILL LIBRARY", position: "bottom-left" },
];

export function TheApproach() {
  return (
    <section
      id="approach"
      data-theme="dark"
      className="bg-m-black text-white min-h-[80vh] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent mb-8">
          THE APPROACH
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
          Every project leaves behind
          <br className="hidden md:block" /> a building block.
        </h2>

        {/* Body */}
        <div className="max-w-2xl text-lg text-m-body-dark leading-relaxed mb-16 space-y-4">
          <p>
            When we deliver an engineering project, we produce two outputs: the
            client deliverable, and a Skill — a tested, versioned, reusable AI
            module extracted from the work. The method is domain-agnostic.
            Academic data was our first domain. Document intelligence,
            compliance, and workflow automation are next.
          </p>
          <p>
            More projects = wider surface = faster delivery = lower marginal
            cost.
          </p>
        </div>

        {/* Flywheel — Desktop */}
        <div className="hidden md:block mb-16">
          <div className="relative max-w-3xl mx-auto">
            {/* Grid of 4 nodes */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {FLYWHEEL_NODES.map((node) => (
                <div
                  key={node.label}
                  className="border border-zinc-700 bg-zinc-800/50 px-6 py-5 text-center"
                >
                  <p className="font-mono text-xs font-bold tracking-[0.15em] text-m-accent">
                    {node.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Arrow indicators: top row → */}
            <div className="absolute top-[28px] left-1/2 -translate-x-1/2">
              <svg
                className="w-12 h-5 text-m-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 48 20"
              >
                <path d="M0 10h40M36 4l6 6-6 6" />
              </svg>
            </div>

            {/* Arrow: right column down */}
            <div className="absolute right-[120px] top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-8 text-m-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 20 32"
              >
                <path d="M10 0v24M4 20l6 6 6-6" />
              </svg>
            </div>

            {/* Arrow: bottom row ← */}
            <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2">
              <svg
                className="w-12 h-5 text-m-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 48 20"
              >
                <path d="M48 10H8M12 4l-6 6 6 6" />
              </svg>
            </div>

            {/* Arrow: left column up */}
            <div className="absolute left-[120px] top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-8 text-m-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 20 32"
              >
                <path d="M10 32V8M4 12l6-6 6 6" />
              </svg>
            </div>

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Next project is faster
              </p>
            </div>
          </div>
        </div>

        {/* Flywheel — Mobile vertical flow */}
        <div className="md:hidden mb-16">
          <div className="flex flex-col items-center gap-3">
            {FLYWHEEL_NODES.map((node, i) => (
              <div key={node.label} className="w-full max-w-xs">
                <div className="border border-zinc-700 bg-zinc-800/50 px-5 py-4 text-center">
                  <p className="font-mono text-xs font-bold tracking-[0.15em] text-m-accent">
                    {node.label}
                  </p>
                </div>
                {i < FLYWHEEL_NODES.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg
                      className="w-4 h-5 text-m-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0v16M3 12l5 5 5-5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            {/* Loop-back arrow */}
            <div className="flex justify-center py-1">
              <svg
                className="w-4 h-5 text-m-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 16 20"
              >
                <path d="M8 20V4M3 8l5-5 5 5" />
              </svg>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              Next project is faster
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-m-line-dark border border-m-line-dark">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-m-near-black p-8 text-center">
              <div className="font-mono text-5xl lg:text-6xl font-bold text-white">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
