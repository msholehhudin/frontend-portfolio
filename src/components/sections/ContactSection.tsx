"use client";
import { motion } from "framer-motion";
import { PERSON } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const CONTACT_LINKS = [
  { icon: "✉", label: PERSON.email, href: `mailto:${PERSON.email}` },
  { icon: "in", label: "LinkedIn", href: PERSON.linkedin },
  { icon: "⌥", label: "GitHub", href: PERSON.github },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-[600px] mx-auto text-center">
        <Reveal>
          <SectionLabel centered>Let's Connect</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.2rem)] tracking-[-0.025em] leading-[1.15] text-text-1 mb-4">
            Let's Build Something<br />
            <em className="text-text-2">Impactful Together</em>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="font-light text-[0.95rem] text-text-2 leading-relaxed mb-10 max-w-[480px] mx-auto">
            Open to senior frontend and full-stack opportunities at global remote-first companies. If you're building something meaningful, I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CONTACT_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 font-sans text-[0.85rem] text-text-2 border border-border bg-surface rounded-lg px-4 py-2.5 hover:text-text-1 hover:border-border-hover hover:bg-surface-hover transition-colors duration-200"
              >
                <span className="text-[0.9rem]">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <Button href={`mailto:${PERSON.email}`} variant="primary" className="text-[0.9rem] px-8 py-3.5">
            Start a Conversation →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
