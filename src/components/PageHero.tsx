import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid" />
      <div className="orb-blue -top-40 right-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumbs && (
          <nav className="mb-6 flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.name} className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.name}</Link>
              </span>
            ))}
          </nav>
        )}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-erpa-orange/10 border border-erpa-orange/20 text-sm text-erpa-orange font-semibold mb-4">
          {label}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl tracking-tight">{title}</h1>
        <p className="mt-5 text-lg text-gray-300 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
