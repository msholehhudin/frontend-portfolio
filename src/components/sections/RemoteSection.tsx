"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { REMOTE_CARDS, TIMEZONES } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

function useLiveClocks() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const update = () => {
      const result: Record<string, string> = {};
      TIMEZONES.forEach(({ tz }) => {
        result[tz] = new Date().toLocaleTimeString("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      });
      setTimes(result);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return times;
}

export function RemoteSection() {
  const times = useLiveClocks();

  return (
    <section id="remote" className="py-24 px-6 md:px-10 bg-bg-2">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <SectionLabel>Global Ready</SectionLabel>
          <h2 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.02em] leading-[1.2] text-text-1 mb-12">
            Built for<br />
            <em className="text-text-2">Remote Collaboration</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Capability cards */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REMOTE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-border-hover hover:bg-surface-hover transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-3">{card.icon}</span>
                  <p className="font-sans font-medium text-[0.9rem] text-text-1 mb-1.5 group-hover:text-accent transition-colors duration-200">
                    {card.title}
                  </p>
                  <p className="font-light text-[0.8rem] text-text-2 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Timezone clocks */}
          <Reveal delay={0.2}>
            <SectionLabel className="mb-5">Timezone Coverage</SectionLabel>

            <div className="space-y-3 mb-8">
              {TIMEZONES.map((tz) => (
                <div
                  key={tz.tz}
                  className="flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-xl hover:border-border-hover transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tz.color }}
                    />
                    <span className="font-mono text-[0.72rem] tracking-[0.05em] text-text-2">{tz.label}</span>
                  </div>
                  <span className="font-mono text-[0.78rem] text-text-1 tabular-nums">
                    {times[tz.tz] ?? "--:--"}
                  </span>
                </div>
              ))}
            </div>

            <blockquote className="font-serif italic text-[1.05rem] text-text-2 leading-relaxed border-l-2 border-border pl-5">
              "Available for overlap with European and American teams. Flexible schedule built for distributed collaboration."
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
