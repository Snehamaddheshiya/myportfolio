"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link className="text-xl font-bold tracking-tighter hover:text-accent transition-colors" href="/">
          SM<span className="text-accent">.</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-6">
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#about-me">About</a>
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#education">Education</a>
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#skills">Skills</a>
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#profiles">Profiles</a>
          <a className="text-xs uppercase tracking-widest font-mono text-secondary hover:text-white transition-colors" href="#certificates">Certifications</a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          <a target="_blank" className="text-secondary hover:text-accent transition-colors" href="https://github.com/snehamaddheshiya">
            <Github size={18} />
          </a>
          <a target="_blank" className="text-secondary hover:text-accent transition-colors" href="http://www.linkedin.com/in/snehamaddheshiya11">
            <Linkedin size={18} />
          </a>
          
          <a href="/resume.png" download className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 rounded-full text-xs font-medium transition-all">
            <Download size={14} /> Resume
          </a>
        </div>

        <button className="lg:hidden text-foreground">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
