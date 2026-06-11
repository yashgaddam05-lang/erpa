import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "PeopleSoft Managed Services | Expert Support & Administration",
  description: "ERPA PeopleSoft managed services provide 24/7 support, application administration, patch management, and performance optimization. 25 years of PeopleSoft expertise.",
  keywords: ["PeopleSoft managed services", "PeopleSoft support", "PeopleSoft administration", "Oracle PeopleSoft support", "PeopleSoft outsourcing"],
};

const psoftMsFaqs = [
  { question: "What does PeopleSoft managed services include?", answer: "ERPA PeopleSoft managed services include 24/7 system monitoring, application support and help desk, database management, patch and update management, performance optimization, custom development (SQR, Application Engine, PeopleCode), security audits, and compliance reporting." },
  { question: "How many PeopleSoft experts does ERPA have?", answer: "ERPA has hundreds of PeopleSoft subject matter experts with 25+ years of cumulative platform experience. Our team covers all PeopleSoft modules including HCM, Finance, Supply Chain, and Campus Solutions." },
  { question: "Can ERPA modernize my PeopleSoft infrastructure while providing managed services?", answer: "Yes. ERPA can migrate your PeopleSoft environment to AWS while maintaining uninterrupted managed services. Our combined PeopleSoft and AWS expertise means you get modernized infrastructure without changing your managed services relationship." },
];

export default function PeopleSoftManagedServicesPage() {
  return (
    <>
      <PageHero
        label="PeopleSoft Managed Services"
        title="Expert PeopleSoft Support & Administration"
        description="ERPA's PeopleSoft managed services team includes hundreds of subject matter experts who have supported PeopleSoft environments for over 25 years. We handle the complexity so you can focus on your mission."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "PeopleSoft", href: "/solutions/peoplesoft" }, { name: "Managed Services", href: "/solutions/peoplesoft/managed-services" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Services" title="Comprehensive PeopleSoft Support" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Application Support", desc: "Help desk, issue resolution, and ongoing support for all PeopleSoft modules.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "System Administration", desc: "Database management, server monitoring, and infrastructure maintenance.", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
              { title: "Patch & Update Management", desc: "Regular PeopleTools and application updates to keep your system current and secure.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: "Performance Optimization", desc: "Regular performance audits, query tuning, and system optimization.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Custom Development", desc: "SQR reports, Application Engine programs, and PeopleCode customizations.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Security & Compliance", desc: "Security audits, role-based access management, and compliance reporting.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all card-gradient-border">
                <div className="w-11 h-11 rounded-xl bg-erpa-light-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-erpa-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Get Started" title="Talk to a PeopleSoft Expert" centered={false} />
            <p className="mt-4 text-erpa-gray-600">Whether you need full managed services or targeted support, ERPA can tailor a plan for your organization.</p>
            <div className="mt-8 relative">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt="Server infrastructure"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold">25+ Years of PeopleSoft Operations</p>
                  <p className="text-gray-300 text-sm mt-1">Hundreds of subject matter experts</p>
                </div>
              </div>
            </div>
          </div>
          <LeadForm title="Get a Support Assessment" />
        </div>
      </section>

      <FAQSection
        title="PeopleSoft Managed Services FAQ"
        faqs={psoftMsFaqs}
      />

      <CTASection title="Maximize Your PeopleSoft Investment" description="Let ERPA's experts manage and optimize your PeopleSoft environment." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} />
    </>
  );
}
