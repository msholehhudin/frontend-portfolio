"use client";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TechPill } from "@/components/ui/TechPill";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto"
    >
      <Reveal>
        <SectionLabel>Career</SectionLabel>
        <h2 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.02em] leading-[1.2] text-text-1 mb-14">
          Professional
          <br />
          <em className="text-text-2">Experience</em>
        </h2>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — hidden on mobile */}
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 group"
            >
              {/* Date */}
              <div className="md:text-right">
                <p className="font-mono text-[0.7rem] tracking-[0.04em] text-text-3 leading-relaxed">
                  {exp.period}
                </p>
              </div>

              {/* Timeline dot — desktop only */}
              <div className="hidden md:block absolute left-[126px] mt-[3px]">
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 bg-bg group-hover:border-accent",
                    exp.current ? "border-accent bg-accent" : "border-border",
                  )}
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-1">
                  <h3 className="font-sans font-medium text-[1rem] text-text-1">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="inline-block font-mono text-[0.65rem] tracking-[0.06em] text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="font-sans text-[0.85rem] text-accent mb-3">
                  {exp.company}
                </p>
                <p className="font-light text-[0.87rem] leading-[1.8] text-text-2 mb-4 max-w-[600px]">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
