import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "AWS Migration & Modernization | PeopleSoft & ERP Cloud Migration",
  description: "Migrate PeopleSoft and enterprise applications to AWS with ERPA. Structured migration approach, minimal disruption, and certified AWS engineers.",
  keywords: ["AWS migration", "PeopleSoft AWS migration", "ERP cloud migration", "cloud modernization", "AWS lift and shift"],
};

const migrationSteps = [
  { number: "01", title: "Assess", description: "Evaluate your current infrastructure, applications, and dependencies to build a migration roadmap.", icon: "🔍" },
  { number: "02", title: "Plan", description: "Design the target architecture, define migration waves, and establish rollback procedures.", icon: "📐" },
  { number: "03", title: "Migrate", description: "Execute the migration with minimal downtime using proven patterns and automated tooling.", icon: "🚀" },
  { number: "04", title: "Optimize", description: "Fine-tune performance, implement monitoring with ActiveGenie, and establish ongoing managed services.", icon: "📈" },
];

export default function AWSMigrationPage() {
  return (
    <>
      <PageHero
        label="AWS Migration"
        title="Migrate Your Enterprise Applications to AWS"
        description="ERPA's structured migration approach moves your PeopleSoft, databases, and custom applications to AWS with minimal disruption. Our engineers hold Amazon's highest-level certifications."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "AWS", href: "/solutions/aws" }, { name: "Migration", href: "/solutions/aws/migration" }]}
      />

      {/* Migration Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Migration Approach" title="From Assessment to Optimization" description="A structured, proven migration methodology that minimizes risk and downtime." />
          <div className="mt-12">
            <ProcessTimeline steps={migrationSteps} />
          </div>
        </div>
      </section>

      {/* Photo + Success stories */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Success Stories" title="Proven Migration Results" centered={false} />
            <div className="mt-6 space-y-4">
              {[
                { client: "Illinois State University", result: "30-minute infrastructure scaling during peak demand", icon: "M12 14l9-5-9-5-9 5 9 5z" },
                { client: "City of Boston", result: "20+ contracts consolidated into a single agreement", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" },
                { client: "AARP", result: "98% of batch processes completed in under 15 minutes", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { client: "FSCJ", result: "Four PeopleSoft apps live on AWS in less than 24 hours", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              ].map((cs) => (
                <div key={cs.client} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-erpa-orange/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cs.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-erpa-navy">{cs.client}</p>
                    <p className="mt-1 text-sm text-erpa-orange font-medium">{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Cloud server infrastructure"
                className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold">Enterprise-Grade Cloud Infrastructure</p>
                <p className="text-gray-300 text-sm mt-1">AWS Advanced Tier Partner since 2015</p>
              </div>
            </div>
          </div>
          <LeadForm title="Plan Your Migration" subtitle="Get a free migration assessment from our certified AWS engineers." />
        </div>
      </section>

      <CTASection
        title="Ready to Move to the Cloud?"
        description="Schedule a migration assessment with our certified AWS engineers."
        primaryCta={{ text: "Get a Migration Assessment", href: "/contact" }}
        secondaryCta={{ text: "Back to AWS Solutions", href: "/solutions/aws" }}
        variant="blue"
      />
    </>
  );
}
