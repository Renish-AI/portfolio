"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DESIGNER_INFO } from "@/data/data";
import { ArrowUpRight, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[75vh] flex flex-col justify-between items-center text-center px-4 sm:px-8 py-20 sm:py-28 overflow-hidden select-none bg-[#F9F9F9] border-t border-neutral-200/60"
    >
      {/* Clean Minimalist Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.95)_0%,rgba(243,243,243,0.5)_100%)] pointer-events-none" />

      {/* Top Spacer / Available Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.05)] text-xs font-medium text-neutral-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{DESIGNER_INFO.availableText}</span>
        </div>
      </motion.div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-2xl mx-auto my-auto flex flex-col items-center gap-6 pt-12 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-tight"
        >
          {DESIGNER_INFO.footerHeading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg"
        >
          {DESIGNER_INFO.footerTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2"
        >
          <a
            href={`mailto:${DESIGNER_INFO.email}`}
            onClick={() => {
              if (window.innerWidth > 768) {
                // Also copy email on desktop
                handleCopyEmail();
              }
            }}
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>{copied ? "Email Copied!" : "Contact Me"}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </a>
        </motion.div>
      </div>

      {/* Bottom Row of Small White Pills */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2.5 pt-6"
      >
        {/* Avatar + Name Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white border border-neutral-800 text-xs font-medium shadow-sm">
          <div className="relative w-5 h-5 rounded-full overflow-hidden border border-neutral-700">
            <Image
              src="/images/avatar.png"
              alt={DESIGNER_INFO.fullName}
              fill
              sizes="20px"
              className="object-cover"
            />
          </div>
          <span>{DESIGNER_INFO.fullName}</span>
        </div>

        {/* Social Pills */}
        {DESIGNER_INFO.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 text-xs font-medium text-neutral-700 shadow-sm transition-all duration-300 hover:text-black hover:border-neutral-400 hover:scale-[1.02]"
          >
            <span>{social.name}</span>
          </a>
        ))}
      </motion.div>
    </footer>
  );
}
