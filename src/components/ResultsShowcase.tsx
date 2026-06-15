import Link from "next/link";

const results = [
  {
    client: "Illinois State University",
    metric: "30-min",
    description: "Infrastructure scaling during peak enrollment demand",
    solutions: ["AWS", "PeopleSoft"],
    solutionColors: {
      AWS: "bg-erpa-gold/10 text-erpa-gold",
      PeopleSoft: "bg-erpa-light-blue/10 text-erpa-light-blue",
    },
  },
  {
    client: "City of Boston",
    metric: "20+",
    description: "Contracts consolidated into a single agreement",
    solutions: ["Workday"],
    solutionColors: {
      Workday: "bg-erpa-orange/10 text-erpa-orange",
    },
  },
  {
    client: "AARP",
    metric: "98%",
    description: "Batch processes completed in under 15 minutes",
    solutions: ["AWS"],
    solutionColors: {
      AWS: "bg-erpa-gold/10 text-erpa-gold",
    },
  },
  {
    client: "University of Central Florida",
    metric: "65%",
    description: "Reduction in manual HR processes",
    solutions: ["Workday"],
    solutionColors: {
      Workday: "bg-erpa-orange/10 text-erpa-orange",
    },
  },
];

export default function ResultsShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero stat */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-3 flex items-center gap-2 justify-center">
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
            Results That Speak
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient">1,100+</span>{" "}
            <span className="text-erpa-navy">Organizations Transformed</span>
          </h2>
          <p className="mt-5 text-lg text-erpa-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real outcomes from real engagements. Here is what enterprise transformation looks like with ERPA.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.client}
              className="bg-white rounded-2xl border border-gray-100 p-8 card-gradient-border flex flex-col"
            >
              {/* Solution badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {result.solutions.map((solution) => (
                  <span
                    key={solution}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      result.solutionColors[solution as keyof typeof result.solutionColors]
                    }`}
                  >
                    {solution}
                  </span>
                ))}
              </div>

              {/* Big metric */}
              <div className="text-4xl sm:text-5xl font-bold text-erpa-orange tracking-tight">
                {result.metric}
              </div>

              {/* Client name */}
              <h3 className="mt-4 text-base font-bold text-erpa-navy">
                {result.client}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed flex-1">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 text-erpa-light-blue font-semibold hover:text-erpa-orange transition-colors duration-300"
          >
            See All Case Studies
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
