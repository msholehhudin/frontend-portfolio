"use client";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent flex items-center gap-3 mb-4",
        centered && "justify-center",
        className
      )}
    >
      {children}
      {!centered && (
        <span className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-border to-transparent" />
      )}
    </p>
  );
}
