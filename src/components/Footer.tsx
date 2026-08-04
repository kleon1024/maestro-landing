////////////////////////////////////////////////////////////////////////////////
// [Footer] Minimal footer — copyright only, dark continuation
////////////////////////////////////////////////////////////////////////////////

import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-m-black border-t border-m-line-dark">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Maestro AI Pte. Ltd. Singapore
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://rehearse.maestro.onl"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Rehearse
            </a>
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              ra.maestro.onl
            </a>
            <Link
              href="/blog"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Blog
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
