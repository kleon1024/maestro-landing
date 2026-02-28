////////////////////////////////////////////////////////////////////////////////
// [BlogHeader] Article header with title, date, author, reading time, tags
// Server component
////////////////////////////////////////////////////////////////////////////////

import type { BlogFrontmatter } from "@/lib/blog";

interface BlogHeaderProps {
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export function BlogHeader({ frontmatter, readingTime }: BlogHeaderProps) {
  return (
    <header className="mb-10">
      {/* Tags */}
      {frontmatter.seo?.keywords && frontmatter.seo.keywords.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {frontmatter.seo.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#1D4ED8]"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#1A2744] sm:text-4xl lg:text-5xl leading-tight">
        {frontmatter.title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg text-[#475569]">{frontmatter.description}</p>

      {/* Meta line */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#94A3B8]">
        <span>{frontmatter.author}</span>
        <span className="text-[#CBD5E1]">|</span>
        <time dateTime={frontmatter.publishedAt}>
          {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-[#CBD5E1]">|</span>
        <span>{readingTime}</span>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-[#E2E8F0]" />
    </header>
  );
}
