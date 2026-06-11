import AnimatedCounter from "@/components/AnimatedCounter";

interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

interface StatsBarProps {
  stats: StatItem[];
  variant?: "light" | "dark";
}

export default function StatsBar({ stats, variant = "dark" }: StatsBarProps) {
  const isDark = variant === "dark";

  const wrapperClass = isDark
    ? "gradient-navy text-white"
    : "bg-white border border-gray-100 text-erpa-navy";

  const labelClass = isDark ? "text-gray-400" : "text-erpa-gray-600";
  const dividerClass = isDark ? "bg-white/10" : "bg-gray-200";

  return (
    <div className={`rounded-2xl px-8 py-10 ${wrapperClass}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
            {/* Vertical divider — shown only on desktop, not after last item */}
            {index < stats.length - 1 && (
              <div
                className={`hidden lg:block absolute top-0 right-0 w-px h-full ${dividerClass}`}
                aria-hidden="true"
              />
            )}

            {/* Optional icon */}
            {stat.icon && (
              <span
                className="mb-3 text-2xl leading-none"
                style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}
                role="img"
                aria-hidden="true"
              >
                {stat.icon}
              </span>
            )}

            {/* AnimatedCounter handles the value + label rendering */}
            <AnimatedCounter
              value={stat.value}
              label={stat.label}
              className="flex flex-col items-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/*
 * Usage Example:
 *
 * import StatsBar from "@/components/StatsBar";
 *
 * const stats = [
 *   { value: "500+", label: "Clients Served", icon: "🏢" },
 *   { value: "98%", label: "Client Retention", icon: "🤝" },
 *   { value: "4.9", label: "Average Rating", icon: "⭐" },
 *   { value: "15+", label: "Years Experience", icon: "📅" },
 * ];
 *
 * // Dark variant (gradient navy background)
 * <StatsBar stats={stats} variant="dark" />
 *
 * // Light variant (white background)
 * <StatsBar stats={stats} variant="light" />
 */
