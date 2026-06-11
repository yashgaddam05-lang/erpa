interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="w-full">
      {/* === VERTICAL TIMELINE (mobile & tablet) === */}
      <ol className="relative lg:hidden" aria-label="Process steps">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-6 pb-10 last:pb-0">
            {/* Connector column */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-erpa-orange text-white font-bold text-sm flex-shrink-0 z-10">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
              )}
            </div>

            {/* Step card */}
            <div className="card-gradient-border flex-1 rounded-2xl bg-white border border-gray-100 p-6 mb-0">
              {step.icon && (
                <span
                  className="text-2xl mb-2 block"
                  role="img"
                  aria-hidden="true"
                >
                  {step.icon}
                </span>
              )}
              <h3 className="font-bold text-erpa-navy text-lg leading-snug">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-erpa-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* === HORIZONTAL TIMELINE (desktop) === */}
      <div className="hidden lg:block" aria-label="Process steps">
        {/* Connector row */}
        <div className="relative flex items-start">
          {/* Background connecting line spans the full row */}
          <div
            className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200"
            aria-hidden="true"
          />

          <ol className="relative flex w-full gap-0">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                {/* Numbered circle */}
                <div
                  className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-erpa-orange text-white font-bold text-sm mb-6"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Step card */}
                <div className="card-gradient-border w-full rounded-2xl bg-white border border-gray-100 p-6 mx-2">
                  {step.icon && (
                    <span
                      className="text-2xl mb-2 block"
                      role="img"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </span>
                  )}
                  <h3 className="font-bold text-erpa-navy text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-erpa-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/*
 * Usage Example:
 *
 * import ProcessTimeline from "@/components/ProcessTimeline";
 *
 * const steps = [
 *   {
 *     number: "01",
 *     title: "Discovery & Assessment",
 *     description: "We audit your current systems and map out business requirements.",
 *     icon: "🔍",
 *   },
 *   {
 *     number: "02",
 *     title: "Solution Design",
 *     description: "Our architects design a tailored ERP blueprint for your needs.",
 *     icon: "📐",
 *   },
 *   {
 *     number: "03",
 *     title: "Implementation",
 *     description: "Phased rollout with minimal disruption to daily operations.",
 *     icon: "⚙️",
 *   },
 *   {
 *     number: "04",
 *     title: "Training & Go-Live",
 *     description: "Hands-on training and support for a confident go-live.",
 *     icon: "🚀",
 *   },
 * ];
 *
 * <ProcessTimeline steps={steps} />
 */
