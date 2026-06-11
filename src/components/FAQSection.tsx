"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
}: FAQSectionProps) {
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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} description={description} />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="rounded-2xl bg-white border border-gray-100 p-8">
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
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                        onClick={() => toggle(index)}
                        className="flex w-full items-center justify-between text-left py-5 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-erpa-orange focus-visible:ring-offset-2 rounded"
                      >
                        <span className="font-semibold text-erpa-navy text-base">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex-shrink-0 flex items-center justify-center w-6 h-6 text-erpa-orange transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 4V16M4 10H16"
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
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-erpa-gray-600 text-sm leading-relaxed pb-5">
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

/*
 * Usage Example:
 *
 * import FAQSection from "@/components/FAQSection";
 *
 * const faqs = [
 *   {
 *     question: "What services does ERPA offer?",
 *     answer: "ERPA provides enterprise consulting services including ERP implementation, process optimization, and digital transformation.",
 *   },
 *   {
 *     question: "How long does an ERP implementation take?",
 *     answer: "Typical implementations range from 3 to 18 months depending on scope, company size, and complexity.",
 *   },
 * ];
 *
 * <FAQSection
 *   title="Common Questions"
 *   description="Find answers to the most frequently asked questions about our services."
 *   faqs={faqs}
 * />
 */
