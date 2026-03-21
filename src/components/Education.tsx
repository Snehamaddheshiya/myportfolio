"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative w-full min-h-screen py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="flex-1 z-10 w-full max-w-2xl mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">Education.</h2>
              <p className="text-secondary text-lg leading-relaxed mb-16 max-w-xl">
                My academic journey defines my strong foundation in logical problem-solving and software engineering. I am constantly learning, adapting, and growing my skill set.
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2" />
                <span className="text-sm font-mono text-accent mb-2 block">Aug &apos;23 - Present</span>
                <h3 className="text-xl font-semibold mb-1 text-primary">Bachelor of Technology in CSE</h3>
                <h4 className="text-sm text-secondary mb-3">Lovely Professional University, Phagwara, Punjab</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Focusing on Data Structures & Algorithms, building a strong core CS foundation. Current CGPA: 7.8
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2" />
                <span className="text-sm font-mono text-accent mb-2 block">Mar &apos;20 - May &apos;21</span>
                <h3 className="text-xl font-semibold mb-1 text-primary">Intermediate (12th Grade)</h3>
                <h4 className="text-sm text-secondary mb-3">K.K. Public Academy, Deoria, Uttar Pradesh</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Percentage: 75.6%
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2" />
                <span className="text-sm font-mono text-accent mb-2 block">Mar &apos;18 - May &apos;19</span>
                <h3 className="text-xl font-semibold mb-1 text-primary">Matriculation (10th Grade)</h3>
                <h4 className="text-sm text-secondary mb-3">P.N. Academy, Deoria, Uttar Pradesh</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Completed secondary education forming a strong academic base. Percentage: 89.4%
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="flex-1 relative hidden lg:block h-[600px]">


            <div className="absolute bottom-10 left-0 w-64 bg-card shadow-lg border border-border rounded-xl p-6 z-30 transition-colors duration-300">
              <h4 className="font-mono text-xs text-accent mb-4 tracking-wider uppercase">Focus Areas</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex justify-between items-center group cursor-default">
                  <span className="group-hover:text-accent transition-colors duration-300">Data Structures</span>
                  <span className="text-xs text-secondary">100+ LeetCode</span>
                </li>
                <li className="flex justify-between items-center group cursor-default">
                  <span className="group-hover:text-accent transition-colors duration-300">Database Schema</span>
                  <span className="text-xs text-secondary">SQL</span>
                </li>
                <li className="flex justify-between items-center group cursor-default">
                  <span className="group-hover:text-accent transition-colors duration-300">Visualizations</span>
                  <span className="text-xs text-secondary">Tableau</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
