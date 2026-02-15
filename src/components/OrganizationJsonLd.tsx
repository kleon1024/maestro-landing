////////////////////////////////////////////////////////////////////////////////
// [OrganizationJsonLd] Schema.org Organization + WebSite JSON-LD for SEO
// Server component -- renders structured data in head
////////////////////////////////////////////////////////////////////////////////

export function OrganizationJsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maestro",
    url: "https://maestro.onl",
    description:
      "AI company building tools that amplify human expertise. From behavioral economics data processing to intelligent automation.",
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
    url: "https://maestro.onl",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://maestro.onl/blog?q={search_term_string}",
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
