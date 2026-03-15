////////////////////////////////////////////////////////////////////////////////
// [Footer] Minimal footer — company name + email + site links
//
// Design: bg-m-black border-top, single row
////////////////////////////////////////////////////////////////////////////////

import { CONTACT } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-m-black border-t border-m-line-dark">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Maestro AI Pte. Ltd. Singapore
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ra.maestro.onl
            </a>
            <a
              href="/blog"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Blog
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
