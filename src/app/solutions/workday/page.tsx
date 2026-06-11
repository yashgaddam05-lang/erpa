import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Workday Solutions | Implementation, AMS & Optimization",
  description:
    "ERPA is a certified Workday Services Partner offering implementation, managed services (AMS), optimization, staffing, and strategic consulting. 8+ years avg. consultant experience.",
  keywords: [
    "Workday implementation partner",
    "Workday consulting services",
    "Workday AMS managed services",
    "Workday optimization",
    "Workday HCM implementation",
    "Workday financial management",
    "Workday Student implementation",
  ],
};

const services = [
  {
    title: "Workday Implementation Services",
    href: "/solutions/workday/implementation",
    description: "Full-lifecycle Workday deployments for HCM, Financial Management, Payroll, and Workday Student. Our OPTIMA methodology delivers AI-enabled, prescriptive deployments.",
    features: ["HCM & Payroll", "Financial Management", "Workday Student", "OPTIMA Methodology"],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Managed Services (AMS)",
    href: "/solutions/workday/managed-services",
    description: "Ongoing Workday support, administration, and optimization. Named resources provide continuity and deep understanding of your environment.",
    features: ["Dedicated Support Team", "Payroll Bridge Support", "Financial Bridge Support", "Proactive Optimization"],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Optimization & Integrations",
    href: "/solutions/workday/optimization",
    description: "Unlock the full potential of your Workday investment. From Workday Extend custom apps to advanced integrations and AI-powered features.",
    features: ["Workday Extend", "System Integrations", "AI & Automation", "Performance Tuning"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const workdayFaqs = [
  { question: "How long does a Workday implementation take?", answer: "A typical Workday implementation takes 12-18 months depending on the modules selected, organizational complexity, and customization requirements. ERPA's OPTIMA methodology can often reduce timelines by 20-30% through prescriptive, AI-enabled deployment practices." },
  { question: "What is ERPA's OPTIMA methodology?", answer: "OPTIMA (Optimized Planning, Transformation, Implementation, Management, and Advancement) is ERPA's proprietary Workday deployment methodology. It combines prescriptive best practices with AI-enabled tools to deliver faster, more reliable implementations. The methodology covers the full lifecycle from discovery through post-go-live optimization." },
  { question: "Can ERPA help with Workday Illuminate AI features?", answer: "Yes. ERPA deploys, configures, and optimizes Workday Illuminate AI capabilities including the Business Process Copilot Agent, AI-Powered Talent & Succession, Document Intelligence for Contingent Labor, Automated Financial Close, and the Academic Requirements Agent for higher education." },
  { question: "What Workday modules does ERPA implement?", answer: "ERPA implements the full Workday platform including HCM, Financial Management, Payroll, Workday Student, Workday Extend, Adaptive Planning, Recruiting, and Illuminate (AI). Our consultants average 8 years of experience and 5+ certifications each." },
  { question: "Does ERPA provide Workday managed services after go-live?", answer: "Yes. Our Application Management Services (AMS) provide ongoing Workday support, administration, and optimization with named resources dedicated to your account. We handle break/fix, new feature enablement, payroll bridge support, and proactive system optimization." },
  { question: "How does ERPA compare to other Workday partners?", answer: "ERPA is the only mid-market Workday partner that also has deep AWS cloud and PeopleSoft expertise. This means we can handle hybrid environments, cloud integrations, and platform transitions that other partners cannot. Our consultants average 20+ deployments each, versus 5-10 at many competitors." },
];

export default function WorkdayPage() {
  return (
    <>
      <PageHero
        label="Workday Solutions"
        title="Your Trusted Workday Services Partner"
        description="From initial deployment to continuous optimization, ERPA delivers end-to-end Workday services backed by consultants who average 8 years of experience, 5+ certifications, and 20+ deployments each."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }]}
      />

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <StatsBar
          stats={[
            { value: "8 yrs", label: "Avg. Experience" },
            { value: "5+", label: "Certifications per Consultant" },
            { value: "20+", label: "Deployments per Consultant" },
            { value: "1M+", label: "Hours of Workday Experience" },
          ]}
        />
      </div>

      {/* Expertise + Photo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="More Than Configuration Support"
                title="Comprehensive Workday Expertise"
                description="ERPA is one of the only providers combining deep Workday expertise with AWS cloud capabilities to deliver a unified technology experience."
                centered={false}
              />
              <div className="mt-8">
                <h3 className="text-lg font-bold text-erpa-navy mb-4">Workday Platforms We Support</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Workday HCM", "Workday Financial Management", "Workday Payroll", "Workday Student", "Workday Extend", "Workday Adaptive Planning", "Workday Illuminate (AI)", "Workday Recruiting"].map((platform) => (
                    <div key={platform} className="flex items-center text-sm text-erpa-gray-800 py-1">
                      <svg className="w-4 h-4 text-erpa-light-blue mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Workday dashboard analytics"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Unified Workday & AWS Expertise</p>
                  <p className="text-gray-300 text-sm mt-1">The only mid-market firm covering both at depth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Explore Workday Solutions"
            description="End-to-end Workday services designed to deliver measurable outcomes."
          />
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-14 h-14 bg-erpa-light-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{service.title}</h3>
                    <p className="mt-2 text-erpa-gray-600">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="text-xs font-medium text-erpa-blue bg-erpa-light-blue/5 px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-erpa-gray-600 group-hover:text-erpa-orange group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workday AI Section */}
      <section className="py-16 gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-erpa-gold uppercase tracking-wider mb-2">Workday Illuminate</p>
              <h2 className="text-3xl font-bold">AI-Powered Workday Experiences</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Workday Illuminate brings specialized AI agents for HR, finance, and student operations. ERPA helps you deploy, configure, and optimize these AI capabilities to transform how your organization works.
              </p>
              <ul className="mt-6 space-y-3">
                {["Business Process Copilot Agent", "AI-Powered Talent & Succession", "Document Intelligence for Contingent Labor", "Automated Financial Close", "Academic Requirements Agent (Higher Ed)"].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-200">
                    <svg className="w-4 h-4 text-erpa-gold mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/solutions/ai-innovation" className="mt-6 inline-flex items-center text-sm font-semibold text-erpa-gold hover:text-white transition-colors">
                Explore AI Solutions &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "1B+", label: "AI actions on Workday" },
                { stat: "7", label: "New AI agents in 2026" },
                { stat: "75%", label: "New sales include AI" },
                { stat: "30-40%", label: "Efficiency gains" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-erpa-gold">{item.stat}</div>
                  <p className="mt-1 text-xs text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries + Lead Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionHeading
                label="Industries"
                title="Workday Solutions for Your Industry"
                centered={false}
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Higher Education", href: "/industries/higher-education", desc: "Workday Student, HCM, and Finance for colleges and universities", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
                  { name: "State & Local Government", href: "/industries/government", desc: "OPTIMA deployments for government agencies of all sizes", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { name: "Healthcare", href: "/industries/healthcare", desc: "Unified HR and finance for health systems", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                  { name: "Retail & Hospitality", href: "/industries/retail-hospitality", desc: "Scalable workforce management across locations", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
                ].map((industry) => (
                  <Link key={industry.name} href={industry.href} className="group flex items-start gap-4 bg-erpa-gray-50 rounded-lg p-5 hover:bg-erpa-light-blue/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-erpa-light-blue/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{industry.name}</h4>
                      <p className="mt-1 text-sm text-erpa-gray-600">{industry.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm title="Talk to a Workday Expert" compact />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <FAQSection
        title="Workday Consulting FAQ"
        description="Common questions about ERPA's Workday implementation and managed services."
        faqs={workdayFaqs}
      />

      <CTASection
        title="Ready to Transform with Workday?"
        description="Schedule a consultation with one of our certified Workday experts and discover how ERPA can accelerate your transformation."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Case Studies", href: "/resources/case-studies" }}
      />
    </>
  );
}
