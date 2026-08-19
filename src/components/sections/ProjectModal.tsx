"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { TechPill } from "@/components/ui/TechPill";
import { Button } from "@/components/ui/Button";
import { BrowserMockup } from "./BrowserMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setActiveScreenshot(0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const screenshots = project?.screenshots?.length
    ? project.screenshots
    : project?.screenshot
      ? [project.screenshot]
      : [];

  const hasMultipleScreenshots = screenshots.length > 1;

  const goPrevious = () => {
    setActiveScreenshot((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveScreenshot((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-[820px] max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-bg-2"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-sm text-text-2 transition-all duration-200 hover:border-border-hover hover:text-text-1"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2 pr-12">
                {project.tags.map((tag, i) => (
                  <Tag key={tag} variant={project.tagVariants[i] ?? "neutral"}>
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Title */}
              <h2 className="mb-6 font-serif text-[1.75rem] font-light tracking-[-0.02em] text-text-1">
                {project.title}
              </h2>

              {/* Screenshots */}
              {screenshots.length > 0 && (
                <div className="mb-8">
                  {/* Main screenshot */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl border border-border bg-bg-3">
                    <motion.div
                      key={screenshots[activeScreenshot]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BrowserMockup src={screenshots[activeScreenshot]} />
                    </motion.div>

                    {/* Previous */}
                    {hasMultipleScreenshots && (
                      <>
                        <button
                          type="button"
                          onClick={goPrevious}
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                          aria-label="Previous screenshot"
                        >
                          ←
                        </button>

                        {/* Next */}
                        <button
                          type="button"
                          onClick={goNext}
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                          aria-label="Next screenshot"
                        >
                          →
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-mono text-white backdrop-blur-sm">
                          {activeScreenshot + 1} / {screenshots.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {hasMultipleScreenshots && (
                    <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {screenshots.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveScreenshot(index)}
                          className={`group overflow-hidden rounded-lg border transition-all ${
                            activeScreenshot === index
                              ? "border-accent ring-2 ring-accent/20"
                              : "border-border opacity-60 hover:border-border-hover hover:opacity-100"
                          }`}
                        >
                          <div className="aspect-video bg-bg-3">
                            <img
                              src={src}
                              alt={`${project.title} thumbnail ${index + 1}`}
                              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Body */}
              {project.caseStudyContent && (
                <div
                  className="space-y-4 font-light text-[0.9rem] leading-[1.85] text-text-2 [&_li]:py-1 [&_p]:text-text-2 [&_ul]:pl-0"
                  dangerouslySetInnerHTML={{
                    __html: project.caseStudyContent.body,
                  }}
                />
              )}

              {/* Impact */}
              {project.caseStudyContent && (
                <div className="mt-6 rounded-lg border border-green/15 bg-green/[0.06] p-4 font-mono text-[0.8rem] leading-relaxed text-green">
                  ▸ Impact: {project.caseStudyContent.impact}
                </div>
              )}

              {/* Tech */}
              <div className="mt-6">
                <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-text-3">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
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
