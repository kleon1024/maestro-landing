////////////////////////////////////////////////////////////////////////////////
// [BlogJsonLd] Schema.org BlogPosting JSON-LD for SEO
// Server component
////////////////////////////////////////////////////////////////////////////////

import type { BlogFrontmatter } from "@/lib/blog";
import { SITE_URL, absoluteSiteUrl } from "@/lib/site-url";

interface BlogJsonLdProps {
  frontmatter: BlogFrontmatter;
  slug: string;
}

export function BlogJsonLd({ frontmatter, slug }: BlogJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    author: {
      "@type": "Organization",
      name: "Maestro",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Maestro",
      logo: {
        "@type": "ImageObject",
        url: absoluteSiteUrl("/logo.png"),
      },
    },
    ...(frontmatter.seo?.keywords
      ? { keywords: frontmatter.seo.keywords }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteSiteUrl(`/blog/${slug}`),
    },
    ...(frontmatter.seo?.ogImage
      ? { image: frontmatter.seo.ogImage }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {frontmatter.faq && frontmatter.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: frontmatter.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
