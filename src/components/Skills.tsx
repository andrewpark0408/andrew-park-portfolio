"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryMeta: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  language: {
    label: "Languages",
    color: "#00f5ff",
    bg: "rgba(0,245,255,0.06)",
    border: "rgba(0,245,255,0.15)",
  },
  frontend: {
    label: "Frontend",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.15)",
  },
  backend: {
    label: "Backend",
    color: "#f72585",
    bg: "rgba(247,37,133,0.06)",
    border: "rgba(247,37,133,0.15)",
  },
  database: {
    label: "Databases",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    border: "rgba(251,146,60,0.15)",
  },
  devops: {
    label: "DevOps & Cloud",
    color: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.15)",
  },
  testing: {
    label: "Testing",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.06)",
    border: "rgba(251,191,36,0.15)",
  },
  tools: {
    label: "Tools",
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.06)",
    border: "rgba(148,163,184,0.12)",
  },
};

const categories = [
  "language",
  "frontend",
  "backend",
  "database",
  "devops",
  "testing",
  "tools",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const grouped = categories.reduce(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="section-pad relative dot-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(124,58,237,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs uppercase tracking-widest text-cyan-400/70 mb-4 font-mono"
          >
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Tools of the <span className="gradient-text">Trade</span>
          </motion.h2>
        </div>

        {/* Category groups */}
        <div className="space-y-8">
          {categories.map((cat, catIndex) => {
            const meta = categoryMeta[cat];
            const catSkills = grouped[cat];
            if (!catSkills?.length) return null;

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Category label */}
                <div className="sm:w-36 shrink-0 pt-1">
                  <span
                    className="text-[11px] uppercase tracking-widest font-mono font-medium"
                    style={{ color: meta.color }}
                  >
                    {meta.label}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.08 + i * 0.04,
                      }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: meta.bg,
                        border: `1px solid ${meta.border}`,
                        color: meta.color,
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 grid sm:grid-cols-2 gap-4"
        >
          {[
            {
              school: "Hack Reactor",
              detail: "Software Engineering Immersive · 2024",
              sub: "Class President",
              color: "#00f5ff",
            },
            {
              school: "Cal Poly Pomona",
              detail: "B.S. Mechanical Engineering · 2019",
              sub: "Systems & automation background",
              color: "#a78bfa",
            },
          ].map((edu) => (
            <div
              key={edu.school}
              className="glass rounded-2xl p-5 flex items-center gap-4"
            >
              <div
                className="w-2 h-10 rounded-full shrink-0"
                style={{ background: edu.color }}
              />
              <div>
                <div className="text-sm font-semibold text-white">{edu.school}</div>
                <div className="text-xs text-white/40">{edu.detail}</div>
                <div className="text-xs mt-0.5" style={{ color: edu.color + "99" }}>
                  {edu.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
