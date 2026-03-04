"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Layers, Code, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] -left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="container mx-auto relative z-10"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 inline-flex items-center gap-4 px-6 py-3 glass rounded-2xl text-[10px] font-black text-accent uppercase tracking-[0.4em] border-accent/20 italic"
          >
            <div className="relative">
              <span className="block w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-accent" />
            </div>
            Engineering Digital Architecture
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-[9.5rem] font-black text-foreground mb-12 leading-[0.85] tracking-[-0.04em] uppercase italic"
          >
            BUILDING <br />
            <span className="text-transparent stroke-text">FUTURE</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
              LOGIC
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-2xl max-w-3xl mb-16 leading-tight font-medium"
          >
            Crafting high-performance, premium technical solutions for the
            modern web. Senior Full-Stack Developer specializing in
            obsidian-grade design systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Link href="/projects" className="group">
              <button className="h-16 px-12 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.3em] shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.5)] transition-all flex items-center gap-4 group-hover:-translate-y-1">
                Explore Studio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="h-16 px-12 rounded-2xl glass border border-white/10 text-foreground font-black uppercase text-xs tracking-[0.3em] hover:bg-white/5 transition-all hover:-translate-y-1">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          {/* Metrics / Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-32 pt-16 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Layers size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
                  Systems
                </span>
                <span className="text-xs font-bold text-foreground">
                  Scalable Architecture
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Globe size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
                  Global
                </span>
                <span className="text-xs font-bold text-foreground">
                  Cloud Integration
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Cpu size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
                  Performance
                </span>
                <span className="text-xs font-bold text-foreground">
                  Optimization Engine
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Terminal size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
                  Legacy
                </span>
                <span className="text-xs font-bold text-foreground">
                  Clean Production
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute right-20 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
    </section>
  );
}
