"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { pricing, personal } from "@/lib/data";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(247,37,133,0.04) 0%, transparent 100%)",
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
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 max-w-md mx-auto text-sm"
          >
            One-time project builds or ongoing monthly retainers.
            Standard rate is{" "}
            <span className="text-white/70">${pricing.hourlyRate}/hr</span> for
            work outside any retainer.
          </motion.p>
        </div>

        {/* MVP Project card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,245,255,0.07) 0%, rgba(124,58,237,0.07) 100%)",
              border: "1px solid rgba(0,245,255,0.2)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className="text-cyan-400" />
                  <span className="text-xs uppercase tracking-widest text-cyan-400/70 font-mono">
                    Project-Based
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {pricing.project.name}
                </h3>
                <p className="text-sm text-white/40 mb-5 leading-relaxed">
                  {pricing.project.description}
                </p>
                <ul className="space-y-2">
                  {pricing.project.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={13} className="text-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-5xl font-bold gradient-text mb-1">
                  ${pricing.project.price.toLocaleString()}
                </div>
                <div className="text-xs text-white/30 mb-6">flat rate</div>
                <a
                  href={`mailto:${personal.email}?subject=MVP Project Inquiry`}
                  className="inline-block px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #00f5ff, #7c3aed)" }}
                >
                  {pricing.project.cta}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Retainer tiers */}
        <div className="grid sm:grid-cols-3 gap-5">
          {pricing.retainers.map((tier, i) => {
            const total = tier.hours * tier.pricePerHour;
            const savings = tier.hours * (pricing.hourlyRate - tier.pricePerHour);

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="gradient-border relative"
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest z-10"
                    style={{
                      background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                      color: "#fff",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{
                    background: tier.highlight
                      ? "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(124,58,237,0.08))"
                      : "var(--surface)",
                  }}
                >
                  {/* Tier name & hours */}
                  <div className="mb-5">
                    <div className="text-xs uppercase tracking-widest text-white/30 font-mono mb-1">
                      Retainer
                    </div>
                    <div className="text-xl font-bold text-white">{tier.name}</div>
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-4xl font-bold gradient-text">
                      ${total.toLocaleString()}
                    </span>
                    <span className="text-white/30 text-sm ml-1">/mo</span>
                  </div>
                  <div className="text-xs text-white/30 mb-1">
                    ${tier.pricePerHour}/hr · {tier.hours} hrs/mo
                  </div>
                  <div className="text-xs text-green-400/80 mb-6">
                    Save ${savings}/mo vs. standard rate
                  </div>

                  {/* Perks */}
                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <Check
                          size={13}
                          className="shrink-0 mt-0.5"
                          style={{ color: tier.highlight ? "#00f5ff" : "#a78bfa" }}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${personal.email}?subject=${tier.name} Retainer Inquiry`}
                    className="block w-full py-2.5 rounded-xl text-sm font-medium text-center transition-all duration-200"
                    style={
                      tier.highlight
                        ? {
                            background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.6)",
                          }
                    }
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-white/25 mt-8"
        >
          Unused hours do not roll over. Additional hours beyond your retainer are billed at ${pricing.hourlyRate}/hr.
        </motion.p>
      </div>
    </section>
  );
}
