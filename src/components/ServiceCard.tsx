import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, href, features }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-gray-100 p-8 card-gradient-border"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-erpa-light-blue/10 to-erpa-light-blue/5 rounded-xl flex items-center justify-center text-erpa-light-blue mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-3 text-erpa-gray-600 leading-relaxed text-sm">{description}</p>
      {features && (
        <ul className="mt-5 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start text-sm text-erpa-gray-600">
              <svg className="w-4 h-4 text-erpa-orange mt-0.5 mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 pt-5 border-t border-gray-100 text-sm font-semibold text-erpa-light-blue group-hover:text-erpa-orange transition-colors duration-300 flex items-center">
        Explore solutions
        <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
