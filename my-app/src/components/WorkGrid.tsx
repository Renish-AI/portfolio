"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

type FilterType = "All" | "Real Project" | "Exploration";

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Real Project") return project.badge === "REAL PROJECT";
    if (activeFilter === "Exploration") return project.badge === "EXPLORATION";
    return true;
  });

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#F9F9F9] overflow-hidden">
      {/* Ghost Watermark "PORTFOLIO" */}
      <div className="absolute top-10 sm:top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.04, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[13vw] sm:text-[14vw] font-black uppercase tracking-tight text-neutral-900 leading-none whitespace-nowrap block"
          style={{ letterSpacing: "-0.05em" }}
        >
          PORTFOLIO
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
              /SELECTED WORK
            </h2>
          </motion.div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 sm:mb-16 pb-4 border-b border-neutral-200/60">
          {/* Tabs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {(["All", "Real Project", "Exploration"] as FilterType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  activeFilter === tab
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                <span>{tab}</span>
                {activeFilter === tab && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: View All Work Pill */}
          <div className="flex items-center">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-neutral-400 hover:scale-[1.02] hover:shadow-md"
            >
              <span>View All Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2-Column Offset Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx: number) => {
              // Row offset: odd indexed cards are shifted down on desktop
              const isOffset = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`${isOffset ? "md:mt-14" : ""}`}
                >
                  <div
                    data-cursor="view"
                    className="group block rounded-[24px] bg-white p-4 sm:p-5 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-neutral-300"
                  >
                    {/* Thumbnail Frame - Click redirects to live website */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-neutral-100 cursor-pointer"
                      title={`Visit ${project.title}`}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Top Left Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 text-[10px] font-semibold tracking-wider uppercase text-neutral-800 shadow-sm">
                          {project.badge}
                        </span>
                      </div>

                      {/* Hover Overlay with View Icon Badge */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/95 text-neutral-900 shadow-lg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </a>

                    {/* Card Body */}
                    <div className="pt-5 pb-2 px-1">
                      <div className="flex items-center justify-between gap-2">
                        <Link href={`/work/${project.slug}`}>
                          <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight transition-colors duration-300 hover:text-neutral-600">
                            {project.title}
                          </h3>
                        </Link>
                      </div>

                      {/* Tag pills and Action Links */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 text-[11px] font-medium text-neutral-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Direct Redirect Links (Live Website & GitHub) */}
                        <div className="flex items-center gap-2 shrink-0">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold transition-all duration-200 hover:bg-black hover:scale-105 active:scale-95 shadow-sm"
                              title="Open Live Website"
                            >
                              <span>Live</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-800 text-[11px] font-semibold transition-all duration-200 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-sm"
                              title="Open GitHub Repository"
                            >
                              <span>GitHub</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
