"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "inline" | "card";
}

export default function NewsletterSignup({ variant = "inline" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={
          variant === "card"
            ? "bg-white/5 rounded-2xl border border-white/10 p-8 text-center"
            : "flex items-center gap-2 text-sm text-green-400"
        }
      >
        {/* Mail check icon */}
        <svg
          className={variant === "card" ? "w-10 h-10 text-green-400 mx-auto mb-3" : "w-4 h-4"}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className={variant === "card" ? "text-white font-semibold text-lg block" : ""}>
          You&apos;re subscribed!
        </span>
        {variant === "card" && (
          <p className="text-sm text-gray-400 mt-1">
            Thanks for joining 5,000+ enterprise technology leaders.
          </p>
        )}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
        <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          Get the latest insights on Workday, AWS, and PeopleSoft delivered to
          your inbox.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-3">
            <label htmlFor="newsletter-card-email" className="sr-only">
              Work email address
            </label>
            <input
              id="newsletter-card-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your work email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-erpa-orange focus:ring-1 focus:ring-erpa-orange transition-colors"
              aria-describedby={error ? "newsletter-card-error" : undefined}
              autoComplete="email"
            />
            {error && (
              <p id="newsletter-card-error" className="text-xs text-red-400" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 text-sm shadow-lg shadow-orange-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-gray-500">
          Join 5,000+ enterprise technology leaders. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  // inline variant
  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-inline-email" className="sr-only">
          Work email address
        </label>
        <input
          id="newsletter-inline-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter your work email"
          className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-erpa-orange focus:ring-1 focus:ring-erpa-orange transition-colors"
          aria-describedby={error ? "newsletter-inline-error" : undefined}
          autoComplete="email"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 text-sm shadow-md shadow-orange-500/20 shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Subscribe
        </button>
      </div>
      {error && (
        <p id="newsletter-inline-error" className="mt-2 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-gray-500">
        Join 5,000+ enterprise technology leaders. Unsubscribe anytime.
      </p>
    </form>
  );
}
