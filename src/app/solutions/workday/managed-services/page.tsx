import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Workday Managed Services (AMS) | Ongoing Support & Optimization",
  description:
    "ERPA Workday Application Management Services provide dedicated support, payroll bridge, financial bridge, and proactive optimization. Named resources for continuity.",
  keywords: ["Workday managed services", "Workday AMS", "Workday support services", "Workday post go-live support", "Workday application management"],
};

const amsFaqs = [
  { question: "What is Workday Application Management Services (AMS)?", answer: "Workday AMS is an ongoing support and optimization service where ERPA provides dedicated, named resources who manage your Workday environment after go-live. This includes break/fix support, new feature enablement, release management, payroll and finance bridge support, and proactive optimization." },
  { question: "How is ERPA AMS different from Workday's own support?", answer: "Workday's support covers product defects and platform issues. ERPA AMS covers everything else — your specific configurations, business processes, integrations, reporting, and optimization. We provide named resources who know your environment, not a rotating help desk." },
  { question: "Can I scale AMS support up or down?", answer: "Yes. ERPA AMS is flexible with no long-term lock-ins. You can scale support hours up during busy periods (like year-end close or benefits enrollment) and scale down during quieter times. We work with you to find the right engagement model." },
  { question: "What does payroll bridge support include?", answer: "Payroll bridge support provides expert assistance during payroll processing cycles. This includes pre-payroll audits, parallel processing support, error resolution, tax filing assistance, and post-payroll validation to ensure accuracy and timeliness." },
];

export default function WorkdayManagedServicesPage() {
  return (
    <>
      <PageHero
        label="Workday Managed Services"
        title="Ongoing Workday Support & Optimization"
        description="ERPA's Application Management Services (AMS) provide dedicated support teams, proactive optimization, and named resources who deeply understand your Workday environment."
        breadcrumbs={[
          { name: "Solutions", href: "/solutions/workday" },
          { name: "Workday", href: "/solutions/workday" },
          { name: "Managed Services", href: "/solutions/workday/managed-services" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Deliver"
            title="More Than Break-Fix Support"
            description="Our managed services go beyond reactive support. We proactively identify optimization opportunities, manage releases, and ensure your Workday environment evolves with your business."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dedicated Support Team", desc: "Named resources who know your environment, your business processes, and your priorities.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Payroll Bridge Support", desc: "Expert support during payroll cycles to ensure accuracy and timely processing.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { title: "Financial Bridge Support", desc: "Accounting close support, reconciliation assistance, and financial reporting optimization.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Release Management", desc: "We manage Workday releases so you can adopt new features with confidence.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: "Proactive Optimization", desc: "Regular health checks, performance reviews, and recommendations to maximize your ROI.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Training & Enablement", desc: "Upskill your internal team with targeted training and knowledge transfer.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all card-gradient-border">
                <div className="w-11 h-11 rounded-xl bg-erpa-light-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-erpa-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Why ERPA AMS" title="The ERPA Difference" centered={false} />
            <ul className="mt-6 space-y-4">
              {[
                { title: "Named Resources", desc: "Not a rotating help desk. Your support team knows your environment inside and out.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { title: "Proactive, Not Reactive", desc: "We identify issues before they become problems and recommend optimizations continuously.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                { title: "Transparent Communication", desc: "Regular reporting, clear SLAs, and direct access to your support team.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                { title: "Flexible Engagement", desc: "Scale support up or down based on your needs. No long-term lock-ins.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              ].map((item) => (
                <li key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-erpa-orange/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-erpa-navy">{item.title}</h4>
                    <p className="mt-1 text-sm text-erpa-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm title="Get a Managed Services Assessment" subtitle="Learn how ERPA AMS can optimize your Workday environment." />
        </div>
      </section>

      <FAQSection
        title="Workday Managed Services FAQ"
        description="Common questions about ERPA's AMS support model."
        faqs={amsFaqs}
      />

      <CTASection
        title="Optimize Your Workday Investment"
        description="Let ERPA's managed services team ensure your Workday platform delivers maximum value."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
      />
    </>
  );
}
