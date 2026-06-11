import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  variant?: "navy" | "blue" | "orange";
}

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "navy",
}: CTASectionProps) {
  const bg = variant === "navy" ? "gradient-navy" : variant === "blue" ? "gradient-blue" : "bg-erpa-orange";

  return (
    <section className={`${bg} text-white relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="orb-blue -top-20 -right-20 opacity-20" />
      <div className="orb-orange -bottom-20 -left-20 opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`group px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-base ${
              variant === "orange"
                ? "bg-white text-erpa-orange hover:bg-gray-100 shadow-lg"
                : "bg-erpa-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            }`}
          >
            {primaryCta.text}
            <svg className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-base"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>

        {/* Trust reinforcement */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free consultation
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No obligation
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Response within 24 hours
          </span>
        </div>
      </div>
    </section>
  );
}
