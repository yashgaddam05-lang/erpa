import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import NewsCarousel from "@/components/NewsCarousel";
import type { NewsArticle } from "@/components/NewsCarousel";

export const metadata: Metadata = {
  title: "News & Press | ERPA",
  description:
    "Stay up to date with the latest ERPA news, press releases, partnership announcements, awards, and company milestones.",
};

/* ── Latest News articles (carousel) ─────────────────────────── */
const latestNews: NewsArticle[] = [
  {
    title: "Innovating with Workday Extend: Build Apps That Scale with Your Business",
    excerpt:
      "Companies across industries are turning to Workday Extend to build custom applications that integrate natively with Workday, unlocking new efficiency and innovation at scale.",
    date: "October 2024",
    category: "Article",
    href: "/resources/blog",
  },
  {
    title: "How Workday's Innovative A.I. Helps ERPA's Finance Team Succeed",
    excerpt:
      "At ERPA, we use Workday to run our own organization — and like our customers, we continue to grow our ROI by leveraging Workday Illuminate AI for finance, HR, and operations.",
    date: "September 2024",
    category: "Article",
    href: "/resources/blog",
  },
  {
    title: "Workday Rising 2024: Strategy and Vision",
    excerpt:
      "ERPA was a Gold Sponsor at Workday Rising 2024, showcasing new partnership capabilities, AI-driven solutions, and the next generation of enterprise technology strategy.",
    date: "September 2024",
    category: "Event",
    href: "/resources/blog",
  },
  {
    title: "ERPA Launches OPTIMA: Making Workday Accessible to More Organizations",
    excerpt:
      "ERPA announces OPTIMA by ERPA — a new platform making Workday more accessible to higher education institutions and local government organizations.",
    date: "September 2025",
    category: "Press Release",
    href: "/resources/news",
  },
  {
    title: "Navigating the Workday 2026R1 Release for Higher Education",
    excerpt:
      "ERPA experts break down the key changes in the Workday 2026R1 release and what higher education institutions need to know to prepare.",
    date: "March 2026",
    category: "Article",
    href: "/resources/webinars",
  },
  {
    title: "How Dunwoody College Selected, Implemented, and Optimized Workday",
    excerpt:
      "A deep dive into how Dunwoody College of Technology partnered with ERPA to select, implement, and optimize Workday for a transformative student and staff experience.",
    date: "May 2026",
    category: "Article",
    href: "/resources/webinars",
  },
];

/* ── Press Releases (timeline) ───────────────────────────────── */
const pressReleases = [
  {
    title:
      "ERPA Makes Workday More Accessible to Higher Education and Local Government with OPTIMA",
    date: "September 5, 2025",
    excerpt:
      "ERPA announces its expansion of Workday platform services with the launch of OPTIMA by ERPA, serving higher education institutions and local government and special district organizations.",
    category: "Press Release",
  },
  {
    title: "ERPA's Workday Services to Include State and Local Government",
    date: "April 17, 2025",
    excerpt:
      "ERPA announces its expansion of Workday platform services to include the State and Local Government market, bringing 25+ years of expertise to a new sector.",
    category: "Press Release",
  },
  {
    title: "Workday Implementation Services for Higher Education",
    date: "June 4, 2024",
    excerpt:
      "ERPA expands its relationship with Workday to include full implementation services across the Workday Higher Education platform.",
    category: "Partnership",
  },
  {
    title: "ERPA Transforms the ASU Student Experience",
    date: "February 7, 2024",
    excerpt:
      "Arizona State University is set to transform the student experience through the implementation of an innovative and cost-effective data analytics solution with ERPA.",
    category: "Press Release",
  },
  {
    title: "ERPA is Gold Sponsor of Workday Rising 2023",
    date: "September 7, 2023",
    excerpt:
      "Workday announces ERPA as a gold partner sponsor and exhibitor at the 15th annual Workday Rising in San Francisco.",
    category: "Event",
  },
  {
    title:
      "OneSource Virtual and ERPA Announce Strategic Partnership to Enhance Workday Solutions",
    date: "May 12, 2023",
    excerpt:
      "ERPA and OneSource Virtual (OSV) announce their partnership to better serve Workday customers with complementary service offerings.",
    category: "Partnership",
  },
  {
    title:
      "ERPA to Provide PeopleSoft Managed Services to City of Springfield, Oregon",
    date: "December 13, 2021",
    excerpt:
      "ERPA has been selected by the City of Springfield, Oregon to provide assistance with supporting and maintaining the City's PeopleSoft applications.",
    category: "Press Release",
  },
  {
    title: "ERPA to Provide Cloud Migration Services to CorVel Corporation",
    date: "November 23, 2021",
    excerpt:
      "ERPA has been selected by CorVel Corporation to migrate its PeopleSoft applications to Amazon Web Services (AWS).",
    category: "Press Release",
  },
];

const categoryColors: Record<string, string> = {
  "Press Release": "bg-erpa-orange/10 text-erpa-orange",
  Partnership: "bg-emerald-500/10 text-emerald-700",
  Event: "bg-purple-500/10 text-purple-700",
  Article: "bg-erpa-light-blue/10 text-erpa-light-blue",
  Award: "bg-amber-500/10 text-amber-700",
};

const awards = [
  { title: "Inc. 5000 Fastest Growing", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  {
    title: "Workday Certified Deployment Partner",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "AWS Advanced Tier Services Partner",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Oracle PeopleSoft Certified Partner",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  },
  {
    title: "Great Place to Work Certified",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
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

      {/* ── LATEST NEWS Carousel (matches original erpa.com) ──── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Latest News"
            title="What's Happening at ERPA"
            description="Featured articles, product announcements, and industry insights from our team."
          />

          <div className="mt-12">
            <NewsCarousel
              articles={latestNews}
              visibleDesktop={3}
              autoPlay
              autoPlayInterval={5000}
            />
          </div>
        </div>
      </section>

      {/* ── PRESS RELEASES Timeline ──────────────────────────── */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Press Releases"
            title="Official Announcements"
            description="Major milestones, partnerships, and strategic expansions from ERPA."
          />

          <div className="mt-12 space-y-0">
            {pressReleases.map((pr, i) => (
              <article
                key={pr.title}
                className="group relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ring-4 ring-white ${
                      i === 0 ? "bg-erpa-orange" : "bg-erpa-light-blue/60"
                    }`}
                  />
                  {i < pressReleases.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all -mt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs text-erpa-gray-600 font-medium">
                      {pr.date}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        categoryColors[pr.category] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {pr.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors leading-snug">
                    {pr.title}
                  </h3>
                  <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">
                    {pr.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards & Recognition Rail ────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Track Record"
            title="Recognition & Awards"
            description="Industry recognition that reflects ERPA's commitment to excellence in enterprise technology consulting."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-erpa-orange/10 to-erpa-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7 text-erpa-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={award.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-erpa-navy text-sm leading-snug">
                  {award.title}
                </h3>
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
