# Maestro Landing Page Design Specification

## Overview

A single-page landing site for Maestro that showcases our AI product portfolio and services. The design draws inspiration from 24Labs' dark tech aesthetic while establishing a distinct identity through the "orchestration" metaphor.

---

## Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  NAVIGATION                                                  │
│  Logo | Products | Services | About | Contact               │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION                                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  "AI, Orchestrated"                                  │    │
│  │  Tagline + CTA buttons                               │    │
│  │  [Animated conductor baton / wave visualization]     │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  PRODUCTS SECTION                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  Econ    │  │  Kairos  │  │ Coming   │                   │
│  │  Card    │  │  Card    │  │ Soon     │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│  SERVICES SECTION                                            │
│  AI Development | Custom Solutions                           │
├─────────────────────────────────────────────────────────────┤
│  ABOUT / VALUES SECTION                                      │
│  Mission + Core Values (Precision, Harmony, Craft, Power)   │
├─────────────────────────────────────────────────────────────┤
│  CONTACT SECTION                                             │
│  sales@maestro.onl | support@maestro.onl                     │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  Copyright + Social Links                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Section Details

### 1. Navigation (Sticky)

```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] Maestro          Products  Services  About    [Contact] │
└────────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Fixed position, blurs background on scroll
- Logo: "Maestro" in bold Inter + conductor icon
- Contact button: Primary CTA style with glow effect
- Mobile: Hamburger menu

**Styles:**
```css
background: rgba(10, 10, 15, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
```

---

### 2. Hero Section

**Content:**
- Pre-heading: `/// ORCHESTRATING INTELLIGENCE >>>`
- Main Headline: `AI, Orchestrated`
- Sub-headline: `We build AI tools that amplify human expertise. From behavioral economics to intelligent calendars, our products transform how professionals work.`
- CTA Buttons: `Explore Products` | `Contact Sales`

**Visual Element:**
Abstract visualization representing orchestration:
- Option A: Animated sound wave / frequency visualization
- Option B: Flowing particle system forming conductor motion
- Option C: Geometric constellation connecting nodes (representing AI agents)

**Recommended: Option C** — Aligns with "orchestration" metaphor and differentiates from 24Labs' planetary visuals.

**Layout:**
```
Left (60%): Text content
Right (40%): Animated visualization
```

---

### 3. Products Section

**Section Header:**
- Pre-label: `/// OUR PRODUCTS >>>`
- Title: `The Maestro Suite`
- Description: `AI-powered tools for professionals who demand precision`

**Product Cards:**

Each card contains:
- Status badge (LIVE / COMING SOON)
- Product icon
- Product name
- One-line description
- "Visit" or "Learn More" link

**Card Grid:**
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ [LIVE]          │ │ [LIVE]          │ │ [COMING SOON]   │
│                 │ │                 │ │                 │
│  🧪 Econ        │ │  📅 Kairos      │ │  📚 Education   │
│                 │ │                 │ │                 │
│ AI-powered      │ │ Intelligent     │ │ AI learning     │
│ behavioral      │ │ agent calendar  │ │ assistants      │
│ economics       │ │ system          │ │                 │
│ experiments     │ │                 │ │                 │
│                 │ │                 │ │                 │
│ [Visit >>>]     │ │ [Visit >>>]     │ │ [Notify Me]     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

**Additional "Coming Soon" cards:**
- Growth Engine (User Growth)
- Creator Suite (Content Tools)
- Sales AI
- Commerce AI

**Card Styles:**
```css
background: linear-gradient(180deg, #18181B 0%, #0A0A0F 100%);
border: 1px solid rgba(99, 102, 241, 0.2);
border-radius: 16px;

/* Hover state */
border-color: rgba(99, 102, 241, 0.5);
box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
```

---

### 4. Services Section

**Section Header:**
- Pre-label: `/// SERVICES >>>`
- Title: `Build With Us`

**Two-column layout:**

```
┌────────────────────────────┐ ┌────────────────────────────┐
│  AI Product Development    │ │  Custom Development        │
│                            │ │                            │
│  End-to-end development    │ │  Bespoke AI solutions      │
│  of AI-powered products,   │ │  tailored to your          │
│  from concept to           │ │  specific business needs   │
│  deployment.               │ │  and workflows.            │
│                            │ │                            │
│  • Strategy & Design       │ │  • Requirements Analysis   │
│  • AI/ML Integration       │ │  • Custom Model Training   │
│  • Full-stack Development  │ │  • Integration & Deployment│
│  • Launch & Support        │ │  • Ongoing Optimization    │
│                            │ │                            │
│  [Contact Sales]           │ │  [Contact Sales]           │
└────────────────────────────┘ └────────────────────────────┘
```

---

### 5. About / Values Section

**Section Header:**
- Pre-label: `/// WHO WE ARE >>>`
- Title: `Orchestrating Intelligence`

**Mission Statement:**
Large, centered text:
> "We build AI tools that amplify human expertise, automate routine complexity, and free professionals to focus on what truly matters."

**Values Grid (2x2):**

```
┌─────────────────────┐ ┌─────────────────────┐
│  ⚡ Precision       │ │  🎵 Harmony         │
│                     │ │                     │
│  Our AI doesn't     │ │  AI and humans      │
│  guess — it         │ │  work in concert,   │
│  delivers.          │ │  not conflict.      │
└─────────────────────┘ └─────────────────────┘
┌─────────────────────┐ ┌─────────────────────┐
│  ✨ Craft           │ │  🚀 Empowerment     │
│                     │ │                     │
│  We sweat the       │ │  We amplify human   │
│  details and ship   │ │  capability, not    │
│  only when right.   │ │  replace it.        │
└─────────────────────┘ └─────────────────────┘
```

---

### 6. Contact Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  /// GET IN TOUCH >>>                                       │
│                                                              │
│  Let's Build Something Together                              │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  💼 Sales            │  │  🛠 Support          │        │
│  │  sales@maestro.onl   │  │  support@maestro.onl │        │
│  │  [Copy Email]        │  │  [Copy Email]        │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 7. Footer

```
┌─────────────────────────────────────────────────────────────┐
│  Maestro                                                     │
│  AI, Orchestrated                                            │
│                                                              │
│  © 2025 Maestro. All rights reserved.                       │
│                                                              │
│  [GitHub] [Twitter/X] [LinkedIn]                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Desktop** | ≥1280px | Full layout, 3-column product grid |
| **Tablet** | 768-1279px | 2-column product grid, stacked services |
| **Mobile** | <768px | Single column, hamburger nav, simplified hero |

---

## Animation Specifications

### Hero Visualization
- **Type:** CSS/Canvas particle system
- **Behavior:** Particles flow in conductor-like wave patterns
- **Colors:** Gradient from Electric Indigo to Cyan Glow
- **Performance:** RequestAnimationFrame, GPU-accelerated

### Scroll Animations
- **Trigger:** IntersectionObserver at 20% visibility
- **Effect:** Fade up + slight scale (0.95 → 1)
- **Duration:** 600ms ease-out
- **Stagger:** 100ms between elements

### Hover States
- **Cards:** Border glow intensifies, subtle lift (translateY -4px)
- **Buttons:** Background gradient shift, glow pulse
- **Links:** Underline animation from left to right

---

## Technical Implementation Notes

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### Tailwind Config Extensions
```js
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A0A0F',
        'obsidian': '#18181B',
        'electric-indigo': '#6366F1',
        'cosmic-purple': '#8B5CF6',
        'cyan-glow': '#22D3EE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  }
}
```

### Component Structure
```
src/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Base styles
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── constants.ts       # Product data, contact info
```

---

## Differentiation from 24Labs

| Aspect | 24Labs | Maestro |
|--------|--------|---------|
| **Visual Metaphor** | Space/planets, cosmic scale | Orchestra/conductor, precision |
| **Hero Visual** | Large planetary render | Abstract particle wave/constellation |
| **Tone** | "We did it 5 times" achievement focus | "Amplify human expertise" empowerment focus |
| **Product Display** | Carousel with large cards | Clean grid with status badges |
| **Identity** | "Built by ex-founders" | "AI, Orchestrated" |

---

## Success Metrics

- Page load time < 2s
- Lighthouse performance score > 90
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA)
- Clear CTAs drive contact conversions
