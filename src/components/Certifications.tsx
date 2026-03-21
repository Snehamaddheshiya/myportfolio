"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CodeXml } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "Quantitative Research Job Simulation",
      provider: "JPMorgan Chase & Co.",
      date: "Jan '26",
      type: "Virtual Experience",
      icon: ShieldCheck,
      color: "from-blue-800 to-slate-400",
      accent: "text-slate-300",
      bgBlur: "bg-blue-800/20",
      url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_697b1ef2d3ca09d0a4c8ac66_1769678067374_completion_certificate.pdf",
      image: "/certificates/jpmorgan.png"
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      provider: "Infosys Springboard",
      date: "Dec '25",
      type: "Course Completion Certificate",
      icon: Award,
      color: "from-blue-600 to-blue-400",
      accent: "text-blue-400",
      bgBlur: "bg-blue-600/20",
      url: "https://verify.onwingspan.com",
      image: "/certificates/info_comp_theory.png"
    },
    {
      title: "SQL (Basic)",
      provider: "HackerRank",
      date: "Nov '25",
      type: "Assessment",
      icon: CodeXml,
      color: "from-green-600 to-emerald-400",
      accent: "text-green-400",
      bgBlur: "bg-green-600/20",
      url: "https://www.hackerrank.com/certificates/9d31de44634d",
      image: "/certificates/sql.png"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Google",
      date: "Sep '24",
      type: "Course Certificate",
      icon: Award,
      color: "from-indigo-600 to-blue-500",
      accent: "text-indigo-400",
      bgBlur: "bg-indigo-600/20",
      url: "https://www.coursera.org/account/accomplishments/certificate/42N207YNVAWW",
      image: "/certificates/google_network.png"
    },
    {
      title: "Fundamentals of Network Communication",
      provider: "University of Colorado",
      date: "Oct '24",
      type: "Course Certificate",
      icon: Award,
      color: "from-cyan-600 to-blue-600",
      accent: "text-cyan-400",
      bgBlur: "bg-cyan-600/20",
      url: "https://coursera.org/verify/E7NV1QO7OE7E",
      image: "/certificates/cu_fund.png"
    },
    {
      title: "Digital Systems: From Logic Gates to Processors",
      provider: "Universitat Autònoma de Barcelona",
      date: "Oct '24",
      type: "Course Certificate",
      icon: CodeXml,
      color: "from-green-700 to-emerald-500",
      accent: "text-emerald-400",
      bgBlur: "bg-green-700/20",
      url: "https://coursera.org/verify/LORG32UGZA5T",
      image: "/certificates/uab_digital.png"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "IBM",
      date: "Sep '24",
      type: "Course Certificate",
      icon: Award,
      color: "from-blue-500 to-cyan-400",
      accent: "text-cyan-400",
      bgBlur: "bg-blue-500/20",
      url: "https://coursera.org/verify/9TPXTZVJ9NEJ",
      image: "/certificates/ibm_hardware.png"
    },
    {
      title: "Legacy Responsive Web Design V8",
      provider: "freeCodeCamp",
      date: "Jul '24",
      type: "Course Certificate",
      icon: CodeXml,
      color: "from-orange-500 to-yellow-400",
      accent: "text-orange-400",
      bgBlur: "bg-orange-500/20",
      url: "https://www.freecodecamp.org/certification/snehamaddheshiya/responsive-web-design"
    },
    {
      title: "CodeQuest: DSA Summer Bootcamp From Basics to Brilliance",
      provider: "Lovely Professional University",
      date: "Aug '25",
      type: "Certificate of Merit",
      icon: CodeXml,
      color: "from-yellow-400 to-orange-500",
      accent: "text-yellow-500",
      bgBlur: "bg-yellow-600/20",
      url: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12317579_887_20_08_2025.pdf?_gl=1*1xyf7wp*_gcl_au*MTkzODMwMzg4NS4xNzYzOTc3MjMy",
      image: "/certificates/lpu_codequest.png"
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      provider: "University of Colorado",
      date: "Nov '24",
      type: "Course Certificate",
      icon: CodeXml,
      color: "from-gray-600 to-yellow-600",
      accent: "text-yellow-400",
      bgBlur: "bg-yellow-600/20",
      url: "https://coursera.org/verify/BJUBBD64DP2R",
      image: "/certificates/cu_p2p.png"
    },
    {
      title: "Digital Skills: Social Media",
      provider: "FutureLearn / Accenture",
      date: "Mar '26",
      type: "Certificate of Achievement",
      icon: Award,
      color: "from-fuchsia-600 to-purple-600",
      accent: "text-fuchsia-400",
      bgBlur: "bg-fuchsia-600/20",
      url: "https://futurelearn.com/certificates/asug21x",
      image: "/certificates/fl_social.png"
    },
    {
      title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
      provider: "Infosys Springboard",
      date: "Sep '25",
      type: "Course Completion Certificate",
      icon: ShieldCheck,
      color: "from-blue-600 to-cyan-500",
      accent: "text-cyan-400",
      bgBlur: "bg-cyan-600/20",
      url: "https://verify.onwingspan.com",
      image: "/certificates/info_master.png"
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      provider: "Infosys Springboard",
      date: "Sep '25",
      type: "Course Completion Certificate",
      icon: ShieldCheck,
      color: "from-blue-600 to-cyan-500",
      accent: "text-cyan-400",
      bgBlur: "bg-cyan-600/20",
      url: "https://verify.onwingspan.com",
      image: "/certificates/info_build.png"
    },
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      provider: "Infosys Springboard",
      date: "Sep '25",
      type: "Course Completion Certificate",
      icon: ShieldCheck,
      color: "from-indigo-600 to-blue-500",
      accent: "text-indigo-400",
      bgBlur: "bg-indigo-600/20",
      url: "https://verify.onwingspan.com",
      image: "/certificates/info_chatgpt.png"
    }
  ];

  return (
    <section id="certificates" className="relative w-full py-32 bg-background transition-colors duration-300 overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 text-accent">
              <Award size={24} />
              <h2 className="text-sm font-mono tracking-widest uppercase">Continuous Learning</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Certifications & Awards.</h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary max-w-sm text-right"
          >
            Verified industry credentials designed to look and feel like holographic physical achievements on the web.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                className="group relative flex flex-col justify-between p-6 h-[280px] bg-card border border-border rounded-2xl cursor-pointer shadow-xl overflow-hidden"
              >
                {/* Glow Effects */}
                <div className={`absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-gradient-to-br ${cert.color} opacity-20 blur-2xl rounded-full group-hover:opacity-60 transition-opacity duration-700`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex justify-between items-start w-full">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest truncate max-w-[150px]" title={cert.provider}>{cert.provider}</span>
                  </div>
                  <ExternalLink size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-1 pt-2 w-full">
                  {cert.image ? (
                    <div className="relative w-full h-32 mb-2 rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cert.image} alt={cert.title} className="object-cover object-top w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                  ) : (
                    <>
                      <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
                        <Icon className={`w-8 h-8 ${cert.accent}`} />
                      </div>
                      <h4 className="text-lg font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text transition-colors leading-snug" 
                          style={{ backgroundImage: "linear-gradient(to right, var(--foreground), var(--secondary))" }}>
                        {cert.title}
                      </h4>
                    </>
                  )}
                </div>

                <div className="relative z-10 w-full flex items-end justify-between border-t border-white/10 pt-3 mt-2">
                  <div className="flex flex-col items-start max-w-[80%]">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Course Name</span>
                    <span className="text-xs font-mono font-bold text-secondary truncate w-full" title={cert.title}>{cert.title}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-dashed border-white/20 flex items-center justify-center bg-white/5 group-hover:rotate-180 transition-transform duration-1000">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${cert.color} opacity-80 backdrop-blur-md`} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  );
}
