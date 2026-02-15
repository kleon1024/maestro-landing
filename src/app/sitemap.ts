////////////////////////////////////////////////////////////////////////////////
// [Sitemap] Responsibility: Generate sitemap.xml for search engine crawlers
//
// Static routes + product subdomain URLs + dynamic blog posts from MDX files
// Next.js App Router calls this at build time, outputs /sitemap.xml
// Invariants: all URLs use https://maestro.onl as base
////////////////////////////////////////////////////////////////////////////////

import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const BASE_URL = "https://maestro.onl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: "2025-02-15",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: "2025-02-15",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://econ.maestro.onl",
      lastModified: "2025-02-15",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://printpic.maestro.onl",
      lastModified: "2025-02-15",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(
      post.frontmatter.updatedAt || post.frontmatter.publishedAt
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
