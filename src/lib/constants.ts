////////////////////////////////////////////////////////////////////////////////
// Constants for Maestro Landing Page
//
// Responsibility: Centralized data for business lines, contact info, navigation
// Used by: All landing page components
////////////////////////////////////////////////////////////////////////////////

export type BusinessLineStatus = "live" | "roadmap" | "on-demand";

export interface BusinessLine {
  name: string;
  status: BusinessLineStatus;
  statusLabel: string;
  description: string;
}

export const BUSINESS_LINES: BusinessLine[] = [
  {
    name: "AI Automation Products",
    status: "live",
    statusLabel: "LIVE",
    description:
      "Pre-built AI modules for recurring engineering tasks. RA Data research datasets are the first product line — self-service, high margin, proven demand.",
  },
  {
    name: "Custom Engineering",
    status: "live",
    statusLabel: "LIVE",
    description:
      "We build AI-powered pipelines for your specific workflow. Data engineering, document processing, compliance checks. Every project deposits a new module into the library.",
  },
  {
    name: "Platform API",
    status: "roadmap",
    statusLabel: "Q3 2026",
    description:
      "Programmatic access to our automation modules. Describe what you need, get structured output. One interface to the full skill library.",
  },
  {
    name: "Advisory",
    status: "on-demand",
    statusLabel: "ON DEMAND",
    description:
      "Strategic consulting for organizations planning AI adoption. Architecture review, feasibility assessment, pilot design.",
  },
];

export const CONTACT = {
  email: "hello@maestro.onl",
};

export const NAV_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "RA Data" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Blog" },
];
