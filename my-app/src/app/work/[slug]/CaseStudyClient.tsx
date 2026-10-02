"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, PROJECTS, DESIGNER_INFO } from "@/data/data";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface CaseStudyClientProps {
  project: Project;
}

export default function CaseStudyClient({ project }: CaseStudyClientProps) {
  // Related projects for /MORE WORK (exclude current)
  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#F9F9F9] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Top Floating Bar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Back Pill */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 text-xs font-medium text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:border-black hover:scale-[1.02]"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back</span>
          </Link>

          {/* Available Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-xs font-medium text-neutral-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{DESIGNER_INFO.availableText}</span>
          </div>
        </div>
      </motion.nav>

      {/* Case Study Header */}
      <header className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tags, Title, Subtitle, CTA buttons */}
          <div className="lg:col-span-8 flex flex-col items-start gap-4">
            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full bg-neutral-200/70 text-[11px] font-semibold uppercase tracking-wider text-neutral-800 border border-neutral-300/40"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title with light italic suffix */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 capitalize"
            >
              {project.title.split("-")[0].trim()}{" "}
              <span className="font-light italic text-neutral-400 text-3xl sm:text-5xl md:text-6xl tracking-normal">
                /{project.badge === "REAL PROJECT" ? "Real Project" : "Exploration"}
              </span>
            </motion.h1>

            {/* One-sentence description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-2xl mt-1"
            >
              {project.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mt-4"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold border border-neutral-300 shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>GitHub Repo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold border border-neutral-200/90 shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03]"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Meta Block (Service, Timeline, Tools) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col lg:items-end gap-6 pt-2 lg:text-right"
          >
            {/* Service */}
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 mb-1">
                Service
              </div>
              <div className="text-sm font-bold text-neutral-900">
                {project.service}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 mb-1">
                Timeline
              </div>
              <div className="text-sm font-bold text-neutral-900">
                {project.timeline}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 mb-2">
                Tools
              </div>
              <div className="flex items-center gap-2 lg:justify-end">
                {project.tools.map((tool) => (
                  <div
                    key={tool.name}
                    title={tool.name}
                    className="w-9 h-9 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-sm font-medium text-neutral-700"
                  >
                    <span>{tool.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Body Screenshots & Visual Showcase */}
      <main className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 pb-24">
        {/* Screenshot 1: Primary Full Width View */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2 sm:p-3"
        >
          <div className="relative w-full aspect-[16/9] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-neutral-100">
            <Image
              src={project.screenshots[0] || project.thumbnail}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Callout Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-center"
        >
          <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed italic">
            &ldquo;{project.callout}&rdquo;
          </p>
        </motion.div>

        {/* Feature Cards Strip on Textured Dark Background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-800 bg-[#171717] text-white p-8 sm:p-12 md:p-16 shadow-2xl"
        >
          {/* Subtle dark ambient styling */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                What Makes {project.title.split("-")[0].trim()}{" "}
                <span className="italic font-light text-neutral-300">Different</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                Modern architecture, clean engineering, and intuitive user experiences designed for speed and scalability.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {project.features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white p-6 text-neutral-900 shadow-lg border border-neutral-100 flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-950 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Screenshot 2: Secondary View */}
        {project.screenshots[1] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white p-2 sm:p-3"
          >
            <div className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-neutral-100">
              <Image
                src={project.screenshots[1]}
                alt={`${project.title} detail view`}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        )}
      </main>

      {/* /MORE WORK Section */}
      <section className="relative w-full py-20 px-4 sm:px-8 md:px-12 border-t border-neutral-200/70 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-900">
              /MORE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {relatedProjects.map((relProj) => (
              <div
                key={relProj.id}
                className="group block rounded-[24px] bg-white p-4 sm:p-5 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-neutral-300"
              >
                <a
                  href={relProj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-neutral-100 cursor-pointer"
                  title={`Visit ${relProj.title}`}
                >
                  <Image
                    src={relProj.thumbnail}
                    alt={relProj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 text-[10px] font-semibold tracking-wider uppercase text-neutral-800 shadow-sm">
                      {relProj.badge}
                    </span>
                  </div>
                </a>

                <div className="pt-5 pb-2 px-1">
                  <Link href={`/work/${relProj.slug}`}>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight transition-colors duration-300 hover:text-neutral-600">
                      {relProj.title}
                    </h3>
                  </Link>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {relProj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 text-[11px] font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {relProj.liveUrl && (
                        <a
                          href={relProj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold transition-all duration-200 hover:bg-black hover:scale-105 active:scale-95 shadow-sm"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {relProj.githubUrl && (
                        <a
                          href={relProj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-800 text-[11px] font-semibold transition-all duration-200 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-sm"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
