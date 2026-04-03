"use client";

import { GitBranch, Link2, Mail } from "lucide-react";
import { personal, navLinks } from "@/lib/data";

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t py-12"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold gradient-text mb-1">Andrew Park</div>
            <div className="text-xs text-white/30">
              Full-Stack Web Developer · {personal.location}
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-xs text-white/30 hover:text-white/70 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-cyan-400 transition-colors"
            >
              <Link2 size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-cyan-400 transition-colors"
            >
              <GitBranch size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-white/30 hover:text-cyan-400 transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs text-white/20 border-t"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          © {new Date().getFullYear()} Andrew Park. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
