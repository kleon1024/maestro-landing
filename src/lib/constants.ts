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
    name: "Data Products",
    status: "live",
    statusLabel: "Live",
    description:
      "Pre-built research datasets. China county boundary crosswalks, weather panels, satellite-derived climate variables. Self-service via Stripe. Gross margin >90%.",
  },
  {
    name: "Data Engineering",
    status: "live",
    statusLabel: "Live",
    description:
      "Custom pipelines scoped by complexity (L1-L4). Every deliverable is a reproducible pipeline, not a one-off file. Each project deposits at least one new Skill into the library.",
  },
  {
    name: "Data Infrastructure",
    status: "roadmap",
    statusLabel: "Q3 2026",
    description:
      "Platform APIs for programmatic data access. Conversational data procurement: describe what you need, get matched to datasets and processing pipelines, purchase in one step.",
  },
  {
    name: "Advisory",
    status: "on-demand",
    statusLabel: "On demand",
    description:
      "Data strategy consulting for research institutions and policy organizations. Architecture reviews, pipeline audits, data governance design. SGD 2,000-10,000 per engagement.",
  },
];

export const CONTACT = {
  email: "hello@maestro.onl",
};

export const NAV_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "RA Data" },
  { href: "#revenue", label: "Services" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Blog" },
];
