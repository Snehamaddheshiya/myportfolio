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
            {/* Window Mockup for Code snippet */}
            <div className="absolute top-10 right-10 w-96 bg-[#0c0c0c] border border-border rounded-lg overflow-hidden shadow-2xl z-20">
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-border bg-[#111]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-secondary">traverseTree.java</span>
                <div className="ml-auto text-xs font-mono text-accent animate-pulse">Running...</div>
              </div>
              <div className="p-6 font-mono text-sm leading-[1.7] text-zinc-300 min-h-[250px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#c678dd]">public void </span><span className="text-[#61afef]">dfs</span><span>(Node node) {'{'}</span><br/>
                  <span className="text-[#c678dd]">  if</span><span> (node == null) </span><span className="text-[#c678dd]">return</span><span>;</span><br/>
                  <span className="text-[#7f848e] italic">  {/* Process current node */}</span><br/>
                  <span>  </span><span className="text-[#61afef]">process</span><span>(node.val);</span><br/>
                  <span>  </span><span className="text-[#61afef]">dfs</span><span>(node.left);</span><br/>
                  <span>  </span><span className="text-[#61afef]">dfs</span><span>(node.right);</span><br/>
                  <span>{'}'}</span>
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 w-64 bg-card/40 backdrop-blur-xl border border-border rounded-xl p-6 shadow-xl z-30">
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
