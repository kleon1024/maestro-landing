import type { MetadataRoute } from "next";

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
    sitemap: "https://maestro.onl/sitemap.xml",
  };
}
