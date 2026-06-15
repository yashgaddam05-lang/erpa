interface Badge {
  title: string;
  subtitle?: string;
  accentColor: string;
  bgColor: string;
  icon: React.ReactNode;
}

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 4h2a2 2 0 012 2v1a4 4 0 01-4 4m-6-7H6a2 2 0 00-2 2v1a4 4 0 004 4m0 0h4m-4 0v3a4 4 0 004 4 4 4 0 004-4v-3m0 0h-4m4 0a4 4 0 004-4V6a2 2 0 00-2-2h-2M8 4h8M8 4V2m8 2V2m-4 16v2m-3 0h6"
    />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const badges: Badge[] = [
  {
    title: "Workday Certified Deployment Partner",
    accentColor: "bg-erpa-light-blue",
    bgColor: "bg-blue-50",
    icon: <ShieldIcon className="w-5 h-5 text-white" />,
  },
  {
    title: "AWS Advanced Tier Services Partner",
    accentColor: "bg-erpa-orange",
    bgColor: "bg-orange-50",
    icon: <ShieldIcon className="w-5 h-5 text-white" />,
  },
  {
    title: "Oracle PeopleSoft Certified",
    accentColor: "bg-red-600",
    bgColor: "bg-red-50",
    icon: <ShieldIcon className="w-5 h-5 text-white" />,
  },
  {
    title: "Inc. 5000 Fastest Growing",
    subtitle: "2024, 2025, 2026",
    accentColor: "bg-erpa-gold",
    bgColor: "bg-amber-50",
    icon: <TrophyIcon className="w-5 h-5 text-white" />,
  },
  {
    title: "Great Place to Work",
    accentColor: "bg-green-600",
    bgColor: "bg-green-50",
    icon: <HeartIcon className="w-5 h-5 text-white" />,
  },
  {
    title: "25+ Years of Excellence",
    subtitle: "Since 1999",
    accentColor: "bg-erpa-navy",
    bgColor: "bg-slate-50",
    icon: <ClockIcon className="w-5 h-5 text-white" />,
  },
];

interface AwardsBadgesProps {
  variant?: "compact" | "full";
}

export default function AwardsBadges({ variant = "full" }: AwardsBadgesProps) {
  if (variant === "compact") {
    return (
      <section aria-label="Awards and Certifications">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-7 h-7 rounded-full ${badge.accentColor} flex items-center justify-center shrink-0`}
              >
                <span className="w-3.5 h-3.5 [&>svg]:w-3.5 [&>svg]:h-3.5">{badge.icon}</span>
              </div>
              <p className="text-xs font-semibold text-erpa-navy leading-tight">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Awards and Certifications">
      <p className="text-xs font-semibold text-erpa-gray-600 uppercase tracking-wider text-center mb-5">
        Awards &amp; Certifications
      </p>

      <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-x-visible items-stretch justify-center gap-4 pb-2 md:pb-0 scrollbar-hide">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="w-40 shrink-0 flex flex-col items-center px-4 py-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            {/* Icon circle */}
            <div
              className={`w-10 h-10 rounded-full ${badge.accentColor} flex items-center justify-center mb-3`}
            >
              {badge.icon}
            </div>

            {/* Title */}
            <p className="text-xs font-semibold text-erpa-navy text-center leading-tight">
              {badge.title}
            </p>

            {/* Subtitle */}
            {badge.subtitle && (
              <p className="text-xs text-erpa-gray-600 text-center mt-1">
                {badge.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
