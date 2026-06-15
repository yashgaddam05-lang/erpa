import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A free 30-minute consultation where we assess your needs, identify pain points, and discuss how ERPA can help.",
    icon: (
      <svg
        className="w-7 h-7 text-erpa-light-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "We deliver a clear scope, timeline, and fixed-price proposal tailored to your organization. No surprises.",
    icon: (
      <svg
        className="w-7 h-7 text-erpa-light-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Delivery",
    description:
      "Our certified consultants execute with weekly updates, named resources, and full transparency.",
    icon: (
      <svg
        className="w-7 h-7 text-erpa-light-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Post go-live managed services, optimization, and a dedicated team that knows your environment.",
    icon: (
      <svg
        className="w-7 h-7 text-erpa-light-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 sm:py-28 bg-erpa-gray-50 relative overflow-hidden">
      {/* Subtle decorative orbs */}
      <div className="orb-blue -top-40 -left-40 opacity-10" />
      <div className="orb-orange -bottom-40 -right-40 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-3 flex items-center gap-2 justify-center">
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
            Our Process
            <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-erpa-gray-600 leading-relaxed">
            From first call to long-term partnership — a transparent, proven
            process built around your success.
          </p>
        </div>

        {/* === VERTICAL TIMELINE (mobile & tablet) === */}
        <ol className="relative lg:hidden" aria-label="How we work steps">
          {steps.map((step, index) => (
            <li key={step.number} className="flex gap-5 pb-12 last:pb-0">
              {/* Connector column */}
              <div
                className="flex flex-col items-center flex-shrink-0"
                aria-hidden="true"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-erpa-orange text-white font-bold text-sm shadow-lg shadow-orange-500/20">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 mt-3 border-l-2 border-dashed border-erpa-gray-200" />
                )}
              </div>

              {/* Step card */}
              <div className="card-gradient-border flex-1 rounded-2xl bg-white border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-erpa-light-blue/10">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-erpa-navy text-lg leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-erpa-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* === HORIZONTAL TIMELINE (desktop) === */}
        <div
          className="hidden lg:block"
          aria-label="How we work steps"
          role="list"
        >
          <div className="relative flex items-start">
            {/* Dashed connecting line spanning between first and last circles */}
            <div
              className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] border-t-2 border-dashed border-erpa-gray-200"
              aria-hidden="true"
            />

            <div className="relative flex w-full gap-6" role="presentation">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex-1 flex flex-col items-center"
                  role="listitem"
                >
                  {/* Step number circle */}
                  <div
                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-erpa-orange text-white font-bold text-sm shadow-lg shadow-orange-500/20 mb-8"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Step card */}
                  <div className="card-gradient-border w-full rounded-2xl bg-white border border-gray-100 p-7 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-erpa-light-blue/10">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-erpa-navy text-lg leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-erpa-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 bg-erpa-orange text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 text-base"
          >
            Start With a Free Consultation
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
          <p className="mt-4 text-sm text-erpa-gray-600">
            No commitment required — we will outline exactly how we can help.
          </p>
        </div>
      </div>
    </section>
  );
}
