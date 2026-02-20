# SEO Mass Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Large-scale SEO optimization across maestro.onl, ra.maestro.onl, and growth.maestro.onl — internal linking, FAQ schema expansion, hub-spoke architecture, CTR optimization, AEO updates, and technical enhancements.

**Architecture:** Four parallel workstreams across three Next.js projects. All changes are content/metadata only — no structural refactors. Each workstream can be assigned to a separate agent.

**Tech Stack:** Next.js 16, MDX (gray-matter frontmatter), JSON-LD structured data, TypeScript

---

## Workstream A: maestro.onl Internal Linking + FAQ Expansion

**Project:** `/Users/ding/maestro/projects/maestro`

### Task A1: Add internal links to all 35 blog articles

**Files:**
- Modify: All 35 files in `content/blog/*.mdx`

**Context:**
Currently only 2 cross-article links exist across 35 articles. Each article should get 3-5 contextual internal links added naturally within the content body.

**Link mapping strategy (add at relevant contextual points, not forced):**

Research data articles should link to:
- Related research articles on maestro.onl/blog/
- ra.maestro.onl case studies (external links to relevant cases)
- growth.maestro.onl articles (where growth/marketing topics overlap)

**Article clusters for internal linking:**

Cluster 1 — Research Data & Academic Tools (link to each other + ra.maestro.onl):
- `hidden-cost-manual-data-processing-academic-research`
- `how-to-choose-ai-research-data-service`
- `economists-toolkit-essential-ai-tools-empirical-research`
- `ai-powered-data-pipelines-social-science-research`
- `building-replication-packages-with-ai`
- `survey-data-to-insights-ai-automation-behavioral-scientists`
- `un-comtrade-api-python-tutorial-economists`
- `world-bank-wits-api-guide-trade-data`
- `fred-api-python-macroeconomic-data`
- `ipums-microdata-stata-r-extraction-guide`
- `eurostat-api-python-eu-statistics`
- `google-earth-engine-python-academic-research`
- `web-scraping-academic-data-python-guide`

Cluster 2 — AI x Industries (link to each other):
- `ai-transforming-healthcare-diagnostics-2026`
- `ai-revolutionizing-legal-industry-contract-review`
- `ai-fintech-algorithmic-trading-risk-2026`
- `ai-personalized-education-learning-at-scale`
- `ai-smart-manufacturing-predictive-maintenance`
- `ai-retail-recommendation-engines-dynamic-pricing`
- `ai-agriculture-precision-farming-food-security`

Cluster 3 — AI Trends & Technology (link to each other):
- `deepseek-vs-openai-open-source-ai-race-2026`
- `ai-agents-2026-from-chatbots-to-autonomous-workers`
- `ai-agents-future-autonomous-task-management`
- `vibe-coding-ai-software-development-revolution`
- `ai-search-engines-perplexity-google-future-2026`
- `mcp-protocol-anthropic-ai-integration-standard`
- `ai-video-generation-sora-kling-creator-economy`
- `eu-ai-act-compliance-guide-businesses-2026`

Cluster 4 — Singapore & Business (link to each other):
- `singapore-budget-2026-ai-guide-eis-psg-champions`
- `singapore-smes-claim-400-percent-tax-deduction-ai-spending`
- `singapore-national-ai-council-enterprise-ai-adoption`
- `ai-startup-growth-metrics-benchmarks-2026`

Cluster 5 — Behavioral Science:
- `ai-transforming-behavioral-economics-research`
- `ai-reshaping-psychology-research-methods`

**Step 1:** For each article, read content, identify 3-5 natural places to add links to other cluster articles. Add links as inline markdown `[anchor text](/blog/slug)` or `[anchor text](https://ra.maestro.onl/data/case-studies/slug)` for cross-site.

**Step 2:** For research data tutorial articles (Cluster 1), add a call-to-action section at the bottom linking to ra.maestro.onl:

```markdown
---

**Need help with data extraction?** Maestro's [RA Data Service](https://ra.maestro.onl/data) handles complex data pipelines for academic researchers. See our [case studies](https://ra.maestro.onl/data/case-studies) for examples.
```

**Step 3:** Verify no broken links by checking all slug references exist.

**Step 4:** Run `npm run build` in `/Users/ding/maestro/projects/maestro`

**Step 5:** Commit
```bash
git add content/blog/
git commit -m "seo(blog): add systematic internal linking across 35 articles"
```

---

### Task A2: Expand FAQ schema to 15+ articles

**Files:**
- Modify: 13+ MDX files in `content/blog/*.mdx` (currently only `fred-api-python-macroeconomic-data.mdx` and possibly 1-2 others have FAQ)

**Context:**
The `BlogJsonLd` component at `src/components/blog/BlogJsonLd.tsx` already renders FAQPage JSON-LD when `frontmatter.faq` exists. The `BlogFrontmatter` interface in `src/lib/blog.ts` already supports `faq?: Array<{ question: string; answer: string }>`. We just need to add FAQ frontmatter to more articles.

**Rules:**
- Max 3-5 FAQ items per article
- Questions should be real search queries people ask (think "People Also Ask")
- Answers should be concise (2-3 sentences), factual, and directly answer the question

**Priority articles for FAQ (high search potential):**

1. `un-comtrade-api-python-tutorial-economists` — "Is UN Comtrade API free?", "How to download bilateral trade data?", etc.
2. `world-bank-wits-api-guide-trade-data` — "How to use World Bank WITS API?", etc.
3. `ipums-microdata-stata-r-extraction-guide` — "Is IPUMS data free?", "How to extract CPS microdata?", etc.
4. `eurostat-api-python-eu-statistics` — "How to access Eurostat data via API?", etc.
5. `google-earth-engine-python-academic-research` — "Is Google Earth Engine free for research?", etc.
6. `web-scraping-academic-data-python-guide` — "Is web scraping legal for research?", etc.
7. `hidden-cost-manual-data-processing-academic-research` — "How much time do researchers spend on data cleaning?", etc.
8. `how-to-choose-ai-research-data-service` — "What is a research data service?", etc.
9. `ai-agents-2026-from-chatbots-to-autonomous-workers` — "What are AI agents?", "How do AI agents differ from chatbots?", etc.
10. `vibe-coding-ai-software-development-revolution` — "What is vibe coding?", etc.
11. `deepseek-vs-openai-open-source-ai-race-2026` — "Is DeepSeek open source?", etc.
12. `ai-search-engines-perplexity-google-future-2026` — "How do AI search engines work?", etc.
13. `mcp-protocol-anthropic-ai-integration-standard` — "What is MCP protocol?", etc.
14. `singapore-budget-2026-ai-guide-eis-psg-champions` — "What AI grants are available in Singapore?", etc.
15. `ai-startup-growth-metrics-benchmarks-2026` — "What are good SaaS growth metrics?", etc.

**Step 1:** For each article above, read the content and write 3-5 FAQ items based on questions users would naturally ask. Add to frontmatter YAML:

```yaml
faq:
  - question: "Is UN Comtrade API free to use?"
    answer: "Yes. The UN Comtrade API is free for all users. You need to register at comtradeplus.un.org for an API subscription key. Rate limits apply (100 requests per hour for free tier)."
  - question: "How do I download bilateral trade data with Python?"
    answer: "Use the comtradeapicall Python package or direct HTTP requests to the Comtrade Plus API. Specify reporter, partner, HS product codes, and year range in your query parameters."
```

**Step 2:** Run `npm run build`

**Step 3:** Commit
```bash
git add content/blog/
git commit -m "seo(blog): add FAQ schema frontmatter to 15 articles for rich snippets"
```

---

## Workstream B: growth.maestro.onl Hub Pages + RelatedArticles + Breadcrumbs

**Project:** `/Users/ding/maestro/projects/2026-2-growth-foundry`

### Task B1: Create BreadcrumbJsonLd component

**Files:**
- Create: `src/components/breadcrumb-schema.tsx`
- Modify: `src/app/[locale]/articles/[slug]/page.tsx` (line ~101, add breadcrumb schema)

**Step 1:** Create `src/components/breadcrumb-schema.tsx`:

```tsx
////////////////////////////////////////////////////////////////////////////////
// [BreadcrumbSchema] Schema.org BreadcrumbList JSON-LD for article pages
// Server component
////////////////////////////////////////////////////////////////////////////////

const baseUrl = 'https://growth.maestro.onl';

export interface BreadcrumbSchemaProps {
  locale: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ locale, items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Step 2:** Add BreadcrumbSchema to article detail page (`src/app/[locale]/articles/[slug]/page.tsx`). After the `<ArticleSchema>` component (around line 103), add:

```tsx
import { BreadcrumbSchema } from '@/components/breadcrumb-schema';

// Inside the component return, after ArticleSchema:
<BreadcrumbSchema
  locale={locale}
  items={[
    { name: 'Home', url: `https://growth.maestro.onl/${locale}` },
    { name: 'Articles', url: `https://growth.maestro.onl/${locale}/articles` },
    { name: frontmatter.title, url: `https://growth.maestro.onl/${locale}/articles/${slug}` },
  ]}
/>
```

**Step 3:** Run `npm run build`

**Step 4:** Commit
```bash
git add src/components/breadcrumb-schema.tsx src/app/\[locale\]/articles/\[slug\]/page.tsx
git commit -m "seo(growth): add BreadcrumbList JSON-LD schema to article pages"
```

---

### Task B2: Create RelatedArticles component

**Files:**
- Create: `src/components/related-articles.tsx`
- Modify: `src/app/[locale]/articles/[slug]/page.tsx` (add RelatedArticles after article footer)

**Step 1:** Create `src/components/related-articles.tsx`:

```tsx
////////////////////////////////////////////////////////////////////////////////
// [RelatedArticles] Shows 3 related articles based on tag overlap
// Server component - receives pre-computed related articles
////////////////////////////////////////////////////////////////////////////////

import Link from 'next/link';

interface RelatedArticle {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  readingTime?: number;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  locale: string;
  currentSlug: string;
}

export function RelatedArticles({ articles, locale, currentSlug }: RelatedArticlesProps) {
  const related = articles
    .filter(a => a.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/${locale}/articles/${article.slug}`}
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {article.description}
            </p>
            {article.readingTime && (
              <span className="text-xs text-gray-500 dark:text-gray-500 mt-3 block">
                {article.readingTime} min read
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
```

**Step 2:** In `src/app/[locale]/articles/[slug]/page.tsx`, import and add RelatedArticles. Need to compute related articles by tag overlap:

```tsx
import { RelatedArticles } from '@/components/related-articles';
import { getAllArticles } from '@/lib/mdx';

// Inside the component, before the return:
const allArticles = getAllArticles(locale);
const currentTags = new Set(frontmatter.tags || []);
const relatedArticles = allArticles
  .filter(a => a.slug !== slug)
  .map(a => ({
    ...a,
    overlap: (a.frontmatter.tags || []).filter(t => currentTags.has(t)).length,
  }))
  .sort((a, b) => b.overlap - a.overlap)
  .slice(0, 3)
  .map(a => ({
    slug: a.slug,
    title: a.frontmatter.title,
    description: a.frontmatter.description,
    tags: a.frontmatter.tags,
    readingTime: a.frontmatter.readingTime,
  }));

// Add after the </article> closing tag (before the closing </div> of the grid):
<RelatedArticles articles={relatedArticles} locale={locale} currentSlug={slug} />
```

**Step 3:** Run `npm run build`

**Step 4:** Commit
```bash
git add src/components/related-articles.tsx src/app/\[locale\]/articles/\[slug\]/page.tsx
git commit -m "seo(growth): add RelatedArticles component with tag-based matching"
```

---

### Task B3: Create 3 hub/guide pages

**Files:**
- Create: `src/app/[locale]/guides/page.tsx` (guides index)
- Create: `src/app/[locale]/guides/[slug]/page.tsx` (guide detail)
- Create: `src/lib/guides.ts` (guide data)
- Modify: `src/app/sitemap.ts` (add guide URLs)

**Guide data structure** in `src/lib/guides.ts`:

```typescript
export interface GuideArticle {
  slug: string;
  context: string; // 1-2 sentence description of why this article matters for this guide
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  overview: string; // 300-500 words editorial content
  articles: GuideArticle[];
  keywords: string[];
}

export const guides: Guide[] = [
  {
    slug: 'customer-acquisition',
    title: 'The Complete Guide to Customer Acquisition for B2B SaaS',
    metaDescription: 'Master customer acquisition for B2B SaaS: CAC benchmarks, channel strategies, cold email, SEO, paid ads, and referral programs. Data from 612+ companies.',
    keywords: ['customer acquisition', 'B2B SaaS CAC', 'acquisition channels', 'lead generation'],
    overview: `Customer acquisition is the engine that drives SaaS growth...`, // 300-500 words
    articles: [
      { slug: 'cac-ltv-fundamentals', context: 'Foundation: understand the 3:1 LTV:CAC ratio benchmark from 612 companies.' },
      { slug: 'cac-optimization-317-to-85', context: 'How one company reduced CAC from $317 to $85 through systematic optimization.' },
      { slug: 'traffic-acquisition-guide-2026', context: 'Compare all acquisition channels: email 9.6% conversion, referral 3.63%, SEO 2.6%.' },
      { slug: 'cold-email-2026-reply-rate', context: 'Cold email benchmarks: 3.43% reply rate and how to achieve it.' },
      { slug: 'b2b-lead-gen-channel-cac-comparison-2026', context: 'Channel-by-channel CAC comparison for B2B lead generation.' },
      { slug: 'google-ads-saas-growth-strategy', context: 'Paid search strategy for SaaS: when Google Ads makes sense.' },
      { slug: 'seo-vs-paid-ads-550-roi', context: 'SEO vs paid ads ROI comparison with real data.' },
      { slug: 'referral-program-8-10-conversion', context: 'Build referral programs that convert at 8-10%.' },
      { slug: 'landing-page-optimization-1-to-10-percent', context: 'Optimize landing pages from 1% to 10% conversion.' },
      { slug: 'first-1000-customers-90-days', context: 'Tactical playbook for your first 1000 customers.' },
    ],
  },
  {
    slug: 'product-led-growth',
    title: 'Product-Led Growth Playbook: From Free Users to Paying Customers',
    metaDescription: 'Complete PLG playbook: free-to-paid conversion (8-15%), onboarding optimization, viral loops, retention mechanics. Case studies from Notion, Figma, Arc.',
    keywords: ['product-led growth', 'PLG strategy', 'free to paid conversion', 'viral growth'],
    overview: `Product-led growth has become the dominant motion for modern SaaS...`, // 300-500 words
    articles: [
      { slug: 'free-to-paid-8-15-percent', context: 'Benchmark: 8-15% free-to-paid conversion rates and how to optimize them.' },
      { slug: 'notion-growth-case-study', context: 'How Notion built a $10B company through product-led growth.' },
      { slug: 'figma-community-led-growth-case-study', context: 'Figma community-led growth strategy.' },
      { slug: 'arc-browser-growth-case-study', context: 'Arc Browser: 1M users with zero paid ads.' },
      { slug: 'dropbox-viral-referral-blueprint', context: 'The original viral referral program that defined PLG.' },
      { slug: 'duolingo-retention-playbook', context: 'Duolingo retention mechanics and habit formation.' },
      { slug: 'saas-onboarding-drives-retention-data', context: 'Data on how onboarding quality drives long-term retention.' },
      { slug: 'retention-loops-habit-formation', context: 'Building habit-forming retention loops.' },
      { slug: 'viral-ai-products-growth-code', context: 'How AI products achieve viral growth.' },
    ],
  },
  {
    slug: 'saas-metrics',
    title: 'SaaS Metrics That Matter: Benchmarks, Analysis, and Optimization',
    metaDescription: 'Essential SaaS metrics: ARR benchmarks, churn analysis (5% threshold), unit economics, pricing strategy. Data from 612+ B2B SaaS companies.',
    keywords: ['SaaS metrics', 'ARR benchmarks', 'churn rate', 'unit economics', 'SaaS pricing'],
    overview: `Measuring the right metrics separates scaling SaaS companies from those that plateau...`, // 300-500 words
    articles: [
      { slug: 'cac-ltv-fundamentals', context: 'The fundamental SaaS metrics: CAC, LTV, and the 3:1 golden ratio.' },
      { slug: 'saas-arr-benchmarks-2024-2026', context: 'ARR benchmarks across SaaS categories for 2024-2026.' },
      { slug: 'churn-analysis-5-percent-root-causes', context: 'Why 5% monthly churn is the danger threshold and root cause analysis.' },
      { slug: 'customer-retention-cheapest-growth-lever', context: 'Retention is 5-25x cheaper than acquisition.' },
      { slug: 'customer-success-roi-4-to-1', context: 'Customer success delivers 4:1 ROI when done right.' },
      { slug: 'pricing-mistakes-value-based', context: 'Common pricing mistakes and value-based pricing strategies.' },
      { slug: 'upsell-mechanics-10-30-revenue', context: 'Upsell mechanics that drive 10-30% revenue increase.' },
      { slug: 'ai-saas-unit-economics-comparison-5-verticals', context: 'AI SaaS unit economics across 5 verticals.' },
    ],
  },
];
```

**Step 1:** Create `src/lib/guides.ts` with the data above (write full 300-500 word overviews for each guide).

**Step 2:** Create `src/app/[locale]/guides/[slug]/page.tsx` with:
- generateStaticParams for all 3 guides x 2 locales
- generateMetadata from guide data
- CollectionPage JSON-LD schema
- BreadcrumbSchema
- Editorial overview content
- Curated article list with context descriptions and links

**Step 3:** Create `src/app/[locale]/guides/page.tsx` as guides index.

**Step 4:** Add guide URLs to `src/app/sitemap.ts` (priority 0.8, monthly).

**Step 5:** Run `npm run build`

**Step 6:** Commit
```bash
git add src/lib/guides.ts src/app/\[locale\]/guides/ src/app/sitemap.ts
git commit -m "seo(growth): add 3 hub-spoke guide pages for customer acquisition, PLG, and metrics"
```

---

### Task B4: Add FAQ schema to 20+ growth articles

**Files:**
- Modify: 20+ MDX files in `content/articles/en/*.mdx`

**Context:**
The `FAQSchema` component in `src/components/structured-data.tsx` already renders FAQPage JSON-LD. The `ArticleFrontmatter` in `src/lib/mdx.ts` already supports `faq?: Array<{ question: string; answer: string }>`. The article detail page at `src/app/[locale]/articles/[slug]/page.tsx` already renders FAQSchema conditionally (line 111-113).

**Priority articles (high search volume topics):**

1. `cac-ltv-fundamentals` — "What is a good LTV to CAC ratio?", "How do you calculate CAC?"
2. `free-to-paid-8-15-percent` — "What is a good free to paid conversion rate?"
3. `churn-analysis-5-percent-root-causes` — "What is a good churn rate for SaaS?"
4. `cold-email-2026-reply-rate` — "What is a good cold email reply rate?"
5. `saas-arr-benchmarks-2024-2026` — "What is a good ARR growth rate?"
6. `landing-page-optimization-1-to-10-percent` — "What is a good landing page conversion rate?"
7. `seo-vs-paid-ads-550-roi` — "Is SEO or paid ads better for SaaS?"
8. `referral-program-8-10-conversion` — "How do you build a SaaS referral program?"
9. `programmatic-seo-engineering-playbook` — "What is programmatic SEO?"
10. `aeo-geo-llm-optimization-guide` — "What is AEO?", "How to optimize for AI search?"
11. `notion-growth-case-study` — "How did Notion grow?"
12. `dropbox-viral-referral-blueprint` — "How did Dropbox grow virally?"
13. `duolingo-retention-playbook` — "How does Duolingo retain users?"
14. `cursor-500m-zero-marketing-growth` — "How did Cursor grow without marketing?"
15. `first-1000-customers-90-days` — "How to get first 1000 SaaS customers?"
16. `pricing-mistakes-value-based` — "How to price a SaaS product?"
17. `product-hunt-launch-400-supporters` — "How to launch on Product Hunt?"
18. `validate-demand-7-days` — "How to validate a SaaS idea?"
19. `indie-hacker-10k-mrr-real-timeline` — "How long to reach 10K MRR?"
20. `saas-onboarding-drives-retention-data` — "How important is SaaS onboarding?"

**Step 1:** For each article, read the content and add 3-5 FAQ items to the YAML frontmatter.

**Step 2:** Run `npm run build`

**Step 3:** Commit
```bash
git add content/articles/en/
git commit -m "seo(growth): add FAQ schema frontmatter to 20 articles for rich snippets"
```

---

## Workstream C: ra.maestro.onl CTR Optimization + Blog + Cross-linking

**Project:** `/Users/ding/maestro/projects/2026-1-ra-suite`

### Task C1: Rewrite case study metaDescriptions for CTR

**Files:**
- Modify: `src/lib/case-studies/data.ts`

**Context:**
ra.maestro.onl has 1316 impressions for trade-api-fetch but 0 clicks. All 15 case study metaDescriptions need to be rewritten with:
- Power words (discover, proven, complete, essential)
- Specific metrics (numbers, timeframes)
- Call to action (Learn how, See how, Discover)
- Under 160 characters

**Step 1:** Rewrite each case study's `metaDescription` in `src/lib/case-studies/data.ts`.

Example before:
```
'Extracting monthly rice price and quantity data from Japanese government PDFs, handling OCR, calendar conversion, and multi-source fusion.'
```

Example after:
```
'See how we extracted 535 rice price records from Japanese government PDFs using OCR and era conversion. Complete pipeline delivered in 2 weeks.'
```

Apply similar CTR-optimized rewrites to all 15 case studies.

**Step 2:** Run `npm run build`

**Step 3:** Commit
```bash
git add src/lib/case-studies/data.ts
git commit -m "seo(ra): rewrite 15 case study meta descriptions for CTR optimization"
```

---

### Task C2: Write 5 blog posts for ra.maestro.onl

**Files:**
- Create: 5 new MDX files in `content/blog/` (create directory if needed)

**Context:**
ra.maestro.onl has blog infrastructure (`src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`) but 0 blog posts. The blog is listed in sitemap with priority 0.9. Fill with 5 high-quality articles targeting long-tail keywords derived from case study themes.

**Blog post topics:**

1. `how-to-build-academic-data-pipeline.mdx` — Target: "academic data pipeline", "research data processing"
2. `ocr-japanese-government-pdfs-guide.mdx` — Target: "OCR Japanese PDF data extraction"
3. `spatial-interpolation-county-level-weather-data.mdx` — Target: "IDW interpolation weather data county"
4. `sec-edgar-10k-nlp-esg-analysis.mdx` — Target: "SEC 10-K NLP analysis ESG"
5. `survey-harmonization-dhs-mics-guide.mdx` — Target: "DHS MICS survey harmonization"

**Frontmatter structure** (matching ra.maestro.onl's blog system — check `src/lib/mdx.ts` for exact interface):

```yaml
---
title: "How to Build Academic Data Pipelines: From Raw Sources to Paper-Ready Datasets"
description: "A practitioner's guide to building reproducible data pipelines for academic research. Covers API extraction, PDF parsing, spatial interpolation, and quality assurance."
publishedAt: "2026-02-20"
author: "Maestro Team"
tags: ["Data Pipeline", "Academic Research", "Reproducibility"]
featured: true
readingTime: 12
faq:
  - question: "What is an academic data pipeline?"
    answer: "An academic data pipeline is a reproducible workflow that transforms raw data sources (APIs, PDFs, surveys) into analysis-ready datasets for empirical research."
---
```

Each article should be 1500-2500 words, include internal links to relevant case studies, and end with a CTA to the RA Data service.

**Step 1:** Create `content/blog/` directory if it does not exist.

**Step 2:** Write 5 MDX blog posts with proper frontmatter and content.

**Step 3:** Run `npm run build`

**Step 4:** Commit
```bash
git add content/blog/
git commit -m "seo(ra): add 5 blog posts targeting long-tail research data keywords"
```

---

### Task C3: Add AI crawler rules to ra.maestro.onl robots.ts

**Files:**
- Modify: `src/app/robots.ts`

**Context:**
Currently ra.maestro.onl only has a generic `*` user-agent rule. growth.maestro.onl explicitly allows GPTBot, ChatGPT-User, Claude-Web, and PerplexityBot. Add the same to ra.

**Step 1:** Add explicit AI crawler rules to `src/app/robots.ts`:

```typescript
rules: [
  {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/', '/workspace/', '/auth/', '/ops/', '/portal/', '/demo/', '/latex/', '/figure/', '/test-components/', '/design-system/', '/billing/'],
  },
  { userAgent: 'GPTBot', allow: '/' },
  { userAgent: 'ChatGPT-User', allow: '/' },
  { userAgent: 'Claude-Web', allow: '/' },
  { userAgent: 'PerplexityBot', allow: '/' },
],
```

**Step 2:** Run `npm run build`

**Step 3:** Commit
```bash
git add src/app/robots.ts
git commit -m "seo(ra): allow AI crawlers (GPTBot, Claude-Web, PerplexityBot) in robots.txt"
```

---

## Workstream D: AEO / llms.txt Updates + Cross-site

### Task D1: Update growth.maestro.onl llms.txt

**Files:**
- Modify: `/Users/ding/maestro/projects/2026-2-growth-foundry/public/llms.txt`

**Context:**
Currently says "53+ bilingual articles" but there are 76 English articles. Update count, add missing articles, add guide pages.

**Step 1:** Update the article count from 53 to 76.

**Step 2:** Add any missing articles to the content index.

**Step 3:** Add guide pages to the content index (after Task B3 is complete).

**Step 4:** Commit
```bash
git add public/llms.txt
git commit -m "seo(growth): update llms.txt with 76 articles and guide pages"
```

---

### Task D2: Expand ra.maestro.onl llms.txt

**Files:**
- Modify: `/Users/ding/maestro/projects/2026-1-ra-suite/public/llms.txt`

**Context:**
Currently very minimal (20 lines). Should include all 15 case studies with descriptions and the new blog posts.

**Step 1:** Expand llms.txt to include:
- Service descriptions (RA Data, RA Paper, RA Web) with more detail
- All 15 case study listings with brief descriptions and URLs
- Blog posts (after Task C2)
- Contact information

**Step 2:** Commit
```bash
git add public/llms.txt
git commit -m "seo(ra): expand llms.txt with all case studies and service descriptions"
```

---

### Task D3: Update maestro.onl llms.txt

**Files:**
- Modify: `/Users/ding/maestro/projects/maestro/public/llms.txt`

**Context:**
Currently comprehensive but should be checked for completeness against actual blog posts.

**Step 1:** Verify all 35 blog articles are listed. Add any missing ones.

**Step 2:** Update any outdated descriptions.

**Step 3:** Commit if changes were needed.

---

## Final Verification

### Task E1: Build all 3 sites and verify

**Step 1:** Run builds in all 3 projects:
```bash
cd /Users/ding/maestro/projects/maestro && npm run build
cd /Users/ding/maestro/projects/2026-2-growth-foundry && npm run build
cd /Users/ding/maestro/projects/2026-1-ra-suite && npm run build
```

**Step 2:** Fix any build errors.

**Step 3:** Final commits if fixes needed.

---

## Summary

| Workstream | Tasks | Site | Key Deliverables |
|-----------|-------|------|-----------------|
| A | A1, A2 | maestro.onl | 100+ internal links, 15 FAQ schemas |
| B | B1-B4 | growth.maestro.onl | Breadcrumbs, RelatedArticles, 3 hub pages, 20 FAQ schemas |
| C | C1-C3 | ra.maestro.onl | 15 CTR-optimized descriptions, 5 blog posts, AI crawler rules |
| D | D1-D3 | All sites | Updated llms.txt across all sites |
| E | E1 | All sites | Build verification |

**Total estimated changes:**
- 35 articles modified (maestro.onl internal links)
- 15 articles modified (maestro.onl FAQ)
- 20 articles modified (growth FAQ)
- 3 new components created (growth)
- 3 new hub pages created (growth)
- 15 case study descriptions rewritten (ra)
- 5 new blog posts (ra)
- 3 llms.txt files updated
- 1 robots.ts updated (ra)
