"use client";

////////////////////////////////////////////////////////////////////////////////
// [TableOfContents] Sticky sidebar TOC with IntersectionObserver
// Client component - uses IntersectionObserver for active heading tracking
////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import type { Heading } from "@/lib/blog";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="mb-3 text-xs font-mono uppercase tracking-wider text-zinc-600">
        /// On This Page ///
      </p>
      <ul className="space-y-1 border-l border-zinc-800">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block border-l-2 py-1 text-sm transition-colors duration-150 ${
                heading.level === 3 ? "pl-6" : "pl-3"
              } ${
                activeId === heading.id
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
