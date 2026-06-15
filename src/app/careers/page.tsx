import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Careers at ERPA | Join Our Team of Enterprise Experts",
  description:
    "Join ERPA's team of 500+ enterprise consultants. Explore open positions in Workday, AWS, PeopleSoft, and more. Remote-first culture, top-market pay, and continuous growth.",
  keywords: [
    "ERPA careers",
    "Workday consultant jobs",
    "enterprise consulting careers",
    "AWS jobs",
    "PeopleSoft careers",
    "remote consulting jobs",
  ],
};

const whyErpa = [
  {
    title: "Growth & Development",
    description:
      "Continuous learning is built into every role. We pay for Workday, AWS, and PeopleSoft certifications and invest in your professional development from day one.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Meaningful Work",
    description:
      "Transform how organizations serving millions operate — from universities educating the next generation to governments powering public services.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9",
  },
  {
    title: "Flexible Culture",
    description:
      "Remote-first with real work-life balance. We built a no-burnout culture where you can do your best work without sacrificing what matters most.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
  },
  {
    title: "Competitive Compensation",
    description:
      "Top-market pay, comprehensive health benefits, 401(k) match, and equity opportunities. We invest in the people who invest in our clients.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const openPositions = [
  {
    title: "Senior Workday HCM Consultant",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Workday Financials Lead",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AWS Solutions Architect",
    location: "Dublin, OH",
    type: "Full-time",
  },
  {
    title: "PeopleSoft Technical Consultant",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "Workday Integration Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Project Manager, Enterprise Implementations",
    location: "Tampa, FL",
    type: "Full-time",
  },
  {
    title: "Workday Student Implementation Consultant",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer (ActiveGenie)",
    location: "Dublin, OH",
    type: "Full-time",
  },
];

const careerStats = [
  { value: "500+", label: "Consultants" },
  { value: "8 yrs", label: "Avg Experience" },
  { value: "5+", label: "Certifications Each" },
  { value: "25+", label: "Years in Business" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build Your Career at ERPA"
        description="Join 500+ enterprise consultants building careers they love. Work on industry-defining Workday, AWS, and PeopleSoft projects for some of the most important organizations in North America."
        breadcrumbs={[{ name: "Careers", href: "/careers" }]}
      />

      {/* Why ERPA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why ERPA"
            title="A Career That Grows With You"
            description="We invest in our people because they are our product. Here's what makes ERPA different."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyErpa.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 card-gradient-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-erpa-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
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
                      d={card.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-erpa-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-erpa-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Join Us"
            title="Open Positions"
            description="Explore current openings across our Workday, AWS, PeopleSoft, and corporate teams."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {openPositions.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-erpa-navy">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-erpa-light-blue/10 text-erpa-light-blue text-xs font-medium">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-erpa-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 shrink-0 shadow-sm"
                >
                  Apply Now
                  <svg
                    className="w-3.5 h-3.5"
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar stats={careerStats} variant="dark" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Don't See Your Role?"
        description="We're always looking for talented people who share our passion for enterprise technology. Send us your resume and tell us how you'd make an impact at ERPA."
        primaryCta={{ text: "Get in Touch", href: "/contact" }}
        secondaryCta={{ text: "About ERPA", href: "/about" }}
      />
    </>
  );
}
