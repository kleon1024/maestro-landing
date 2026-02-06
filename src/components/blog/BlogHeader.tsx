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
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl lg:text-5xl leading-tight">
        {frontmatter.title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg text-zinc-400">{frontmatter.description}</p>

      {/* Meta line */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
        <span>{frontmatter.author}</span>
        <span className="text-zinc-700">|</span>
        <time dateTime={frontmatter.publishedAt}>
          {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-zinc-700">|</span>
        <span>{readingTime}</span>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-zinc-800" />
    </header>
  );
}
