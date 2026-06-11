import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import StatsBar from "@/components/StatsBar";
import FAQSection from "@/components/FAQSection";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "AI & Innovation | Workday Illuminate, ActiveGenie & Agentic AI",
  description:
    "ERPA helps organizations harness AI across Workday, AWS, and PeopleSoft. From Workday Illuminate agents to ActiveGenie AI-powered cloud automation, we make AI practical for enterprise.",
  keywords: [
    "AI in ERP",
    "Workday AI Illuminate",
    "enterprise AI consulting",
    "agentic AI ERP",
    "ActiveGenie AI",
    "AI-powered cloud automation",
    "Workday AI agents",
    "artificial intelligence enterprise applications",
  ],
};

const aiStats = [
  { value: "62%", label: "of ERP spend will include AI by 2027" },
  { value: "40%", label: "Efficiency gains from AI-enhanced ERP" },
  { value: "1B+", label: "AI-driven actions on Workday platform" },
  { value: "50%", label: "Faster time-to-value with AI delivery" },
];

const aiAdoptionSteps = [
  {
    number: "01",
    title: "Assess",
    description: "AI readiness audit of your platforms, data maturity, and organizational readiness. We map quick wins and define a realistic adoption runway.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design",
    description: "Solution architecture for your AI use cases — selecting the right agents, integration patterns, and governance controls before a line of code is written.",
    icon: "🏗️",
  },
  {
    number: "03",
    title: "Implement",
    description: "Deploy AI agents across Workday Illuminate, ActiveGenie, and AWS. Phased rollout with change management to drive user adoption from day one.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Measure ROI against baseline metrics, iterate on agent configurations, and expand to additional use cases as your organization builds AI fluency.",
    icon: "📈",
  },
];

const aiFaqs = [
  {
    question: "What is Workday Illuminate and how does it work?",
    answer: "Workday Illuminate is Workday's AI and machine learning platform embedded directly into the Workday application suite. It powers capabilities like the Business Process Copilot Agent (which automates routine workflow steps), Document Intelligence (which extracts structured data from unstructured documents like invoices and contracts), and a growing library of task-specific AI agents for HR, Finance, and Student operations. Illuminate runs on Workday's multi-tenant cloud infrastructure, meaning your organization's data is used only to personalize your own instance — it is not pooled across customers. ERPA helps clients configure, enable, and measure Illuminate capabilities as part of both new implementations and existing Workday optimization engagements.",
  },
  {
    question: "What is ActiveGenie and how is it different from Workday Illuminate?",
    answer: "ActiveGenie is ERPA's proprietary AI-powered cloud orchestration platform purpose-built for AWS environments running enterprise applications like PeopleSoft and Workday. Where Workday Illuminate operates inside the Workday application layer, ActiveGenie operates at the infrastructure layer — automating cloud migrations, intelligently scaling compute resources ahead of peak demand, detecting anomalies in system behavior, and triggering self-healing remediation before users are affected. Together, Workday Illuminate and ActiveGenie give ERPA clients AI coverage across both the application and infrastructure layers of their enterprise technology stack.",
  },
  {
    question: "What ROI can my organization realistically expect from AI in ERP?",
    answer: "ROI varies significantly by use case and organizational readiness. Industry data from McKinsey and Workday's own customer benchmarking shows that organizations using AI-integrated ERP typically achieve 30 to 40 percent efficiency gains in targeted processes, a 5 percent or greater improvement in EBIT, and meaningful reductions in processing errors. Specific examples from ERPA clients include a 40 percent acceleration in monthly financial close through automated reconciliation, near-zero payroll errors using Workday's AI validation agents, and infrastructure cost reductions of 20 to 35 percent through ActiveGenie's predictive auto-scaling. ERPA's AI Readiness Assessment includes a tailored ROI projection for your specific platforms and use cases.",
  },
  {
    question: "Is my data secure when AI processes it inside Workday or ActiveGenie?",
    answer: "Data security is ERPA's first consideration in every AI engagement. Workday Illuminate operates within Workday's SOC 2 Type II and ISO 27001 certified infrastructure, and customer data is logically isolated — your data trains models only within your tenant. ActiveGenie is deployed inside your own AWS VPC and never transmits sensitive data outside your environment. ERPA's AI governance framework includes data classification reviews, role-based access controls on AI agents, audit logging of all AI-driven actions, and regular review cycles to ensure AI outputs remain accurate and compliant with your regulatory obligations.",
  },
  {
    question: "How do we get started with AI if we are still on PeopleSoft or early in our Workday journey?",
    answer: "Your starting point with AI depends on your platform, but there is a meaningful AI opportunity at every stage. Organizations on PeopleSoft can begin with ActiveGenie for infrastructure intelligence — automated scaling, anomaly detection, and cost optimization — without any application changes. Organizations mid-implementation on Workday can activate foundational Illuminate agents like the Business Process Copilot and Document Intelligence as part of go-live scope. ERPA's AI Readiness Assessment is the right first step regardless of where you are — it produces a prioritized roadmap with estimated effort and ROI for each AI initiative, so you can sequence investments based on business impact rather than technology hype.",
  },
  {
    question: "How long does it take to deploy Workday AI agents?",
    answer: "The time to activate a Workday AI agent depends on the agent type and how mature your underlying Workday configuration is. Foundational agents like the Business Process Copilot can be enabled in days for organizations with well-configured business processes. More complex agents like Document Intelligence or the Academic Requirements Agent require data configuration, training validation, and change management work that typically spans four to twelve weeks per agent. ERPA's phased AI adoption approach ensures each agent is properly configured and adopted before moving to the next, preventing the common failure mode of activating many AI features simultaneously with low organizational adoption.",
  },
];

export default function AIInnovationPage() {
  return (
    <>
      <PageHero
        label="AI & Innovation"
        title="AI-Powered Enterprise Transformation"
        description="By 2027, 62% of ERP spending will include AI capabilities. ERPA helps you lead that shift, not chase it. From Workday Illuminate to ActiveGenie cloud automation, we make AI practical, measurable, and yours."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "AI & Innovation", href: "/solutions/ai-innovation" }]}
      />

      {/* AI Tech Photo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              alt="Abstract AI and machine learning visualization"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-erpa-navy/85 via-erpa-navy/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-erpa-orange mb-3">
                AI That Delivers Results
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Practical AI Across Every Layer of Your Enterprise
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                From Workday Illuminate agents automating HR and finance workflows to ActiveGenie making your cloud infrastructure self-healing, ERPA embeds AI where it creates measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar stats={aiStats} variant="dark" />
        </div>
      </section>

      {/* AI Landscape */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The AI Opportunity"
            title="Enterprise AI Is No Longer Optional"
            description="Organizations using AI-integrated ERP systems are reporting 5%+ EBIT improvement and 30-40% efficiency gains. The question is no longer whether to adopt AI, but how fast you can move."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: "62%", label: "of ERP spending will include AI by 2027", source: "Industry analysts" },
              { stat: "30-40%", label: "efficiency gains from AI-enhanced ERP", source: "McKinsey" },
              { stat: "5%+", label: "EBIT improvement for early AI adopters", source: "Industry data" },
              { stat: "1B+", label: "AI-driven actions on Workday platform", source: "Workday" },
            ].map((item) => (
              <div key={item.label} className="card-gradient-border bg-erpa-gray-50 rounded-xl p-6 text-center border border-transparent">
                <div className="text-3xl font-bold text-erpa-orange">{item.stat}</div>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-snug">{item.label}</p>
                <p className="mt-1 text-xs text-erpa-gray-600/60">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our AI Capabilities"
            title="AI Solutions Across the ERPA Platform"
            description="ERPA delivers AI at three levels: embedded AI within Workday, AI-powered cloud operations via ActiveGenie, and strategic AI advisory to build your roadmap."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Workday Illuminate */}
            <div className="card-gradient-border bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-erpa-navy">Workday Illuminate</h3>
              <p className="mt-3 text-erpa-gray-600 leading-relaxed">
                Deploy and optimize Workday&apos;s AI agents for HR, finance, and student operations. Our consultants help you configure, adopt, and measure the impact of Illuminate across your organization.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "AI Agents for HR, Finance & Payroll",
                  "Business Process Copilot Configuration",
                  "Workday Illuminate Readiness Assessment",
                  "Flex Credits Optimization Strategy",
                  "AI-Powered Talent & Succession Planning",
                  "Document Intelligence for Contingent Labor",
                ].map((f) => (
                  <li key={f} className="flex items-start text-sm text-erpa-gray-800">
                    <svg className="w-4 h-4 text-purple-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/workday" className="mt-6 inline-block text-sm font-semibold text-purple-600 hover:text-erpa-orange transition-colors">
                Learn about Workday Solutions &rarr;
              </Link>
            </div>

            {/* ActiveGenie AI */}
            <div className="card-gradient-border bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-erpa-navy">ActiveGenie AI Cloud Platform</h3>
              <p className="mt-3 text-erpa-gray-600 leading-relaxed">
                ERPA&apos;s proprietary AI-powered cloud orchestration platform automates AWS migrations, optimizes infrastructure, and delivers self-healing operations for enterprise applications.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "AI-Automated Cloud Migration",
                  "Intelligent Auto-Scaling",
                  "Predictive Anomaly Detection",
                  "Self-Healing Infrastructure",
                  "AI Cost Optimization Engine",
                  "Automated Security Monitoring",
                ].map((f) => (
                  <li key={f} className="flex items-start text-sm text-erpa-gray-800">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/aws/cloud-managed-services" className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-erpa-orange transition-colors">
                Learn about Cloud Managed Services &rarr;
              </Link>
            </div>

            {/* AI Strategy & Advisory */}
            <div className="card-gradient-border bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-erpa-navy">AI Strategy & Advisory</h3>
              <p className="mt-3 text-erpa-gray-600 leading-relaxed">
                Not sure where to start with AI? ERPA&apos;s advisory team helps you build an AI roadmap that aligns with your business goals, existing platforms, and readiness level.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Enterprise AI Readiness Assessment",
                  "AI Roadmap & Prioritization",
                  "Agentic Workflow Design",
                  "Change Management for AI Adoption",
                  "AI Governance & Risk Framework",
                  "ROI Measurement & Optimization",
                ].map((f) => (
                  <li key={f} className="flex items-start text-sm text-erpa-gray-800">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-orange-600 hover:text-erpa-navy transition-colors">
                Schedule an AI Assessment &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Adoption Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The AI Adoption Journey"
            title="A Proven Path from Assessment to Impact"
            description="ERPA's four-step AI adoption framework takes organizations from readiness audit to sustained optimization, with clear milestones and measurable outcomes at every stage."
          />
          <div className="mt-12">
            <ProcessTimeline steps={aiAdoptionSteps} />
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Use Cases"
            title="How Enterprise Organizations Are Using AI Today"
            description="Practical AI applications that deliver measurable results, not science projects."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI-Powered Payroll Processing", desc: "Workday Illuminate automates payroll validation, anomaly detection, and compliance checks, reducing errors to near zero.", industry: "All Industries", platform: "Workday" },
              { title: "Intelligent Document Processing", desc: "AI agents extract data from invoices, contracts, and HR documents, eliminating manual data entry and accelerating processing.", industry: "Finance & HR", platform: "Workday" },
              { title: "Predictive Talent Management", desc: "ML-driven succession planning identifies flight risk, surfaces internal mobility candidates, and recommends development paths.", industry: "All Industries", platform: "Workday" },
              { title: "Self-Healing Cloud Infrastructure", desc: "ActiveGenie detects infrastructure anomalies and auto-remediates before users are impacted, achieving near-zero downtime.", industry: "All Industries", platform: "AWS" },
              { title: "AI-Optimized Financial Close", desc: "Automated reconciliation, anomaly flagging, and intelligent journal entry suggestions accelerate month-end close by 40%.", industry: "Finance", platform: "Workday" },
              { title: "Smart Resource Scaling", desc: "AI predicts demand patterns and auto-scales compute, memory, and storage before peak loads hit, eliminating performance issues.", industry: "Higher Education", platform: "AWS" },
              { title: "Student Administration AI", desc: "Workday's Academic Requirements Agent and Student Administration Agent automate degree audits, course recommendations, and enrollment.", industry: "Higher Education", platform: "Workday" },
              { title: "Automated Compliance Monitoring", desc: "AI continuously monitors for regulatory changes and flags configurations that need updating, keeping you compliant automatically.", industry: "Government", platform: "AWS + Workday" },
              { title: "Intelligent Workforce Planning", desc: "ML models analyze historical patterns, market data, and internal metrics to forecast hiring needs and budget impact.", industry: "All Industries", platform: "Workday" },
            ].map((useCase) => (
              <div key={useCase.title} className="card-gradient-border bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-erpa-light-blue bg-erpa-light-blue/10 px-2.5 py-1 rounded-full">{useCase.platform}</span>
                  <span className="text-xs text-erpa-gray-600">{useCase.industry}</span>
                </div>
                <h3 className="text-base font-bold text-erpa-navy">{useCase.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIMA AI Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="OPTIMA Methodology"
                title="AI-Enabled Implementations from Day One"
                centered={false}
              />
              <p className="mt-4 text-erpa-gray-600 leading-relaxed">
                ERPA&apos;s OPTIMA methodology embeds AI throughout the implementation lifecycle. From AI-accelerated configuration to automated testing and intelligent deployment planning, every phase leverages AI to deliver faster, more predictable outcomes.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { phase: "Discovery", ai: "AI analyzes your data to identify configuration patterns and recommend best-practice templates" },
                  { phase: "Configuration", ai: "Business Process Copilot Agent accelerates setup of workflows and approvals" },
                  { phase: "Testing", ai: "AI-powered test automation validates configurations across thousands of scenarios" },
                  { phase: "Deployment", ai: "Predictive analytics identify deployment risks before go-live" },
                  { phase: "Optimization", ai: "Continuous AI monitoring identifies adoption gaps and optimization opportunities" },
                ].map((step) => (
                  <div key={step.phase} className="flex items-start">
                    <div className="w-8 h-8 bg-erpa-orange text-white rounded-lg flex items-center justify-center shrink-0 text-xs font-bold mr-4 mt-0.5">AI</div>
                    <div>
                      <h4 className="font-semibold text-erpa-navy">{step.phase}</h4>
                      <p className="text-sm text-erpa-gray-600">{step.ai}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-gradient-border bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-erpa-navy mb-6">AI Impact Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: "Faster Implementation", value: "30-40%", desc: "AI accelerators reduce configuration and testing time" },
                  { label: "Reduced Errors", value: "Near Zero", desc: "AI validation catches issues before they reach production" },
                  { label: "Faster Time-to-Value", value: "50%", desc: "Predictive deployment reduces post go-live stabilization" },
                  { label: "Higher Adoption", value: "2x", desc: "AI-driven training and change management improve user adoption" },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-erpa-navy text-sm">{metric.label}</p>
                      <p className="text-xs text-erpa-gray-600">{metric.desc}</p>
                    </div>
                    <div className="text-xl font-bold text-erpa-orange">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="AI & ERP Questions Answered"
        description="Common questions from technology leaders evaluating AI investments across Workday, AWS, and PeopleSoft."
        faqs={aiFaqs}
      />

      {/* Lead Gen */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Get Started"
                title="Start Your AI Transformation"
                description="Not sure where to begin? ERPA's AI Readiness Assessment evaluates your current platforms, data maturity, and organizational readiness to build a practical AI roadmap."
                centered={false}
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Free AI Readiness Assessment",
                  "Custom AI roadmap for your organization",
                  "ROI projections for AI investments",
                  "Platform-specific AI recommendations",
                  "Change management and adoption planning",
                ].map((item) => (
                  <li key={item} className="flex items-center text-erpa-gray-800">
                    <svg className="w-5 h-5 text-erpa-orange mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm
              title="Get Your Free AI Readiness Assessment"
              subtitle="Our experts will evaluate your AI readiness and recommend practical next steps."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="The Future of Enterprise Technology Is AI-Powered"
        description="Partner with ERPA to make AI practical, measurable, and impactful across your organization."
        primaryCta={{ text: "Schedule an AI Assessment", href: "/contact" }}
        secondaryCta={{ text: "Explore Workday AI", href: "/solutions/workday" }}
        variant="blue"
      />
    </>
  );
}
