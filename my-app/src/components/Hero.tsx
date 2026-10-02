"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { DESIGNER_INFO } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

const emptySubscribe = () => () => {};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useSyncExternalStore(
    emptySubscribe,
    () => typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    () => false
  );

  // Mouse coords relative to portrait container
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth lerp physics for cursor follow
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  // CSS mask for the spotlight reveal
  const maskImage = useMotionTemplate`radial-gradient(circle 140px at ${springX}px ${springY}px, black 0%, black 55%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 px-4 sm:px-8 md:px-12 bg-[#F9F9F9] overflow-hidden select-none">
      {/* Background subtle noise/vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.85)_0%,rgba(240,240,240,0.4)_100%)]" />

      {/* Top spacer to align with navbar */}
      <div className="h-6 sm:h-10" />

      {/* Huge Name - Sitting Behind the Cutout Portrait */}
      <div className="relative w-full flex items-center justify-center -mb-4 sm:-mb-8 md:-mb-12 z-0 pointer-events-none px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-full flex items-center justify-center tracking-tight font-black leading-none uppercase text-center select-none"
          style={{
            fontSize: "clamp(2rem, 8.2vw, 8.5rem)",
            letterSpacing: "-0.035em",
          }}
        >
          {/* Outlined FIRST NAME */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-transparent inline-block mr-2 sm:mr-4 md:mr-6"
            style={{
              WebkitTextStroke: "2.5px #111111",
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            {DESIGNER_INFO.firstName}
          </motion.span>

          {/* Solid bold black LAST NAME */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#111111] inline-block"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            {DESIGNER_INFO.lastName}
          </motion.span>
        </motion.div>
      </div>

      {/* Center Cutout Portrait with Interactive Color Spotlight Reveal */}
      <div className="relative w-full flex justify-center items-end z-10 my-auto">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, filter: "blur(16px)", scale: 0.96, y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative cursor-pointer max-w-[360px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px] w-full aspect-[569/439]"
          style={{ willChange: "transform, filter" }}
        >
          {/* Base Layer: Black & White Cutout Portrait */}
          <div className="relative w-full h-full">
            <Image
              src="/images/portrait-bw.png"
              alt={DESIGNER_INFO.fullName}
              fill
              priority
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 540px, 620px"
              className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.06)]"
            />
          </div>

          {/* Spotlight Reveal Layer: Full-Color Portrait */}
          {!isTouchDevice && (
            <motion.div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
                opacity: isHovered ? 1 : 0,
              }}
            >
              <Image
                src="/images/portrait-color.png"
                alt={`${DESIGNER_INFO.fullName} in color`}
                fill
                priority
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 540px, 620px"
                className="object-contain object-bottom"
              />
            </motion.div>
          )}

          {/* Interactive Hint Indicator for desktop users */}
          {!isTouchDevice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0 : 0.6 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-neutral-200 text-[10px] text-neutral-500 pointer-events-none whitespace-nowrap shadow-sm"
            >
              hover over portrait
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Content Area: Tagline & CTA (Left) + Social Pills (Right) */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 z-20 pt-4">
        {/* Bottom Left: Role, Tagline, Collaborate Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md flex flex-col items-start gap-3"
        >
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            {DESIGNER_INFO.role}
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xs font-normal">
            {DESIGNER_INFO.tagline}
          </p>
          <button
            onClick={scrollToContact}
            className="group mt-1 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium shadow-[0_4px_16px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Let&apos;s collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Bottom Right: Vertical Stack of Social Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex sm:flex-col flex-wrap items-center sm:items-end gap-2 w-full sm:w-auto"
        >
          {DESIGNER_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 text-xs font-medium text-neutral-700 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:text-black hover:border-neutral-400 hover:scale-[1.02] hover:shadow-md"
            >
              <span>{social.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
