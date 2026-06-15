import Link from "next/link";
import NewsCarousel from "./NewsCarousel";
import type { NewsArticle } from "./NewsCarousel";

const homepageNews: NewsArticle[] = [
  {
    title: "Innovating with Workday Extend: Build Apps That Scale with Your Business",
    excerpt:
      "Companies across industries are turning to Workday Extend to build custom applications that integrate natively with Workday.",
    date: "October 2024",
    category: "Article",
    href: "/resources/news",
  },
  {
    title: "How Workday's Innovative A.I. Helps ERPA's Finance Team Succeed",
    excerpt:
      "At ERPA, we use Workday to run our own organization — and we continue to grow our ROI by leveraging Workday Illuminate AI.",
    date: "September 2024",
    category: "Article",
    href: "/resources/news",
  },
  {
    title: "Workday Rising 2024: Strategy and Vision",
    excerpt:
      "ERPA was a Gold Sponsor at Workday Rising 2024, showcasing new AI-driven solutions and next-gen enterprise technology strategy.",
    date: "September 2024",
    category: "Event",
    href: "/resources/news",
  },
  {
    title: "ERPA Launches OPTIMA for Higher Education & Government",
    excerpt:
      "OPTIMA by ERPA makes Workday more accessible to higher education institutions and local government organizations.",
    date: "September 2025",
    category: "Press Release",
    href: "/resources/news",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="py-20 bg-erpa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
              Latest News
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">
              What&apos;s Happening at ERPA
            </h2>
          </div>
          <Link
            href="/resources/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors whitespace-nowrap"
          >
            View All News
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <NewsCarousel
          articles={homepageNews}
          visibleDesktop={3}
          autoPlay
          autoPlayInterval={6000}
        />
      </div>
    </section>
  );
}
