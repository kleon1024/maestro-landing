"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [inDark, setInDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      // Detect if we're over a dark or light section
      const sections = document.querySelectorAll("section[data-theme]");
      let currentTheme = "dark";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          currentTheme = section.getAttribute("data-theme") || "dark";
        }
      });
      setInDark(currentTheme === "dark");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = inDark
    ? "text-zinc-400 hover:text-white"
    : "text-m-body hover:text-m-ink";

  const logoColor = inDark ? "text-zinc-400" : "text-m-ink";

  const ctaColor = inDark
    ? "text-white hover:text-m-accent"
    : "text-m-ink hover:text-m-accent-dim";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? inDark
            ? "bg-m-black/90 backdrop-blur-sm border-b border-m-line-dark"
            : "bg-white/90 backdrop-blur-sm border-b border-m-line-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <span
              className={`font-mono text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${logoColor}`}
            >
              MAESTRO AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 cursor-pointer ${textColor}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT.email}`}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${ctaColor}`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 cursor-pointer transition-colors duration-300 ${
              inDark ? "text-zinc-400" : "text-m-ink"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              inDark
                ? "bg-m-black border-m-line-dark"
                : "bg-white border-m-line-light"
            }`}
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    inDark
                      ? "text-zinc-400 hover:text-white"
                      : "text-m-body hover:text-m-ink"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT.email}`}
                className={`px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  inDark ? "text-white" : "text-m-ink"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
