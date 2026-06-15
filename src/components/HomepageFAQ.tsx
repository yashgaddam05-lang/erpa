"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is ERPA and what services do you offer?",
    answer:
      "ERPA is an enterprise technology consulting firm with over 25 years of experience. We specialize in Workday implementation and optimization, AWS cloud migration and managed services, PeopleSoft modernization, staffing solutions, and AI-powered enterprise transformation. Our 500+ consultants help organizations streamline HR, finance, payroll, and IT operations across industries.",
  },
  {
    question: "How much does a Workday implementation cost?",
    answer:
      "Workday implementation costs vary based on organization size, number of modules, complexity of integrations, and data migration requirements. Projects typically span 6 to 18 months. ERPA provides fixed-price proposals after an initial discovery phase, so you get full cost transparency before committing. Contact us for a free consultation and custom estimate tailored to your organization.",
  },
  {
    question: "What industries does ERPA serve?",
    answer:
      "ERPA serves a wide range of industries including higher education, state and local government, healthcare, retail and hospitality, and Fortune 500 enterprises. Our consultants bring deep domain expertise in each sector, with specialized knowledge of compliance requirements, industry-specific workflows, and best practices that drive faster, more successful implementations.",
  },
  {
    question: "How is ERPA different from other Workday partners?",
    answer:
      "ERPA stands apart with 25 years of enterprise consulting experience and 1,100+ successful customer partnerships. We are the only partner that combines Workday and AWS expertise under one roof. Our consultants average 8 years of hands-on experience and hold 5+ certifications each. We assign named resources for accountability, and our combined platform approach means fewer vendors, lower risk, and faster time to value.",
  },
  {
    question: "Can ERPA help migrate PeopleSoft to the cloud?",
    answer:
      "Yes. ERPA has deep expertise in migrating PeopleSoft environments to AWS. Our ActiveGenie platform provides automated cloud infrastructure management with self-healing capabilities and predictive scaling. We offer full managed services during and after migration, ensuring zero disruption to your operations. Whether you want to lift-and-shift, modernize, or run a hybrid approach, we have a proven playbook.",
  },
  {
    question: "Do you offer ongoing support after go-live?",
    answer:
      "Absolutely. ERPA provides Application Management Services (AMS) for ongoing post-go-live support across Workday, PeopleSoft, and AWS. You get named resources who know your environment, flexible scaling to match your needs, and proactive monitoring and optimization. Our managed services clients see continuous improvement in system performance, user adoption, and operational efficiency.",
  },
];

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-24 bg-erpa-gray-50">
      {/* Schema.org FAQ structured data for Google "People Also Ask" */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-3 flex items-center gap-2 justify-center">
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
            FAQ
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-erpa-gray-600 leading-relaxed">
            Everything you need to know about working with ERPA
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
            <dl className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`${index < faqs.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <dt>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`homepage-faq-answer-${index}`}
                        id={`homepage-faq-question-${index}`}
                        onClick={() => toggle(index)}
                        className="flex w-full items-center justify-between text-left py-5 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-orange focus-visible:ring-offset-2 rounded"
                      >
                        <span className="font-semibold text-erpa-navy text-base">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-erpa-orange text-white rotate-45"
                              : "bg-erpa-gray-100 text-erpa-gray-600 rotate-0"
                          }`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 3V13M3 8H13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`homepage-faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`homepage-faq-question-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-erpa-gray-600 text-sm leading-relaxed pb-5 pr-11">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
