"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about-me" className="relative w-full py-40 bg-background overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-accent-dark/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase flex items-center gap-4">
            <span className="w-8 h-[1px] bg-accent" />
            01 / Identity
          </h2>

          <div className="relative max-w-4xl">
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary mb-8">
              Solving problems through code and leadership.<br />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Problem-Solving.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                I analyze complex technical challenges and implement optimized, data-driven solutions. Using strong foundations in Data Structures and Algorithms, I break down large bottlenecks into manageable blocks of logic.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Leadership.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                I take initiative to guide projects from conception to completion. Fostering collaboration and empowering teams to excel is just as important as the code we ship.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Adaptability.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                Thriving in fast-paced environments, I quickly learn new technologies and adapt to evolving project requirements with ease to always deliver value.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-[-5%] top-[20%] text-[15rem] lg:text-[20rem] font-black text-foreground/[0.02] pointer-events-none whitespace-nowrap select-none">
        ENGINEER
      </div>
    </section>
  );
}
