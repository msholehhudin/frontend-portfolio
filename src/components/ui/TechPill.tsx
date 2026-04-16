export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.7rem] text-text-3 bg-surface border border-border px-2.5 py-1 rounded">
      {children}
    </span>
  );
}
