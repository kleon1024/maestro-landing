////////////////////////////////////////////////////////////////////////////////
// [Footer] Responsibility: 4-column grid footer - Brand, Products, Company, Contact
//
// Design: Deep navy bg, mono labels, light link text
////////////////////////////////////////////////////////////////////////////////

import Image from "next/image";

const PRODUCT_LINKS = [
  { name: "RA Suite", url: "https://ra.maestro.onl" },
  { name: "Econ", url: "https://econ.maestro.onl" },
  { name: "Kairos", url: "https://kairos.maestro.onl" },
  { name: "Growth Foundry", url: "https://growth.maestro.onl" },
  { name: "Layout", url: "https://layout.maestro.onl" },
  { name: "Rehearse", url: "https://rehearse.maestro.onl" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2744] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="Maestro" width={24} height={24} />
              <span className="text-lg font-semibold text-white">Maestro</span>
            </div>
            <p className="text-xs text-white/40 tracking-wider uppercase mb-4">
              AI, Orchestrated
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              Enterprise AI solutions. Singapore-based, globally delivered.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Enterprise", href: "/#enterprise" },
                { label: "Products", href: "/#products" },
                { label: "About", href: "/#about" },
                { label: "Insights", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] text-white/30 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:sales@maestro.onl"
                  className="text-sm text-white/50 hover:text-white/80 transition-colors"
                >
                  sales@maestro.onl
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@maestro.onl"
                  className="text-sm text-white/50 hover:text-white/80 transition-colors"
                >
                  support@maestro.onl
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} Maestro AI Pte. Ltd.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/maestro-ai-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/maestro-ai-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
