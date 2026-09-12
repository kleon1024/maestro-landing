////////////////////////////////////////////////////////////////////////////////
// [Sitemap] Responsibility: Generate sitemap.xml for search engine crawlers
//
// Static routes + product subdomain URLs + dynamic blog posts from MDX files
// Next.js App Router calls this at build time, outputs /sitemap.xml
// Invariant: every canonical site URL uses the shared final-response host.
////////////////////////////////////////////////////////////////////////////////

import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://ra.maestro.onl",
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://econ.maestro.onl",
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(
      post.frontmatter.updatedAt || post.frontmatter.publishedAt
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
