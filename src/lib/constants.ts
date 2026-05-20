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
    name: "Research Infrastructure",
    status: "live",
    statusLabel: "LIVE",
    description:
      "For exploration and research production: datasets, compute runs, experiments, literature and source discovery, replication packages, and evidence-backed research deliverables.",
  },
  {
    name: "Business Automation",
    status: "live",
    statusLabel: "LIVE",
    description:
      "For paperwork-heavy operations: PMO, accounting prep, procurement, onboarding, compliance packets, admin forms, client delivery ops, and document-heavy workflows.",
  },
  {
    name: "Market Intelligence",
    status: "roadmap",
    statusLabel: "Q3 2026",
    description:
      "For sales and marketing teams: lead discovery, buyer maps, prospect dossiers, account briefs, competitor scans, CRM evidence trails, and evidence-backed outreach.",
  },
];

export const CONTACT = {
  email: "hello@maestro.onl",
};

export const NAV_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "Research" },
  { href: "#services", label: "Systems" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Blog" },
];
