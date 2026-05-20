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

export interface CapabilityGroup {
  name: string;
  description: string;
  examples: string[];
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

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    name: "Communication Intelligence",
    description:
      "Voice, email, chat, and customer conversations converted into structured cases, follow-ups, and decisions.",
    examples: ["Voice workflows", "Email operations", "Customer support", "Call notes"],
  },
  {
    name: "Document Operations",
    description:
      "Files, forms, scanned records, and multimodal evidence extracted, checked, and assembled into usable work products.",
    examples: ["OCR", "File intake", "Form completion", "Evidence packets"],
  },
  {
    name: "Business Systems",
    description:
      "AI workflows connected to the operating systems where teams already work: portals, CRM, ERP, and internal tools.",
    examples: ["Client portals", "CRM workflows", "ERP handoffs", "Case tracking"],
  },
  {
    name: "Finance & Records",
    description:
      "Bookkeeping preparation, invoice evidence, reconciliations, and record organization for review-ready operations.",
    examples: ["Bookkeeping prep", "Invoice evidence", "Record matching", "Audit trails"],
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
