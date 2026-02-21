"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 cursor-pointer">
            <Image src="/logo.png" alt="Maestro" width={32} height={32} />
            <span className="font-serif font-bold text-[1.375rem] text-slate-900">
              Maestro
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-900 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center px-5 h-9 bg-slate-900 text-white text-sm font-medium rounded-none hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Request a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-500 hover:text-slate-800 p-2 cursor-pointer transition-colors duration-200"
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
          <div className="md:hidden py-4 border-t border-slate-100 bg-white">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="mt-2 mx-4 inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-none hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
