"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "MazeSolver",
      type: "Algorithm Visualizer System",
      tech: "Java, Swing, BFS/DFS, GUI",
      desc: "Engineered an intelligent maze-solving system autonomously computing valid paths using graph traversal. Implemented optimized BFS/DFS algorithms over a 2D grid on an interactive Java Swing interface, delivering visually traceable solution paths while mitigating redundant traversals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      color: "#00FFCC",
      link: "https://github.com/Snehamaddheshiya/MazeSolver"
    },
    {
      title: "Mental Health Care Trends",
      type: "Data Analytics & ML Study",
      tech: "Python, Pandas, Scikit-learn, Seaborn",
      desc: "Analyzed mental health care trends in the US to uncover temporal, demographic, and geographic variations using advanced EDA and statistical modeling. Validated findings with confidence-interval analysis, providing actionable insights for public health policy.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&q=80",
      color: "#A855F7",
      link: "https://github.com/Snehamaddheshiya/-Mental-Health-Care-Trends"
    },
    {
      title: "Governance & Development Metrics",
      type: "Comprehensive Dashboard",
      tech: "Data Analytics, Excel Dashboard",
      desc: "Developed a comprehensive Excel dashboard to track and analyze key governance and development metrics, providing a centralized view for strategic decision-making and performance monitoring.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      color: "#3B82F6",
      link: "https://www.linkedin.com/posts/snehamaddheshiya11_exceldashboard-dataanalytics-governancemetrics-activity-7316845014771212288-eQPQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfRVHcBkURkwHJ3Uo6xAwMYrNoqDfXNOeE"
    },
    {
      title: "Annual Content Production Trends",
      type: "Amazon Prime Data Analytics",
      tech: "Power BI, Data Visualization",
      desc: "Created an interactive Power BI dashboard analyzing annual content production trends on Amazon Prime, enabling deep-dive visual insights into streaming library growth and genre distribution over time.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&q=80",
      color: "#F59E0B",
      link: "https://www.linkedin.com/posts/snehamaddheshiya11_dataanalytics-powerbi-amazonprime-activity-7408210090442383360-4WvR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfRVHcBkURkwHJ3Uo6xAwMYrNoqDfXNOeE"
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-primary">Selected Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative block h-[450px] rounded-2xl overflow-hidden bg-card border border-border"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/50 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <span 
                  className="text-xs font-mono mb-3 block" 
                  style={{ color: project.color }}
                >
                  {project.type}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <span className="text-xs font-mono text-zinc-400 mb-4 block border border-white/10 w-fit px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">
                  {project.tech}
                </span>

                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-500 hidden md:block"
                >
                  <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>
                
                {/* On mobile, desc is always visible but clamped */}
                <div className="md:hidden">
                  <p className="text-sm text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
