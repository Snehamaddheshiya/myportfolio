"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      {/* Background Starfield Mock (could be canvas, using a simplified CSS approach here for performance) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-dark)_0%,_transparent_50%)] blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <h2 className="text-secondary font-mono tracking-widest text-sm md:text-base uppercase mb-4 pl-1">
            Data Scientist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-primary mb-6 flex flex-wrap gap-x-4">
            <span>Sneha</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark inline-block min-w-[4ch]">
              Maddheshiya
            </span>
          </h1>
        </motion.div>

        <div className="w-full max-w-2xl h-[40px] md:h-[80px]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-accent rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            View Work
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-primary border border-border rounded-full overflow-hidden transition-all hover:border-accent hover:text-accent active:scale-95"
          >
            Let&apos;s Talk
          </a>

          <a
            href="/resume.png"
            download
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-primary border border-white/10 bg-white/5 rounded-full overflow-hidden transition-all hover:bg-white/10 active:scale-95"
          >
            <Download size={16} className="text-accent" />
            Resume
            <ChevronDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-secondary font-mono tracking-widest mb-2 uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
