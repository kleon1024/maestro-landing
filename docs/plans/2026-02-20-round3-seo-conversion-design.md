# Round 3: SEO + Conversion Optimization Design

Date: 2026-02-20
Status: Approved

## Context

growth.maestro.onl analytics show LLM referral traffic (ChatGPT 16, Perplexity 11, Claude 4) matching Google (31). AEO strategy validated. But all 3 sites have broken conversion funnels -- article pages are dead ends with no CTAs.

## Workstream A: Conversion Funnel Fixes

### A1. growth.maestro.onl

1. **ArticleCTA component** -- bottom of every article, above Related Articles
   - Newsletter signup inline (email input + submit)
   - Link to /pricing with value prop
2. **Navigation update** -- add "Pricing" link to nav
3. **Fix Pro subscription** -- checkout-client.tsx email hardcoded as placeholder

### A2. ra.maestro.onl

1. **BlogCTA component** -- bottom of every blog post
   - "Start a Data Project" button -> /contact?category=Data
   - Brief value prop (turnaround, expertise)
2. **CaseStudyCTA sticky sidebar** -- on case study detail pages
3. **Activate PricingSection** -- show pricing tiers on /data page (currently hidden)
4. **Blog page layout** -- add CTA to blog list page

### A3. maestro.onl

1. **BlogCTA component** -- bottom of every blog post
   - Research articles -> ra.maestro.onl CTA
   - Enterprise articles -> Contact CTA
2. **Contact Form** -- replace mailto with real form (Resend API)
3. **Fix Footer** -- social links currently placeholder

## Workstream B: New SEO Content

### B1. growth.maestro.onl (15 new articles)

Proven format: `{company}-viral-growth-case-study`
Target companies (2025-2026 hot AI/SaaS):
- Cursor, Windsurf, Bolt, v0, Lovable, Devin
- Anthropic, Mistral, Cohere, Groq
- Vercel, Supabase, Clerk, Resend, Neon

All with: FAQ schema, Snippet Sandwich structure, internal links to guides

### B2. ra.maestro.onl (8 new blog posts)

Target: "how to get X data" academic keywords
- World Bank API data extraction
- Census Bureau microdata access
- Patent data (USPTO, EPO) collection
- Climate/weather data pipelines
- Financial market data aggregation
- Satellite imagery for research
- Social media data for academic research
- Government procurement data

### B3. maestro.onl (5 new articles)

- Singapore Budget 2026 AI incentives for SMEs
- IMDA AI Verify framework guide
- Enterprise AI implementation ROI calculator
- How to evaluate AI service providers (Singapore)
- AI-powered research data services comparison

## Workstream C: FAQ Schema Completion

- growth.maestro.onl: add FAQ to remaining 56 articles
- maestro.onl: add FAQ to remaining 15 articles
- ra.maestro.onl: add FAQ to remaining 26 blog posts

## Execution Plan

Phase 1 (immediate): Conversion funnel fixes (A1, A2, A3)
Phase 2 (parallel): New content generation (B1, B2, B3)
Phase 3 (parallel): FAQ schema completion (C)

All phases execute in parallel via team agents.
