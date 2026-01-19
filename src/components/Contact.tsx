import { CONTACT } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Contact] Responsibility: Simple, elegant contact section
//
// Design: Minimalist approach - clean typography, ample whitespace
// No copy buttons, just direct mailto links
////////////////////////////////////////////////////////////////////////////////

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase mb-6">
            /// Contact ///
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-6 tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto">
            Ready to transform your workflows with AI? Get in touch.
          </p>
        </div>

        {/* Contact cards - simplified */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Sales */}
          <a
            href={`mailto:${CONTACT.sales}`}
            className="group block p-8 bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50">Sales</h3>
                <p className="text-sm text-zinc-500">Products & partnerships</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                {CONTACT.sales}
              </span>
              <svg
                className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </a>

          {/* Support */}
          <a
            href={`mailto:${CONTACT.support}`}
            className="group block p-8 bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50">Support</h3>
                <p className="text-sm text-zinc-500">Help & feedback</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                {CONTACT.support}
              </span>
              <svg
                className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
