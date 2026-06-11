"use client";

/**
 * BackToTop – a fixed button that appears after the user scrolls 400 px and
 * smoothly scrolls the page back to the top when clicked.
 *
 * Usage example:
 *   // In a layout or page component:
 *   import BackToTop from "@/components/BackToTop";
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html>
 *         <body>
 *           {children}
 *           <BackToTop />
 *         </body>
 *       </html>
 *     );
 *   }
 */

import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

/**
 * Accessibility notes:
 * - The button has an aria-label so screen readers announce its purpose.
 * - It uses role="button" (implicit for <button>) and is keyboard-focusable.
 * - aria-hidden is NOT set; the element participates in the focus order so
 *   keyboard users can reach it when visible.
 * - The fade animation is driven by Tailwind opacity/transition utilities;
 *   pointer-events are disabled when hidden to prevent invisible click targets.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to handle a page that is already scrolled (e.g. back-navigation).
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={[
        // Layout & positioning
        "fixed bottom-6 left-6 z-40",
        "flex h-10 w-10 items-center justify-center",
        "rounded-full bg-white shadow-md",
        // Icon colour
        "text-erpa-navy",
        // Border for definition on light backgrounds
        "border border-gray-200",
        // Hover state
        "hover:bg-erpa-gray-50 hover:shadow-lg",
        // Focus ring for keyboard users
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-light-blue focus-visible:ring-offset-2",
        // Fade in/out transition
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      {/* Up-arrow SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
