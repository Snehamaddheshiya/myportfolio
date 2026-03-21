"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const languages = ["C++", "Python", "C", "Java", "SQL"];
  const frameworks = ["HTML", "CSS", "Flask"];
  const tools = ["MongoDB", "Tableau", "Excel", "Power BI", "AutoCad", "Git", "GitHub"];

  return (
    <section id="skills" className="relative w-full min-h-screen py-32 bg-background transition-colors duration-300 overflow-hidden flex flex-col items-center justify-center border-t border-border">
      <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-primary"
        >
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Ecosystem.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto font-light"
        >
          A constellation of the languages, frameworks, and tools I use to build digital experiences.
        </motion.p>
      </div>

      <div className="relative w-full max-w-6xl h-[70vh] rounded-[3rem] bg-card/80 backdrop-blur-3xl overflow-hidden mx-6 border border-border shadow-2xl group/canvas">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] transition-opacity duration-700 opacity-50 group-hover/canvas:opacity-100" />
        
        {/* Render random floating nodes for the skills */}
        {[...languages, ...frameworks, ...tools].map((skill, index) => {
          // Generate pseudo-random positions for layout (deterministic based on index)
          const left = `${15 + (index * 37) % 70}%`;
          const top = `${15 + (index * 23) % 70}%`;
          
          let color = "#00ffcc"; // Default for tools
          if (languages.includes(skill)) color = "#a855f7"; // purple for langs
          if (frameworks.includes(skill)) color = "#3b82f6"; // blue for frameworks

          return (
            <motion.div
              key={skill}
              drag
              dragConstraints={{ left: -50, right: 800, top: -50, bottom: 400 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              className="absolute flex items-center justify-center px-4 flex-col py-3 bg-secondary/10 backdrop-blur-sm border rounded-full cursor-grab active:cursor-grabbing text-sm font-medium shadow-2xl group/node"
              style={{ left, top, borderColor: `${color}40`, color: 'var(--foreground)' }}
            >
              <span className="relative z-10">{skill}</span>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover/node:opacity-20 transition-opacity duration-300 blur-md pointer-events-none" style={{ backgroundColor: color }} />
            </motion.div>
          );
        })}

        <div className="absolute bottom-6 right-8 text-xs font-mono text-zinc-600 flex items-center space-x-2 pointer-events-none opacity-50">
          <span className="w-2 h-2 rounded-full border border-zinc-500 animate-ping" />
          <span>Click and drag nodes to explore</span>
        </div>
      </div>
    </section>
  );
}
