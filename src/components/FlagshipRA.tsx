////////////////////////////////////////////////////////////////////////////////
// [FlagshipRA] Responsibility: Showcase RA Suite as the flagship product
//
// Design: Three-part layout
//   Part 1: Left-right split (col-4 label+stats | col-8 services)
//   Part 2: Geographic coverage — 4 SVG map cards
//   Part 3: Full-width dark terminal mockup + delivery specs
// Invariants: RA Suite only — 3 sub-services (Data, Website, Paper)
////////////////////////////////////////////////////////////////////////////////

import Image from "next/image";

const RA_STATS = [
  { value: "50+", label: "Labs Supported" },
  { value: "2M+", label: "Rows Delivered" },
  { value: "100%", label: "Replication Rate" },
  { value: "5", label: "Regions Covered" },
];

const RA_SERVICES = [
  {
    id: "data",
    number: "01",
    title: "RA Data",
    subtitle: "Research Data Engineering",
    description: "Turn scanned PDFs, government Excel files, shapefiles, and public APIs into regression-ready panels with full audit trails.",
    specs: ["Stata / R / Python", "Complex Merges", "GIS & Spatial", "OCR Pipeline", "Multi-Source", "Replication Pkg"],
    accent: "border-blue-400",
  },
  {
    id: "website",
    number: "02",
    title: "RA Website",
    subtitle: "Research Platform Engineering",
    description: "Experiment interfaces, lab management systems, and research platforms built for academic workflows.",
    specs: ["oTree / Qualtrics", "Lab CMS", "Participant Mgmt", "Multi-language", "Interactive Viz", "Server Ops"],
    accent: "border-teal-400",
  },
  {
    id: "paper",
    number: "03",
    title: "RA Paper",
    subtitle: "Academic Writing Infrastructure",
    description: "Collaborative LaTeX editing with real-time compilation, AI proofreading, and journal-ready templates.",
    specs: ["Real-time LaTeX", "Git Integration", "AI Proofreader", "Journal Templates", "Reference Mgmt", "Figure Control"],
    accent: "border-indigo-400",
  },
] as const;

const GEO_REGIONS = [
  {
    name: "United States",
    src: "/images/maps/us-map.svg",
    sources: "EPA WQP, NOAA CDO, USGS, TIGER/Line",
    example: "County-month panels, 33K+ grid cells",
    scale: "20M+ rows",
  },
  {
    name: "Japan",
    src: "/images/maps/japan-map.svg",
    sources: "MAFF, e-Stat, land survey, trade",
    example: "47 prefectures, prefecture-month",
    scale: "5M+ rows",
  },
  {
    name: "S.E. Asia",
    src: "/images/maps/sea-map.svg",
    sources: "Property, air quality, census",
    example: "Planning area / district panels",
    scale: "3M+ rows",
  },
  {
    name: "Europe",
    src: "/images/maps/europe-map.svg",
    sources: "Eurostat, ECB, NUTS, OECD",
    example: "38 economies, country-quarter",
    scale: "2M+ rows",
  },
];

// Delivery file tree — CSS mockup, no images
function DeliveryTree() {
  return (
    <div className="bg-slate-900 p-6 font-mono text-sm text-slate-300 h-full flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[11px] text-slate-500">project_delivery.zip</span>
      </div>
      <div className="space-y-1.5 text-[13px]">
        <p className="text-blue-400">-- 01_raw_data/</p>
        <p className="text-blue-400">-- 02_scripts/</p>
        <p className="pl-5 text-slate-400">-- 01_clean_survey.do</p>
        <p className="pl-5 text-slate-400">-- 02_merge_panels.do</p>
        <p className="pl-5 text-slate-400">-- 03_spatial_joins.py</p>
        <p className="text-blue-400">-- 03_output/</p>
        <p className="pl-5 text-slate-400">-- panel_county_month.csv</p>
        <p className="pl-5 text-slate-400">-- table1_summary.tex</p>
        <p className="pl-5 text-slate-400">-- figure2_coverage.pdf</p>
        <p className="text-white mt-2">-- README.pdf <span className="text-green-400">validated</span></p>
        <p className="text-white">-- audit_report.pdf <span className="text-green-400">100% complete</span></p>
      </div>
    </div>
  );
}

export function FlagshipRA() {
  return (
    <section id="ra-suite" className="bg-white border-t border-b border-slate-200">

      {/* Part 1: Left-right split */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Left: label + heading + stats */}
        <div className="lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] text-blue-600 font-bold tracking-widest border border-blue-200 bg-blue-50 px-2 py-1">01</span>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.2em]">FLAGSHIP PRODUCT</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-slate-900 leading-[0.95] tracking-tight mb-4">
              RA Suite
            </h2>
            <p className="font-mono text-[11px] text-blue-600 uppercase tracking-wider mb-6">
              Research Infrastructure Platform
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Our most complex production system. Full research infrastructure for economists and social scientists — from raw data to published output.
            </p>
            <a
              href="https://ra.maestro.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 rounded-none bg-slate-900 hover:bg-blue-600 text-white font-medium px-7 text-sm transition-colors"
            >
              Explore RA Suite
              <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {RA_STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-4">
                <div className="font-serif text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3 service cards */}
        <div className="lg:col-span-8 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
            {RA_SERVICES.map((service) => (
              <div
                key={service.id}
                className={`group bg-white border border-slate-200 border-t-4 ${service.accent} p-6 hover:shadow-lg transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">{service.number}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-1">{service.title}</h3>
                <p className="font-mono text-[11px] text-blue-600 uppercase tracking-wider mb-3">{service.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{service.description}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {service.specs.map((spec) => (
                    <span key={spec} className="font-mono text-[10px] text-slate-500 border border-slate-100 px-1.5 py-0.5 truncate">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Part 2: Geographic coverage map cards */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-10 lg:py-14">
          <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-6">
            Geographic Coverage · Shapefile Processing at Scale
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GEO_REGIONS.map((region) => (
              <div
                key={region.name}
                className="group border border-slate-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                {/* Map SVG */}
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  <Image
                    src={region.src}
                    alt={`${region.name} shapefile boundaries`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-base font-semibold text-slate-900">
                      {region.name}
                    </h3>
                    <span className="font-mono text-[11px] font-bold text-blue-600">
                      {region.scale}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-400 mb-1 leading-relaxed">
                    {region.sources}
                  </p>
                  <p className="text-xs text-slate-500">{region.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3: Dark delivery specs row */}
      <div className="border-t border-slate-200 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left: delivery specs */}
          <div className="lg:col-span-7 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-6">Every Delivery Includes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Panel-Ready Dataset", desc: "Entity x time structure, labeled, deduplicated, validated" },
                { title: "Reproducible Scripts", desc: "Stata / R / Python code with inline comments" },
                { title: "QA Diagnostic Report", desc: "Completeness heatmap, Benford test, coverage chart" },
                { title: "Variable Dictionary", desc: "Sources, transformations, and unit definitions for every variable" },
                { title: "Audit Trail", desc: "Full log of processing steps and decisions" },
                { title: "< 7-Day Turnaround", desc: "Standard timeline; rush 48h available on request" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2.5 border-t border-slate-200 pt-3">
                  <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: file tree terminal */}
          <div className="lg:col-span-5">
            <DeliveryTree />
          </div>

        </div>
      </div>

    </section>
  );
}
