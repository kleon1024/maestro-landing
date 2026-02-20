////////////////////////////////////////////////////////////////////////////////
// [Footer] Responsibility: Minimal footer with logo, copyright, and social links
//
// Design: Clean, minimal footer matching the Space Tech aesthetic
////////////////////////////////////////////////////////////////////////////////

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Maestro" width={24} height={24} />
              <span className="text-lg font-semibold text-zinc-50">Maestro</span>
            </div>
            <p className="text-xs font-mono tracking-wider text-zinc-600 uppercase">
              /// AI, Orchestrated ///
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="/blog"
              className="hover:text-zinc-300 transition-colors"
            >
              Insights
            </a>
            <span className="text-zinc-800">|</span>
            <p>&copy; {currentYear} Maestro</p>
          </div>

          {/* Email contact */}
          <a
            href="mailto:sales@maestro.onl"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            sales@maestro.onl
          </a>
        </div>
      </div>
    </footer>
  );
}
