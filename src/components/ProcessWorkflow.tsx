////////////////////////////////////////////////////////////////////////////////
// [ProcessWorkflow] Responsibility: Dark operational workflow section
//
// Design: bg-slate-900, 4-step timeline with connecting lines
// Invariants: Exactly 4 steps
////////////////////////////////////////////////////////////////////////////////

const STEPS = [
  {
    num: "01",
    title: "Brief",
    desc: "We scope the project together — data sources, deliverables, timeline, and complexity tier",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecture review, pipeline design, and a sample prototype on a subset of your data",
  },
  {
    num: "03",
    title: "Build",
    desc: "Full processing, QA diagnostics, and iterative delivery with your feedback at each stage",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Final dataset + scripts + audit report. Reproduction guarantee. Post-delivery support included",
  },
];

export function ProcessWorkflow() {
  return (
    <section className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-white">
            How We Work
          </h2>
          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            Standard Protocol
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="relative group px-0 lg:px-6 first:lg:pl-0 last:lg:pr-0 mb-8 lg:mb-0">

              {/* Step number + connecting line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 border-2 border-slate-700 group-hover:border-blue-500 flex items-center justify-center transition-colors shrink-0">
                  <span className="font-mono text-[11px] font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                    {step.num}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-slate-800 group-hover:bg-blue-500/20 transition-colors" />
                )}
              </div>

              <h3 className="font-sans text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-400 max-w-md">
            Every engagement starts with a free technical consultation. No sales pitch — just a discussion about your requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center h-11 rounded-none bg-blue-600 hover:bg-blue-500 text-white font-medium px-7 text-sm transition-colors shrink-0"
          >
            Start a Consultation
            <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
