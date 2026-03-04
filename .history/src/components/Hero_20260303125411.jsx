"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Layers,
  Code,
  Globe,
  Cpu,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] flex flex-col justify-center px-6 lg:px-24 overflow-hidden pt-32 lg:pt-0"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] -left-40 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Modern CSS Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="container mx-auto relative z-10"
      >
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 inline-flex items-center gap-5 px-8 py-4 bg-accent/5 backdrop-blur-xl rounded-full text-[11px] font-black text-accent uppercase tracking-[0.5em] border border-accent/20 italic"
          >
            <div className="relative">
              <span className="block w-3 h-3 rounded-full bg-accent animate-ping" />
              <span className="absolute inset-0 w-3 h-3 rounded-full bg-accent" />
            </div>
            Elite Engineering Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[11.5rem] font-black text-foreground mb-14 leading-[0.8] tracking-[-0.05em] uppercase italic"
          >
            ARCHITECTING <br />
            <span className="text-transparent stroke-text opacity-20">
              VIRTUAL
            </span>{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400 drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]">
              REALMS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-xl md:text-3xl max-w-4xl mb-20 leading-tight font-light italic tracking-tight"
          >
            Engineering mission-critical web architectures with precision and
            obsidian-grade aesthetics. Senior Full-Stack Developer defining the
            next standard of digital excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-10"
          >
            <Link href="/projects" className="group">
              <button className="h-20 px-14 rounded-3xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.4em] shadow-[0_0_50px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_80px_rgba(var(--accent-rgb),0.5)] transition-all flex items-center gap-5 group-hover:-translate-y-2">
                Studio Index
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="h-20 px-14 rounded-3xl bg-transparent border border-border text-foreground font-black uppercase text-xs tracking-[0.4em] hover:bg-card/50 transition-all hover:-translate-y-2 backdrop-blur-md">
                Connect
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-16 border-t border-border/10 pt-20"
          >
            {[
              { icon: Layers, label: "Systems", value: "Scalable Logic" },
              { icon: Globe, label: "Global", value: "Cloud Ecosystems" },
              { icon: Cpu, label: "Performance", value: "Neural Speed" },
              { icon: Terminal, label: "Core", value: "Precision Code" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-card border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-xl group-hover:shadow-accent/20">
                  <item.icon size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-40 italic">
                    {item.label}
                  </span>
                  <span className="text-[13px] font-black text-foreground uppercase tracking-wider">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Atmospheric Vertical Marker */}
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent hidden xl:block overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-40 bg-gradient-to-b from-transparent via-accent to-transparent"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-black tracking-widest italic">
          Proceed
        </span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}
