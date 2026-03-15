"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-m-line-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <span
              className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${
                scrolled ? "text-m-ink" : "text-m-muted"
              }`}
            >
              MAESTRO AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? "text-m-body hover:text-m-ink"
                    : "text-m-body-dark hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "text-m-ink hover:text-m-accent-dim"
                  : "text-m-body-dark hover:text-white"
              }`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 cursor-pointer transition-colors duration-300 ${
              scrolled ? "text-m-ink" : "text-m-body-dark"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${scrolled ? "bg-white border-m-line-light" : "bg-m-black border-m-line-dark"}`}>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    scrolled ? "text-m-body hover:text-m-ink" : "text-m-body-dark hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={`px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  scrolled ? "text-m-ink" : "text-white"
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
