"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden bg-background">
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
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-[1px] w-12 bg-accent/50"></span>
            <span className="text-accent text-small font-black uppercase tracking-[0.4em]">
              Welcome to the Future
            </span>
          </motion.div>

          <h1 className="leading-[1.1] mb-8">
            Building Digital Experiences{" "}
            <span className="text-accent animate-pulse">Beyond Limits</span>
          </h1>

          <p className="mb-12 max-w-2xl">
            Passionate Senior Full-Stack Developer and UI Architect. I transform complex problems into elegant, high-performance digital solutions with a focus on modern aesthetics and user-centric design.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button
              variant="primary"
              className="px-10 py-4 shadow-xl shadow-accent/25"
              onClick={() => (window.location.href = "#projects")}
            >
              Explore My Work
            </Button>
            <Button
              variant="secondary"
              className="px-10 py-4 glass"
              onClick={() => (window.location.href = "#contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```
