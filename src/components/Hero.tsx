"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, GitBranch, Link2, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Performance Optimizer",
  "API Architect",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const tick = () => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          timeout.current = setTimeout(() => setDeleting(true), pause);
          return;
        }
        timeout.current = setTimeout(tick, speed);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
        timeout.current = setTimeout(tick, speed / 2);
      }
    };
    timeout.current = setTimeout(tick, speed);
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

// Floating code snippet
function FloatingSnippet({
  code,
  style,
  delay,
}: {
  code: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: { delay, duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute hidden lg:block glass rounded-lg px-3 py-2 text-xs font-mono text-cyan-400/70 border border-cyan-400/10 pointer-events-none select-none"
      style={style}
    >
      {code}
    </motion.div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, -80]);
  const blob3Y = useTransform(scrollY, [0, 600], [0, -160]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Ambient blobs — parallax */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </motion.div>
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </motion.div>
      <motion.div
        style={{ y: blob3Y }}
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(circle, rgba(247,37,133,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </motion.div>

      {/* Floating snippets */}
      <FloatingSnippet
        code="const dev = new Andrew();"
        style={{ top: "22%", left: "8%" }}
        delay={0.8}
      />
      <FloatingSnippet
        code="await deploy({ env: 'prod' })"
        style={{ top: "35%", right: "7%" }}
        delay={1.2}
      />
      <FloatingSnippet
        code="SELECT * FROM results WHERE latency < 12;"
        style={{ bottom: "30%", left: "6%" }}
        delay={1.5}
      />
      <FloatingSnippet
        code="npm run build ✓"
        style={{ bottom: "25%", right: "9%" }}
        delay={1.0}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/50 border border-white/[0.06] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none"
        >
          <span className="text-white">Andrew</span>
          <br />
          <span className="gradient-text">Park</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl text-white/50 font-mono">
            {role}
            <span className="inline-block w-[2px] h-5 bg-cyan-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-7 py-3.5 rounded-xl font-medium text-sm overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
            }}
          >
            <span className="relative z-10 text-white">View My Work</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-7 py-3.5 rounded-xl font-medium text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-cyan-400 transition-colors duration-200"
          >
            <Link2 size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-cyan-400 transition-colors duration-200"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-white/30 hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
          <div className="w-px h-4 bg-white/10 mx-1" />
          <span className="text-white/25 text-xs">{personal.location}</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/50 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
