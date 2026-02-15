////////////////////////////////////////////////////////////////////////////////
// [Blog Index] Responsibility: Display all blog posts as "Maestro Insights"
//
// Static page - no dynamic data fetching at runtime
// Inputs: getAllBlogPosts() from content/blog/*.mdx
// Outputs: Grid of BlogCard components
////////////////////////////////////////////////////////////////////////////////

import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Maestro Insights | AI Orchestration, Research & Strategy",
  description:
    "Deep dives into AI orchestration, multi-agent systems, behavioral economics, and autonomous task management from the Maestro team.",
  alternates: {
    canonical: "https://maestro.onl/blog",
  },
  openGraph: {
    title: "Maestro Insights",
    description:
      "Deep dives into AI orchestration, multi-agent systems, behavioral economics, and autonomous task management.",
    url: "https://maestro.onl/blog",
    siteName: "Maestro",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const featured = posts.filter((p) => p.frontmatter.featured);
  const rest = posts.filter((p) => !p.frontmatter.featured);

  return (
    <>
      <Navigation />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://maestro.onl" },
          { name: "Blog", url: "https://maestro.onl/blog" },
        ]}
      />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <div className="mb-16">
            <p className="text-xs font-mono tracking-wider text-zinc-600 uppercase mb-4">
              /// Maestro Insights ///
            </p>
            <h1 className="text-4xl font-bold text-zinc-50 sm:text-5xl">
              Ideas on AI Orchestration
            </h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              Research, strategy, and technical deep dives from the team
              building AI tools that amplify human expertise.
            </p>
          </div>

          {/* Featured posts */}
          {featured.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xs font-mono tracking-wider text-zinc-600 uppercase mb-6">
                /// Featured ///
              </h2>
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                {featured.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* All posts */}
          <section>
            {featured.length > 0 && (
              <h2 className="text-xs font-mono tracking-wider text-zinc-600 uppercase mb-6">
                /// All Posts ///
              </h2>
            )}
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <p className="text-zinc-500 text-center py-20">
                No posts yet. Check back soon.
              </p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
