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
    id: "kairos",
    name: "Kairos",
    description:
      "Intelligent agent calendar system. Express intent through natural language, AI agents autonomously plan and execute tasks.",
    status: "live",
    url: "https://kairos.maestro.onl",
    icon: "calendar",
    category: "Productivity",
  },
  {
    id: "education",
    name: "Education",
    description:
      "AI-powered learning and teaching assistants for personalized education experiences.",
    status: "coming-soon",
    icon: "graduation-cap",
    category: "EdTech",
  },
  {
    id: "growth",
    name: "Growth Engine",
    description:
      "User acquisition and retention optimization powered by AI insights.",
    status: "coming-soon",
    icon: "trending-up",
    category: "Marketing",
  },
  {
    id: "creator",
    name: "Creator Suite",
    description:
      "AI tools for content creation, editing, and management at scale.",
    status: "coming-soon",
    icon: "pen-tool",
    category: "Content",
  },
  {
    id: "sales",
    name: "Sales AI",
    description:
      "Intelligent sales automation, lead scoring, and conversation insights.",
    status: "coming-soon",
    icon: "briefcase",
    category: "SalesTech",
  },
  {
    id: "commerce",
    name: "Commerce AI",
    description:
      "AI-driven e-commerce optimization for inventory, pricing, and personalization.",
    status: "coming-soon",
    icon: "shopping-cart",
    category: "E-commerce",
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
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];
