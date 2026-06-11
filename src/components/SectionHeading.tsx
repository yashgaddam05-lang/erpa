interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {label && (
        <p className="text-sm font-semibold text-erpa-orange uppercase tracking-wider mb-3 flex items-center gap-2 justify-center">
          <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
          {label}
          <span className="w-8 h-px bg-erpa-orange/50 hidden sm:block" />
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-erpa-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
