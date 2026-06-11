import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import StatsBar from "@/components/StatsBar";
import { caseStudies } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Case Studies | Client Success Stories",
  description: "See how ERPA helps organizations transform with Workday, AWS, and PeopleSoft. Real results from real clients across higher education, government, healthcare, and more.",
  keywords: ["ERPA case studies", "Workday implementation success", "PeopleSoft migration case study", "AWS cloud migration results"],
};

const solutionColors: Record<string, string> = {
  "Workday": "bg-blue-500/10 text-blue-700 border-blue-200",
  "AWS + PeopleSoft": "bg-orange-500/10 text-orange-700 border-orange-200",
  "AWS": "bg-orange-500/10 text-orange-700 border-orange-200",
  "PeopleSoft": "bg-red-500/10 text-red-700 border-red-200",
};

const solutionIcons: Record<string, string> = {
  "Workday": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "AWS + PeopleSoft": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  "AWS": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  "PeopleSoft": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
};

const allCaseStudies = [
  ...caseStudies,
  { client: "Flexera", industry: "Technology", solution: "Workday", headline: "Workday Managed Services Solved Operational Needs", description: "3-week integration of UK team to meet compliance standards.", metric: "3 wks", metricLabel: "UK Integration" },
  { client: "Kandji", industry: "Technology", solution: "Workday", headline: "Scalability and Growth with Workday", description: "Streamlined new hire entry with immediate onboarding journeys.", metric: "100%", metricLabel: "Onboarding Automation" },
  { client: "Keystone Cooperative", industry: "Agriculture", solution: "Workday", headline: "HCM Optimization Using Workday Journeys", description: "Activated dormant Workday Help and Journeys SKUs for immediate value.", metric: "7 mo", metricLabel: "SKUs Activated" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Client Success Stories"
        description="Real results from real organizations. See how ERPA delivers measurable outcomes across Workday, AWS, and PeopleSoft."
      />

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <StatsBar
          stats={[
            { value: "1,100+", label: "Organizations Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "500+", label: "Expert Consultants" },
            { value: "25+", label: "Years of Results" },
          ]}
        />
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Workday", "AWS + PeopleSoft", "Higher Education", "Government", "Healthcare"].map((filter) => (
              <button key={filter} className="px-4 py-2 text-sm font-medium rounded-full border border-gray-200 text-erpa-gray-600 hover:border-erpa-light-blue hover:text-erpa-light-blue transition-colors first:bg-erpa-navy first:text-white first:border-erpa-navy">
                {filter}
              </button>
            ))}
          </div>

          {/* Case study cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCaseStudies.map((cs) => (
              <div key={cs.client} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all card-gradient-border">
                {/* Colored header bar */}
                <div className="h-2 bg-gradient-to-r from-erpa-light-blue via-erpa-orange to-erpa-gold" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${solutionColors[cs.solution]?.split(" ")[0] || "bg-gray-100"}`}>
                        <svg className={`w-4 h-4 ${solutionColors[cs.solution]?.split(" ")[1] || "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={solutionIcons[cs.solution] || "M5 13l4 4L19 7"} />
                        </svg>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${solutionColors[cs.solution] || "bg-gray-100 text-gray-700"}`}>{cs.solution}</span>
                    </div>
                    <span className="text-xs text-erpa-gray-600 bg-erpa-gray-50 px-2.5 py-0.5 rounded-full">{cs.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-erpa-navy leading-snug group-hover:text-erpa-light-blue transition-colors">{cs.headline}</h3>
                  <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{cs.description}</p>
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-erpa-orange">{cs.metric}</div>
                      <div className="text-xs text-erpa-gray-600">{cs.metricLabel}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-erpa-navy">{cs.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Become Our Next Success Story?" description="Schedule a consultation to discuss how ERPA can help your organization achieve measurable outcomes." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} secondaryCta={{ text: "Explore Solutions", href: "/solutions/workday" }} />
    </>
  );
}
