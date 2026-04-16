"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Project } from "@/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { TechPill } from "@/components/ui/TechPill";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "./ProjectModal";
import { BrowserMockup } from "./BrowserMockup";

const PROJECT_ICONS: Record<string, string> = {
  joyinspec: "🔍",
  bluespider: "📡",
};

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto"
    >
      <Reveal>
        <SectionLabel>Featured Work</SectionLabel>
        <h2 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.02em] leading-[1.2] text-text-1 mb-12">
          Projects That
          <br />
          <em className="text-text-2">Drive Real Impact</em>
        </h2>
      </Reveal>

      <div className="space-y-5">
        {/* Featured card */}
        <Reveal>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveProject(featured)}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer group hover:border-accent/25 transition-colors duration-300"
          >
            {/* Info */}
            <div className="p-8 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.tags.map((tag, i) => (
                  <Tag key={tag} variant={featured.tagVariants[i] ?? "neutral"}>
                    {tag}
                  </Tag>
                ))}
              </div>

              <h3 className="font-serif font-light text-[1.65rem] tracking-[-0.02em] text-text-1 mb-3">
                {featured.title}
              </h3>

              <p className="font-light text-[0.9rem] leading-[1.8] text-text-2 mb-4 flex-1">
                {featured.description}
              </p>

              <div className="font-mono text-[0.77rem] text-green bg-green/[0.07] border border-green/15 rounded-lg px-3 py-2.5 mb-5">
                ▸ {featured.highlight}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>

              <div
                className="flex flex-wrap gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  href="https://medixpress.vercel.app/"
                  variant="primary"
                  external
                >
                  Live Demo ↗
                </Button>
                <Button
                  onClick={() => setActiveProject(featured)}
                  variant="outline"
                >
                  Case Study
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-bg-3 to-[#0a0f1e] overflow-hidden">
              <motion.div
                className="w-full flex justify-center"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <BrowserMockup />
              </motion.div>
            </div>
          </motion.div>
        </Reveal>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                className="bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer group hover:border-accent/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col"
              >
                {/* Visual header */}
                <div className="h-40 bg-gradient-to-br from-bg-3 to-[#0a0f1e] flex items-center justify-center relative overflow-hidden">
                  <motion.span
                    className="text-5xl opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    style={{ display: "block" }}
                  >
                    {PROJECT_ICONS[project.id] ?? "◈"}
                  </motion.span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(79,142,247,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, ti) => (
                      <Tag
                        key={tag}
                        variant={project.tagVariants[ti] ?? "neutral"}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  <h3 className="font-serif font-light text-[1.2rem] tracking-[-0.01em] text-text-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="font-light text-[0.85rem] leading-[1.75] text-text-2 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <TechPill key={t}>{t}</TechPill>
                    ))}
                  </div>

                  <div onClick={(e) => e.stopPropagation()}>
                    <Button
                      onClick={() => setActiveProject(project)}
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
