"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { EXPERIENCES, ExperienceItem, DESIGNER_INFO } from "@/data/data";

export default function ExperienceList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth cursor follow of experience preview
  const springX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 md:px-12 bg-[#232323] text-white overflow-hidden transition-colors duration-700"
    >
      {/* Giant faint "EXPERIENCE" ghost watermark */}
      <div className="absolute top-10 sm:top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[12vw] sm:text-[13vw] font-black uppercase tracking-tight text-white leading-none whitespace-nowrap block"
          style={{ letterSpacing: "-0.05em" }}
        >
          EXPERIENCE
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: /EXPERIENCE on left, 9+ years on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20 pb-6 border-b border-neutral-700/60">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white"
          >
            /EXPERIENCE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide"
          >
            {DESIGNER_INFO.experienceYears}
          </motion.div>
        </div>

        {/* Experience List Rows with Hairline Dividers */}
        <div className="w-full flex flex-col">
          {EXPERIENCES.map((exp: ExperienceItem, idx: number) => {
            const isCurrentHovered = hoveredId === exp.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full py-8 sm:py-10 border-b border-neutral-700/50 transition-all duration-300 ${
                  isAnyHovered && !isCurrentHovered ? "opacity-35" : "opacity-100"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                      {exp.role}
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm text-neutral-400 font-medium sm:text-right">
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Tilted Phone Mockup Preview following cursor */}
        <motion.div
          className="hidden lg:block pointer-events-none absolute z-30 transition-opacity duration-300"
          style={{
            x: springX,
            y: springY,
            translateX: "-40%",
            translateY: "-50%",
            opacity: hoveredId ? 1 : 0,
          }}
        >
          <motion.div
            initial={{ scale: 0.85, rotate: -6 }}
            animate={{ scale: 1, rotate: -7 }}
            exit={{ scale: 0.85, rotate: -6 }}
            transition={{ type: "spring", stiffness: 320, damping: 25 }}
            className="relative w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-700/80 bg-neutral-900"
          >
            <Image
              src="/images/experience-preview.png"
              alt="Experience Preview"
              fill
              sizes="340px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
