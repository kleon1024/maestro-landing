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
    name: "Research Data",
    status: "live",
    statusLabel: "LIVE",
    description:
      "RA Data turns messy public, spatial, survey, and administrative sources into research-ready datasets with QA, documentation, and reproducible delivery.",
  },
  {
    name: "Research Compute",
    status: "live",
    statusLabel: "LIVE",
    description:
      "Agent-assisted compute workflows for extraction, simulation, model runs, replication packages, and result validation across Python, R, Stata, and cloud runtimes.",
  },
  {
    name: "Experiment Infrastructure",
    status: "roadmap",
    statusLabel: "Q3 2026",
    description:
      "From plain-language experiment design to participant-ready interfaces, deployment, data capture, and analysis pipelines for behavioral research.",
  },
  {
    name: "Enterprise Data Operations",
    status: "on-demand",
    statusLabel: "ON DEMAND",
    description:
      "The expansion path: agent infrastructure for data-driven enterprise work where sources, computation, QA, and deliverables must be repeatable.",
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
