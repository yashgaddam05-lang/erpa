const partners = [
  {
    name: "Workday",
    level: "Services Partner",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "AWS",
    level: "Advanced Consulting Partner",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Oracle",
    level: "Platinum Partner",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    color: "from-red-500 to-red-700",
  },
];

export default function PartnerBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {partners.map((p) => (
        <div
          key={p.name}
          className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300"
        >
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-erpa-navy leading-tight">{p.name}</p>
            <p className="text-[11px] text-erpa-gray-600 leading-tight">{p.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
