import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import LeadForm from "@/components/LeadForm";
import ClientLogos from "@/components/ClientLogos";
import PartnerBadges from "@/components/PartnerBadges";
import ScrollReveal from "@/components/ScrollReveal";
import StickyFloatingCTA from "@/components/StickyFloatingCTA";
import { caseStudies, testimonials, siteConfig } from "@/lib/siteData";

const workdayIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const awsIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);
const psIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);
const staffIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <StickyFloatingCTA />

      <HeroSection
        title="Enterprise Technology Consulting That"
        highlight="Moves You Forward"
        subtitle="For over 25 years, ERPA has helped 1,100+ organizations modernize and maximize their investments in Workday, AWS, and PeopleSoft."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "Explore Solutions", href: "/solutions/workday" }}
        stats={[
          { value: siteConfig.stats.yearsInBusiness, label: "Years of Experience" },
          { value: siteConfig.stats.organizationsServed, label: "Organizations Served" },
          { value: siteConfig.stats.consultants, label: "Expert Consultants" },
          { value: "8 yrs", label: "Avg. Consultant Experience" },
        ]}
      />

      {/* Client Logo Trust Bar */}
      <ClientLogos />

      {/* Solutions */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Solutions"
              title="Deep Expertise Across Platforms"
              description="ERPA is the only provider combining the power of Workday and AWS to deliver tailored business solutions, backed by 25 years and more than 1,000 successful customer partnerships."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: workdayIcon, title: "Workday Solutions", description: "End-to-end Workday services from implementation to optimization. Our consultants average 8 years of experience and 5+ certifications.", href: "/solutions/workday", features: ["Implementation Services", "Managed Services (AMS)", "Optimization & Integrations"] },
              { icon: awsIcon, title: "AWS Solutions", description: "Cloud migration, modernization, and managed services powered by AWS. Engineers hold Amazon's highest-level certifications.", href: "/solutions/aws", features: ["Migration & Modernization", "Workday on AWS", "Cloud Managed Services"] },
              { icon: psIcon, title: "PeopleSoft Solutions", description: "25 years of deep PeopleSoft expertise. We help you maximize, modernize, and manage your PeopleSoft investment.", href: "/solutions/peoplesoft", features: ["Managed Services", "Modernization with AWS", "Strategic Consulting"] },
              { icon: staffIcon, title: "Staffing Solutions", description: "Access 500+ expert consultants for Workday, PeopleSoft, and other enterprise platforms on-demand.", href: "/solutions/staffing", features: ["Workday Staffing", "PeopleSoft Staffing", "Contract Consulting"] },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Innovation Banner */}
      <section className="py-16 gradient-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="orb-orange -top-20 right-10 opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal animation="slide-right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-300 mb-4">
                  <svg className="w-3.5 h-3.5 text-erpa-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  NEW: AI-Powered Solutions
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">AI-Powered Enterprise Transformation</h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  By 2027, 62% of ERP spending will include AI. ERPA helps you lead that shift with Workday Illuminate AI agents, ActiveGenie cloud automation, and practical AI strategy.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  {[
                    { stat: "1B+", label: "AI actions on Workday" },
                    { stat: "30-40%", label: "Efficiency gains" },
                    { stat: "5%+", label: "EBIT improvement" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-bold text-erpa-gold">{item.stat}</div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/solutions/ai-innovation"
                  className="mt-6 inline-flex items-center px-6 py-3 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 text-sm shadow-lg shadow-orange-500/20 hover:shadow-xl"
                >
                  Explore AI Solutions
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Workday Illuminate", desc: "AI agents for HR, finance, payroll, and student systems", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                  { title: "ActiveGenie AI", desc: "Self-healing cloud infrastructure with predictive automation", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { title: "OPTIMA AI", desc: "AI-accelerated implementations that deploy 30-40% faster", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "AI Strategy", desc: "Readiness assessment, roadmap, and ROI planning", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-xl p-5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-erpa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="mt-1 text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Industries We Serve"
              title="Solutions Tailored to Your Sector"
              description="ERPA delivers specialized solutions for organizations across every sector, from Fortune 500 companies to state governments and leading educational institutions."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Higher Education", href: "/industries/higher-education", desc: "Workday Student, PeopleSoft, and AWS solutions for colleges and universities.", stat: "18 yrs avg. HE experience", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { name: "State & Local Government", href: "/industries/government", desc: "Modernize HR, finance, and IT systems with compliance-ready ERP solutions.", stat: "25+ years public sector", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "Healthcare", href: "/industries/healthcare", desc: "Streamline operations, improve compliance, and unify HR and finance systems.", stat: "38,000+ employees onboarded", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { name: "Retail & Hospitality", href: "/industries/retail-hospitality", desc: "Scale workforce management and financial operations across locations.", stat: "Fortune 500 trusted", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
            ].map((industry, i) => (
              <ScrollReveal key={industry.name} delay={i * 0.1}>
                <Link
                  href={industry.href}
                  className="group block bg-white rounded-2xl border border-gray-100 p-8 card-gradient-border h-full"
                >
                  <div className="w-12 h-12 bg-erpa-light-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{industry.desc}</p>
                  <p className="mt-4 text-xs font-semibold text-erpa-orange">{industry.stat}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why ERPA */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Why ERPA"
              title="What Makes ERPA Different"
              description="We don't just deliver technology. We deliver confidence."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Trusted Guidance", desc: "Expert advisors who have worked with hundreds of organizations like yours, bringing personal accountability to every engagement.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Tailored Solutions", desc: "Smarter platforms with native AI accelerators designed to meet your evolving needs. No cookie-cutter approaches.", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
              { title: "Proven Outcomes", desc: "The performance, efficiency, and user experience your organization deserves. 1,000+ successful partnerships prove it.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-erpa-light-blue/10 to-erpa-light-blue/5 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-erpa-navy">{item.title}</h3>
                  <p className="mt-3 text-erpa-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Partner Badges */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-12 border-t border-gray-200">
              <p className="text-xs font-semibold text-erpa-gray-600 uppercase tracking-widest text-center mb-6">
                Certified Partner Ecosystem
              </p>
              <PartnerBadges />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Proven Results"
              title="Client Success Stories"
              description="See how ERPA helps organizations transform their enterprise technology."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 6).map((cs, i) => (
              <ScrollReveal key={cs.client} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-erpa-light-blue/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-erpa-light-blue bg-erpa-light-blue/10 px-3 py-1 rounded-full">
                      {cs.solution}
                    </span>
                    <span className="text-xs text-erpa-gray-600">{cs.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-erpa-navy">{cs.headline}</h3>
                  <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed flex-1">{cs.description}</p>
                  <div className="mt-5 pt-5 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-erpa-orange">{cs.metric}</div>
                      <div className="text-xs text-erpa-gray-600">{cs.metricLabel}</div>
                    </div>
                    <span className="text-sm font-semibold text-erpa-navy">{cs.client}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-erpa-light-blue font-semibold hover:text-erpa-orange transition-colors">
                View All Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading label="Client Voices" title="Trusted by Leading Organizations" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((t, i) => (
              <ScrollReveal key={t.company} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal animation="slide-right">
              <div>
                <SectionHeading
                  label="Ready to Move Forward?"
                  title="Let's Talk About Your Technology Goals"
                  description="Whether you're implementing Workday, modernizing PeopleSoft, or migrating to AWS, ERPA has the expertise to guide you."
                  centered={false}
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "Free initial consultation with a certified expert",
                    "Custom roadmap for your organization",
                    "Transparent pricing with no hidden costs",
                    "Named resources for accountability",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-erpa-gray-800">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 shrink-0">
                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Mini testimonial */}
                <div className="mt-8 p-5 bg-erpa-gray-50 rounded-xl border border-gray-100">
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-erpa-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-erpa-gray-800 italic">&ldquo;ERPA&apos;s responsiveness and flexibility has improved confidence levels for our users.&rdquo;</p>
                  <p className="mt-2 text-xs text-erpa-gray-600 font-medium">VP of Technology, Public Sector Organization</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.2}>
              <LeadForm
                title="Schedule a Consultation"
                subtitle="Fill out the form and an ERPA expert will reach out within one business day."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Empowering Progress. Moving You Forward."
        description="Join the 1,100+ organizations that trust ERPA to deliver exceptional technology consulting services."
        primaryCta={{ text: "Get Started Today", href: "/contact" }}
        secondaryCta={{ text: "Explore Solutions", href: "/solutions/workday" }}
      />
    </>
  );
}
