"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { SERVICES, ServiceItem } from "@/data/data";
import { ArrowUpRight, X } from "lucide-react";

export default function ServiceList() {
  const [activeId, setActiveId] = useState<string | null>("uiux"); // Default first active as in preview
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for the floating tilted preview image
  const springX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleRowClick = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section
      id="service"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#F9F9F9] overflow-hidden"
    >
      {/* Ghost Watermark "SERVICE" */}
      <div className="absolute top-12 left-6 sm:left-12 pointer-events-none select-none z-0">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.04, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] sm:text-[15vw] font-black uppercase tracking-tight text-neutral-900 leading-none whitespace-nowrap block"
          style={{ letterSpacing: "-0.05em" }}
        >
          SERVICE
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Left-Aligned */}
        <div className="mb-14 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900"
          >
            /SERVICE
          </motion.h2>
        </div>

        {/* Large List Rows */}
        <div className="w-full flex flex-col border-t border-neutral-300/80">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setActiveId(service.id);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full border-b border-neutral-300/80 overflow-hidden"
              >
                <div
                  onClick={() => handleRowClick(service.id)}
                  className={`relative cursor-pointer transition-all duration-400 ease-out px-6 sm:px-10 ${
                    isActive
                      ? "bg-[#181818] text-white py-8 sm:py-10 rounded-2xl shadow-xl my-2"
                      : "bg-transparent text-neutral-900 py-7 sm:py-9 hover:bg-neutral-100/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2 max-w-xl">
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: 10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 5 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mt-2"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right Icon: Close X when active, Arrow ↗ when inactive */}
                    <div className="flex items-center ml-4">
                      {isActive ? (
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-800/80 border border-neutral-700 text-white flex items-center justify-center transition-transform duration-300 hover:rotate-90">
                          <X className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-200/60 text-neutral-800 flex items-center justify-center transition-all duration-300 group-hover:bg-neutral-300">
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Tilted Preview Collage following cursor */}
        {activeId && (
          <motion.div
            className="hidden lg:block pointer-events-none absolute z-30 transition-opacity duration-300"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, rotate: 6 }}
              animate={{ scale: 1, rotate: 7 }}
              exit={{ scale: 0.85, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white"
            >
              <Image
                src="/images/service-preview.png"
                alt="Service Preview Collage"
                fill
                sizes="340px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
