import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Modernize PeopleSoft with AWS | Cloud Migration & Infrastructure",
  description: "Move your PeopleSoft environment to AWS for improved performance, scalability, and cost savings. ERPA combines 25 years of PeopleSoft expertise with AWS cloud capabilities.",
  keywords: ["PeopleSoft modernization", "PeopleSoft AWS", "PeopleSoft cloud migration", "PeopleSoft infrastructure modernization"],
};

export default function PeopleSoftModernizationPage() {
  return (
    <>
      <PageHero
        label="Modernize PeopleSoft"
        title="PeopleSoft Modernization with AWS"
        description="Move your PeopleSoft infrastructure to AWS for better performance, scalability, and cost efficiency, without disrupting your applications or business processes."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "PeopleSoft", href: "/solutions/peoplesoft" }, { name: "Modernization", href: "/solutions/peoplesoft/modernization" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Benefits" title="Why Modernize with AWS?" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Performance", desc: "Faster processing, better user experience, and reduced batch times." },
              { title: "Scalability", desc: "Scale infrastructure up or down based on demand without over-provisioning." },
              { title: "Cost Savings", desc: "Pay for what you use. Eliminate aging hardware refresh cycles." },
              { title: "Security", desc: "AWS security controls, encryption, and compliance certifications." },
            ].map((item) => (
              <div key={item.title} className="bg-erpa-gray-50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-erpa-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Proven Results" title="Migration Success Stories" centered={false} />
            <div className="mt-6 space-y-4">
              {[
                { client: "Alabama State University", result: "Immediate PeopleSoft stabilization for nearly 6,000 students" },
                { client: "Daytona State College", result: "Scalability and reliability through AWS migration" },
                { client: "CorVel", result: "Stabilized systems and reduced downtime post-security breach" },
              ].map((cs) => (
                <div key={cs.client} className="bg-white rounded-lg p-5 border border-gray-100">
                  <p className="font-semibold text-erpa-navy">{cs.client}</p>
                  <p className="mt-1 text-sm text-erpa-orange font-medium">{cs.result}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title="Plan Your Modernization" />
        </div>
      </section>

      <CTASection title="Modernize Without Compromise" description="Get the performance and scalability of the cloud while preserving your PeopleSoft investment." primaryCta={{ text: "Get a Modernization Assessment", href: "/contact" }} variant="blue" />
    </>
  );
}
