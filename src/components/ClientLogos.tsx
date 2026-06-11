"use client";

const clients = [
  "MSCI", "AARP", "P.F. Chang's", "City of Boston", "Arizona State University",
  "Illinois State University", "Papa Johns", "Acenda", "Kansas City University",
  "MSCI", "AARP", "P.F. Chang's", "City of Boston", "Arizona State University",
  "Illinois State University", "Papa Johns", "Acenda", "Kansas City University",
];

export default function ClientLogos() {
  return (
    <section className="py-8 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-erpa-gray-600 uppercase tracking-widest text-center mb-6">
          Trusted by 1,100+ organizations including
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="logo-scroll">
            {clients.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
              >
                <div className="px-5 py-2.5 bg-erpa-gray-50 rounded-lg border border-gray-100">
                  <span className="text-sm font-semibold text-erpa-gray-600 whitespace-nowrap">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
