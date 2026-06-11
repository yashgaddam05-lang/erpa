import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Cloud Managed Services | ActiveGenie AI-Powered Platform",
  description: "ERPA Cloud Managed Services powered by ActiveGenie deliver SaaS-like operations, AI automation, proactive monitoring, and 24/7 expert support for your AWS infrastructure.",
  keywords: ["cloud managed services", "AWS managed services", "ActiveGenie", "cloud operations", "infrastructure monitoring"],
};

export default function CloudManagedServicesPage() {
  return (
    <>
      <PageHero
        label="Cloud Managed Services"
        title="SaaS-Like Operations for Your Cloud Infrastructure"
        description="Powered by ActiveGenie, ERPA's Cloud Managed Services deliver AI-driven automation, proactive monitoring, and expert support to keep your enterprise applications running at peak performance."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "AWS", href: "/solutions/aws" }, { name: "Managed Services", href: "/solutions/aws/cloud-managed-services" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="ActiveGenie" title="AI-Powered Cloud Operations" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Proactive Monitoring", desc: "24/7 monitoring with AI-driven anomaly detection. We catch issues before they impact your users." },
              { title: "Automated Operations", desc: "Self-healing infrastructure, automated patching, and intelligent scaling reduce manual overhead." },
              { title: "Cost Optimization", desc: "Continuous right-sizing recommendations and reserved instance management to control cloud spend." },
            ].map((item) => (
              <div key={item.title} className="bg-erpa-gray-50 rounded-xl p-8">
                <h3 className="text-lg font-bold text-erpa-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Get Started" title="Transform Your Cloud Operations" centered={false} />
            <p className="mt-4 text-erpa-gray-600">Let ERPA manage your cloud infrastructure so your team can focus on strategic initiatives.</p>
          </div>
          <LeadForm title="Learn About Managed Services" />
        </div>
      </section>

      <CTASection
        title="Let ERPA Manage Your Cloud"
        description="Focus on your business while we manage your infrastructure."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
      />
    </>
  );
}
