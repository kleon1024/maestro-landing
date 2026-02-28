////////////////////////////////////////////////////////////////////////////////
// [MetricGrid + Metric] Grid of stat cards
// Server component
////////////////////////////////////////////////////////////////////////////////

interface MetricProps {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
  source?: string;
}

export function Metric({ value, label, trend, source }: MetricProps) {
  const trendColor =
    trend === "up"
      ? "text-emerald-600"
      : trend === "down"
        ? "text-red-600"
        : "text-[#475569]";

  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white p-4">
      <p className={`text-2xl font-bold ${trendColor || "text-[#1A2744]"}`}>
        {value}
      </p>
      <p className="mt-1 text-sm text-[#475569]">{label}</p>
      {source && (
        <p className="mt-2 text-xs text-[#94A3B8]">Source: {source}</p>
      )}
    </div>
  );
}

interface MetricGridProps {
  children: React.ReactNode;
}

export function MetricGrid({ children }: MetricGridProps) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
