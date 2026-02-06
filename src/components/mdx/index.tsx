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

  // HTML element overrides for blog prose styling
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold text-zinc-50 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-zinc-100 scroll-mt-20"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4 text-zinc-400 leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc pl-6 space-y-1 text-zinc-400" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal pl-6 space-y-1 text-zinc-400" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-blue-500/40 pl-4 italic text-zinc-500"
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
    <thead className="border-b border-zinc-700 text-zinc-300" {...props} />
  ),
  th: (props) => (
    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" {...props} />
  ),
  td: (props) => (
    <td className="px-3 py-2 text-zinc-400 border-b border-zinc-800/50" {...props} />
  ),
  hr: () => <hr className="my-8 border-zinc-800" />,
  strong: (props) => <strong className="font-semibold text-zinc-200" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-blue-300 font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-zinc-900 border border-zinc-800 p-4 text-sm"
      {...props}
    />
  ),
};
