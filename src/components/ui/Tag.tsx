"use client";
import { cn } from "@/lib/utils";

type TagVariant = "blue" | "green" | "amber" | "neutral";

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  blue: "bg-accent/10 text-accent border-accent/20",
  green: "bg-green/10 text-green border-green/20",
  amber: "bg-amber/10 text-amber border-amber/20",
  neutral: "bg-surface text-text-2 border-border",
};

export function Tag({ children, variant = "neutral", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[0.68rem] tracking-[0.05em] px-2.5 py-1 rounded border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
