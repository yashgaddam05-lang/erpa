import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "AWS Cloud Solutions | Migration, Modernization & Managed Services",
  description:
    "ERPA is an AWS Advanced Tier Services Partner. We provide cloud migration, ERP modernization, Workday on AWS, and managed cloud services powered by ActiveGenie.",
  keywords: [
    "AWS cloud migration",
    "ERP cloud modernization",
    "AWS managed services",
    "Workday on AWS",
    "PeopleSoft AWS migration",
    "cloud ERP hosting",
    "AWS consulting services",
  ],
};

const services = [
  {
    title: "Migration & Modernization",
    href: "/solutions/aws/migration",
    description: "Move your enterprise applications to AWS with a structured approach that minimizes disruption. We handle PeopleSoft, custom apps, and legacy system migrations.",
    features: ["Lift-and-Shift", "Application Modernization", "Database Migration", "Infrastructure Optimization"],
    icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
  },
  {
    title: "Workday on AWS",
    href: "/solutions/workday",
    description: "A unified delivery team managing both Workday and AWS across the full lifecycle, ensuring seamless integration between your cloud platforms.",
    features: ["Unified Management", "Performance Optimization", "Security Compliance", "Cost Optimization"],
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Cloud Managed Services",
    href: "/solutions/aws/cloud-managed-services",
    description: "SaaS-like operations for your cloud infrastructure, powered by ActiveGenie. AI automation, proactive monitoring, and 24/7 expert support.",
    features: ["ActiveGenie Platform", "24/7 Monitoring", "AI-Powered Automation", "Cost Management"],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const awsFaqs = [
  { question: "What AWS certifications do ERPA engineers hold?", answer: "ERPA engineers hold Amazon's highest-level certifications including AWS Certified Solutions Architect Professional, AWS Certified DevOps Engineer Professional, and AWS Certified Database Specialty. These certifications ensure we follow AWS best practices for architecture, security, and operations." },
  { question: "Can ERPA migrate PeopleSoft to AWS?", answer: "Yes. ERPA has deep expertise in migrating PeopleSoft environments to AWS including lift-and-shift migrations, application modernization, and database migrations to Amazon RDS. Our 25+ years of PeopleSoft expertise combined with AWS certifications makes us uniquely qualified for this work." },
  { question: "What is ActiveGenie?", answer: "ActiveGenie is ERPA's proprietary AI-powered managed services platform for AWS cloud operations. It provides proactive monitoring, automated remediation, cost optimization recommendations, and 24/7 support. ActiveGenie uses machine learning to predict issues before they impact your operations." },
  { question: "How does ERPA handle AWS security compliance?", answer: "ERPA implements AWS security best practices including IAM policies, encryption at rest and in transit, VPC configuration, security groups, CloudTrail logging, and GuardDuty threat detection. We support compliance frameworks including SOC 2, HIPAA, FedRAMP, and PCI-DSS." },
  { question: "What is the typical cost savings from migrating to AWS?", answer: "Organizations typically see 30-50% infrastructure cost reduction after migrating to AWS with ERPA. Our ActiveGenie platform provides ongoing cost optimization through right-sizing recommendations, reserved instance management, and automated scaling. Additional savings come from reduced operational overhead." },
  { question: "Does ERPA support multi-cloud environments?", answer: "Yes. While we specialize in AWS, ERPA supports hybrid and multi-cloud architectures. We can manage environments where Workday (SaaS), PeopleSoft (AWS), and other applications coexist. Our unified delivery model ensures consistent security, monitoring, and cost management across platforms." },
];

export default function AWSPage() {
  return (
    <>
      <PageHero
        label="AWS Solutions"
        title="Cloud Solutions for Enterprise ERP Modernization"
        description="ERPA is an AWS Advanced Tier Services Partner with over 25 years of ERP expertise. Our engineers hold Amazon's highest-level certifications to deliver secure, scalable cloud solutions."
        breadcrumbs={[{ name: "Solutions", href: "/solutions/workday" }, { name: "AWS", href: "/solutions/aws" }]}
      />

      {/* Hero photo section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="AWS Partnership"
                title="ERP Modernization in the Cloud"
                description="We combine deep ERP knowledge with AWS cloud expertise to modernize your enterprise applications without compromising stability."
                centered={false}
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "AWS Advanced Tier", desc: "Professional Solutions Architect & DevOps certifications", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { title: "25+ Years ERP", desc: "Deep PeopleSoft, Workday, and enterprise knowledge", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "ActiveGenie AI", desc: "Proprietary platform for proactive cloud operations", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                ].map((item) => (
                  <div key={item.title} className="bg-erpa-gray-50 rounded-xl p-5">
                    <div className="w-10 h-10 rounded-lg bg-erpa-orange/10 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-erpa-navy">{item.title}</h3>
                    <p className="mt-1 text-xs text-erpa-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Cloud computing visualization"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Enterprise-Grade Cloud Architecture</p>
                  <p className="text-gray-300 text-sm mt-1">Powered by ActiveGenie AI platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Explore AWS Solutions" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group block bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all card-gradient-border">
                <div className="w-12 h-12 bg-erpa-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center text-sm text-erpa-gray-800">
                      <svg className="w-4 h-4 text-erpa-orange mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading label="Get Started" title="Talk to an AWS Expert" centered={false} />
              <p className="mt-4 text-erpa-gray-600 leading-relaxed">
                Whether you are migrating PeopleSoft to AWS, optimizing your Workday cloud infrastructure, or looking for managed cloud services, our certified engineers can help.
              </p>
              <blockquote className="mt-8 border-l-4 border-erpa-orange pl-6 italic text-erpa-gray-800 bg-erpa-gray-50 rounded-r-xl py-6 pr-6">
                &ldquo;We have incredible uptime and stability now with AWS.&rdquo;
                <footer className="mt-3 text-sm text-erpa-gray-600 not-italic flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">VP</div>
                  <span>&mdash; VP of Infrastructure, ERPA Customer</span>
                </footer>
              </blockquote>

              <div className="mt-8 p-6 bg-erpa-gray-50 rounded-xl">
                <h4 className="font-bold text-erpa-navy text-sm mb-3">AWS Certifications Held by ERPA Engineers</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Solutions Architect Pro", "DevOps Engineer Pro", "Database Specialty", "Security Specialty", "SysOps Administrator", "Cloud Practitioner"].map((cert) => (
                    <div key={cert} className="flex items-center text-xs text-erpa-gray-600">
                      <svg className="w-3.5 h-3.5 text-erpa-orange mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <LeadForm title="Talk to an AWS Expert" subtitle="Our engineers hold Amazon's highest-level certifications." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="AWS Cloud Services FAQ"
        description="Common questions about ERPA's AWS migration, managed services, and cloud architecture."
        faqs={awsFaqs}
      />

      <CTASection
        title="Modernize Your Enterprise Applications in the Cloud"
        description="Partner with ERPA to migrate, modernize, and manage your ERP systems on AWS."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Case Studies", href: "/resources/case-studies" }}
        variant="blue"
      />
    </>
  );
}
