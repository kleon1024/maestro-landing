import { SERVICES } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Services] Responsibility: Display services/offerings
//
// Design: Clean, minimal cards with good hierarchy
////////////////////////////////////////////////////////////////////////////////

export function Services() {
  return (
    <section id="services" className="section-padding bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase mb-6">
            /// Services ///
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-6 tracking-tight">
            Build With Us
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            From concept to deployment, we partner with you to create AI
            solutions that deliver measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-zinc-950 border border-zinc-800 p-10 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-zinc-50 mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 mb-10 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
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
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-zinc-300 transition-colors duration-200 tracking-wider"
              >
                CONTACT SALES
                <span className="ml-2 text-zinc-700 group-hover:text-zinc-500 transition-colors">&gt;&gt;&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
