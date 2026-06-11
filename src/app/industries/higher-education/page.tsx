import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import StatsBar from "@/components/StatsBar";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Higher Education Technology Consulting | Workday Student & PeopleSoft",
  description: "ERPA delivers Workday Student, PeopleSoft, and AWS solutions for colleges and universities. 25+ years serving higher education. OPTIMA fixed-cost deployments.",
  keywords: ["higher education ERP", "Workday Student implementation", "PeopleSoft higher education", "university ERP consulting", "college technology modernization", "campus solutions"],
};

const higherEdStats = [
  { value: "200+", label: "Higher Ed Clients" },
  { value: "15 yrs", label: "Campus Solutions Experience" },
  { value: "99.9%", label: "System Uptime" },
  { value: "50+", label: "Workday Student Deployments" },
];

const higherEdFaqs = [
  {
    question: "Workday Student vs PeopleSoft Campus Solutions — which is right for my institution?",
    answer: "The answer depends on your institution's size, budget model, and long-term strategy. Workday Student is a modern SaaS platform built for institutions seeking a unified HCM, Finance, and Student system with a single data model and regular feature releases. PeopleSoft Campus Solutions remains a strong choice for institutions that require deep configurability, have significant existing customizations, or operate in a budget environment that favors a managed on-premise or hosted model. ERPA has deep expertise in both platforms and will help you perform a thorough fit-gap analysis before you make a decision.",
  },
  {
    question: "How long does a Workday Student implementation typically take for a university?",
    answer: "A full Workday Student implementation for a mid-sized institution generally spans 18 to 30 months, covering recruiting, admissions, financial aid, student records, advising, and degree audit. Smaller community colleges with a more focused scope can go live in 12 to 18 months. ERPA's OPTIMA methodology uses fixed-cost, phase-gated delivery to compress timelines and eliminate budget surprises. We co-deploy Workday HCM and Finance in parallel where possible, reducing overall program duration.",
  },
  {
    question: "How does ERPA handle data migration from a legacy Student Information System?",
    answer: "Legacy SIS data migration is one of the highest-risk aspects of any higher education ERP project. ERPA's approach starts with a full data audit to identify quality issues in student records, transcripts, financial aid history, and HR data. We then build extraction, transformation, and load (ETL) pipelines using Workday's EIB and iLoad tools for Workday projects, and PeopleSoft Data Mover or Application Engine for PeopleSoft migrations. We run multiple mock-load cycles to validate data integrity before go-live, and maintain rollback procedures throughout.",
  },
  {
    question: "Which colleges and universities has ERPA worked with?",
    answer: "ERPA has served more than 200 higher education institutions across the United States. Notable clients include Illinois State University, Kansas City University, Daytona State College, Florida State College at Jacksonville, Alabama State University, and Dunwoody College of Technology. Our team includes consultants who have worked in higher education administration themselves, giving us firsthand understanding of the academic calendar, shared governance, and accreditation requirements that shape every technology decision.",
  },
  {
    question: "Can ERPA support an institution that runs both Workday and PeopleSoft simultaneously?",
    answer: "Yes. Many institutions operate Workday HCM alongside PeopleSoft Campus Solutions during a multi-year transition, or maintain PeopleSoft Finance while migrating to Workday Student. ERPA has extensive experience designing integration architectures that keep these systems in sync — synchronizing person and organizational data, routing financial aid transactions, and managing reporting across platforms. We also provide managed services for both platforms so you have a single partner accountable for the full environment.",
  },
  {
    question: "What does ERPA's OPTIMA methodology mean for a higher education project?",
    answer: "OPTIMA is ERPA's fixed-cost, outcome-based delivery methodology built specifically for higher education. It replaces open-ended time-and-materials billing with a predictable engagement where scope, timeline, and cost are locked before work begins. OPTIMA includes a pre-packaged higher education configuration library drawn from 200+ prior implementations, AI-accelerated testing using Workday's automation tools, and a dedicated higher education change management playbook. Institutions using OPTIMA consistently report faster go-lives and lower total cost of ownership compared to traditional implementation approaches.",
  },
];

export default function HigherEducationPage() {
  return (
    <>
      <PageHero
        label="Higher Education"
        title="Technology Consulting for Colleges & Universities"
        description="80% of US postsecondary institutions have yet to select a SaaS-architected Finance or HCM platform. ERPA helps institutions modernize with Workday, optimize PeopleSoft, and migrate to AWS."
        breadcrumbs={[{ name: "Industries", href: "/industries/higher-education" }]}
      />

      {/* Campus Photo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
              alt="University campus buildings and grounds"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-erpa-navy/80 via-erpa-navy/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-erpa-orange mb-3">
                Trusted by 200+ Institutions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Built for the Complexity of Higher Education
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                From community colleges to flagship research universities, ERPA delivers technology solutions that respect the unique governance, compliance, and mission of academic institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar stats={higherEdStats} variant="dark" />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Challenge"
            title="Higher Education Needs Modern Technology"
            description="Budget constraints, aging infrastructure, and increasing demands from students and faculty make technology modernization essential, not optional."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Workday for Higher Ed",
                href: "/solutions/workday",
                desc: "Workday Student, HCM, Financial Management, and Payroll. OPTIMA methodology delivers fixed-cost deployments tailored for institutions.",
                stat: "18 yrs avg. higher ed experience",
                icon: (
                  <svg className="w-6 h-6 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                ),
                iconBg: "bg-blue-50",
              },
              {
                title: "PeopleSoft for Higher Ed",
                href: "/solutions/peoplesoft",
                desc: "Maximize and modernize PeopleSoft Campus Solutions, HCM, and Finance. Expert managed services from hundreds of SMEs.",
                stat: "25 years serving higher ed",
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                iconBg: "bg-purple-50",
              },
              {
                title: "AWS for Higher Ed",
                href: "/solutions/aws",
                desc: "Migrate PeopleSoft and other campus applications to AWS for improved performance, scalability, and cost savings.",
                stat: "24-hour migration capability",
                icon: (
                  <svg className="w-6 h-6 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                iconBg: "bg-orange-50",
              },
            ].map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="card-gradient-border group block bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${solution.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{solution.desc}</p>
                <p className="mt-4 text-xs font-semibold text-erpa-orange">{solution.stat}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Success Stories" title="Higher Education Clients" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { client: "Illinois State University", result: "30-minute infrastructure scaling with AWS migration" },
              { client: "Kansas City University", result: "Automated student sponsorship invoicing" },
              { client: "Daytona State College", result: "PeopleSoft scalability through AWS" },
              { client: "Florida State College at Jacksonville", result: "4 PeopleSoft apps live on AWS in 24 hours" },
              { client: "Alabama State University", result: "Immediate stabilization for 6,000 students" },
              { client: "Dunwoody College", result: "Selected, implemented, and optimized Workday" },
            ].map((cs) => (
              <div
                key={cs.client}
                className="card-gradient-border bg-white rounded-lg p-6 border border-gray-100"
              >
                <div className="w-8 h-8 bg-erpa-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-erpa-navy">{cs.client}</p>
                <p className="mt-2 text-sm text-erpa-orange font-medium">{cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Higher Education ERP Questions Answered"
        description="Common questions from campus IT leaders, finance teams, and provost offices navigating ERP decisions."
        faqs={higherEdFaqs}
      />

      {/* Lead Gen */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Get Started" title="Start Your Modernization Journey" centered={false} />
            <p className="mt-4 text-erpa-gray-600">
              Whether you are evaluating Workday, optimizing PeopleSoft, or migrating to AWS, ERPA understands the unique challenges of higher education.
            </p>
            <blockquote className="mt-6 border-l-4 border-erpa-orange pl-6 italic text-erpa-gray-800">
              &ldquo;Automating student sponsorship invoicing with ERPA&apos;s help has been a game-changer for our finance team.&rdquo;
            </blockquote>
          </div>
          <LeadForm title="Talk to a Higher Ed Expert" />
        </div>
      </section>

      <CTASection
        title="Transform Your Institution's Technology"
        description="Join the growing number of colleges and universities partnering with ERPA."
        primaryCta={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Case Studies", href: "/resources/case-studies" }}
      />
    </>
  );
}
