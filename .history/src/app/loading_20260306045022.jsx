"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative flex flex-col items-center gap-12 max-w-xs w-full">
        {/* Orbital Ring Logo Area */}
        <div className="relative">


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
    </div>
  );
}
