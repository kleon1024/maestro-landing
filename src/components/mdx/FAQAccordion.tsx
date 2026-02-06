"use client";

////////////////////////////////////////////////////////////////////////////////
// [FAQAccordion] Collapsible Q&A
// Client component - uses useState for toggle
////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-6 divide-y divide-zinc-800 rounded-lg border border-zinc-800">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-zinc-200 hover:text-zinc-50 transition-colors cursor-pointer"
          >
            <span>{item.question}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-3 text-sm text-zinc-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
