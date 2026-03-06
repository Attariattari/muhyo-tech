"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-12 max-w-xs w-full">
        {/* Orbital Ring Logo Area */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-accent/20 rounded-full border-dashed"
          />
          <div className="relative w-24 h-24 flex items-center justify-center glass rounded-full border border-accent/20 overflow-hidden shadow-[0_0_50px_rgba(var(--accent-rgb),0.1)]">
            <span className="text-4xl font-black text-foreground tracking-tighter animate-shimmer">
              M<span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Triple-Layer Futuristic Progress */}
        <div className="w-full space-y-4">
          <div className="relative h-1 w-full bg-muted overflow-hidden rounded-full">
            {/* Primary Motion Bar */}
            <div className="absolute top-0 left-0 h-full w-full bg-accent animate-progress-wide shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)]" />

            {/* Secondary Tracer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
            />
          </div>

          <div className="flex justify-between items-center px-1">
            <span className="text-small font-black uppercase tracking-[0.4em] text-muted-foreground/40 animate-pulse">
              Initializing Experience
            </span>
            <span className="text-[10px] font-bold font-mono text-accent">
              SECURE_LINK_V4
            </span>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none transition-opacity"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />
    </div>
  );
}
