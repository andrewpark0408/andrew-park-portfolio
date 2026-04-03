"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows mouse exactly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Ring lags behind for trailing feel
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 22 });

  // Ambient glow follows even more slowly
  const glowX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const isTouchRef = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-cursor-hover]")
      ) {
        setHovering(true);
      }
    };

    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouchRef.current) return null;

  return (
    <>
      {/* Ambient glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? (hovering ? 0.6 : 0.3) : 0,
        }}
      >
        <div
          className="w-48 h-48 rounded-full transition-all duration-500"
          style={{
            background: hovering
              ? "radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: clicking ? 28 : hovering ? 44 : 36,
          height: clicking ? 28 : hovering ? 44 : 36,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-200"
          style={{
            border: hovering
              ? "1.5px solid rgba(0,245,255,0.7)"
              : "1.5px solid rgba(255,255,255,0.25)",
            background: hovering ? "rgba(0,245,255,0.05)" : "transparent",
            boxShadow: hovering ? "0 0 12px rgba(0,245,255,0.2)" : "none",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: clicking ? 3 : hovering ? 5 : 4,
          height: clicking ? 3 : hovering ? 5 : 4,
        }}
        transition={{ duration: 0.1 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: hovering ? "#00f5ff" : "#ffffff",
            boxShadow: hovering
              ? "0 0 8px rgba(0,245,255,0.8)"
              : "0 0 4px rgba(255,255,255,0.5)",
          }}
        />
      </motion.div>
    </>
  );
}
