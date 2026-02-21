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
