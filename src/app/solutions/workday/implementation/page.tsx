import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Workday Implementation Services | HCM, Finance & Student",
  description:
    "ERPA delivers full-lifecycle Workday implementations for HCM, Financial Management, Payroll, and Student. OPTIMA methodology. Fixed-cost options available.",
  keywords: ["Workday implementation", "Workday HCM implementation", "Workday Student implementation", "Workday deployment partner", "OPTIMA methodology"],
};

const optimaSteps = [
  { number: "01", title: "Discover & Assess", description: "Analyze your current state, define requirements, and build a deployment roadmap aligned to your goals. AI-powered gap analysis accelerates discovery.", icon: "🔍" },
  { number: "02", title: "Configure & Build", description: "Configure Workday to your specifications using proven templates and AI-powered accelerators. Prescriptive best practices reduce guesswork.", icon: "⚙️" },
  { number: "03", title: "Validate & Test", description: "Rigorous testing across all modules with parallel payroll cycles, UAT, and integration testing. Nothing goes live without full validation.", icon: "✅" },
  { number: "04", title: "Deploy & Go-Live", description: "Go-live with confidence. Hypercare support ensures a smooth transition with named resources standing by.", icon: "🚀" },
  { number: "05", title: "Optimize & Grow", description: "Post-go-live optimization, new feature enablement, and continuous improvement through AMS managed services.", icon: "📈" },
];

const implFaqs = [
  { question: "What is ERPA's OPTIMA methodology for Workday implementation?", answer: "OPTIMA stands for Optimized Planning, Transformation, Implementation, Management, and Advancement. It's ERPA's proprietary 5-phase Workday deployment methodology that combines prescriptive best practices with AI-enabled tools to deliver faster, more reliable implementations. OPTIMA reduces typical implementation timelines by 20-30%." },
  { question: "How long does a Workday HCM implementation take?", answer: "A typical Workday HCM implementation takes 12-18 months. However, timelines vary based on organization size, module complexity, data migration scope, and integration requirements. ERPA's OPTIMA methodology often compresses timelines by 20-30% through prescriptive templates and AI accelerators." },
  { question: "Does ERPA offer fixed-cost Workday implementations?", answer: "Yes. ERPA offers fixed-cost implementation options for qualifying organizations. This provides budget certainty and risk reduction. During the discovery phase, we assess whether a fixed-cost model is appropriate for your scope and complexity." },
  { question: "What Workday modules can ERPA implement simultaneously?", answer: "ERPA can implement multiple Workday modules simultaneously including HCM, Financial Management, Payroll, Workday Student, Adaptive Planning, and Recruiting. Multi-module deployments are common and our OPTIMA methodology is designed to handle the complexity of concurrent implementations." },
  { question: "How does ERPA handle data migration during Workday implementation?", answer: "ERPA follows a structured data migration approach: data assessment and mapping, cleansing and transformation, iterative test migrations, parallel validation, and final cutover. For PeopleSoft-to-Workday migrations, our dual-platform expertise ensures no data is lost in translation." },
];

export default function WorkdayImplementationPage() {
  return (
    <>
      <PageHero
        label="Workday Implementation"
        title="Full-Lifecycle Workday Deployment Services"
        description="ERPA's OPTIMA methodology delivers AI-enabled, prescriptive Workday deployments for HCM, Financial Management, Payroll, and Student. Fixed-cost options for resource-constrained organizations."
        breadcrumbs={[
          { name: "Solutions", href: "/solutions/workday" },
          { name: "Workday", href: "/solutions/workday" },
          { name: "Implementation", href: "/solutions/workday/implementation" },
        ]}
      />

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <StatsBar
          stats={[
            { value: "20-30%", label: "Faster Than Traditional" },
            { value: "8 yrs", label: "Avg. Consultant Experience" },
            { value: "20+", label: "Deployments per Consultant" },
            { value: "100%", label: "On-Time Go-Live Rate" },
          ]}
        />
      </div>

      {/* OPTIMA Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OPTIMA Methodology"
            title="AI-Enabled, Prescriptive Deployments"
            description="ERPA's OPTIMA methodology combines years of deployment experience with AI accelerators to deliver faster, more predictable Workday implementations."
          />
          <div className="mt-12">
            <ProcessTimeline steps={optimaSteps} />
          </div>
        </div>
      </section>

      {/* Modules with photo */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeading label="Modules" title="What We Implement" centered={false} />
              <p className="mt-4 text-erpa-gray-600 leading-relaxed">We deploy the full Workday platform across HCM, Finance, Payroll, Student, and more. Our consultants bring deep module-specific expertise to every engagement.</p>
            </div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Consultant working on Workday implementation"
                className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold">Expert-Led Implementation</p>
                <p className="text-gray-300 text-sm mt-1">5+ certifications per consultant</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Workday HCM", desc: "Core HR, benefits, talent management, compensation, and absence management.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Financial Management", desc: "General ledger, accounts payable/receivable, procurement, expenses, and financial reporting.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Workday Payroll", desc: "US, Canada, UK, and France payroll. Complex multi-country deployments.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { title: "Workday Student", desc: "Student records, financial aid, admissions, curriculum management for higher education.", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { title: "Adaptive Planning", desc: "Financial planning, workforce planning, and operational planning.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { title: "Integrations & Extend", desc: "Custom integrations, Workday Extend apps, and third-party system connectivity.", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
            ].map((module) => (
              <div key={module.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all card-gradient-border">
                <div className="w-11 h-11 rounded-xl bg-erpa-light-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={module.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-erpa-navy">{module.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Get Started" title="Plan Your Workday Implementation" centered={false} />
            <p className="mt-4 text-erpa-gray-600 leading-relaxed">
              Every organization is different. Our experts will assess your current environment, define scope, and build a deployment plan that meets your timeline and budget.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Average 8 years Workday experience per consultant",
                "20+ deployments per consultant",
                "Fixed-cost deployment options available",
                "OPTIMA AI-powered methodology",
                "Named resources for full accountability",
              ].map((item) => (
                <li key={item} className="flex items-start text-sm text-erpa-gray-800">
                  <svg className="w-4 h-4 text-erpa-orange mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm title="Talk to an Implementation Expert" />
        </div>
      </section>

      <FAQSection
        title="Workday Implementation FAQ"
        description="Common questions about ERPA's Workday implementation methodology, timelines, and costs."
        faqs={implFaqs}
      />

      <CTASection
        title="Start Your Workday Journey"
        description="Schedule a consultation to discuss your implementation needs and get a custom deployment plan."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Case Studies", href: "/resources/case-studies" }}
      />
    </>
  );
}
