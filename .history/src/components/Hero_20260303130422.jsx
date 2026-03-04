"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Layers,
  Code,
  Cpu,
  Globe,
  Rocket,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "Scalable Architecture",
      description: "Production-ready systems",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      label: "Premium Backend",
      description: "Robust & Secure APIs",
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "Clean Code",
      description: "Maintainable patterns",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "Performance",
      description: "Blazing fast speeds",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-floating"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-floating [animation-delay:2s]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_80%)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full border border-accent/20 shadow-xl shadow-accent/5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-[0.2em]">
            Available for New High-End Projects
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto]">
              DIGITAL ELITE
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-accent mx-auto mb-8 rounded-full"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4"
        >
          Senior Software Engineer & UI Architect. I build high-performance,
          visually stunning web applications that scale with your ambitions.
          Specializing in Next.js, TypeScript, and Premium Design Systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto overflow-hidden rounded-2xl group relative"
          >
            <button className="w-full px-12 py-5 bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 relative z-10 group-hover:bg-accent/90">
              Start Revolution
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 rounded-2xl border border-border text-foreground font-black uppercase text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
          >
            Work With Me
          </Link>
        </motion.div>

        {/* Desktop Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-border/10 pt-16 px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-lg shadow-black/5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[10px] uppercase font-bold text-foreground tracking-widest">
                  {feature.label}
                </h3>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1 font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
