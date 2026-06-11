interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const authorColors: Record<string, string> = {
  CIO: "bg-blue-500",
  "Director of IT": "bg-purple-500",
  "VP of Technology": "bg-emerald-500",
  CFO: "bg-amber-500",
};

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  const avatarColor = authorColors[author] || "bg-erpa-light-blue";

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-erpa-light-blue/20 transition-all duration-300 relative">
      {/* Large decorative quote mark */}
      <div className="absolute top-6 right-8 text-6xl font-serif text-erpa-orange/8 leading-none select-none">&ldquo;</div>

      {/* Star rating */}
      <div className="flex gap-0.5 mb-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-4 h-4 text-erpa-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-erpa-gray-800 leading-relaxed relative z-10">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
          {initials}
        </div>
        <div>
          <p className="font-semibold text-erpa-navy text-sm">{author}</p>
          <p className="text-xs text-erpa-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
}
