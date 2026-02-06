////////////////////////////////////////////////////////////////////////////////
// [BlogCard] Card for blog index listing
// Server component
////////////////////////////////////////////////////////////////////////////////

import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-blue-500/40 hover:bg-zinc-900"
    >
      {/* Tags */}
      {frontmatter.seo?.keywords && frontmatter.seo.keywords.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {frontmatter.seo.keywords.slice(0, 3).map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-500"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
        {frontmatter.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
        {frontmatter.description}
      </p>

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3 text-xs text-zinc-600">
        <time dateTime={frontmatter.publishedAt}>
          {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span>|</span>
        <span>{readingTime}</span>
      </div>
    </Link>
  );
}
