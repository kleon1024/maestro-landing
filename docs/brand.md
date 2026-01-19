# Maestro Brand Guidelines

## Brand Name

**Maestro** — A name that evokes mastery, orchestration, and precision control.

In the context of AI, Maestro represents intelligent coordination — the ability to orchestrate complex AI systems that work in harmony to achieve remarkable outcomes.

---

## Mission

**Orchestrating AI for Human Achievement**

We build AI-powered tools that amplify human expertise, automate routine complexity, and free professionals to focus on what truly matters.

---

## Vision

A world where every professional commands their own AI orchestra — seamlessly integrated tools that work in harmony to transform ideas into outcomes.

---

## Core Values

### 1. Precision
Our AI delivers accurate, reliable results. No guessing, no approximations — just precision.

### 2. Harmony
AI and humans work in concert, not conflict. We design for seamless collaboration.

### 3. Craft
Every product is meticulously crafted. We obsess over details and ship only when it's right.

### 4. Empowerment
We amplify human capability, not replace it. Our tools make experts more expert.

---

## Visual Identity

### Logo Concept

The Maestro logo represents **AI orchestration** through an abstract node/connection symbol:
- Three interconnected nodes forming a triangular network
- Represents: coordination, intelligence, precision
- NOT a music note — we moved away from the literal "conductor" metaphor

### Color Palette — Space Tech

| Role | Color | Hex | Tailwind | Usage |
|------|-------|-----|----------|-------|
| **Background** | Deep Space | `#09090B` | `zinc-950` | Primary dark background |
| **Surface** | Obsidian | `#18181B` | `zinc-900` | Cards, elevated surfaces |
| **Surface Alt** | Dark Slate | `#27272A` | `zinc-800` | Hover states, borders |
| **Text Primary** | Star White | `#FAFAFA` | `zinc-50` | Headlines, key content |
| **Text Secondary** | Silver | `#A1A1AA` | `zinc-400` | Body text, descriptions |
| **Text Muted** | Gray | `#71717A` | `zinc-500` | Captions, timestamps |
| **Primary** | Electric Blue | `#3B82F6` | `blue-500` | CTAs, links, accents |
| **Primary Hover** | Blue Light | `#60A5FA` | `blue-400` | Hover states |
| **Border** | Dark Border | `#27272A` | `zinc-800` | Dividers, card borders |

### Typography — Tech Startup

| Role | Font | Weight | Size | Usage |
|------|------|--------|------|-------|
| **Display** | Space Grotesk | 700 | 48-72px | Hero headlines |
| **Heading** | Space Grotesk | 600 | 24-36px | Section titles |
| **Subheading** | Space Grotesk | 500 | 18-20px | Card titles |
| **Body** | DM Sans | 400 | 16px | Paragraphs |
| **Body Small** | DM Sans | 400 | 14px | Descriptions |
| **Caption** | DM Sans | 500 | 12px | Labels, tags |

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
```

### Design Principles

1. **Deep Space Aesthetic**: Near-black backgrounds with high-contrast text
2. **Minimal Glow**: Subtle blue accents, no excessive neon effects
3. **Grid-Based Layout**: Swiss-style mathematical spacing
4. **Subtle Depth**: Borders and surfaces, not heavy shadows
5. **Professional Restraint**: No emojis, no playful elements

---

## Brand Voice

| Attribute | Description |
|-----------|-------------|
| **Confident** | We know our products work. Direct statements, no hedging. |
| **Clear** | Complex technology, simple words. No jargon. |
| **Professional** | Serious about what we do. No gimmicks. |
| **Human** | Tech-forward but never cold. We build for real people. |

---

## Tagline

**Primary:** "AI, Orchestrated"

**Alternative:**
- "Intelligent Coordination"
- "Your AI Orchestra"

---

## Product Portfolio

### Live Products

| Product | Domain | Description |
|---------|--------|-------------|
| **Econ** | econ.maestro.onl | AI-powered behavioral economics experiment platform |
| **Kairos** | kairos.maestro.onl | Intelligent agent calendar system |

### In Development

| Product | Category |
|---------|----------|
| Education | EdTech |
| Growth Engine | Marketing |
| Creator Suite | Content |
| Sales AI | SalesTech |
| Commerce AI | E-commerce |

---

## Contact

| Purpose | Email |
|---------|-------|
| Sales & Partnerships | sales@maestro.onl |
| Support & Feedback | support@maestro.onl |

---

## UI Implementation Notes

### Icon Guidelines
- Use Lucide icons or Heroicons (outline style)
- Icon size: 20px (w-5 h-5) for inline, 24px (w-6 h-6) for standalone
- Stroke width: 1.5 for outline icons
- NO emojis as UI icons

### Interactive Elements
- All clickable elements: `cursor-pointer`
- Hover transition: `transition-colors duration-200`
- Focus visible: proper focus rings for accessibility
- No layout-shifting hover effects (avoid scale transforms on cards)

### Spacing System (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
