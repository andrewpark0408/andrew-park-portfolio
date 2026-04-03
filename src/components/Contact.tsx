"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Link2, MapPin, Send, CheckCircle } from "lucide-react";
import { personal } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 100%)",
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
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 max-w-md mx-auto text-sm"
          >
            Have a project in mind? I&apos;d love to hear about it. Reach out
            and I&apos;ll get back to you quickly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: personal.email,
                href: `mailto:${personal.email}`,
                color: "#00f5ff",
              },
              {
                icon: Link2,
                label: "LinkedIn",
                value: "andrewparkdeveloper",
                href: personal.linkedin,
                color: "#a78bfa",
              },
              {
                icon: MapPin,
                label: "Location",
                value: personal.location,
                href: null,
                color: "#f72585",
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: color + "15" }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-white/30 mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/70">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(0,245,255,0.04)",
                border: "1px solid rgba(0,245,255,0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">
                  Available for Work
                </span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Currently accepting new web development projects. Typical response
                time is within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-400/40"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>
              {/* Email */}
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-400/40"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-white/40 mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-200 focus:border-cyan-400/40"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: sent
                  ? "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.1))"
                  : "linear-gradient(135deg, #00f5ff, #7c3aed)",
                border: sent ? "1px solid rgba(52,211,153,0.3)" : "none",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-green-400">Opening your email client...</span>
                </>
              ) : (
                <>
                  <Send size={15} className="text-white" />
                  <span className="text-white">Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
