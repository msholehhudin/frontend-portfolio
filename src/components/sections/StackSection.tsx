"use client";
import { motion } from "framer-motion";
import { STACK } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 md:px-10 bg-bg-2">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.02em] leading-[1.2] text-text-1 mb-12">
            Tools I Build With
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {STACK.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="relative bg-surface border border-border rounded-xl p-6 text-center cursor-default overflow-hidden group transition-colors duration-300 hover:border-accent/30 hover:bg-surface-hover"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,142,247,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <span className="text-3xl block mb-3 relative z-10">{item.icon}</span>
              <p className="font-sans font-medium text-[0.88rem] text-text-1 mb-1 relative z-10">{item.name}</p>
              <p className="font-mono text-[0.68rem] tracking-[0.05em] text-text-3 uppercase relative z-10">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
