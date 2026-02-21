////////////////////////////////////////////////////////////////////////////////
// [About] Responsibility: Compact trust signals + company metrics
//
// Design: Two-col split — left trust statement, right metric grid
// Invariants: No external dependencies, no icon library
////////////////////////////////////////////////////////////////////////////////

const METRICS = [
  { value: "7", label: "AI Products Shipped" },
  { value: "50+", label: "Research Labs Served" },
  { value: "3+", label: "Years Building" },
  { value: "SG", label: "Based in Singapore" },
];

export function About() {
  return (
    <section id="about" className="bg-[#F9F9F9] border-t border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Left: statement */}
        <div className="lg:col-span-7 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest border border-blue-200 bg-blue-50 px-2 py-1">05</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.2em]">ABOUT MAESTRO</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-slate-900 leading-tight mb-4">
            We build, not just consult.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-lg">
            7 AI products shipped. 50+ research labs served. Enterprise clients across Singapore and globally.
            Our consulting work is grounded in what we&apos;ve actually built and deployed in production.
          </p>
          <p className="text-sm text-slate-500 mt-4 max-w-lg">
            Maestro AI Pte. Ltd. — Singapore-incorporated. We work directly with founding engineers, no layers of account management.
          </p>
        </div>

        {/* Right: metric grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-slate-200">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-white p-8 flex flex-col justify-center">
              <div className="font-serif text-4xl font-bold text-slate-900 mb-1">{m.value}</div>
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
