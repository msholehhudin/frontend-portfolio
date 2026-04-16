import { PERSON } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[0.75rem] text-text-3">
        © 2025 {PERSON.fullName}. Built with precision.
      </span>
      <div className="flex gap-6">
        {[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((l) => (
          <a key={l.href} href={l.href} className="font-mono text-[0.73rem] text-text-3 hover:text-text-2 transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
