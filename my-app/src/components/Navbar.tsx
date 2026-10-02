"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DESIGNER_INFO } from "@/data/data";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  isDetailPage?: boolean;
}

export default function Navbar({ isDetailPage = false }: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (isDetailPage) {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Available pill */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-xs font-medium text-neutral-800 transition-transform duration-300 hover:scale-[1.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{DESIGNER_INFO.availableText}</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        {!isDetailPage && (
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <button
              onClick={() => scrollTo("work")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-black transition-colors flex items-center gap-1 group"
            >
              <span>Work</span>
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                [{DESIGNER_INFO.navCounters.work}]
              </span>
            </button>
            <button
              onClick={() => scrollTo("service")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-black transition-colors flex items-center gap-1 group"
            >
              <span>Service</span>
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                [{DESIGNER_INFO.navCounters.service}]
              </span>
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-black transition-colors flex items-center gap-1 group"
            >
              <span>Experience</span>
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                [{DESIGNER_INFO.navCounters.experience}]
              </span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-black transition-colors"
            >
              Contact
            </button>
          </nav>
        )}

        {/* Right: Contact button + mobile toggle */}
        <div className="flex items-center gap-2">
          {isDetailPage ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-xs font-medium text-neutral-900 shadow-sm transition-all duration-300 hover:bg-neutral-100"
            >
              <span>← Back</span>
            </Link>
          ) : (
            <button
              onClick={() => scrollTo("contact")}
              className="group hidden sm:inline-flex items-center gap-1 px-5 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-black hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          )}

          {!isDetailPage && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-800 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo("work")}
                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-neutral-100 transition-colors text-sm font-medium flex justify-between items-center text-neutral-800"
              >
                <span>Work</span>
                <span className="text-xs text-neutral-400">[{DESIGNER_INFO.navCounters.work}]</span>
              </button>
              <button
                onClick={() => scrollTo("service")}
                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-neutral-100 transition-colors text-sm font-medium flex justify-between items-center text-neutral-800"
              >
                <span>Service</span>
                <span className="text-xs text-neutral-400">[{DESIGNER_INFO.navCounters.service}]</span>
              </button>
              <button
                onClick={() => scrollTo("experience")}
                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-neutral-100 transition-colors text-sm font-medium flex justify-between items-center text-neutral-800"
              >
                <span>Experience</span>
                <span className="text-xs text-neutral-400">[{DESIGNER_INFO.navCounters.experience}]</span>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-neutral-100 transition-colors text-sm font-medium text-neutral-800"
              >
                Contact
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 w-full py-3 rounded-full bg-neutral-900 text-white text-xs font-medium flex items-center justify-center gap-1 shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
