"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "erpa_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable in some environments; fail silently.
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Silently ignore storage errors.
    }
    setVisible(false);
  }

  function handleDecline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      // Silently ignore storage errors.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-erpa-navy text-white shadow-2xl"
      style={{ animation: "slideUpCTA 0.4s ease forwards" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          We use cookies to improve your experience. By continuing to use this
          site, you consent to our use of cookies.{" "}
          <Link
            href="#"
            className="text-erpa-orange hover:text-orange-400 underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium border border-white/30 rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold bg-erpa-orange text-white rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-md shadow-orange-500/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
