"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Zap, Database, Code2, GitBranch, ShieldCheck } from "lucide-react";
import { services } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

const iconMap = {
  Layers,
  Zap,
  Database,
  Code2,
  GitBranch,
  ShieldCheck,
};

const gradients = [
  "from-cyan-400/20 to-purple-600/20",
  "from-purple-600/20 to-pink-500/20",
  "from-pink-500/20 to-cyan-400/20",
  "from-cyan-400/20 to-pink-500/20",
  "from-purple-600/20 to-cyan-400/20",
  "from-pink-500/20 to-purple-600/20",
];

const iconColors = [
  "text-cyan-400",
  "text-purple-400",
  "text-pink-400",
  "text-cyan-400",
  "text-purple-400",
  "text-pink-400",
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <TiltCard className="gradient-border group" intensity={8}>
        <div
          className="rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-[#121218]"
          style={{ background: "var(--surface)" }}
        >
          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${gradients[index]}`}
          >
            {Icon && <Icon size={20} className={iconColors[index]} />}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad relative">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 100%)",
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
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Services I <span className="gradient-text">Deliver</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 max-w-lg mx-auto text-sm"
          >
            From a single landing page to a production-grade full-stack system — I
            own the entire build.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
