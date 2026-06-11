import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "State & Local Government ERP Consulting | Workday & PeopleSoft",
  description: "ERPA provides ERP consulting for state and local government agencies. Workday, PeopleSoft, and AWS solutions with compliance, security, and fixed-cost deployments.",
  keywords: ["government ERP consulting", "state government Workday", "local government ERP", "public sector technology modernization", "government PeopleSoft"],
};

const governmentFAQs = [
  {
    question: "What contract vehicles can government agencies use to procure ERPA's ERP consulting services?",
    answer: "ERPA is available through multiple cooperative purchasing vehicles including NASPO ValuePoint and OMNIA Partners, which are among the largest public-sector cooperative contracts in the United States. These pre-competed contracts allow state and local government agencies to bypass lengthy individual RFP processes while ensuring full compliance with procurement regulations. Using a cooperative contract vehicle significantly reduces time-to-award and administrative burden for government procurement teams.",
  },
  {
    question: "Is ERPA's government ERP hosting FedRAMP compliant?",
    answer: "Yes. ERPA's cloud infrastructure solutions for government agencies are built on AWS GovCloud, which holds FedRAMP High authorization. Our configurations align with NIST 800-53 controls and CJIS Security Policy requirements where applicable. For agencies subject to StateRAMP or other state-specific security frameworks, ERPA has experience tailoring environments to meet those requirements. Our security-first approach means compliance controls are built into the architecture from day one, not retrofitted after deployment.",
  },
  {
    question: "Should a government agency choose PeopleSoft or Workday for HR and finance modernization?",
    answer: "The right choice depends on your agency's current environment, budget structure, and long-term roadmap. PeopleSoft remains the incumbent platform for many large state and county governments with deeply customized configurations — ERPA's managed services practice helps agencies stabilize, optimize, and extend the life of existing PeopleSoft investments. Workday is ideal for agencies seeking a cloud-native, subscription-based platform with lower ongoing maintenance overhead. ERPA has deep expertise in both platforms and can provide an unbiased assessment based on your agency's specific operational requirements, union agreements, and procurement constraints.",
  },
  {
    question: "How long does a Workday ERP implementation take for a government agency?",
    answer: "A typical Workday HCM or Financials implementation for a mid-size government agency takes 9 to 18 months from project kickoff to go-live, depending on workforce size, number of bargaining units, integration complexity, and scope. ERPA's OPTIMA deployment methodology is specifically designed for public sector environments and includes pre-built government-specific configuration accelerators that can reduce implementation timelines by 20 to 30 percent compared to a fully custom approach. Fixed-cost engagement options under OPTIMA also provide budget certainty for government finance teams.",
  },
  {
    question: "What data security requirements must government ERP systems meet?",
    answer: "Government ERP systems must satisfy multiple overlapping security frameworks depending on the data they process. At minimum, systems handling HR and payroll data must comply with NIST 800-53 baseline controls and state data classification policies. Systems that interface with law enforcement or criminal justice data must meet CJIS Security Policy requirements. Cloud deployments typically require FedRAMP Moderate or High authorization depending on data sensitivity level. ERPA's security practice includes data classification assessments, role-based access control design, audit logging configuration, and documentation packages for agency security officers and state CISOs.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        label="State & Local Government"
        title="Technology Modernization for Government Agencies"
        description="ERPA helps state and local government agencies modernize HR, finance, and IT systems with Workday, PeopleSoft, and AWS. Compliance-ready solutions with fixed-cost deployment options."
        breadcrumbs={[{ name: "Industries", href: "/industries/higher-education" }, { name: "Government", href: "/industries/government" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="The Challenge" title="Government Modernization" description="Legacy systems, compliance requirements, procurement constraints, and limited budgets make technology modernization challenging for government agencies." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Workday for Government", href: "/solutions/workday", desc: "OPTIMA deployments tailored for government agencies. Fixed costs, limited risk, and compliance-ready configuration." },
              { title: "PeopleSoft for Government", href: "/solutions/peoplesoft", desc: "Managed services and modernization for government PeopleSoft environments. Security-first approach." },
              { title: "AWS for Government", href: "/solutions/aws", desc: "GovCloud-ready infrastructure, secure ERP hosting, and managed cloud services for public sector organizations." },
            ].map((solution) => (
              <Link key={solution.title} href={solution.href} className="card-gradient-border group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{solution.title}</h3>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{solution.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading label="Procurement" title="Contract Vehicles & Compliance" description="ERPA holds multiple cooperative contracts and is experienced with government procurement processes." centered={false} />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Cooperative Contracts", desc: "ERPA is available through multiple cooperative purchasing vehicles, simplifying procurement." },
                  { title: "Supplier Diversity", desc: "ERPA is committed to supplier diversity and meets various diversity certification requirements." },
                  { title: "Security Compliance", desc: "Our solutions meet FedRAMP, CJIS, and other government security compliance standards." },
                  { title: "Fixed-Cost Deployments", desc: "OPTIMA methodology enables fixed-cost Workday deployments that reduce financial risk." },
                ].map((item) => (
                  <div key={item.title} className="card-gradient-border bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-erpa-navy">{item.title}</h4>
                    <p className="mt-2 text-sm text-erpa-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80"
                alt="Government building representing public sector ERP modernization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-erpa-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-medium">Trusted by city and county governments across the United States</p>
                <p className="text-white/70 text-xs mt-1">Including the City of Boston, King County, and City of Raleigh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Success" title="Government Success Stories" centered={false} />
            <div className="mt-6 space-y-4">
              {[
                { client: "City of Boston", result: "Modernized PeopleSoft with AWS, consolidated 20+ contracts" },
                { client: "King County", result: "Comprehensive PeopleSoft managed services" },
                { client: "City of Raleigh", result: "Enterprise application support and optimization" },
              ].map((cs) => (
                <div key={cs.client} className="bg-erpa-gray-50 rounded-lg p-5">
                  <p className="font-semibold text-erpa-navy">{cs.client}</p>
                  <p className="mt-1 text-sm text-erpa-orange font-medium">{cs.result}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title="Talk to a Government Solutions Expert" />
        </div>
      </section>

      <FAQSection
        title="Government ERP: Frequently Asked Questions"
        description="Answers to the most common questions government agencies ask when evaluating ERP modernization partners and procurement options."
        faqs={governmentFAQs}
      />

      <CTASection title="Modernize Your Agency's Technology" description="Partner with ERPA for compliance-ready ERP solutions." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} />
    </>
  );
}
