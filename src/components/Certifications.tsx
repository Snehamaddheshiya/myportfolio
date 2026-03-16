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
      url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_697b1ef2d3ca09d0a4c8ac66_1769678067374_completion_certificate.pdf"
    },
    {
      title: "Computational Theory: Language Principle",
      provider: "Infosys",
      date: "Dec '25",
      type: "Course Certificate",
      icon: Award,
      color: "from-blue-600 to-blue-400",
      accent: "text-blue-400",
      bgBlur: "bg-blue-600/20",
      url: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0135015511562403847605/1-6f062dd7-b74c-45b4-8920-4a3b1745bae6.pdf"
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
      url: "https://www.hackerrank.com/certificates/9d31de44634d"
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
      url: "https://www.coursera.org/account/accomplishments/certificate/42N207YNVAWW"
    },
    {
      title: "Fundamentals of Network Communication",
      provider: "Coursera",
      date: "Aug '24",
      type: "Course Certificate",
      icon: Award,
      color: "from-cyan-600 to-blue-600",
      accent: "text-cyan-400",
      bgBlur: "bg-cyan-600/20",
      url: "https://www.coursera.org/account/accomplishments/certificate/E7NV1QO7OE7E"
    },
    {
      title: "Intro to Hardware & Operating Systems",
      provider: "Coursera",
      date: "Aug '24",
      type: "Course Certificate",
      icon: Award,
      color: "from-blue-500 to-cyan-400",
      accent: "text-cyan-400",
      bgBlur: "bg-blue-500/20",
      url: "https://www.coursera.org/account/accomplishments/certificate/9TPXTZVJ9NEJ"
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
      title: "CodeQuest: DSA Summer Bootcamp",
      provider: "Lovely Professional University",
      date: "Jun '25 - Jul '25",
      type: "Training",
      icon: ShieldCheck,
      color: "from-yellow-600 to-orange-500",
      accent: "text-yellow-500",
      bgBlur: "bg-yellow-600/20",
      url: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12317579_887_20_08_2025.pdf?_gl=1*1xyf7wp*_gcl_au*MTkzODMwMzg4NS4xNzYzOTc3MjMy"
    }
  ];

  return (
    <section id="certificates" className="relative w-full py-32 bg-[#050505] overflow-hidden border-t border-white/5">
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
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Certifications & Awards.</h3>
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
                className="group relative flex flex-col justify-between p-6 h-[280px] bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-2xl cursor-pointer shadow-xl overflow-hidden"
              >
                {/* Glow Effects */}
                <div className={`absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-gradient-to-br ${cert.color} opacity-20 blur-2xl rounded-full group-hover:opacity-60 transition-opacity duration-700`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex justify-between items-start w-full">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{cert.type}</span>
                  </div>
                  <ExternalLink size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-1 pt-2">
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    <Icon className={`w-8 h-8 ${cert.accent}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-colors leading-snug" 
                      style={{ backgroundImage: "linear-gradient(to right, #ffffff, #a1a1aa)" }}>
                    {cert.title}
                  </h4>
                </div>

                <div className="relative z-10 w-full flex items-end justify-between border-t border-white/10 pt-3 mt-2">
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Authorized Provider</span>
                    <span className="text-xs font-mono font-bold text-zinc-300">{cert.provider}</span>
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
