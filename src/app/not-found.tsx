import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you were looking for could not be found.",
};

const quickLinks = [
  { label: "Workday Consulting", href: "/solutions/workday" },
  { label: "AWS Cloud Services", href: "/solutions/aws" },
  { label: "PeopleSoft Managed Services", href: "/solutions/peoplesoft" },
  { label: "Case Studies", href: "/resources/case-studies" },
];

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4 py-24 bg-erpa-gray-50">
      <div className="max-w-2xl w-full text-center animate-fade-up">
        {/* Large decorative 404 */}
        <p className="text-8xl font-bold text-erpa-orange/20 leading-none select-none mb-2" aria-hidden="true">
          404
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-erpa-navy mt-2">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-erpa-gray-600 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
          been moved, renamed, or no longer exists.
        </p>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-7 py-3 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 border-2 border-erpa-navy text-erpa-navy font-semibold rounded-xl hover:bg-erpa-navy hover:text-white transition-all duration-300 text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-14 animate-fade-up animate-fade-up-delay-2">
          <p className="text-sm font-semibold text-erpa-gray-600 uppercase tracking-wider mb-5">
            Popular pages
          </p>
          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-erpa-gray-200 bg-white text-sm text-erpa-gray-600 hover:border-erpa-orange hover:text-erpa-orange transition-all duration-200 shadow-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
