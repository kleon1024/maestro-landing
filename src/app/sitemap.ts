////////////////////////////////////////////////////////////////////////////////
// [Sitemap] Responsibility: Generate sitemap.xml for search engine crawlers
//
// Strategy: Main routes + blog posts + subproduct routes fetched at runtime
// Fetches growth.maestro.onl/sitemap.xml and printpic.maestro.onl/sitemap.xml
// Rewrites URLs to subdirectory format (growth.maestro.onl -> maestro.onl/growth)
// Next.js App Router calls this at runtime (dynamic route), revalidated hourly
// Invariants: all URLs use https://maestro.onl as base
////////////////////////////////////////////////////////////////////////////////

import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

// Force dynamic rendering + revalidate every hour
export const dynamic = "force-dynamic";
export const revalidate = 3600;

const BASE_URL = "https://maestro.onl";

interface SubproductSitemapEntry {
  subdomain: string;
  subpath: string;
  url: string;
}

const SUBPRODUCTS: SubproductSitemapEntry[] = [
  {
    subdomain: "growth.maestro.onl",
    subpath: "growth",
    url: "https://growth.maestro.onl/sitemap.xml",
  },
  {
    subdomain: "printpic.maestro.onl",
    subpath: "printpic",
    url: "https://printpic.maestro.onl/sitemap.xml",
  },
  {
    subdomain: "rehearse.maestro.onl",
    subpath: "rehearse",
    url: "https://rehearse.maestro.onl/sitemap.xml",
  },
  {
    subdomain: "ra.maestro.onl",
    subpath: "ra",
    url: "https://ra.maestro.onl/sitemap.xml",
  },
  {
    subdomain: "layout.maestro.onl",
    subpath: "layout",
    url: "https://layout.maestro.onl/sitemap.xml",
  },
  {
    subdomain: "kairos.maestro.onl",
    subpath: "kairos",
    url: "https://kairos.maestro.onl/sitemap.xml",
  },
];

async function fetchSubproductSitemap(
  entry: SubproductSitemapEntry
): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(entry.url, {
      cache: "no-store", // Disable cache for large sitemaps (PrintPic has 195+ country pages)
    });

    if (!response.ok) {
      console.warn(
        `[Sitemap] Failed to fetch ${entry.url}: ${response.status}`
      );
      return [];
    }

    const xmlText = await response.text();

    // Parse XML and extract <loc> URLs
    const locMatches = xmlText.matchAll(/<loc>(.*?)<\/loc>/g);
    const urls: MetadataRoute.Sitemap = [];

    for (const match of locMatches) {
      const originalUrl = match[1];

      // Rewrite subdomain URL to subdirectory
      // https://growth.maestro.onl/article -> https://maestro.onl/growth/article
      const rewrittenUrl = originalUrl.replace(
        `https://${entry.subdomain}`,
        `${BASE_URL}/${entry.subpath}`
      );

      // Extract lastmod if present
      const urlStart = xmlText.indexOf(match[0]);
      const urlEnd = xmlText.indexOf("</url>", urlStart);
      const urlBlock = xmlText.substring(urlStart, urlEnd);
      const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/);

      urls.push({
        url: rewrittenUrl,
        lastModified: lastmodMatch ? new Date(lastmodMatch[1]) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      });
    }

    console.log(`[Sitemap] Fetched ${urls.length} URLs from ${entry.url}`);
    return urls;
  } catch (error) {
    console.error(`[Sitemap] Error fetching ${entry.url}:`, error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Main site static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Blog posts from MDX
  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(
      post.frontmatter.updatedAt || post.frontmatter.publishedAt
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Fetch subproduct sitemaps in parallel
  const subproductRoutes = await Promise.all(
    SUBPRODUCTS.map((entry) => fetchSubproductSitemap(entry))
  );

  const flatSubproductRoutes = subproductRoutes.flat();

  return [...staticRoutes, ...blogRoutes, ...flatSubproductRoutes];
}
