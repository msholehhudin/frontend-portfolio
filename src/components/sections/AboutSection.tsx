"use client";
import { motion } from "framer-motion";
import { CAREER_TIMELINE } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const STATS = [
  { number: "3+", label: "Years Frontend" },
  { number: "7+", label: "Years in IT" },
  { number: "5+", label: "Products Shipped" },
  { number: "∞", label: "Problems Solved" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
      <SectionLabel>About Me</SectionLabel>
      <h2 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.02em] leading-[1.2] text-text-1 mb-12">
        From IT Support to<br />
        <em className="text-text-2">Frontend Engineer</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Story */}
        <Reveal>
          <div className="space-y-5">
            <p className="font-light text-[0.95rem] leading-[1.9] text-text-2">
              My journey started <strong className="text-text-1 font-medium">7 years ago</strong> in the trenches of IT support — troubleshooting systems, understanding infrastructure, and developing deep empathy for how people interact with technology.
            </p>
            <p className="font-light text-[0.95rem] leading-[1.9] text-text-2">
              That foundation became my superpower when I transitioned into software development. I didn't just learn to write code — I learned to build solutions that <strong className="text-text-1 font-medium">actually solve real problems</strong> for real users.
            </p>
            <p className="font-light text-[0.95rem] leading-[1.9] text-text-2">
              Over the past <strong className="text-text-1 font-medium">3+ years</strong> as a frontend engineer, I've shipped production-grade SaaS products, CRM systems, and real-time communication platforms. I've collaborated with distributed teams across time zones and delivered features that impact thousands of users daily.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border border-border rounded-xl p-5 hover:border-border-hover hover:bg-surface-hover transition-all duration-300 group"
              >
                <div className="font-serif font-light text-[2.1rem] leading-none text-text-1 mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {s.number}
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.05em] uppercase text-text-3">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={0.2}>
          <SectionLabel className="mb-6">Career Timeline</SectionLabel>
          <div className="space-y-0">
            {CAREER_TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0 group">
                {/* Left connector */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 flex-shrink-0",
                      item.active
                        ? "border-accent bg-accent"
                        : "border-border bg-bg-3 group-hover:border-accent"
                    )}
                  />
                  {i < CAREER_TIMELINE.length - 1 && (
                    <div className="w-px flex-1 mt-1.5 bg-gradient-to-b from-border to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-1">
                  <p className="font-mono text-[0.68rem] tracking-[0.05em] text-text-3 mb-1">{item.period}</p>
                  <p className="font-sans font-medium text-[0.95rem] text-text-1 mb-0.5">{item.role}</p>
                  <p className="font-sans text-[0.82rem] text-text-2 mb-2">{item.company}</p>
                  <p className="font-light text-[0.82rem] text-text-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
