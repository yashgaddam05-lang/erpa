import Link from "next/link";

const tiers = [
  {
    name: "Advisory",
    price: "Starting at $5K",
    description: "Strategic guidance and assessments",
    features: [
      "Free initial consultation",
      "Technology assessment & roadmap",
      "Vendor evaluation support",
      "Executive briefing & recommendations",
    ],
    cta: "Book a Free Call",
    href: "/contact",
    accent: "erpa-light-blue",
    popular: false,
  },
  {
    name: "Project",
    price: "$25K – $500K+",
    description: "Full implementation and migration",
    features: [
      "Everything in Advisory",
      "Dedicated project team",
      "Workday/AWS/PeopleSoft implementation",
      "Custom integrations & data migration",
      "Go-live support & training",
    ],
    cta: "Get a Custom Proposal",
    href: "/contact",
    accent: "erpa-orange",
    popular: true,
  },
  {
    name: "Managed Services",
    price: "Custom monthly",
    description: "Ongoing support and optimization",
    features: [
      "Everything in Project",
      "Named dedicated resources",
      "24/7 system monitoring",
      "Release management",
      "Proactive optimization & reporting",
    ],
    cta: "Discuss Your Needs",
    href: "/contact",
    accent: "erpa-gold",
    popular: false,
  },
] as const;

const accentClasses = {
  "erpa-light-blue": {
    badge: "bg-erpa-light-blue/10 text-erpa-light-blue",
    price: "text-erpa-light-blue",
    check: "text-erpa-light-blue",
    button:
      "bg-erpa-light-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30",
  },
  "erpa-orange": {
    badge: "bg-erpa-orange/10 text-erpa-orange",
    price: "text-erpa-orange",
    check: "text-erpa-orange",
    button:
      "bg-erpa-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30",
  },
  "erpa-gold": {
    badge: "bg-erpa-gold/10 text-erpa-gold",
    price: "text-erpa-gold",
    check: "text-erpa-gold",
    button:
      "bg-erpa-gold text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30",
  },
} as const;

export default function PricingTransparency() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-3 flex items-center gap-2 justify-center">
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
            Pricing
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">
            Transparent Engagement Models
          </h2>
          <p className="mt-4 text-lg text-erpa-gray-600 leading-relaxed">
            We believe in clarity from day one. Every engagement starts with a
            free consultation and a fixed-price proposal.
          </p>
        </div>

        {/* Tier cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const colors = accentClasses[tier.accent];

            return (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl card-gradient-border flex flex-col ${
                  tier.popular
                    ? "border-2 border-erpa-orange scale-100 md:scale-105 z-10 shadow-xl shadow-orange-500/10"
                    : "border border-gray-100"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-erpa-orange text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Tier name */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${colors.badge}`}
                    >
                      {tier.name}
                    </span>
                  </div>

                  {/* Price */}
                  <p
                    className={`mt-5 text-3xl sm:text-4xl font-bold tracking-tight ${colors.price}`}
                  >
                    {tier.price}
                  </p>
                  <p className="mt-2 text-sm text-erpa-gray-600">
                    {tier.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gray-100" />

                  {/* Features */}
                  <ul className="space-y-3.5 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm text-erpa-gray-600"
                      >
                        <svg
                          className={`w-4 h-4 ${colors.check} mt-0.5 mr-2.5 shrink-0`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={tier.href}
                    className={`mt-8 block w-full text-center px-6 py-3.5 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${colors.button}`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust text */}
        <p className="mt-12 text-center text-sm text-erpa-gray-600 flex items-center justify-center gap-2 flex-wrap">
          <svg
            className="w-4 h-4 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          All engagements start with a free, no-obligation consultation.
          Fixed pricing, no hidden fees.
        </p>
      </div>
    </section>
  );
}
