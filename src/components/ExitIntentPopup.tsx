"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "erpa_exit_shown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    // Do not show on mobile devices
    if (typeof window === "undefined" || window.innerWidth <= 768) return;

    // Do not show if already dismissed this session
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage unavailable; skip popup entirely
      return;
    }

    function handleMouseMove(e: MouseEvent) {
      if (e.clientY < 5) {
        try {
          localStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // Silently ignore storage errors.
        }
        setVisible(true);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free ERP assessment offer"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ animation: "exitFadeIn 0.3s ease forwards" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-erpa-navy/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-erpa-light-blue via-erpa-orange to-erpa-gold" />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-erpa-gray-600 hover:bg-gray-100 hover:text-erpa-navy transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-8 text-center">
          {/* Icon */}
          <div className="mx-auto mb-5 w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-bold text-erpa-navy leading-tight">
            Wait &mdash; Get Your Free ERP Assessment
          </h2>

          {/* Subtext */}
          <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed max-w-sm mx-auto">
            Before you go, download our free guide:{" "}
            <span className="font-semibold text-erpa-navy">
              &ldquo;10 Questions to Ask Before Your Next ERP Project&rdquo;
            </span>{" "}
            &mdash; plus get a complimentary consultation with a certified expert.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dismiss();
            }}
            className="mt-6 space-y-3 max-w-xs mx-auto"
          >
            <div>
              <label htmlFor="exit-email" className="sr-only">
                Work Email
              </label>
              <input
                id="exit-email"
                type="email"
                required
                placeholder="Enter your work email"
                className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5"
            >
              Get the Free Guide
            </button>
          </form>

          {/* Trust text */}
          <p className="mt-3 text-[11px] text-erpa-gray-600">
            No spam. Unsubscribe anytime.
          </p>

          {/* Dismiss link */}
          <button
            onClick={dismiss}
            className="mt-4 text-xs text-erpa-gray-600 hover:text-erpa-navy underline underline-offset-2 transition-colors"
          >
            No thanks, I&apos;ll figure it out myself
          </button>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes exitFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
