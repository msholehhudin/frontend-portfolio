"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans text-[0.88rem] font-medium px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-white border border-transparent shadow-[0_0_30px_rgba(79,142,247,0.25)] hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(79,142,247,0.4)] hover:-translate-y-px",
    secondary:
      "bg-transparent text-text-1 border border-border hover:border-border-hover hover:bg-surface hover:-translate-y-px",
    outline:
      "bg-transparent text-text-2 border border-border hover:text-text-1 hover:border-border-hover hover:-translate-y-px",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
