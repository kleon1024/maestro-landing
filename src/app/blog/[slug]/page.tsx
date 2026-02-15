////////////////////////////////////////////////////////////////////////////////
// [Blog Detail] Responsibility: Render individual blog post from MDX
//
// Uses next-mdx-remote/rsc for server-side MDX compilation
// CRITICAL: params is Promise in Next.js 16 -- must await before use
// Two-column layout: content (left) + sticky TOC (right, desktop only)
////////////////////////////////////////////////////////////////////////////////

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getAllBlogSlugs,
  getBlogPost,
  extractHeadings,
} from "@/lib/blog";
import { mdxComponents } from "@/components/mdx";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getBlogPost(slug);
    return {
      title: `${post.frontmatter.title} | Maestro Insights`,
      description: post.frontmatter.description,
      keywords: post.frontmatter.seo?.keywords,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        url: `https://maestro.onl/blog/${slug}`,
        siteName: "Maestro",
        type: "article",
        publishedTime: post.frontmatter.publishedAt,
        modifiedTime:
          post.frontmatter.updatedAt || post.frontmatter.publishedAt,
        ...(post.frontmatter.seo?.ogImage
          ? { images: [post.frontmatter.seo.ogImage] }
          : {}),
      },
      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
      alternates: {
        canonical: `https://maestro.onl/blog/${slug}`,
      },
    };
  } catch {
    return { title: "Post Not Found | Maestro Insights" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  const headings = extractHeadings(post.content);

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      // blockJS: false -- our MDX content is trusted (authored internally),
      // and uses JS expressions for component props (e.g. FAQAccordion items={[...]})
      blockJS: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <>
      <Navigation />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://maestro.onl" },
          { name: "Blog", url: "https://maestro.onl/blog" },
          { name: post.frontmatter.title, url: `https://maestro.onl/blog/${slug}` },
        ]}
      />
      <BlogJsonLd frontmatter={post.frontmatter} slug={slug} />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Insights
          </Link>

          {/* Two-column layout */}
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            {/* Content column */}
            <article>
              <BlogHeader
                frontmatter={post.frontmatter}
                readingTime={post.readingTime}
              />

              {/* MDX content */}
              <div className="prose-maestro">{mdxContent}</div>

              {/* Share + back */}
              <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <ShareButtons
                  title={post.frontmatter.title}
                  slug={slug}
                />
                <Link
                  href="/blog"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  View all posts
                </Link>
              </div>
            </article>

            {/* TOC column (desktop) */}
            <aside>
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
