import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Staffing Solutions | Workday, PeopleSoft & IT Consulting",
  description: "Access 500+ expert consultants for Workday, PeopleSoft, and enterprise technology projects. Contract, contract-to-hire, and project-based engagement models.",
  keywords: ["ERP staffing", "Workday consultants", "PeopleSoft consultants", "IT staffing", "contract consulting"],
};

export default function StaffingPage() {
  return (
    <>
      <PageHero
        label="Staffing Solutions"
        title="Expert Consultants On Demand"
        description="Access ERPA's team of 500+ expert consultants for Workday, PeopleSoft, AWS, and enterprise technology projects. Flexible engagement models to fit your needs."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "Staffing", href: "/solutions/staffing" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Specializations" title="Staffing Across Platforms" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Workday Staffing", desc: "Certified Workday consultants for HCM, Finance, Payroll, Student, and integrations. Average 8 years experience." },
              { title: "PeopleSoft Staffing", desc: "Deep PeopleSoft expertise across HCM, Finance, Supply Chain, and Campus Solutions modules." },
              { title: "Other Staffing", desc: "IT project managers, business analysts, data engineers, and other enterprise technology roles." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-erpa-navy">{item.title}</h3>
                <p className="mt-3 text-erpa-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Engagement Models" title="Flexible Staffing Options" centered={false} />
            <ul className="mt-6 space-y-4">
              {[
                { title: "Contract", desc: "Short or long-term consultants for specific project needs." },
                { title: "Contract-to-Hire", desc: "Evaluate consultants on the job before making a permanent commitment." },
                { title: "Project-Based", desc: "Complete project delivery with a dedicated ERPA team." },
              ].map((model) => (
                <li key={model.title} className="bg-white rounded-lg p-5 border border-gray-100">
                  <h4 className="font-semibold text-erpa-navy">{model.title}</h4>
                  <p className="mt-1 text-sm text-erpa-gray-600">{model.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm title="Request Staffing" subtitle="Tell us about your staffing needs." />
        </div>
      </section>

      <CTASection title="Find the Right Talent" description="Access 500+ expert consultants for your next project." primaryCta={{ text: "Request Staffing", href: "/contact" }} />
    </>
  );
}
