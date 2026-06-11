"use client";

import { useState } from "react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function LeadForm({ title = "Talk to an Expert", subtitle, compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl ${compact ? "p-6" : "p-8"} border border-gray-100 text-center`}>
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-erpa-navy">Thank You!</h3>
        <p className="mt-2 text-erpa-gray-600">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl ${compact ? "p-6" : "p-8"} border border-gray-100 shadow-sm`}>
      <h3 className={`${compact ? "text-lg" : "text-2xl"} font-bold text-erpa-navy`}>{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-erpa-gray-600">{subtitle}</p>}

      {/* Time expectation badge */}
      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Takes less than 60 seconds
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className={compact ? "" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input id="firstName" type="text" placeholder="First Name *" required className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all" />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input id="lastName" type="text" placeholder="Last Name *" required className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Work Email</label>
          <input id="email" type="email" placeholder="Work Email *" required className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all" />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">Organization</label>
          <input id="company" type="text" placeholder="Organization *" required className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all" />
        </div>
        {!compact && (
          <>
            <div>
              <label htmlFor="interest" className="sr-only">Area of Interest</label>
              <select id="interest" className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm text-erpa-gray-600 focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none transition-all">
                <option value="">Area of Interest</option>
                <option value="workday">Workday Solutions</option>
                <option value="aws">AWS Solutions</option>
                <option value="peoplesoft">PeopleSoft Solutions</option>
                <option value="ai">AI & Innovation</option>
                <option value="staffing">Staffing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={3} placeholder="Tell us about your needs (optional)..." className="w-full px-4 py-3 bg-erpa-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-erpa-light-blue focus:border-transparent focus:bg-white outline-none resize-none transition-all" />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full px-6 py-3.5 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          Schedule a Free Consultation
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Trust reinforcement */}
        <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-erpa-gray-600">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No spam, ever
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Response within 24 hrs
          </span>
        </div>
      </form>
    </div>
  );
}
