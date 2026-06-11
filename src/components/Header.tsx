"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-erpa-navy/95 backdrop-blur-lg shadow-lg shadow-black/10"
          : "bg-erpa-navy"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-erpa-orange group-hover:text-erpa-gold transition-colors duration-300">ER</span>PA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors flex items-center gap-1">
                Solutions
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "solutions" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute left-0 mt-0 w-80 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50 animate-fade-in">
                  {navigation.solutions.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="group/item flex items-center gap-3 px-5 py-2.5 hover:bg-erpa-gray-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-erpa-light-blue/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-erpa-navy group-hover/item:text-erpa-light-blue transition-colors">{item.name}</span>
                          {item.description && (
                            <span className="block text-xs text-erpa-gray-600 mt-0.5">{item.description}</span>
                          )}
                        </div>
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block pl-16 pr-5 py-1.5 text-sm text-erpa-gray-600 hover:text-erpa-light-blue hover:bg-erpa-gray-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors flex items-center gap-1">
                Industries
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "industries" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "industries" && (
                <div className="absolute left-0 mt-0 w-60 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50 animate-fade-in">
                  {navigation.industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm text-erpa-gray-800 hover:text-erpa-light-blue hover:bg-erpa-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors flex items-center gap-1">
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 mt-0 w-52 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50 animate-fade-in">
                  {navigation.resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm text-erpa-gray-800 hover:text-erpa-light-blue hover:bg-erpa-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-erpa-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 transition-all duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-erpa-navy/95 backdrop-blur-lg border-t border-white/10 pb-4 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 pt-2">
              Solutions
            </p>
            {navigation.solutions.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 pt-3">
              Industries
            </p>
            {navigation.industries.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 space-y-1">
              <Link href="/resources/case-studies" className="block px-3 py-2 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Case Studies</Link>
              <Link href="/resources/blog" className="block px-3 py-2 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/about" className="block px-3 py-2 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
            </div>
            <div className="pt-3 px-3">
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-erpa-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
