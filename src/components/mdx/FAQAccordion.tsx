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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="my-6 divide-y divide-[#E2E8F0] rounded-lg border border-[#E2E8F0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#1A2744] hover:text-[#1A3A6B] transition-colors cursor-pointer"
          >
            <span>{item.question}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 ${
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
            <div className="px-4 pb-3 text-sm text-[#475569]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
