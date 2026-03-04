"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * AdvancedAnimatedBackground Component
 * Concept: Neural Connectivity x Liquid Energy Field
 *
 * Features:
 * - Dynamic Node-Line Network (Neural)
 * - Mouse-proximity interaction (Parallax & Connection)
 * - Liquid Gradient Aura (Bilateral Blur)
 * - Theme-aware color palette
 * - Highly optimized Canvas-based rendering
 */
export const AdvancedAnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Configuration based on theme
    const config = {
      particleCount: 60,
      connectionDistance: 150,
      mouseRadius: 200,
      particleSpeed: 0.4,
      colors: isDark
        ? {
            dot: "rgba(14, 165, 233, 0.4)",
            line: "rgba(14, 165, 233, 0.12)",
            aura1: "rgba(14, 165, 233, 0.08)",
            aura2: "rgba(139, 92, 246, 0.05)",
          }
        : {
            dot: "rgba(59, 130, 246, 0.2)",
            line: "rgba(59, 130, 246, 0.08)",
            aura1: "rgba(59, 130, 246, 0.04)",
            aura2: "rgba(34, 211, 238, 0.03)",
          },
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse reaction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < config.mouseRadius) {
            const force = (config.mouseRadius - distance) / config.mouseRadius;
            this.x -= dx * force * 0.02;
            this.y -= dy * force * 0.02;
          }
        }

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = config.colors.dot;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            const opacity = 1 - distance / config.connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = config.colors.line.replace(
              "0.12",
              (opacity * 0.15).toString(),
            );
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background ambient auras
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      );
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(
        1,
        isDark ? "rgba(10, 15, 28, 0.3)" : "rgba(248, 250, 252, 0.2)",
      );
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 bg-background overflow-hidden pointer-events-none transition-colors duration-1000">
      {/* Liquid Energy Glows (CSS Layer) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-10 animate-floating"
          style={{
            background: isDark
              ? "var(--color-accent)"
              : "rgba(59, 130, 246, 0.2)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] opacity-10 animate-floating"
          style={{
            background: isDark
              ? "rgba(139, 92, 246, 0.2)"
              : "rgba(34, 211, 238, 0.2)",
            animationDelay: "-4s",
          }}
        />
      </div>

      {/* Main Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60 mix-blend-screen"
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`absolute inset-0 pointer-events-none ${isDark ? "bg-gradient-to-b from-transparent via-background/20 to-background" : ""}`}
      />
    </div>
  );
};
