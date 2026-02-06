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
    name: "RA",
    description:
      "End-to-end research assistant. Turn messy public data sources into paper-ready datasets, tables, and LaTeX sections in minutes.",
    status: "live",
    url: "https://ra.maestro.onl",
    icon: "microscope",
    category: "Research",
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
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "product-dev",
    title: "AI Product Development",
    description:
      "End-to-end development of AI-powered products, from concept to deployment.",
    features: [
      "Strategy & Design",
      "AI/ML Integration",
      "Full-stack Development",
      "Launch & Support",
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    description:
      "Bespoke AI solutions tailored to your specific business needs and workflows.",
    features: [
      "Requirements Analysis",
      "Custom Model Training",
      "Integration & Deployment",
      "Ongoing Optimization",
    ],
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
    description: "Our AI doesn't guess — it delivers accurate, reliable results.",
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
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Insights" },
];
