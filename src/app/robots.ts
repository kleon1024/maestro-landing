import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

// Robots configuration for search engine crawlers.
// Allows all user agents except internal API and framework routes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
