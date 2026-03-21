"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      isAccent: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
        // 10% chance to be the accent color
        this.isAccent = Math.random() > 0.9;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        const isDark = document.documentElement.classList.contains("dark");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        if (this.isAccent) {
          ctx.fillStyle = `rgba(0, 255, 204, ${this.opacity})`; // --accent
        } else {
          ctx.fillStyle = isDark 
            ? `rgba(255, 255, 255, ${this.opacity})` 
            : `rgba(0, 0, 0, ${this.opacity})`;
        }
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    // Calculate a responsive particle count
    const initParticles = () => {
      particlesArray.length = 0;
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 9000); 
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    };
    initParticles();
    
    // Re-initialize particles on significant resize to prevent clustering or sparse areas
    let resizeTimeout: NodeJS.Timeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initParticles, 200);
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] bg-transparent"
      style={{ opacity: 0.8 }}
    />
  );
}
