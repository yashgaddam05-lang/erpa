import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "News & Press | ERPA",
  description:
    "Stay up to date with the latest ERPA news, press releases, partnership announcements, awards, and company milestones.",
};

const categoryColors: Record<string, string> = {
  "Press Release": "bg-blue-500/10 text-blue-700",
  "Company News": "bg-emerald-500/10 text-emerald-700",
  Partnership: "bg-purple-500/10 text-purple-700",
  Award: "bg-amber-500/10 text-amber-700",
};

const newsArticles = [
  {
    title: "ERPA Expands AWS Practice with ActiveGenie AI Platform",
    date: "May 2026",
    category: "Company News",
    excerpt:
      "ERPA announces the expansion of its AWS practice with the launch of ActiveGenie, a proprietary AI-powered platform for self-healing cloud infrastructure and predictive cost optimization.",
  },
  {
    title: "ERPA Achieves Workday Certified Deployment Partner Status",
    date: "April 2026",
    category: "Partnership",
    excerpt:
      "ERPA has earned Workday Certified Deployment Partner status, recognizing the firm's deep expertise and proven track record delivering successful Workday implementations.",
  },
  {
    title: "New Dublin, OH Office Expansion to Support Growing Team",
    date: "March 2026",
    category: "Company News",
    excerpt:
      "ERPA has expanded its Dublin, Ohio headquarters to accommodate a growing team of consultants and support staff, adding 15,000 square feet of modern office space.",
  },
  {
    title: "ERPA Wins Higher Education Technology Excellence Award",
    date: "February 2026",
    category: "Award",
    excerpt:
      "ERPA has been honored with the Higher Education Technology Excellence Award for its innovative approach to Workday Student implementations across major universities.",
  },
  {
    title: "Partnership with AWS to Deliver FedRAMP-Ready Solutions",
    date: "January 2026",
    category: "Partnership",
    excerpt:
      "ERPA and AWS have partnered to deliver FedRAMP-ready cloud solutions for government agencies modernizing their enterprise resource planning systems.",
  },
  {
    title: "ERPA Launches AI Innovation Practice for Enterprise Clients",
    date: "December 2025",
    category: "Company News",
    excerpt:
      "ERPA has launched a dedicated AI Innovation Practice to help enterprise clients integrate artificial intelligence into their ERP systems and business processes.",
  },
];

const awards = [
  {
    title: "Inc. 5000 Fastest Growing",
    years: "2024, 2025, 2026",
  },
  {
    title: "Workday Certified Deployment Partner",
    years: "",
  },
  {
    title: "AWS Advanced Tier Services Partner",
    years: "",
  },
  {
    title: "Oracle PeopleSoft Certified Partner",
    years: "",
  },
  {
    title: "Great Place to Work Certified",
    years: "",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="Newsroom"
        title="ERPA News & Announcements"
        description="The latest press releases, partnership announcements, awards, and company milestones from ERPA."
        breadcrumbs={[{ name: "Resources", href: "/resources" }]}
      />

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
            {/* Gradient top bar */}
            <div className="h-2 bg-gradient-to-r from-erpa-orange via-erpa-light-blue to-erpa-navy" />
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-700">
                  Press Release
                </span>
                <span className="text-sm text-erpa-gray-600">June 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-erpa-navy max-w-3xl">
                ERPA Named to Inc. 5000 Fastest-Growing Companies List
              </h2>
              <p className="mt-4 text-erpa-gray-600 leading-relaxed max-w-3xl text-lg">
                For the third consecutive year, ERPA has been recognized as one
                of America&apos;s fastest-growing private companies, reflecting
                continued demand for enterprise technology consulting services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors"
              >
                Read Full Release
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Stay Informed"
            title="Latest News"
            description="Company updates, partnerships, and milestones from across ERPA."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.title}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-erpa-gray-600">
                    {article.date}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-sm font-semibold text-erpa-light-blue flex items-center gap-1">
                  Read More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Track Record"
            title="Recognition & Awards"
            description="Industry recognition that reflects ERPA's commitment to excellence in enterprise technology consulting."
          />

          <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex-none w-56 snap-start bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all"
              >
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto rounded-full bg-erpa-orange/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-erpa-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-erpa-navy text-sm leading-snug">
                  {award.title}
                </h3>
                {award.years && (
                  <p className="mt-1 text-xs text-erpa-gray-600">
                    {award.years}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Media Inquiries"
        description="For press inquiries, interview requests, or media resources, contact our communications team."
        primaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
