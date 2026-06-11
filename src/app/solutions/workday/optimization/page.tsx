import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Workday Optimization & Integrations | Extend, AI & Performance",
  description:
    "Unlock the full potential of Workday with ERPA optimization services. Workday Extend custom apps, integrations, AI features, and performance tuning.",
  keywords: ["Workday optimization", "Workday Extend", "Workday integrations", "Workday AI", "Workday performance tuning"],
};

export default function WorkdayOptimizationPage() {
  return (
    <>
      <PageHero
        label="Optimization & Integrations"
        title="Get More From Your Workday Investment"
        description="From Workday Extend custom apps to advanced AI features and third-party integrations, ERPA helps you unlock capabilities you may not know you have."
        breadcrumbs={[
          { name: "Solutions", href: "/solutions/workday" },
          { name: "Workday", href: "/solutions/workday" },
          { name: "Optimization", href: "/solutions/workday/optimization" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Services" title="Optimization & Integration Services" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Workday Extend", desc: "Build secure, scalable custom applications within the Workday platform. Extend your capabilities without leaving the Workday ecosystem.", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", color: "bg-blue-500/10 text-blue-600" },
              { title: "System Integrations", desc: "Connect Workday with your existing enterprise systems, third-party applications, and data sources for unified operations.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", color: "bg-orange-500/10 text-orange-600" },
              { title: "AI & Automation", desc: "Leverage Workday AI Illuminate and machine learning to automate processes, improve decision-making, and enhance the user experience.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "bg-purple-500/10 text-purple-600" },
              { title: "Performance Optimization", desc: "Audit, tune, and optimize your Workday configuration for faster processing, better reporting, and improved user adoption.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "bg-emerald-500/10 text-emerald-600" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all card-gradient-border">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-erpa-navy">{service.title}</h3>
                <p className="mt-3 text-erpa-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Common Scenarios" title="When to Optimize" centered={false} />
            <ul className="mt-6 space-y-3">
              {[
                "You went live but haven't fully adopted all purchased modules",
                "Reporting is slow or doesn't provide the insights you need",
                "Manual processes could be automated with Workday features",
                "You need custom apps but want to stay within the Workday platform",
                "Third-party integrations are unreliable or hard to maintain",
                "Your team needs training on newer Workday features",
              ].map((item) => (
                <li key={item} className="flex items-start text-sm text-erpa-gray-800 bg-white rounded-lg p-3 border border-gray-100">
                  <svg className="w-4 h-4 text-erpa-orange mt-0.5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/solutions/ai-innovation" className="mt-6 inline-flex items-center text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors">
              Explore AI Solutions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <LeadForm title="Get an Optimization Assessment" />
        </div>
      </section>

      <CTASection
        title="Unlock Your Workday Potential"
        description="Schedule an optimization assessment and discover how to get more from your Workday investment."
        primaryCta={{ text: "Schedule Assessment", href: "/contact" }}
        secondaryCta={{ text: "Back to Workday Solutions", href: "/solutions/workday" }}
      />
    </>
  );
}
