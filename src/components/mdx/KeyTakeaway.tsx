////////////////////////////////////////////////////////////////////////////////
// [KeyTakeaway] Highlighted summary box
// Server component
////////////////////////////////////////////////////////////////////////////////

interface KeyTakeawayProps {
  title?: string;
  children: React.ReactNode;
}

export function KeyTakeaway({
  title = "Key Takeaway",
  children,
}: KeyTakeawayProps) {
  return (
    <div className="my-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-5">
      <p className="mb-3 text-xs font-mono uppercase tracking-wider text-blue-400">
        /// {title} ///
      </p>
      <div className="text-sm text-zinc-300 [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}
