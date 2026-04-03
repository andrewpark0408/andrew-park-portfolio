"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

const stats = [
  { value: "95%", label: "Latency reduction on Project Atelier" },
  { value: "5K", label: "RPS scaled from 10 using NGINX" },
  { value: "98", label: "Lighthouse score on Summarize AI" },
  { value: "100+", label: "Playwright workflows automated" },
];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-border p-px"
    >
      <div className="rounded-2xl p-5 text-center" style={{ background: "var(--surface)" }}>
        <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
        <div className="text-xs text-white/40 leading-snug">{label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-cyan-400/70 mb-4 font-mono"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Engineering mindset,{" "}
              <span className="gradient-text">developer soul.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 leading-relaxed mb-5 text-base"
            >
              {personal.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/40 leading-relaxed text-sm"
            >
              Before web development, I spent years commissioning 6 Amazon
              fulfillment centers as a controls automation engineer — diagnosing
              PLC logic at scale, leading teams under pressure, and shipping
              complex systems on deadline. That background shapes how I write
              software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-4 mt-8"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/40 transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="px-5 py-2.5 rounded-lg text-sm font-medium"
                style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(124,58,237,0.15))", border: "1px solid rgba(0,245,255,0.2)" }}
              >
                <span className="gradient-text">Get In Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
