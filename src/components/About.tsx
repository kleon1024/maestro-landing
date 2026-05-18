////////////////////////////////////////////////////////////////////////////////
// [About] S7: Company — LIGHT, minimal, 3 core facts
//
// Design: bg-white, max-w-2xl centered, minimal text
// Rhythm: LIGHT
////////////////////////////////////////////////////////////////////////////////

export function About() {
  return (
    <section
      id="about"
      data-theme="light"
      className="bg-white min-h-[60vh] flex items-center py-24 lg:py-32"
    >
      <div className="max-w-2xl mx-auto px-8">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-m-accent-sky mb-8">
          COMPANY
        </p>

        {/* Three facts */}
        <div className="space-y-4">
          <p className="font-serif text-3xl md:text-4xl font-bold text-m-ink leading-snug">
            Singapore.
          </p>
          <p className="font-serif text-3xl md:text-4xl font-bold text-m-ink leading-snug">
            AI-native.
          </p>
          <p className="font-serif text-3xl md:text-4xl font-bold text-m-ink leading-snug">
            Every project compounds.
          </p>
        </div>

        {/* Founder line */}
        <p className="text-base text-m-body leading-relaxed mt-10 max-w-xl">
          Founded by Li Ding — engineer, former ByteDance tech lead, economics
          research background. Built from the conviction that research work
          needs durable infrastructure around data, compute, experiments, and
          evidence. The same agent substrate can later serve data-driven
          enterprise operations.
        </p>
      </div>
    </section>
  );
}
