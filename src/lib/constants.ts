////////////////////////////////////////////////////////////////////////////////
// Constants for Maestro Landing Page
//
// Responsibility: Centralized data for products, services, and contact info
// Used by: All landing page components
////////////////////////////////////////////////////////////////////////////////

export type ProductStatus = "live" | "coming-soon";

export interface Product {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
  url?: string;
  icon: string;
  category: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "econ",
    name: "Econ",
    description:
      "AI-powered behavioral economics experiment platform. Describe experiments in plain language, get fully functional participant-ready websites.",
    status: "live",
    url: "https://econ.maestro.onl",
    icon: "flask",
    category: "Research",
  },
  {
    id: "printpic",
    name: "PrintPic",
    description:
      "Professional passport photo and portrait editing suite. Perfect ID photos in seconds, with automated compliance for 195+ countries.",
    status: "live",
    url: "https://printpic.maestro.onl",
    icon: "camera",
    category: "Photo",
  },
  {
    id: "kairos",
    name: "Kairos",
    description:
      "Personal assistant for the right moment. Intelligent agent calendar system that plans and executes tasks through natural language.",
    status: "live",
    url: "https://kairos.maestro.onl",
    icon: "calendar",
    category: "Productivity",
  },
  {
    id: "ra",
    name: "RA Suite",
    description:
      "Professional research infrastructure: data processing, lab platforms, and collaborative LaTeX editing. Trusted by 50+ research labs worldwide.",
    status: "live",
    url: "https://ra.maestro.onl",
    icon: "microscope",
    category: "Research",
    featured: true,
  },
  {
    id: "growth",
    name: "Growth Foundry",
    description:
      "Growth marketing content platform. Data-driven articles on customer acquisition, retention, SEO, and creator economy strategies.",
    status: "live",
    url: "https://growth.maestro.onl",
    icon: "trending-up",
    category: "Marketing",
  },
  {
    id: "layout",
    name: "Layout",
    description:
      "Creator content toolkit. Instantly convert Markdown to WeChat-ready HTML with 5 themes, auto-save, and perfect inline styling.",
    status: "live",
    url: "https://layout.maestro.onl",
    icon: "layout",
    category: "Content",
  },
  {
    id: "rehearse",
    name: "Rehearse",
    description:
      "Multimodal practice and presentation rehearsal platform. Record, review, and refine your talks with AI-powered feedback.",
    status: "live",
    url: "https://rehearse.maestro.onl",
    icon: "video",
    category: "Productivity",
  },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "ai-product",
    number: "/01",
    title: "AI Product Development",
    description:
      "Full-stack AI product development, from prototype to production. We've shipped 7 AI products across research, productivity, and creative tools.",
    features: [
      "Next.js + React",
      "LLM Integration",
      "Supabase Backend",
      "Stripe Payments",
      "Vercel Deploy",
      "PostHog Analytics",
    ],
    icon: "cpu",
  },
  {
    id: "data-research",
    number: "/02",
    title: "Data & Research Infrastructure",
    description:
      "Production data pipelines, research platforms, and automated workflows. Our RA Suite serves 50+ research labs with 100% replication rate.",
    features: [
      "ETL Pipelines",
      "API Integration",
      "Real-time Processing",
      "Automated QA",
      "GIS & Spatial",
      "Multi-source Merge",
    ],
    icon: "wrench",
  },
  {
    id: "ai-strategy",
    number: "/03",
    title: "AI Strategy & Training",
    description:
      "Hands-on AI workshops and strategic consulting to help your team adopt AI effectively. Aligned with Singapore's national AI initiatives.",
    features: [
      "Workshops",
      "AI Audit",
      "Tech Stack Review",
      "Team Training",
      "Prompt Engineering",
      "AI Governance",
    ],
    icon: "graduation",
  },
];

export interface Value {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const VALUES: Value[] = [
  {
    id: "precision",
    icon: "zap",
    title: "Precision",
    description: "Our AI doesn't guess -- it delivers accurate, reliable results.",
  },
  {
    id: "harmony",
    icon: "music",
    title: "Harmony",
    description: "AI and humans work in concert, not conflict.",
  },
  {
    id: "craft",
    icon: "sparkles",
    title: "Craft",
    description: "We sweat the details and ship only when it feels right.",
  },
  {
    id: "empowerment",
    icon: "rocket",
    title: "Empowerment",
    description: "We amplify human capability, not replace it.",
  },
];

export const CONTACT = {
  sales: "sales@maestro.onl",
  support: "support@maestro.onl",
};

export const NAV_LINKS = [
  { href: "/#enterprise", label: "Enterprise" },
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Insights" },
];
