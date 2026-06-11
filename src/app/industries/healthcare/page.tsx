import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Healthcare ERP Consulting | Workday & AWS Solutions",
  description: "ERPA helps healthcare organizations unify HR, finance, and operations with Workday and AWS. 38,000+ employees onboarded across 18 locations in one deployment.",
  keywords: ["healthcare ERP consulting", "healthcare Workday implementation", "hospital HR system", "healthcare technology modernization"],
};

const healthcareFAQs = [
  {
    question: "Is Workday HIPAA compliant for healthcare organizations?",
    answer: "Workday signs Business Associate Agreements (BAAs) with covered entities and business associates under HIPAA, making it eligible for use in healthcare environments. Workday's infrastructure includes technical safeguards such as data encryption at rest and in transit, robust access controls, and audit logging capabilities that align with HIPAA Security Rule requirements. However, HIPAA compliance is a shared responsibility — ERPA's healthcare practice helps health systems configure Workday correctly, establish role-based access controls that limit PHI exposure, and implement the operational and administrative safeguards required to maintain compliance over time.",
  },
  {
    question: "How does Workday work for large health systems with multiple hospitals and locations?",
    answer: "Workday is purpose-built for multi-entity organizations and supports complex organizational hierarchies that reflect the structure of large health systems — including parent organizations, regional entities, hospital campuses, and affiliated medical groups. ERPA has onboarded more than 38,000 employees across 18 regional locations onto a single unified Workday platform for one healthcare client. Key capabilities include consolidated reporting across all entities, location-specific pay rules and scheduling configurations, and centralized HR and finance teams that can manage exceptions at the entity level without losing enterprise-wide visibility.",
  },
  {
    question: "How does an ERP system like Workday integrate with an EHR such as Epic or Cerner?",
    answer: "ERP systems like Workday manage the business operations side of a healthcare organization — HR, payroll, scheduling, supply chain, and finance — while EHR platforms like Epic and Cerner manage clinical workflows and patient data. Integration between the two is critical for functions like syncing employee credentialing status, automating nurse scheduling against patient census data, and reconciling labor costs against clinical department budgets. ERPA uses Workday's native integration framework alongside middleware platforms like Boomi and MuleSoft to build reliable, auditable integrations between Workday and major EHR systems. Integration design accounts for PHI boundaries so that clinical data does not flow into the ERP unnecessarily.",
  },
  {
    question: "Can Workday handle complex nurse and clinical staff scheduling requirements?",
    answer: "Workday Absence Management and Scheduling modules can manage many complex healthcare scheduling scenarios including shift differentials, on-call rotations, and float pool assignments. For health systems with highly complex scheduling requirements — such as variable shift patterns, union-mandated scheduling rules, or tight staffing ratio compliance — Workday is often paired with purpose-built workforce management tools like Kronos (UKG) or API Healthcare that integrate with Workday HCM. ERPA assesses each health system's scheduling complexity during discovery and recommends the right combination of native Workday functionality and integrated scheduling tools to meet both operational needs and labor compliance requirements.",
  },
  {
    question: "What is the best migration approach when moving a hospital from a legacy ERP to Workday?",
    answer: "The most successful healthcare ERP migrations follow a phased approach that separates HR/payroll go-live from financial management go-live, reducing the risk of simultaneous disruptions to both people operations and financial reporting. ERPA recommends a parallel-run strategy for payroll in which both the legacy system and Workday produce payroll output for at least one full pay cycle before cutover, allowing variance analysis to catch configuration issues before employees are affected. Data migration for healthcare organizations requires particular care around historical benefit elections, leave balances, and credentialing records. ERPA's OPTIMA methodology includes healthcare-specific migration playbooks, testing protocols, and hypercare support plans designed to protect continuity of care operations during the transition.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        label="Healthcare"
        title="Enterprise Technology for Healthcare Organizations"
        description="ERPA helps healthcare systems unify HR, finance, and operations on modern platforms. We have onboarded 38,000+ employees across 18 regional locations onto a unified Workday platform."
        breadcrumbs={[{ name: "Industries", href: "/industries/higher-education" }, { name: "Healthcare", href: "/industries/healthcare" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Solutions" title="Healthcare Technology Solutions" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Workday for Healthcare", href: "/solutions/workday", desc: "Unified HCM, payroll, and financial management for health systems, hospitals, and healthcare networks. Streamline operations across locations." },
              { title: "AWS for Healthcare", href: "/solutions/aws", desc: "HIPAA-compliant cloud infrastructure for healthcare applications. Secure, scalable, and cost-effective." },
            ].map((solution) => (
              <Link key={solution.title} href={solution.href} className="card-gradient-border group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{solution.title}</h3>
                <p className="mt-3 text-erpa-gray-600">{solution.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Hospital corridor representing healthcare ERP and workforce management solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-erpa-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-medium">38,000+ employees onboarded across 18 locations</p>
                <p className="text-white/70 text-xs mt-1">Unified Workday deployment for a large regional health system</p>
              </div>
            </div>
            <div>
              <SectionHeading label="Why ERPA" title="Built for Healthcare Complexity" centered={false} />
              <p className="mt-4 text-erpa-gray-600 leading-relaxed">Healthcare organizations face a unique intersection of workforce complexity, regulatory requirements, and operational scale. ERPA brings deep experience navigating HIPAA-compliant deployments, multi-entity org structures, and the tight integration between HR systems and clinical operations.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "HIPAA-Ready Configurations", desc: "Role-based access controls and audit logging aligned with HIPAA Security Rule requirements." },
                  { title: "Multi-Location Expertise", desc: "Proven delivery across health systems with dozens of campuses and thousands of employees." },
                  { title: "EHR Integration", desc: "Workday integrations with Epic, Cerner, and other leading EHR platforms." },
                  { title: "Rapid Open Enrollment", desc: "Acenda open enrollment implemented in just 7 days using ERPA accelerators." },
                ].map((item) => (
                  <div key={item.title} className="card-gradient-border bg-white rounded-lg p-5 border border-gray-100">
                    <h4 className="font-semibold text-erpa-navy text-sm">{item.title}</h4>
                    <p className="mt-1 text-xs text-erpa-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Results" title="Healthcare Success Stories" centered={false} />
            <div className="mt-6 space-y-4">
              {[
                { client: "Acenda", result: "Open enrollment implemented in just 7 days" },
                { client: "Large Health System", result: "38,000+ employees onboarded across 18 locations" },
                { client: "Adventist Health", result: "Enterprise Workday deployment and optimization" },
              ].map((cs) => (
                <div key={cs.client} className="bg-erpa-gray-50 rounded-lg p-5 border border-gray-100">
                  <p className="font-semibold text-erpa-navy">{cs.client}</p>
                  <p className="mt-1 text-sm text-erpa-orange font-medium">{cs.result}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title="Talk to a Healthcare Solutions Expert" />
        </div>
      </section>

      <FAQSection
        title="Healthcare ERP: Frequently Asked Questions"
        description="Answers to the most common questions healthcare organizations ask when evaluating ERP modernization and Workday implementation partners."
        faqs={healthcareFAQs}
      />

      <CTASection title="Transform Healthcare Operations" description="Partner with ERPA for unified HR, finance, and technology solutions." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} />
    </>
  );
}
