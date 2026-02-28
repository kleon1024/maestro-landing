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
        : "text-slate-600";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className={`text-2xl font-bold ${trendColor || "text-slate-900"}`}>
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
      {source && (
        <p className="mt-2 text-xs text-slate-400">Source: {source}</p>
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
