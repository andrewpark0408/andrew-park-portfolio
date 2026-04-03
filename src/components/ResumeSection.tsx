"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Mail } from "lucide-react";
import { experience, education, personal } from "@/lib/data";

function ExperienceItem({
  item,
  index,
  inView,
}: {
  item: (typeof experience)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pl-6 group"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-1.5 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, rgba(0,245,255,0.3), transparent)" }}
      />
      {/* Dot */}
      <div
        className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-cyan-400/50 transition-all duration-200 group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_rgba(0,245,255,0.4)]"
        style={{ background: "var(--bg)" }}
      />

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
          <h3 className="text-base font-semibold text-white">{item.role}</h3>
          <span className="text-xs text-white/30 font-mono shrink-0">{item.period}</span>
        </div>
        <div className="text-sm text-cyan-400/70 mb-3">{item.company}</div>
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-white/40 leading-relaxed flex gap-2">
              <span className="text-white/20 shrink-0 mt-1">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ResumeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="section-pad relative dot-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(124,58,237,0.05) 0%, transparent 100%)",
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
            Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            My <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
          {/* Left — Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <Briefcase size={14} className="text-cyan-400" />
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                Professional Experience
              </span>
            </motion.div>

            {experience.map((item, i) => (
              <ExperienceItem key={item.company} item={item} index={i} inView={inView} />
            ))}
          </div>

          {/* Right — Education + CTA */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={14} className="text-purple-400" />
                <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                  Education
                </span>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass rounded-2xl p-5"
                  >
                    <div className="text-sm font-semibold text-white mb-0.5">
                      {edu.school}
                    </div>
                    <div className="text-xs text-white/50 mb-0.5">{edu.degree}</div>
                    <div className="text-xs text-white/30 font-mono">{edu.period}</div>
                    {edu.note && (
                      <div className="text-xs text-cyan-400/60 mt-1">{edu.note}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hire CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(0,245,255,0.06), rgba(124,58,237,0.06))",
                border: "1px solid rgba(0,245,255,0.12)",
              }}
            >
              <div className="text-sm font-semibold text-white mb-2">
                Ready to work together?
              </div>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                I bring the same rigor from engineering complex automated systems
                to building reliable, performant software.
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-cyan-400 hover:text-white"
              >
                <Mail size={13} />
                {personal.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
