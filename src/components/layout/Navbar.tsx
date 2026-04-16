"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PERSON } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16",
        "bg-bg/80 backdrop-blur-xl transition-all duration-300",
        scrolled ? "border-b border-white/10" : "border-b border-white/[0.06]"
      )}
    >
      {/* Logo */}
      <Link href="#hero" className="font-serif text-[1.05rem] italic text-text-1 tracking-tight hover:text-text-2 transition-colors">
        {PERSON.displayName}.
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[0.75rem] tracking-[0.04em] uppercase text-text-2 hover:text-text-1 transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          className="font-sans text-[0.82rem] font-medium px-4 py-2 rounded-md border border-border-hover bg-surface text-text-1 hover:border-accent hover:text-accent transition-all duration-200"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={cn("w-5 h-px bg-text-2 transition-all duration-200", mobileOpen && "rotate-45 translate-y-2")} />
        <span className={cn("w-5 h-px bg-text-2 transition-all duration-200", mobileOpen && "opacity-0")} />
        <span className={cn("w-5 h-px bg-text-2 transition-all duration-200", mobileOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-bg-2 border-b border-border md:hidden">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 font-mono text-[0.78rem] tracking-[0.04em] uppercase text-text-2 hover:text-text-1 hover:bg-surface transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-2 pb-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center font-sans text-[0.82rem] font-medium px-4 py-2 rounded-md border border-border-hover bg-surface text-text-1"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
