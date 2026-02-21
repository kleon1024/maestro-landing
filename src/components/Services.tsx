import { CONTACT } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Services] Responsibility: "What We Build" — 3 practice areas
//
// Design: Tier-style 3-col grid with colored top-border accents
//         + Singapore AI incentives banner at bottom
// Invariants: Exactly 3 services; keep id="enterprise" on section
////////////////////////////////////////////////////////////////////////////////

const WHAT_WE_BUILD = [
  {
    number: "01",
    title: "AI Product Development",
    subtitle: "End-to-End Engineering",
    turnaround: "4–12 weeks",
    accent: "border-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Full-stack AI product development, from prototype to production. We've shipped 7 AI products across research, productivity, and creative tools.",
    specs: [
      "Next.js + React + TypeScript",
      "LLM / RAG Integration",
      "Supabase Backend",
      "Stripe Payments",
      "Vercel Deployment",
      "PostHog Analytics",
    ],
    icon: "cpu",
  },
  {
    number: "02",
    title: "Data & Research Infrastructure",
    subtitle: "Pipeline Engineering",
    turnaround: "3–14 days",
    accent: "border-teal-500",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    description: "Production data pipelines, research platforms, and automated workflows. Our RA Suite serves 50+ research labs with 100% replication rate.",
    specs: [
      "ETL & Data Pipelines",
      "Scanned PDF / OCR",
      "GIS & Spatial Analysis",
      "Multi-Source Merge",
      "Real-time Processing",
      "Automated QA",
    ],
    icon: "database",
  },
  {
    number: "03",
    title: "AI Strategy & Training",
    subtitle: "Consulting & Workshops",
    turnaround: "1–4 weeks",
    accent: "border-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    description: "Hands-on AI workshops and strategic consulting to help your team adopt AI effectively. Aligned with Singapore's national AI initiatives.",
    specs: [
      "AI Readiness Audit",
      "Prompt Engineering",
      "Team Workshops",
      "AI Governance",
      "Tech Stack Review",
      "Implementation Plan",
    ],
    icon: "graduation",
  },
] as const;

const ICON_MAP: Record<string, React.ReactNode> = {
  cpu: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  graduation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
};

const INCENTIVES = [
  "400% tax deduction on qualifying AI spending (EIS)",
  "Productivity Solutions Grant (PSG) for AI adoption",
  "AI Champions Programme support",
];

export function Services() {
  return (
    <section id="enterprise" className="bg-white border-b border-slate-200">

      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest border border-blue-200 bg-blue-50 px-2 py-1">02</span>
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.2em]">WHAT WE BUILD</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
              Three Practice Areas
            </h2>
            <p className="text-base text-slate-500 mt-3 max-w-xl">
              Enterprise AI solutions grounded in 7 shipped products and real delivery experience.
            </p>
          </div>
          <a href="#contact"
             className="inline-flex items-center h-11 rounded-none bg-slate-900 hover:bg-blue-600 text-white font-medium px-7 text-sm transition-colors shrink-0">
            Discuss Your Project
            <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* 3-col tier grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
          {WHAT_WE_BUILD.map((service, idx) => (
            <div
              key={service.number}
              className={`relative p-7 bg-white border-t-4 ${service.accent} ${idx < WHAT_WE_BUILD.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''} hover:bg-slate-50 transition-colors group flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-bold border ${service.badge} font-mono`}>
                  {service.number}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{service.turnaround}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-slate-500 group-hover:text-blue-600 transition-colors">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900">{service.title}</h3>
              </div>

              <p className="font-mono text-[11px] text-blue-600 uppercase tracking-wider mb-3">{service.subtitle}</p>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{service.description}</p>

              {/* Spec tags */}
              <div className="space-y-1.5 mb-5">
                {service.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                    <span className="text-blue-400">--</span>
                    {spec}
                  </div>
                ))}
              </div>

              <a href="#contact"
                 className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors mt-auto border-b border-transparent hover:border-blue-700 pb-0.5 self-start">
                Discuss This Service
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Singapore AI Incentives banner */}
      <div className="border-t border-[#FCD34D] bg-[#FFFBEB]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#B8860B]">SG Budget 2026</span>
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#1A2744] shrink-0">Singapore AI Incentives</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {INCENTIVES.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <a href={`mailto:${CONTACT.sales}`}
               className="shrink-0 inline-flex items-center text-sm font-semibold text-[#1A3A6B] hover:text-blue-700 transition-colors border-b border-[#1A3A6B] pb-0.5 hover:border-blue-700 self-start md:self-auto ml-auto">
              Talk to Our Team
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
