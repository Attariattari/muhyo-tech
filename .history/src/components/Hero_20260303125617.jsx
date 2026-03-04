"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-bold text-accent uppercase tracking-widest border-accent/20"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Developing Future-Ready Web Apps
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-foreground mb-8 leading-[1.1]"
        >
          Building Digital <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
            Experiences
          </span>{" "}
          That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Senior Software Engineer & UI Architect specializing in premium web
          applications using Next.js and high-end design systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="/projects" className="group">
            <button className="px-10 py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-accent/40 hover:scale-105 transition-all flex items-center gap-3">
              Explore Projects{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link
            href="/contact"
            className="px-10 py-5 rounded-2xl border-2 border-border text-foreground font-black uppercase text-xs tracking-[0.2em] hover:bg-card/50 transition-all"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-border/10 pt-12"
        >
          <div className="flex flex-col items-center gap-2">
            <Layers className="text-secondary w-5 h-5" />
            <span className="text-[10px] uppercase font-bold text-muted-foreground">
              Scalable Architecture
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Terminal className="text-secondary w-5 h-5" />
            <span className="text-[10px] uppercase font-bold text-muted-foreground">
              Premium Backend
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Code className="text-secondary w-5 h-5" />
            <span className="text-[10px] uppercase font-bold text-muted-foreground">
              Clean Production Code
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 rounded-md border-2 border-secondary/50 flex items-center justify-center text-[8px] font-black text-secondary uppercase">
              UI
            </div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">
              Professional UX
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
