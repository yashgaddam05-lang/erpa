import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Retail & Hospitality ERP Consulting | Workday Solutions",
  description: "ERPA helps retail and hospitality companies scale workforce management and financial operations with Workday. Trusted by P.F. Chang's and Papa Johns.",
  keywords: ["retail ERP consulting", "hospitality Workday implementation", "restaurant HR system", "retail technology solutions"],
};

const retailHospitalityFAQs = [
  {
    question: "How does Workday handle multi-location workforce management for retail and restaurant companies?",
    answer: "Workday is designed for distributed workforce operations and supports complex multi-location structures natively. Each location can be modeled as a cost center or supervisory organization within a unified org hierarchy, allowing managers to handle local scheduling and HR actions while corporate teams maintain enterprise-wide visibility. Workday's HCM platform centralizes employee records, pay rules, and compliance configurations across all locations, eliminating the data silos that develop when each store or restaurant manages its own HR processes in isolation. ERPA has deployed Workday for restaurant and retail chains with hundreds of locations, building standardized configuration templates that can be rolled out to new stores rapidly as the business grows.",
  },
  {
    question: "Can Workday integrate with point-of-sale (POS) systems used in retail and hospitality?",
    answer: "Yes. Workday integrates with leading POS platforms through its integration framework, enabling labor cost data from POS systems to flow into Workday Financial Management and HCM for real-time reporting. Common integration use cases include syncing actual hours worked from POS time-clock data into Workday Time Tracking for payroll processing, allocating labor costs by revenue center, and comparing scheduled labor to sales per hour for performance analysis. ERPA builds POS integrations using Workday Studio and middleware platforms such as Boomi and MuleSoft. We have integration experience with major hospitality POS platforms including Oracle MICROS, Toast, and Aloha.",
  },
  {
    question: "How does Workday support seasonal workforce scaling in retail and hospitality?",
    answer: "Seasonal workforce scaling is one of the most operationally demanding challenges in retail and hospitality, and Workday addresses it through a combination of high-volume hiring tools, streamlined onboarding workflows, and flexible offboarding processes. ERPA configures Workday Recruiting with retail and hospitality-specific hiring templates that allow HR teams to process hundreds of seasonal applicants simultaneously, push automated offer letters, and trigger onboarding tasks that can be completed on a mobile device before the employee's first shift. Position management in Workday allows budget-controlled headcount planning that scales up for peak seasons and contracts cleanly at the end without leaving orphaned records or compliance gaps.",
  },
  {
    question: "Does ERPA support franchise operators in addition to corporate-owned restaurant chains?",
    answer: "ERPA works with both corporate-owned and franchise restaurant and retail organizations. For franchise models, the typical approach separates the franchisor's corporate Workday tenant from franchisee operations, with data-sharing integrations or reporting hierarchies established where the franchisor needs visibility into franchisee headcount, compensation benchmarks, or compliance metrics. For franchisees operating independently, ERPA provides right-sized Workday configurations appropriate for their employee population and operational complexity. We also advise franchise organizations on how to structure their Workday landscape as they transition from franchise to corporate-owned locations or vice versa.",
  },
  {
    question: "How long does a Workday implementation take for a restaurant chain, and what does it cost?",
    answer: "For a mid-size restaurant chain with 2,000 to 15,000 employees across 50 to 300 locations, a Workday HCM and Payroll implementation typically takes 6 to 12 months from kickoff to go-live. Financial Management deployments often run in parallel or follow in a second phase. Cost varies based on scope, number of integrations, and the complexity of pay rules and union agreements. ERPA's OPTIMA methodology offers fixed-cost deployment options for qualifying engagements, which provides budget certainty and aligns our incentives with a clean, on-time go-live. Organizations that use pre-built retail and hospitality accelerators from ERPA's configuration library typically see 15 to 25 percent reduction in implementation hours compared to a fully ground-up build.",
  },
];

export default function RetailHospitalityPage() {
  return (
    <>
      <PageHero
        label="Retail & Hospitality"
        title="Enterprise Technology for Retail & Hospitality"
        description="ERPA helps retail and hospitality companies scale workforce management, financial operations, and supply chain across hundreds of locations."
        breadcrumbs={[{ name: "Industries", href: "/industries/higher-education" }, { name: "Retail & Hospitality", href: "/industries/retail-hospitality" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Solutions" title="Retail & Hospitality Solutions" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions/workday" className="card-gradient-border group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">Workday for Retail &amp; Hospitality</h3>
              <p className="mt-3 text-erpa-gray-600">Unified HCM, payroll, and financial management designed to handle high-volume hiring, multi-location operations, and seasonal workforce fluctuations.</p>
            </Link>
            <Link href="/solutions/aws" className="card-gradient-border group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">AWS for Retail &amp; Hospitality</h3>
              <p className="mt-3 text-erpa-gray-600">Scalable cloud infrastructure for POS integration, data analytics, and enterprise applications.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading label="Industry Focus" title="Built for Distributed Operations" centered={false} />
              <p className="mt-4 text-erpa-gray-600 leading-relaxed">Retail and hospitality businesses operate at a scale and complexity that demands an ERP platform — and an implementation partner — purpose-built for distributed workforces, high turnover environments, and seasonal demand cycles.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "High-Volume Hiring", desc: "Workday Recruiting configured for rapid seasonal and location-based hiring campaigns." },
                  { title: "POS Integration", desc: "Bidirectional integrations with Oracle MICROS, Toast, Aloha, and other POS platforms." },
                  { title: "Multi-Location Payroll", desc: "Complex pay rules, tip handling, and multi-state payroll compliance across all locations." },
                  { title: "Franchise Support", desc: "Scalable Workday configurations for both corporate-owned and franchise operations." },
                ].map((item) => (
                  <div key={item.title} className="card-gradient-border bg-white rounded-lg p-5 border border-gray-100">
                    <h4 className="font-semibold text-erpa-navy text-sm">{item.title}</h4>
                    <p className="mt-1 text-xs text-erpa-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant interior representing retail and hospitality ERP workforce management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-erpa-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-medium">Trusted by leading restaurant and retail brands</p>
                <p className="text-white/70 text-xs mt-1">Including P.F. Chang&apos;s and Papa Johns across hundreds of locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Results" title="Client Success" centered={false} />
            <div className="mt-6 space-y-4">
              <div className="bg-erpa-gray-50 rounded-lg p-5 border border-gray-100">
                <p className="font-semibold text-erpa-navy">P.F. Chang&apos;s</p>
                <p className="mt-1 text-sm text-erpa-orange font-medium">Shifted from reactive ticketing to proactive strategic support</p>
              </div>
              <div className="bg-erpa-gray-50 rounded-lg p-5 border border-gray-100">
                <p className="font-semibold text-erpa-navy">Papa Johns</p>
                <p className="mt-1 text-sm text-erpa-orange font-medium">Enterprise Workday deployment and optimization</p>
              </div>
            </div>
          </div>
          <LeadForm title="Talk to a Retail Solutions Expert" />
        </div>
      </section>

      <FAQSection
        title="Retail & Hospitality ERP: Frequently Asked Questions"
        description="Answers to the most common questions retail and restaurant operators ask when evaluating Workday and ERP implementation partners."
        faqs={retailHospitalityFAQs}
      />

      <CTASection title="Scale Your Retail Operations" description="Partner with ERPA for enterprise technology solutions." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} />
    </>
  );
}
