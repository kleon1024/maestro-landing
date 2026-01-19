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
  kairos: "from-blue-500/40 via-indigo-500/20 to-transparent",
  "edu-platform": "from-purple-500/40 via-violet-500/20 to-transparent",
  "growth-engine": "from-amber-500/40 via-orange-500/20 to-transparent",
  "content-studio": "from-pink-500/40 via-rose-500/20 to-transparent",
  "sales-ai": "from-cyan-500/40 via-sky-500/20 to-transparent",
  "commerce-suite": "from-lime-500/40 via-green-500/20 to-transparent",
};

// Product icons
const productIcons: Record<string, React.ReactNode> = {
  flask: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.772.129A12.243 12.243 0 0112 21a12.22 12.22 0 01-7.364-2.458l-.772-.129c-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "graduation-cap": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  "trending-up": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  "pen-tool": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  ),
  briefcase: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  "shopping-cart": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
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
