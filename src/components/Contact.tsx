"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Smartphone, Sparkles, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 bg-background transition-colors duration-300 overflow-hidden flex flex-col items-center border-t border-border">
      <div className="absolute inset-0 z-0 opacity-[0.03] transition-opacity duration-1000" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "4rem 4rem" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-mono mb-8">
              <Sparkles size={16} className="animate-pulse" />
              <span>Available for opportunities</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-primary leading-[1.1]">
              Let&apos;s build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent block mt-2 pb-2">something.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-lg font-light leading-relaxed">
              Whether it&apos;s a software engineering role, a web application, an algorithm optimization, or just tech banter — my inbox is always open.
            </p>
            
            <div className="space-y-8 relative">
              <a href="mailto:snehamaddheshiya012@gmail.com" className="group relative flex items-center space-x-5 w-fit p-2 pr-6 rounded-full bg-transparent hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors">
                  <Mail size={24} className="text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">Direct Email</span>
                  <span className="text-xl md:text-2xl font-medium text-zinc-300 group-hover:text-white transition-colors">snehamaddheshiya012@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918840024828" className="group relative flex items-center space-x-5 w-fit p-2 pr-6 rounded-full bg-transparent hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors">
                  <Smartphone size={24} className="text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider group-hover:text-accent transition-colors">Phone</span>
                  <span className="text-xl md:text-2xl font-medium text-zinc-300 group-hover:text-white transition-colors">+91-8840024828</span>
                </div>
              </a>
              
              <div className="flex space-x-4 pt-8 border-t border-white/10 w-full max-w-md">
                <a href="https://github.com/snehamaddheshiya" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:text-black hover:bg-white transition-all duration-300 group">
                  <span className="text-zinc-400 group-hover:text-black transition-colors"><Github size={20} /></span>
                  <span className="font-mono text-sm tracking-wide font-medium text-zinc-300 group-hover:text-black transition-colors">GitHub</span>
                </a>
                <a href="http://www.linkedin.com/in/snehamaddheshiya11" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:text-black hover:bg-white transition-all duration-300 group">
                  <span className="text-zinc-400 group-hover:text-black transition-colors"><Linkedin size={20} /></span>
                  <span className="font-mono text-sm tracking-wide font-medium text-zinc-300 group-hover:text-black transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[32px] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent overflow-hidden group/form"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-blue-500/20 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <form className="relative bg-card/90 backdrop-blur-xl p-8 md:p-10 rounded-[31px] space-y-6 flex flex-col z-10 shadow-2xl">
              <div className="space-y-6">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent focus:bg-white/[0.08] transition-all duration-300 text-white peer pt-7" />
                  <label htmlFor="name" className="absolute left-6 transition-all duration-300 pointer-events-none top-5.5 text-zinc-500 text-sm peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-accent font-mono">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent focus:bg-white/[0.08] transition-all duration-300 text-white peer pt-7" />
                  <label htmlFor="email" className="absolute left-6 transition-all duration-300 pointer-events-none top-5.5 text-zinc-500 text-sm peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-accent font-mono">Your Email</label>
                </div>
                <div className="relative group">
                  <textarea id="message" rows={5} required className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent focus:bg-white/[0.08] transition-all duration-300 text-white resize-none peer pt-8 custom-scrollbar" />
                  <label htmlFor="message" className="absolute left-6 transition-all duration-300 pointer-events-none top-6 text-zinc-500 text-sm peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-accent font-mono">Tell me about your project...</label>
                </div>
              </div>
              <button className="w-full relative group overflow-hidden rounded-2xl bg-white text-black font-semibold flex items-center justify-center py-5 mt-4 border border-transparent hover:border-white/50 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300" type="submit">
                <span className="relative z-10 flex items-center space-x-2 text-lg">
                  <span>Send via Gmail</span>
                  <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
