"use client";

import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  stats?: { value: string; label: string }[];
}

export default function HeroSection({
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
}: HeroSectionProps) {
  return (
    <section className="relative gradient-hero-animated text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 hero-grid" />

      {/* Decorative orbs */}
      <div className="orb-blue -top-32 -right-32 opacity-50" />
      <div className="orb-orange bottom-0 left-1/4 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="animate-fade-up">
            {/* Trust badge above headline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by 1,100+ organizations for 25+ years
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {title}
              {highlight && <span className="text-gradient"> {highlight}</span>}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group px-8 py-4 bg-erpa-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 text-base shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                  >
                    {primaryCta.text}
                    <svg className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-base"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}

            {/* Quick social proof below CTAs */}
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-amber-500"].map((bg, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-erpa-navy flex items-center justify-center text-[10px] font-bold text-white`}>
                    {["M", "A", "P", "C"][i]}
                  </div>
                ))}
              </div>
              <span>Join MSCI, AARP, P.F. Chang&apos;s & more</span>
            </div>
          </div>

          {/* Right: Floating visual element */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main glass card */}
              <div className="glass rounded-2xl p-8 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm font-medium text-gray-300">Live Platform Status</span>
                  </div>
                  {[
                    { platform: "Workday", status: "Operational", color: "bg-blue-400" },
                    { platform: "AWS Cloud", status: "Operational", color: "bg-orange-400" },
                    { platform: "PeopleSoft", status: "Operational", color: "bg-red-400" },
                  ].map((item) => (
                    <div key={item.platform} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium text-white">{item.platform}</span>
                      </div>
                      <span className="text-xs text-green-400 font-medium">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating metric card */}
              <div className="absolute -bottom-6 -left-8 glass rounded-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-erpa-orange/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">30-40%</p>
                    <p className="text-[11px] text-gray-400">Faster deployment</p>
                  </div>
                </div>
              </div>

              {/* Floating badge card */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-erpa-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-semibold text-white">25+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar with animated counters */}
        {stats && (
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
