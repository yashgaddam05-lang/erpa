interface ComparisonTableProps {
  title: string;
  description?: string;
  columns: string[];
  rows: Array<{
    feature: string;
    values: (string | boolean)[];
  }>;
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-400 mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ComparisonTable({
  title,
  description,
  columns,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="w-full">
      {/* Title and description */}
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-erpa-navy tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-erpa-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Scrollable table container */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100">
        <table className="w-full min-w-[600px] border-collapse" role="table">
          <thead>
            <tr className="bg-erpa-navy">
              {/* Feature column header */}
              <th
                scope="col"
                className="sticky left-0 z-10 bg-erpa-navy text-white font-semibold text-sm text-left px-6 py-4 min-w-[160px]"
              >
                Feature
              </th>
              {columns.map((col, colIndex) => (
                <th
                  key={colIndex}
                  scope="col"
                  className="text-white font-semibold text-sm text-center px-6 py-4 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const isEven = rowIndex % 2 === 0;
              return (
                <tr
                  key={rowIndex}
                  className={isEven ? "bg-white" : "bg-erpa-gray-50"}
                >
                  {/* Feature label — sticky on mobile */}
                  <td
                    className={`sticky left-0 z-10 font-medium text-erpa-navy text-sm px-6 py-4 ${
                      isEven ? "bg-white" : "bg-erpa-gray-50"
                    }`}
                  >
                    {row.feature}
                  </td>
                  {row.values.map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      className="text-center px-6 py-4 text-sm text-erpa-gray-600"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <span role="img" aria-label="Included">
                            <CheckIcon />
                          </span>
                        ) : (
                          <span role="img" aria-label="Not included">
                            <CrossIcon />
                          </span>
                        )
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/*
 * Usage Example:
 *
 * import ComparisonTable from "@/components/ComparisonTable";
 *
 * <ComparisonTable
 *   title="Compare Our Plans"
 *   description="Choose the plan that best fits your organization's needs."
 *   columns={["Starter", "Growth", "Enterprise"]}
 *   rows={[
 *     { feature: "Users", values: ["Up to 10", "Up to 50", "Unlimited"] },
 *     { feature: "ERP Integration", values: [false, true, true] },
 *     { feature: "Dedicated Support", values: [false, false, true] },
 *     { feature: "Custom Workflows", values: [false, true, true] },
 *     { feature: "Analytics Dashboard", values: ["Basic", "Advanced", "Custom"] },
 *   ]}
 * />
 */
