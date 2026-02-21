////////////////////////////////////////////////////////////////////////////////
// [Footer] Responsibility: Minimal footer with logo, copyright, and contact link
//
// Design: Deep navy dark footer as visual closure for the institutional palette.
////////////////////////////////////////////////////////////////////////////////

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#1A2744] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Maestro" width={24} height={24} />
              <span className="text-lg font-semibold text-white">Maestro</span>
            </div>
            <p className="text-xs text-white/40 tracking-wider uppercase">
              AI, Orchestrated
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a
              href="/blog"
              className="hover:text-white/80 transition-colors"
            >
              Insights
            </a>
            <span className="text-white/20">|</span>
            <p>&copy; {currentYear} Maestro</p>
          </div>

          {/* Email contact */}
          <a
            href="mailto:sales@maestro.onl"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            sales@maestro.onl
          </a>
        </div>
      </div>
    </footer>
  );
}
