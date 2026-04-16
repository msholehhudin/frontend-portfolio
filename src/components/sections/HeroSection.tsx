"use client";
import { motion } from "framer-motion";
import { PERSON } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const STACK_TAGS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Redux",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(79,142,247,0.07)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(124,106,247,0.06)_0%,transparent_60%)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%,black 20%,transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.06em] text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-[pulseDot_2s_infinite]" />
          Available for remote opportunities
        </motion.div>

        {/* Full name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-text-3 mb-3"
        >
          {PERSON.fullName}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.1] tracking-[-0.025em] text-text-1 mb-4"
        >
          Frontend Engineer —<br />
          <em className="text-text-2">Crafting Scalable SaaS &amp;</em>
          <br />
          Real-Time Systems Used in Production
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.75rem] tracking-[0.06em] text-accent/80 mb-2"
        >
          {PERSON.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[1.05rem] text-text-2 mb-2"
        >
          {PERSON.tagline}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.72rem] tracking-[0.05em] text-text-3 mb-8 flex items-center justify-center gap-2"
        >
          <span>📍</span>
          {PERSON.location}
        </motion.p>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-light text-[clamp(0.95rem,1.8vw,1.1rem)] text-text-2 leading-relaxed max-w-[580px] mx-auto mb-8"
        >
          Specializing in React.js, Next.js, and modern frontend architecture
          for global products. Crafting performant, accessible, and delightful
          user experiences for SaaS and distributed teams.
        </motion.p>

        {/* Stack tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {STACK_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.72rem] tracking-[0.03em] text-text-2 bg-surface border border-border px-3 py-1.5 rounded hover:text-text-1 hover:border-border-hover hover:bg-surface-hover transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href={PERSON.cvUrl} variant="secondary" external>
            Download CV ↗
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-text-3">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-text-3 to-transparent animate-[scrollLine_1.5s_infinite]" />
      </motion.div>
    </section>
  );
}
