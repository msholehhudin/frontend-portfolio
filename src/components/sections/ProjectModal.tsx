"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { TechPill } from "@/components/ui/TechPill";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-xl"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-bg-2 border border-border rounded-2xl max-w-[660px] w-full max-h-[85vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-surface border border-border rounded-lg text-text-2 hover:text-text-1 hover:border-border-hover transition-all duration-200 text-sm z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <Tag key={tag} variant={project.tagVariants[i] ?? "neutral"}>
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-serif font-light text-[1.75rem] tracking-[-0.02em] text-text-1 mb-5">
                {project.title}
              </h2>

              {/* Body */}
              {project.caseStudyContent && (
                <div
                  className="font-light text-[0.9rem] leading-[1.85] text-text-2 space-y-4 [&_p]:text-text-2 [&_ul]:pl-0 [&_li]:py-1"
                  dangerouslySetInnerHTML={{
                    __html: project.caseStudyContent.body,
                  }}
                />
              )}

              {/* Impact */}
              {project.caseStudyContent && (
                <div className="mt-6 p-4 bg-green/[0.06] border border-green/15 rounded-lg font-mono text-[0.8rem] text-green leading-relaxed">
                  ▸ Impact: {project.caseStudyContent.impact}
                </div>
              )}

              {/* Tech */}
              <div className="mt-6">
                <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-text-3 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <Button href={project.link} variant="primary" external>
                  Live Demo ↗
                </Button>
                <Button onClick={onClose} variant="secondary">
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
