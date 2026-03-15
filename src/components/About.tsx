////////////////////////////////////////////////////////////////////////////////
// [About] S7: Company — minimal, 3 sentences, narrow column
//
// Design: bg-white, max-w-3xl centered, colophon feel
// Copy: CMO v2 "About" verbatim
////////////////////////////////////////////////////////////////////////////////

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-xs font-bold tracking-widest uppercase text-m-accent-dim mb-6">
          COMPANY
        </p>

        {/* Body */}
        <p className="text-lg text-m-body leading-relaxed mb-4">
          Maestro AI Pte. Ltd. Singapore-registered. AI-native team.
        </p>
        <p className="text-lg text-m-body leading-relaxed">
          Founded by Li Ding — data engineer, former ByteDance tech lead,
          economics research background. Built from the conviction that data
          engineering should compound, not restart.
        </p>
      </div>
    </section>
  );
}
