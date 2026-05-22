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

// Reduced to 2H + 1V — feels like rare accents, not constant noise
function LedBeamH({
  top,
  duration,
  delay,
  color = "accent",
}: {
  top: string;
  duration: number;
  delay: number;
  color?: string;
}) {
  const isAccent = color === "accent";
  const rgb = isAccent ? "79,142,247" : "124,106,247";
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        left: 0,
        width: "120px",
        height: "1px",
        background: `linear-gradient(90deg, transparent, rgba(${rgb},0.5), rgba(${rgb},0.9), rgba(${rgb},0.5), transparent)`,
        boxShadow: `0 0 8px 2px rgba(${rgb},0.25)`,
      }}
      animate={{ x: ["-120px", "calc(100vw + 120px)"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 5,
      }}
    />
  );
}

function LedBeamV({
  left,
  duration,
  delay,
}: {
  left: string;
  duration: number;
  delay: number;
}) {
  const rgb = "52,211,153";
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left,
        top: 0,
        width: "1px",
        height: "80px",
        background: `linear-gradient(180deg, transparent, rgba(${rgb},0.5), rgba(${rgb},0.9), rgba(${rgb},0.5), transparent)`,
        boxShadow: `0 0 8px 2px rgba(${rgb},0.2)`,
      }}
      animate={{ y: ["-80px", "calc(100vh + 80px)"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 4,
      }}
    />
  );
}

function FloatOrb({
  cx,
  cy,
  size,
  rgb,
  duration,
  delay,
}: {
  cx: string;
  cy: string;
  size: number;
  rgb: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: cx,
        top: cy,
        width: size,
        height: size,
        background: `rgba(${rgb},0.055)`,
        filter: `blur(${size * 0.44}px)`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        x: [0, 28, -16, 0],
        y: [0, -38, 20, 0],
        scale: [1, 1.06, 0.96, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function CornerBracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const posStyles: Record<string, string> = {
    tl: "top-8 left-8",
    tr: "top-8 right-8 rotate-90",
    bl: "bottom-8 left-8 -rotate-90",
    br: "bottom-8 right-8 rotate-180",
  };
  return (
    <motion.div
      className={`absolute ${posStyles[pos]} pointer-events-none hidden lg:block`}
      animate={{ opacity: [0.15, 0.45, 0.15] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: pos === "tr" ? 1 : pos === "bl" ? 0.5 : pos === "br" ? 1.5 : 0,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 22 L2 2 L22 2"
          stroke="rgba(79,142,247,0.4)"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10"
    >
      {/* Ambient orbs — 3 is enough, 4 was too heavy */}
      <FloatOrb
        cx="68%"
        cy="32%"
        size={480}
        rgb="79,142,247"
        duration={18}
        delay={0}
      />
      <FloatOrb
        cx="16%"
        cy="70%"
        size={360}
        rgb="124,106,247"
        duration={22}
        delay={4}
      />
      <FloatOrb
        cx="80%"
        cy="74%"
        size={280}
        rgb="52,211,153"
        duration={16}
        delay={8}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 10%, transparent 85%)",
        }}
      />

      {/* LED beams — trimmed to 2H + 1V */}
      <LedBeamH top="22%" duration={6} delay={0} color="accent" />
      <LedBeamH top="64%" duration={8} delay={3.5} color="purple" />
      <LedBeamV left="74%" duration={7} delay={1.5} />

      {/* Corner brackets */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />
      <CornerBracket pos="bl" />
      <CornerBracket pos="br" />

      {/* ─── Main content ─── */}
      <div className="relative z-10  mx-auto text-center pt-24 pb-24">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.07em] text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-10"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.75, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for remote opportunities
        </motion.div>

        {/* "Hi, I'm" */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-text-3 mb-1"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h2
            className="animate-shimmer bg-[length:300%_auto] bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2rem, 7vw, 7rem)",
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              backgroundImage:
                "linear-gradient(110deg, #f0f2f8 15%, #4f8ef7 38%, #7c6af7 52%, #f0f2f8 68%, #f0f2f8 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Muhammad Sholehhudin
          </h2>
        </motion.div>

        {/* Role badge — single source of truth, removed from headline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <motion.span
            className="h-px bg-gradient-to-r from-transparent to-accent/50"
            animate={{ width: ["0px", "32px"] }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          <span className="font-mono text-[0.78rem] tracking-[0.08em] text-accent">
            {PERSON.role}
          </span>
          <motion.span
            className="h-px bg-gradient-to-l from-transparent to-accent/50"
            animate={{ width: ["0px", "32px"] }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>

        {/* Main headline — tightened, no duplicate role */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)" }}
          className="font-serif font-light leading-[1.13] tracking-[-0.025em] text-text-1 mb-5"
        >
          {/* <em className="text-text-2">Crafting SaaS &amp; Real-Time</em>
          Systems Used in Production */}
          <em className="text-text-2">Crafting SaaS & Real-Time Systems</em>
          <br />
          <em>Used in Production</em>
        </motion.h1>

        {/* Single tagline — merged, no duplicate */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[1.0rem] text-text-2 mb-4"
        >
          {PERSON.tagline}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.72rem] tracking-[0.06em] text-text-3 mb-8 flex items-center justify-center gap-2"
        >
          <span>📍</span>
          {PERSON.location}
        </motion.p>

        {/* Stack tags */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.9 },
            },
          }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {STACK_TAGS.map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[0.72rem] tracking-[0.03em] text-text-2 bg-surface border border-border px-3 py-1.5 rounded hover:text-text-1 hover:border-accent/40 hover:bg-surface-hover hover:shadow-[0_0_14px_rgba(79,142,247,0.18)] transition-all duration-200 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons — clear visual ladder: primary > outlined > ghost */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href={PERSON.cvUrl} variant="secondary" external>
            Download CV ↗
          </Button>
          {/* Ghost/text variant — lower visual weight than the other two */}
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </motion.div>

        {/* Animated accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14"
          style={{ width: "240px", height: "1px", transformOrigin: "50%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
            style={{
              left: 0,
              boxShadow:
                "0 0 10px 2px rgba(79,142,247,0.8), 0 0 20px 4px rgba(79,142,247,0.3)",
            }}
            animate={{ x: [0, 238, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator — restored */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text-3">
          scroll
        </span>
        <div
          className="w-px h-10 bg-gradient-to-b from-text-3 to-transparent"
          style={{ animation: "scrollLine 1.5s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
