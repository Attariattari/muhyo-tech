"use client";

import React from "react";
import { motion } from "framer-motion";
import Portfolio from "@/components/Portfolio";
import { Sparkles } from "lucide-react";

export default function ProjectsClientPage({ projects }) {
  return (
    <main className="relative min-h-screen bg-background selection:bg-accent/30 selection:text-accent-foreground overflow-hidden">
      {/* Layer 2: Premium Border/Vignette Effect */}
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] opacity-20 hidden lg:block" />

      {/* Optional Top Floating Badge to make the page feel extra premium */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
        className="absolute top-32 right-10 z-[60] hidden xl:flex items-center gap-3 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl overflow-hidden group hover:border-accent/50 transition-colors cursor-default"
      >
        <div className="absolute inset-0 bg-accent/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/80 italic">
          Premium Works
        </span>
      </motion.div>

      {/* Main Content Wrapper with Smooth Entry */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(15px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
        className="relative z-10"
      >
        <Portfolio projects={projects} />
      </motion.div>
    </main>
  );
}
