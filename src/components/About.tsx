"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about-me" className="relative w-full py-40 bg-transparent overflow-hidden flex items-center justify-center">
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
            01 / Identity & Capabilities
          </h2>

          <div className="relative max-w-4xl">
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary mb-8">
              Transforming complex data into predictive insights.<br />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Data Science & ML.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                I specialize in building predictive models, statistical analysis, and machine learning pipelines. Leveraging strong foundations in Mathematics and Algorithms, I extract actionable insights from raw data to solve complex business problems.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Analytical Arsenal.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                My core stack is built around modern data ecosystems. I am highly proficient in Python, SQL, and Java, and regularly build robust models using pandas, scikit-learn, TensorFlow, and PyTorch, deploying them into scalable architectures.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Strategic Leadership.</h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                Models alone don't create impact. I bring strong analytical leadership and cross-functional communication to every project. I excel in translating complex technical data into clear, actionable business strategies for stakeholders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-[-5%] top-[20%] text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-foreground/[0.02] pointer-events-none whitespace-nowrap select-none">
        DATA SCIENTIST
      </div>
    </section>
  );
}
