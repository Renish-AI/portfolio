"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const emptySubscribe = () => () => {};

function getIsTouchOrReduced() {
  if (typeof window === "undefined") return false;
  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return hasTouch || prefersReducedMotion;
}

export default function CustomCursor() {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isTouch = useSyncExternalStore(emptySubscribe, getIsTouchOrReduced, () => false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lerp physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const val = cursorTarget.getAttribute("data-cursor");
        if (val === "view") {
          setCursorType("view");
          return;
        }
        if (val === "pointer") {
          setCursorType("pointer");
          return;
        }
      }

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY, isTouch]);

  if (!isMounted || isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {cursorType === "view" ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="w-16 h-16 rounded-full bg-white/95 text-black shadow-xl backdrop-blur-md flex items-center justify-center font-medium text-xs tracking-wider border border-black/10 select-none"
        >
          <span className="flex items-center gap-1 font-semibold text-[11px]">
            VIEW <span className="text-sm font-light">↗</span>
          </span>
        </motion.div>
      ) : cursorType === "pointer" ? (
        <motion.div
          animate={{
            scale: 1.4,
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            borderColor: "rgba(0, 0, 0, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="w-8 h-8 rounded-full border border-black/30 flex items-center justify-center backdrop-blur-[1px]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-black" />
        </motion.div>
      ) : (
        <motion.div
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.15 }}
          style={{ backgroundColor: "rgba(18, 18, 18, 0.85)" }}
          className="w-2.5 h-2.5 rounded-full shadow-sm"
        />
      )}
    </motion.div>
  );
}
