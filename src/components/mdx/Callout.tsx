////////////////////////////////////////////////////////////////////////////////
// [Callout] Info/warning/tip boxes with colored left border
// Server component - no client interactivity needed
////////////////////////////////////////////////////////////////////////////////

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "important";
  title?: string;
  children: React.ReactNode;
}

const CALLOUT_STYLES = {
  info: { border: "border-l-blue-500", bg: "bg-blue-500/5", icon: "i" },
  warning: { border: "border-l-amber-500", bg: "bg-amber-500/5", icon: "!" },
  tip: { border: "border-l-emerald-500", bg: "bg-emerald-500/5", icon: "*" },
  important: { border: "border-l-purple-500", bg: "bg-purple-500/5", icon: "#" },
} as const;

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = CALLOUT_STYLES[type];

  return (
    <div
      className={`my-6 rounded-r-lg border-l-4 ${style.border} ${style.bg} p-4`}
    >
      {title && (
        <p className="mb-2 text-sm font-semibold text-zinc-200">{title}</p>
      )}
      <div className="text-sm text-zinc-400 [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
