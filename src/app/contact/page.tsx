import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Consultation",
  description: "Contact ERPA to schedule a consultation, submit an RFP, or learn more about our Workday, AWS, and PeopleSoft consulting services. Offices in Ohio, Florida, and Texas.",
  keywords: ["contact ERPA", "ERP consulting consultation", "Workday partner contact", "submit RFP", "ERPA phone number"],
};

const contactFaqs = [
  { question: "How quickly will ERPA respond to my inquiry?", answer: "ERPA responds to all inquiries within one business day. For urgent production issues, our managed services clients have access to 24/7 support with immediate response times." },
  { question: "What information should I include when contacting ERPA?", answer: "Include your name, organization, the platform you're interested in (Workday, AWS, PeopleSoft), and a brief description of your needs. This helps us route your inquiry to the right expert and prepare for our initial conversation." },
  { question: "Does ERPA offer free consultations?", answer: "Yes. ERPA offers free initial consultations for organizations exploring Workday, AWS, or PeopleSoft solutions. During this consultation, we'll discuss your goals, assess your current environment, and outline potential approaches." },
  { question: "Can ERPA respond to formal RFPs?", answer: "Yes. ERPA regularly responds to formal RFPs from organizations of all sizes. Submit your RFP through our contact form and specify 'RFP Response' as your interest area, and we'll assign a dedicated response team." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Discuss Your Technology Goals"
        description="Whether you're ready to start a project or just exploring options, our experts are here to help. Reach out and we'll respond within one business day."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading label="Get in Touch" title="How Can We Help?" centered={false} />
              <div className="mt-8 space-y-5">
                {[
                  { label: "Phone", value: siteConfig.phone, icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", color: "bg-blue-500/10 text-blue-600" },
                  { label: "Email", value: siteConfig.email, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "bg-orange-500/10 text-orange-600" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-erpa-navy">{item.label}</p>
                      <p className="text-erpa-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Offices card */}
                <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-erpa-navy">Offices</p>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { city: "Dublin, Ohio", type: "HQ" },
                          { city: "Tampa, Florida", type: "Regional" },
                          { city: "Dallas, Texas", type: "Regional" },
                        ].map((loc) => (
                          <div key={loc.city} className="bg-erpa-gray-50 rounded-lg px-3 py-2 text-center">
                            <p className="text-sm font-medium text-erpa-navy">{loc.city}</p>
                            <p className="text-xs text-erpa-gray-600">{loc.type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="mt-8 relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="ERPA modern office"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold">Serving organizations nationwide</p>
                    <p className="text-gray-300 text-sm mt-1">3 offices | 500+ consultants | 1,100+ organizations</p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-8 p-6 bg-erpa-gray-50 rounded-xl">
                <h3 className="font-bold text-erpa-navy">Quick Links</h3>
                <ul className="mt-3 space-y-3">
                  {[
                    { label: "Submit an RFP", desc: "Send us your requirements for a formal proposal", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                    { label: "Contract Vehicles", desc: "View our cooperative contracts for public sector", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                    { label: "Careers", desc: "Join the ERPA team — 500+ consultants and growing", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  ].map((link) => (
                    <li key={link.label} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-erpa-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                      </svg>
                      <div>
                        <p className="font-semibold text-erpa-navy text-sm">{link.label}</p>
                        <p className="text-xs text-erpa-gray-600">{link.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <LeadForm
                title="Schedule a Free Consultation"
                subtitle="Fill out the form below and an ERPA expert will reach out within one business day."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Contact FAQ"
        description="Common questions about reaching ERPA."
        faqs={contactFaqs}
      />
    </>
  );
}
