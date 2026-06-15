import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Webinars & Events | ERPA",
  description:
    "Watch on-demand webinars and register for upcoming events covering Workday, AWS, PeopleSoft, and enterprise technology best practices from ERPA experts.",
};

const upcomingEvents = [
  {
    title: "Workday Rising 2026",
    date: "September 15-18, 2026",
    location: "Orlando, FL",
    description:
      "Join ERPA at Workday's premier annual conference. Visit us at Booth #417.",
  },
  {
    title: "AWS re:Invent 2026",
    date: "November 30 - December 4, 2026",
    location: "Las Vegas, NV",
    description:
      "See ActiveGenie AI in action and learn about cloud-native ERP strategies.",
  },
  {
    title: "ERPA Higher Ed Summit",
    date: "October 8-9, 2026",
    location: "Virtual",
    description:
      "Best practices for Workday Student and PeopleSoft modernization in higher education.",
  },
];

const categoryColors: Record<string, string> = {
  Workday: "bg-blue-500/10 text-blue-700",
  AWS: "bg-orange-500/10 text-orange-700",
  Strategy: "bg-emerald-500/10 text-emerald-700",
  AI: "bg-purple-500/10 text-purple-700",
};

const webinars = [
  {
    title: "Workday AI Illuminate: What You Need to Know",
    duration: "45 min",
    category: "Workday",
  },
  {
    title: "Migrating PeopleSoft to AWS: A Step-by-Step Guide",
    duration: "60 min",
    category: "AWS",
  },
  {
    title: "Top 10 Mistakes in Workday Implementations",
    duration: "30 min",
    category: "Workday",
  },
  {
    title: "ActiveGenie: Self-Healing Cloud Infrastructure",
    duration: "45 min",
    category: "AWS",
  },
  {
    title: "PeopleSoft vs Workday: Making the Right Decision",
    duration: "50 min",
    category: "Strategy",
  },
  {
    title: "AI in Higher Education ERP Systems",
    duration: "40 min",
    category: "AI",
  },
];

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        label="Webinars & Events"
        title="Learn From Enterprise Experts"
        description="Access on-demand webinars, register for live events, and join workshops led by ERPA's team of enterprise technology consultants."
        breadcrumbs={[{ name: "Resources", href: "/resources" }]}
      />

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Mark Your Calendar"
            title="Upcoming Events"
            description="Meet our team in person and learn about the latest enterprise technology trends."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="group bg-white rounded-2xl card-gradient-border p-8 hover:shadow-lg transition-all"
              >
                {/* Calendar icon */}
                <div className="w-12 h-12 rounded-xl bg-erpa-orange/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-erpa-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <p className="text-sm font-semibold text-erpa-orange mb-2">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-erpa-navy mb-2">
                  {event.title}
                </h3>

                {/* Location badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-erpa-gray-600 bg-erpa-gray-50 px-3 py-1 rounded-full mb-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </span>

                <p className="text-erpa-gray-600 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors group-hover:gap-2"
                >
                  Register
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
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Watch Anytime"
            title="On-Demand Webinars"
            description="Catch up on expert-led sessions covering Workday, AWS, PeopleSoft, and enterprise strategy."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar) => (
              <div
                key={webinar.title}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Play button overlay area */}
                <div className="relative aspect-[16/7] bg-gradient-to-br from-erpa-navy to-erpa-navy/80 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-erpa-orange/90 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Category badge */}
                  <span
                    className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[webinar.category] || "bg-gray-100 text-gray-700"} bg-white/90 backdrop-blur-sm`}
                  >
                    {webinar.category}
                  </span>

                  {/* Duration badge */}
                  <span className="absolute top-4 right-4 text-xs font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    {webinar.duration}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors text-lg leading-snug">
                    {webinar.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-erpa-light-blue flex items-center gap-1">
                    Watch Now
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want ERPA to Present at Your Event?"
        description="Our experts speak at conferences, corporate events, and university workshops on Workday, AWS, PeopleSoft, and enterprise transformation."
        primaryCta={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
