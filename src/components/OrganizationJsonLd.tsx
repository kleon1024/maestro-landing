////////////////////////////////////////////////////////////////////////////////

import { SITE_URL, absoluteSiteUrl } from "@/lib/site-url";
// [OrganizationJsonLd] Schema.org Organization + WebSite JSON-LD for SEO
// Server component -- renders structured data in head
////////////////////////////////////////////////////////////////////////////////

export function OrganizationJsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maestro",
    url: SITE_URL,
    description:
      "AI infrastructure company for evidence-heavy work across research, business automation, and market intelligence.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@maestro.onl",
      contactType: "sales",
    },
  };

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maestro",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteSiteUrl("/blog")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
    </>
  );
}
