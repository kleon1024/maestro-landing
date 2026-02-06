////////////////////////////////////////////////////////////////////////////////
// [StepGuide + Step] Numbered step guide
// Server component
////////////////////////////////////////////////////////////////////////////////

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
        {number}
      </div>
      <div className="pb-6">
        <p className="font-semibold text-zinc-200">{title}</p>
        <div className="mt-1 text-sm text-zinc-400">{children}</div>
      </div>
    </div>
  );
}

interface StepGuideProps {
  children: React.ReactNode;
}

export function StepGuide({ children }: StepGuideProps) {
  return <div className="my-6 space-y-2">{children}</div>;
}
