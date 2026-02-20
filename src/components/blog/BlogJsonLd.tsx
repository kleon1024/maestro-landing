////////////////////////////////////////////////////////////////////////////////
// [BlogJsonLd] Schema.org BlogPosting JSON-LD for SEO
// Server component
////////////////////////////////////////////////////////////////////////////////

import type { BlogFrontmatter } from "@/lib/blog";

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
      url: "https://maestro.onl",
    },
    publisher: {
      "@type": "Organization",
      name: "Maestro",
      logo: {
        "@type": "ImageObject",
        url: "https://maestro.onl/logo.png",
      },
    },
    ...(frontmatter.seo?.keywords
      ? { keywords: frontmatter.seo.keywords }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://maestro.onl/blog/${slug}`,
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
