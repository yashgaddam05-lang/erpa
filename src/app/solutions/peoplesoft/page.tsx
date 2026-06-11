import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "PeopleSoft Solutions | Managed Services, Consulting & Modernization",
  description:
    "25 years of PeopleSoft expertise. ERPA provides managed services, strategic consulting, and modernization with AWS for PeopleSoft HCM, Finance, and Campus Solutions.",
  keywords: [
    "PeopleSoft managed services",
    "PeopleSoft consulting",
    "PeopleSoft modernization",
    "PeopleSoft AWS migration",
    "PeopleSoft support services",
    "Oracle PeopleSoft partner",
    "PeopleSoft Campus Solutions",
    "PeopleSoft vs Workday",
  ],
};

const services = [
  {
    title: "PeopleSoft Managed Services",
    href: "/solutions/peoplesoft/managed-services",
    description: "Comprehensive day-to-day PeopleSoft operations, support, and administration. Hundreds of subject matter experts ensuring your systems run at peak performance.",
    features: ["24/7 System Monitoring", "Application Support", "Patch & Update Management", "Performance Optimization"],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Modernize PeopleSoft with AWS",
    href: "/solutions/peoplesoft/modernization",
    description: "Move your PeopleSoft infrastructure to AWS for improved performance, scalability, and cost efficiency without disrupting your applications.",
    features: ["AWS Migration", "Infrastructure Modernization", "Cost Reduction", "Scalability & Performance"],
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Strategic Consulting",
    href: "/solutions/peoplesoft",
    description: "Whether you are maximizing your current PeopleSoft investment or planning a transition to Workday, ERPA provides expert guidance for every stage.",
    features: ["Roadmap Planning", "Workday Transition Support", "System Optimization", "Integration Strategy"],
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
];

const psoftFaqs = [
  { question: "Should we stay on PeopleSoft or move to Workday?", answer: "This depends on your organization's needs, timeline, and budget. ERPA supports both paths. If your PeopleSoft environment is heavily customized and meeting business needs, modernizing with AWS can extend its life 5-10+ years. If you need modern SaaS capabilities, a phased Workday transition may be better. ERPA is uniquely positioned to advise on this decision since we are experts in both platforms." },
  { question: "What PeopleSoft modules does ERPA support?", answer: "ERPA supports the full PeopleSoft product suite including HCM (Human Capital Management), Financial Supply Chain Management (FSCM), Campus Solutions, PeopleTools, and all associated modules. Our hundreds of PeopleSoft subject matter experts bring deep expertise across every module." },
  { question: "How does ERPA modernize PeopleSoft with AWS?", answer: "ERPA migrates your PeopleSoft infrastructure to AWS, providing improved performance, scalability, and 30-50% cost reduction. We handle the full migration including database migration to Amazon RDS, compute optimization with EC2, and automated operations through our ActiveGenie platform." },
  { question: "Can ERPA run PeopleSoft and Workday during a transition?", answer: "Yes. ERPA is the only mid-market firm with deep expertise in both PeopleSoft and Workday. We support hybrid periods where both systems coexist, with integration strategy, data pipelines, and a staged plan for Workday deployment while maintaining PeopleSoft operations." },
  { question: "What is ERPA's PeopleSoft managed services model?", answer: "ERPA provides comprehensive PeopleSoft managed services including 24/7 system monitoring, application support, patch and update management, performance optimization, and dedicated subject matter experts. We handle everything from break/fix to proactive system improvements." },
  { question: "Does Oracle still support PeopleSoft?", answer: "Yes. Oracle continues to invest in PeopleSoft with regular PeopleTools updates, new features, and security patches through at least 2032. Oracle has stated there is no end-of-life date for PeopleSoft. ERPA helps organizations stay current with Oracle's release cadence while modernizing their infrastructure." },
];

export default function PeopleSoftPage() {
  return (
    <>
      <PageHero
        label="PeopleSoft Solutions"
        title="25 Years of PeopleSoft Excellence"
        description="ERPA is the only provider combining deep PeopleSoft technical heritage with modern AWS capabilities. We help you maximize, modernize, and manage your PeopleSoft investment."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "PeopleSoft", href: "/solutions/peoplesoft" }]}
      />

      {/* Two paths with photo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Innovation Without Compromise"
            title="A Path to Modernization"
            description="Whether you're committed to PeopleSoft for the long term or planning a gradual transition to Workday, ERPA supports your journey with stability and innovation."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all card-gradient-border">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-erpa-navy">Stay on PeopleSoft</h3>
              <p className="mt-3 text-erpa-gray-600 leading-relaxed">Maximize your current investment with managed services, performance optimization, and AWS infrastructure modernization. Get more from what you already have.</p>
              <ul className="mt-4 space-y-2">
                {["Reduce infrastructure costs 30-50%", "Improve system performance", "Modernize without disruption", "Extend PeopleSoft life 5-10+ years"].map((item) => (
                  <li key={item} className="flex items-center text-sm text-erpa-gray-800">
                    <svg className="w-4 h-4 text-blue-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/peoplesoft/managed-services" className="mt-6 inline-flex items-center text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors">
                Explore Managed Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all card-gradient-border">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-erpa-navy">Transition to Workday</h3>
              <p className="mt-3 text-erpa-gray-600 leading-relaxed">ERPA supports hybrid periods where PeopleSoft and Workday coexist, with integration strategy, data pipelines, and a staged plan for Workday deployment.</p>
              <ul className="mt-4 space-y-2">
                {["Phased migration approach", "Dual-system integration support", "Data migration & validation", "Change management guidance"].map((item) => (
                  <li key={item} className="flex items-center text-sm text-erpa-gray-800">
                    <svg className="w-4 h-4 text-orange-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/workday/implementation" className="mt-6 inline-flex items-center text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors">
                Explore Workday Implementation
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable
            title="PeopleSoft vs. Workday: How ERPA Helps Both"
            description="ERPA is the only mid-market firm with deep expertise in both platforms. Here's what we bring to each."
            columns={["PeopleSoft with ERPA", "Workday with ERPA"]}
            rows={[
              { feature: "Deployment Model", values: ["On-premise or AWS cloud", "SaaS (cloud-native)"] },
              { feature: "AI Capabilities", values: ["ActiveGenie AI for operations", "Workday Illuminate AI agents"] },
              { feature: "Implementation Time", values: ["Already deployed — optimize", "12-18 months (OPTIMA)"] },
              { feature: "Managed Services", values: [true, true] },
              { feature: "AWS Integration", values: [true, true] },
              { feature: "Campus Solutions", values: [true, "Workday Student"] },
              { feature: "Cost Optimization", values: ["30-50% infra savings", "SaaS subscription model"] },
              { feature: "Hybrid Period Support", values: [true, true] },
              { feature: "Consultant Experience", values: ["25+ years heritage", "8 yrs avg. per consultant"] },
            ]}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Explore PeopleSoft Solutions" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group block bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all card-gradient-border">
                <div className="w-12 h-12 bg-erpa-light-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs font-medium text-erpa-blue bg-erpa-light-blue/5 px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Oracle Partnership + Lead Form */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Oracle Partnership" title="Deep PeopleSoft Heritage" centered={false} />
            <p className="mt-4 text-erpa-gray-600 leading-relaxed">ERPA is an Oracle Platinum Partner with 25 years of PeopleSoft expertise across HCM, Finance, Supply Chain, and Campus Solutions. Our hundreds of PeopleSoft subject matter experts bring unmatched depth to every engagement.</p>
            <blockquote className="mt-8 border-l-4 border-erpa-orange pl-6 italic text-erpa-gray-800 bg-white rounded-r-xl py-6 pr-6">
              &ldquo;The complex PeopleSoft infrastructure and application stacks mean that ERPA&apos;s in-depth knowledge has been critical to us when we run into new and complex technical issues.&rdquo;
              <footer className="mt-3 text-sm text-erpa-gray-600 not-italic flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">DI</div>
                <span>&mdash; Director of IT, State Government Agency</span>
              </footer>
            </blockquote>
          </div>
          <LeadForm title="Talk to a PeopleSoft Expert" />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="PeopleSoft Consulting FAQ"
        description="Common questions about PeopleSoft managed services, modernization, and Workday transitions."
        faqs={psoftFaqs}
      />

      <CTASection
        title="Maximize Your PeopleSoft Investment"
        description="Partner with ERPA for managed services, modernization, and strategic consulting."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Case Studies", href: "/resources/case-studies" }}
      />
    </>
  );
}
