"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layers, Code } from "lucide-react";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-small font-bold text-accent uppercase tracking-widest border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Developing Future-Ready Web Apps
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 leading-[1.1]"
          >
            Building Digital <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
              Experiences
            </span>{" "}
            Beyond Limits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto md:mx-0 mb-10"
          >
            I transform complex technical problems into elegant,
            high-performance digital solutions. Specializing in modern
            architectures and premium user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4"
          >
            <Button
              variant="primary"
              className="px-10 py-4 shadow-xl shadow-accent/25"
              icon={ArrowRight}
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
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-20 flex flex-wrap justify-center md:justify-start gap-8 opacity-60"
          >
            <div className="flex items-center gap-3">
              <Layers size={20} className="text-secondary icon-scale" />
              <span className="text-small font-bold uppercase tracking-widest">
                Architecture
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Code size={20} className="text-secondary icon-scale" />
              <span className="text-small font-bold uppercase tracking-widest">
                Clean Code
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Terminal size={20} className="text-secondary icon-scale" />
              <span className="text-small font-bold uppercase tracking-widest">
                Performance
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
