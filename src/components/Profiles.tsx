"use client";

import { motion } from "framer-motion";
import { ExternalLink, SquareTerminal } from "lucide-react";

export default function Profiles() {
  const profiles = [
    {
      name: "LeetCode",
      metric: "100+ Problems Solved",
      color: "#FFA116",
      url: "https://leetcode.com/u/aSsxtSv8iM/"
    },
    {
      name: "HackerRank (Python)",
      metric: "4 Star Rating",
      color: "#00EA64",
      url: "https://www.hackerrank.com/profile/snehamaddheshiy1"
    },
    {
      name: "HackerRank (Java)",
      metric: "4 Star Rating",
      color: "#00EA64",
      url: "https://www.hackerrank.com/profile/snehamaddheshiy1"
    },
    {
      name: "GitHub",
      metric: "MazeSolver & Data Analysis",
      color: "#FFFFFF",
      url: "https://github.com/snehamaddheshiya"
    }
  ];

  return (
    <section id="profiles" className="relative w-full py-32 bg-background overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 text-accent">
              <SquareTerminal size={24} />
              <h2 className="text-sm font-mono tracking-widest uppercase">Metrics & Platforms</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">The Code Matrix.</h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary max-w-sm text-right"
          >
            Translating logic into impact across global competitive programming platforms and version control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between h-48 p-8 bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                style={{ background: `radial-gradient(circle at center, ${profile.color} 0%, transparent 70%)` }} 
              />
              <div className="flex justify-between items-start z-10">
                <h4 
                  className="text-xl font-bold text-primary transition-colors"
                  style={{ color: profile.color === "#FFFFFF" ? "white" : profile.color }}
                >
                  {profile.name}
                </h4>
                <ExternalLink size={20} className="text-secondary group-hover:text-primary transition-colors" />
              </div>
              <div className="z-10 mt-auto">
                <p className="text-sm font-mono tracking-wide text-secondary">{profile.metric}</p>
                <div className="w-full h-1 mt-4 bg-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full rounded-full" 
                    style={{ backgroundColor: profile.color }} 
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
