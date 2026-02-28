////////////////////////////////////////////////////////////////////////////////
// [MDX Components] Barrel export + component mapping for MDXRemote
////////////////////////////////////////////////////////////////////////////////

import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { MetricGrid, Metric } from "./MetricGrid";
import { StepGuide, Step } from "./StepGuide";
import { KeyTakeaway } from "./KeyTakeaway";
import { FAQAccordion } from "./FAQAccordion";

export { Callout } from "./Callout";
export { MetricGrid, Metric } from "./MetricGrid";
export { StepGuide, Step } from "./StepGuide";
export { KeyTakeaway } from "./KeyTakeaway";
export { FAQAccordion } from "./FAQAccordion";

export const mdxComponents: MDXComponents = {
  // Custom components
  Callout,
  MetricGrid,
  Metric,
  StepGuide,
  Step,
  KeyTakeaway,
  FAQAccordion,

  // HTML element overrides for blog prose styling (light theme)
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold text-slate-900 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-slate-900 scroll-mt-20"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4 text-slate-600 leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-blue-900 underline underline-offset-2 hover:text-blue-600 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc pl-6 space-y-1 text-slate-600" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal pl-6 space-y-1 text-slate-600" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-blue-900/30 pl-4 italic text-slate-600"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full text-sm text-left border-collapse"
        {...props}
      />
    </div>
  ),
  thead: (props) => (
    <thead className="border-b border-slate-200 text-slate-900 bg-slate-100" {...props} />
  ),
  th: (props) => (
    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" {...props} />
  ),
  td: (props) => (
    <td className="px-3 py-2 text-slate-600 border-b border-slate-200" {...props} />
  ),
  hr: () => <hr className="my-8 border-slate-200" />,
  strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-blue-50 px-1.5 py-0.5 text-sm text-blue-700 font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-[#1E293B] border border-[#334155] p-4 text-sm text-slate-200"
      {...props}
    />
  ),
};
