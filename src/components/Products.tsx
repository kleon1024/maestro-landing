"use client";

import { useState } from "react";
import { PRODUCTS, type Product } from "@/lib/constants";

////////////////////////////////////////////////////////////////////////////////
// [Products] Responsibility: Display product showcase with 24Labs-inspired design
//
// Features:
// - Gradient header cards with corner decorations
// - Year badges for live products
// - Horizontal carousel with navigation on desktop
// - Responsive grid on mobile
//
// Design Reference: 24Labs Studio section
////////////////////////////////////////////////////////////////////////////////

// Product-specific gradient colors
const productGradients: Record<string, string> = {
  econ: "from-emerald-500/40 via-teal-500/20 to-transparent",
  printpic: "from-pink-500/40 via-rose-500/20 to-transparent",
  kairos: "from-blue-500/40 via-indigo-500/20 to-transparent",
  ra: "from-purple-500/40 via-violet-500/20 to-transparent",
  growth: "from-amber-500/40 via-orange-500/20 to-transparent",
  layout: "from-cyan-500/40 via-sky-500/20 to-transparent",
  rehearse: "from-lime-500/40 via-green-500/20 to-transparent",
};

// Product icons
const productIcons: Record<string, React.ReactNode> = {
  flask: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.772.129A12.243 12.243 0 0112 21a12.22 12.22 0 01-7.364-2.458l-.772-.129c-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
    </svg>
  ),
  camera: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  microscope: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5M2.25 21h19.5" />
    </svg>
  ),
  "trending-up": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  layout: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  video: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

// Corner decoration component
function CornerMarkers() {
  return (
    <>
      {/* Top-left */}
      <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-zinc-600" />
      {/* Top-right */}
      <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-zinc-600" />
      {/* Bottom-left */}
      <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-zinc-600" />
      {/* Bottom-right */}
      <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-zinc-600" />
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === "live";
  const gradient = productGradients[product.id] || "from-blue-500/40 via-blue-500/20 to-transparent";

  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300 flex flex-col h-full">
      <CornerMarkers />

      {/* Gradient header with product branding */}
      <div className={`relative h-36 bg-gradient-to-b ${gradient}`}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-mono px-2 py-1 ${
            isLive
              ? "bg-zinc-800 text-zinc-300"
              : "bg-zinc-800/50 text-zinc-500"
          }`}>
            {isLive ? "2025" : "Soon"}
          </span>
        </div>

        {/* Product icon and name in header */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className={`p-2 rounded ${
            isLive ? "bg-white/10 text-white" : "bg-zinc-800/50 text-zinc-500"
          }`}>
            {productIcons[product.icon]}
          </div>
          <span className={`font-semibold text-lg tracking-wide ${
            isLive ? "text-white" : "text-zinc-500"
          }`}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className={`font-semibold text-lg mb-2 ${
          isLive ? "text-zinc-100" : "text-zinc-500"
        }`}>
          {product.name}
        </h3>
        <p className={`text-sm leading-relaxed flex-1 ${
          isLive ? "text-zinc-400" : "text-zinc-600"
        }`}>
          {product.description}
        </p>
      </div>

      {/* Footer with visit link */}
      <div className="px-5 pb-5">
        {isLive ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-white transition-colors duration-200 tracking-wider"
          >
            VISIT
            <span className="ml-2 text-zinc-600 group-hover:text-zinc-400 transition-colors">&gt;&gt;&gt;</span>
          </a>
        ) : (
          <span className="inline-flex items-center text-sm font-mono text-zinc-700 tracking-wider">
            COMING SOON
          </span>
        )}
      </div>
    </div>
  );
}

export function Products() {
  const liveProducts = PRODUCTS.filter((p) => p.status === "live");
  const upcomingProducts = PRODUCTS.filter((p) => p.status === "coming-soon");
  const allProducts = [...liveProducts, ...upcomingProducts];

  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 3; // Number of cards visible at once on desktop
  const maxIndex = Math.max(0, allProducts.length - visibleCount);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="products" className="section-padding bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header - 24Labs style */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
              THE MAESTRO
              <span className="text-blue-500 ml-3">SUITE</span>
            </h2>
          </div>
          <p className="text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase">
            /// Our Products ///
          </p>
        </div>

        {/* Desktop: Horizontal carousel */}
        <div className="hidden lg:block">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${scrollIndex * (100 / visibleCount + 1.3)}%)` }}
            >
              {allProducts.map((product) => (
                <div key={product.id} className="w-1/3 flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {allProducts.length > visibleCount && (
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={scrollIndex >= maxIndex}
                className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile/Tablet: Grid layout */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
