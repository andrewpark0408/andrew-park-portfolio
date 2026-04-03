"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={project.featured ? "sm:col-span-2 lg:col-span-2" : ""}
    >
    <TiltCard className="gradient-border group relative h-full" intensity={6}>
      <div
        className="rounded-2xl p-7 h-full transition-all duration-300"
        style={{ background: "var(--surface)" }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-mono"
              style={{
                background: project.featured
                  ? "rgba(0,245,255,0.1)"
                  : "rgba(124,58,237,0.1)",
                color: project.featured ? "#00f5ff" : "#a78bfa",
                border: project.featured
                  ? "1px solid rgba(0,245,255,0.2)"
                  : "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {project.type}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-[10px] text-amber-400/70 uppercase tracking-widest">
                <Star size={10} fill="currentColor" /> Featured
              </span>
            )}
          </div>
          <ExternalLink
            size={15}
            className="text-white/20 group-hover:text-cyan-400 transition-colors duration-200"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md text-white/50 font-mono"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,245,255,0.03) 0%, transparent 100%)",
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
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Things I&apos;ve <span className="gradient-text">Built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 max-w-lg mx-auto text-sm"
          >
            Client work and personal projects spanning full-stack apps, performance
            engineering, and API integrations.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
