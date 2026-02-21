# maestro.onl Enterprise Redesign — Design Document
Date: 2026-02-21
Status: Approved

## Goal

Transform maestro.onl from "Space Tech dark startup" to "institutional enterprise consulting"
aesthetic targeting government agencies, corporate clients, and enterprise procurement.

Approach: Parent Brand Elevated (Path 2) — inspired by ra.maestro.onl's Swiss Modernism
but upgraded: Playfair Display serif + light institutional palette + gold point accents.

## Color Token Map (Old Tailwind → New Tailwind)

| Old dark class | New light class | Usage |
|---|---|---|
| `bg-zinc-950` (main bg) | `bg-gray-50` | Page background |
| `bg-zinc-900`, `bg-zinc-900/50` (cards) | `bg-white` | Card surfaces |
| `bg-zinc-900` (alternate section) | `bg-slate-50` | Alternate sections |
| `text-zinc-50` | `text-slate-900` | Primary text |
| `text-zinc-400` | `text-slate-500` | Secondary text |
| `text-zinc-500` | `text-slate-400` | Muted text |
| `text-zinc-600` | `text-slate-400` | Very muted |
| `border-zinc-800` | `border-slate-200` | Card borders |
| `border-zinc-900` | `border-slate-100` | Subtle borders |
| `text-blue-400` | `text-blue-700` | Blue on light bg |
| `bg-blue-600` / `bg-blue-500` | `bg-blue-800` | Primary CTA |
| `hover:bg-blue-500` | `hover:bg-blue-700` | CTA hover |
| `bg-zinc-800` | `bg-slate-100` | Input/badge bg |
| `text-emerald-400` | `text-amber-700` | Policy/incentive accent → gold |
| `bg-emerald-400` | `bg-amber-500` | Gold accent dot |

## Brand Custom Colors (use inline style or Tailwind arbitrary values)

```
Brand Deep Navy: #1A2744  (text-[#1A2744])
Brand Blue:      #1A3A6B  (bg-[#1A3A6B])
Brand Blue Mid:  #2563EB  (hover)
Gold Matte:      #B8860B  (text-[#B8860B])
Gold Bg:         #FFFBEB  (bg-[#FFFBEB])
Gold Border:     #FCD34D  (border-[#FCD34D])
```

## Typography System

### Fonts to Add (in layout.tsx)
- Remove: `Space_Grotesk`, `DM_Sans`
- Add: `Playfair_Display` (weights: 400, 600, 700), `Inter` (weights: 400, 500, 600, 700)

### Usage Rules
- Headings H1-H3: `font-[family-name:var(--font-playfair)]` → Playfair Display, serif, authoritative
- Body text: `font-[family-name:var(--font-inter)]` → Inter, clean, readable
- Section labels: Inter, `text-sm font-semibold tracking-widest uppercase text-blue-700`
  - REMOVE all `///` decorators from section labels
  - REMOVE all `font-mono` from labels
- Numbers/stats: Playfair Display, bold, navy

### layout.tsx Changes
```tsx
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// In body className:
className={`${playfair.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}
```

### globals.css Changes
```css
:root {
  --bg-primary: #F9FAFB;
  --bg-surface: #FFFFFF;
  --bg-elevated: #F1F5F9;
  --text-primary: #1A2744;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --accent-primary: #1A3A6B;
  --accent-hover: #2563EB;
  --border-default: #E2E8F0;
  --border-subtle: #F1F5F9;
}

@theme inline {
  --font-heading: var(--font-playfair);
  --font-body: var(--font-inter);
}

body {
  background: var(--bg-primary);  /* #F9FAFB */
  color: var(--text-primary);     /* #1A2744 */
  font-family: var(--font-body), system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading), Georgia, serif;
}
```

## Component-by-Component Spec

### Navigation.tsx
- Shape: Remove `rounded-full` pill → conventional top header
- Scrolled: `bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200`
  Not scrolled: `bg-white/80 backdrop-blur-sm border-b border-transparent`
- Logo text: `text-slate-900 font-semibold`
- Nav links: `text-slate-600 hover:text-slate-900 transition-colors`
- Contact button: `bg-[#1A3A6B] text-white hover:bg-blue-700 px-5 py-2 text-sm font-medium`
  (remove rounded-full → straight rectangle or `rounded-md`)
- Mobile menu bg: `bg-white border-t border-slate-100`
- Mobile links: `text-slate-600 hover:text-slate-900 hover:bg-slate-50`

### Hero.tsx
- Section bg: `bg-gradient-to-br from-gray-50 via-white to-blue-50`
- Remove: radial gradient overlay, grid pattern overlay, scroll indicator
- Pre-heading: `text-sm font-semibold tracking-widest uppercase text-blue-700`
  Content: "Enterprise AI Solutions" (no `///`)
- H1: `font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A2744] leading-[1.05]`
  Text: same wording "We build AI solutions that transform how businesses operate."
- Subhead: `text-lg md:text-xl text-slate-500` (same content)
- CTA primary: `bg-[#1A3A6B] text-white hover:bg-blue-700 px-8 py-4 text-sm font-semibold`
  (no rounded corners → clean rectangle, matches consulting aesthetic)
- CTA secondary: `border border-[#1A3A6B] text-[#1A3A6B] hover:bg-blue-50 px-8 py-4 text-sm font-semibold`
- Trust badges: `text-sm text-slate-400` (remove dot separators → use ` · ` as text)

### FlagshipRA.tsx
- Section bg: `bg-white border-t border-slate-100`
- Section label: `text-sm font-semibold tracking-widest uppercase text-blue-700` (remove pulse dot and mono style)
  Content: "Flagship Product" (no `///`)
- H2: Playfair, `text-[#1A2744]`
- Subhead: `text-slate-500`
- Cards: `bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all`
- Card number: `text-xs font-medium text-[#B8860B]` (gold)
- Card icon box: `bg-blue-50 text-blue-700`
- Card title: `text-[#1A2744] font-semibold`
- Card body: `text-slate-500`
- Spec items: `text-xs text-slate-400` (remove font-mono)
- "LEARN MORE" link: `text-blue-700 hover:text-blue-800` (remove font-mono)
- Stats bar: `border-t border-b border-slate-200`
  - Stat value: Playfair, `text-[#1A2744] font-bold`
  - Stat label: `text-xs font-medium tracking-wider uppercase text-slate-400`
- CTA button: `bg-[#1A3A6B] text-white hover:bg-blue-700`
- Response time text: `text-slate-400`

### Services.tsx
- Section bg: `bg-slate-50` (alternate section)
- Section label: `text-sm font-semibold tracking-widest uppercase text-blue-700` (remove `///`)
  Content: "Enterprise"
- H2: Playfair, `text-[#1A2744]`
- Subhead: `text-slate-500`
- Service cards: `bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md p-8 transition-all`
- Card number: `text-xs font-medium text-[#B8860B]` (gold, not mono)
- Card icon box: `bg-blue-50 text-blue-700`
- Feature tag items: `text-xs text-slate-400` (remove font-mono)
- "CONTACT SALES" link: `text-blue-700 hover:text-blue-800 text-sm font-medium`
  Remove `>>>` → use chevron SVG
- Policy banner: `bg-[#FFFBEB] border border-[#FCD34D]`
  - "SG Budget 2026" badge: `text-[#B8860B] font-semibold text-xs tracking-wider uppercase`
  - Remove green dot → use gold dot: `bg-amber-400`
  - H3: Playfair, `text-[#1A2744]`
  - Check items: `text-slate-600`
  - Check icons: `text-amber-600`
  - CTA link: `text-[#1A3A6B] font-semibold hover:text-blue-700`

### About.tsx
- Section bg: `bg-white`
- Section label: `text-sm font-semibold tracking-widest uppercase text-blue-700` (no `///`)
  Content: "About Us"
- H2: Playfair, `text-[#1A2744]`
- Subhead: `text-slate-500`
- Value cards: plain `p-6` (no change to structure)
- Icon box: `bg-blue-50 text-blue-700 border-0` (remove zinc border)
- Value title: `text-[#1A2744] font-semibold`
- Value description: `text-slate-500`

### Products.tsx
- Section bg: `bg-slate-50`
- Header: Remove `text-blue-500 ml-3` inline style → Playfair H2 `text-[#1A2744]`
  "AI Products" — clean, no color split in title
- Section label: `text-sm font-semibold tracking-widest uppercase text-blue-700` (no `///`)
  Content: "Our Products"
- Product cards: `bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md`
- CornerMarkers: remove entirely (too "hacker" aesthetic)
- Product header gradient area: keep the colored gradients but reduce opacity to 25-30%
  and set the gradient area bg to a lighter tinted version:
  - econ: `from-emerald-100 via-teal-50 to-transparent`
  - printpic: `from-pink-100 via-rose-50 to-transparent`
  - kairos: `from-blue-100 via-indigo-50 to-transparent`
  - growth: `from-amber-100 via-orange-50 to-transparent`
  - layout: `from-cyan-100 via-sky-50 to-transparent`
  - rehearse: `from-lime-100 via-green-50 to-transparent`
- Product icon box: `bg-white/80 text-slate-700` (on light gradient)
- Product name in header: `text-slate-800 font-semibold`
- "FLAGSHIP" badge: `bg-blue-700 text-white` (keep)
- Year badge: `bg-white/70 text-slate-600`
- "Coming soon" badge: `bg-slate-100 text-slate-400`
- Card title: `text-[#1A2744]`
- Card body: `text-slate-500`
- "VISIT" link: `text-blue-700 hover:text-blue-800 font-medium` (remove font-mono, remove `>>>`)
  Use proper arrow SVG
- "COMING SOON": `text-slate-400` (remove font-mono)
- Nav arrows: `bg-white border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800`

### Contact.tsx
- Section bg: `bg-gray-50`
- Section label: `text-sm font-semibold tracking-widest uppercase text-blue-700` (no `///`)
  Content: "Contact"
- H2: Playfair, `text-[#1A2744]`
- Subhead: `text-slate-500`
- Form inputs: `bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400`
  Focus: `focus:border-blue-500 focus:ring-1 focus:ring-blue-200`
- Labels: `text-sm font-medium text-slate-700`
- Select: same as inputs
- Submit button: `bg-[#1A3A6B] text-white hover:bg-blue-700`
- Success state container: `bg-white border border-slate-200`
- Success icon: `bg-green-50 text-green-600`
- Success text: `text-[#1A2744]`, `text-slate-500`
- "Send another" link: `text-blue-700 hover:text-blue-800`
- Mailto cards: `bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm`
- Card title: `text-slate-900 font-semibold`
- Email link: `text-blue-700`
- Arrow icon: `text-slate-400 group-hover:text-blue-600`
- "Or reach us via email" divider: `text-slate-400`
- Error text: `text-red-600`

### Footer.tsx
- Footer bg: `bg-[#1A2744]` (deep navy — dark footer as visual closure)
- Top border: `border-t border-white/10`
- Logo text: `text-white font-semibold`
- Tagline: Remove `/// AI, Orchestrated ///` → "AI, Orchestrated" (plain text)
  Style: `text-xs text-white/40 tracking-wider uppercase`
- Links: `text-white/50 hover:text-white/80`
- Separator: `text-white/20`
- Copyright: `text-white/40`
- Email: `text-white/50 hover:text-white/80`

## Section Background Pattern (top to bottom)

```
Navigation  → white (fixed)
Hero        → gray-50 to blue-50 gradient
FlagshipRA  → white
Services    → slate-50 (alternate)
About       → white
Products    → slate-50 (alternate)
Contact     → gray-50
Footer      → #1A2744 (deep navy)
```

Alternating light pattern prevents monotony while maintaining institutional feel.

## What Does NOT Change

- All component logic (form handling, carousel, mobile menu toggle)
- All link hrefs, IDs, anchor targets
- All text content (wording stays exactly the same)
- Metadata in layout.tsx
- JSON-LD components (OrganizationJsonLd, BreadcrumbJsonLd)
- Blog page components
- All `src/lib/constants.ts` data
- Contact form API endpoint and payload structure

## Files to Modify (8 total)

1. `src/app/globals.css`
2. `src/app/layout.tsx`
3. `src/components/Navigation.tsx`
4. `src/components/Hero.tsx`
5. `src/components/FlagshipRA.tsx`
6. `src/components/Services.tsx`
7. `src/components/About.tsx`
8. `src/components/Products.tsx`
9. `src/components/Contact.tsx`
10. `src/components/Footer.tsx`

## Agent Assignment

- Agent Foundation: globals.css + layout.tsx
- Agent Shell: Navigation.tsx + Hero.tsx + Footer.tsx
- Agent Content-A: FlagshipRA.tsx + Services.tsx + About.tsx
- Agent Content-B: Products.tsx + Contact.tsx
