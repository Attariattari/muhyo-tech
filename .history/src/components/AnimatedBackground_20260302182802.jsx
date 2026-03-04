"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AnimatedBackground Component
 * A premium combination of:
 * 1. Animated Aurora/Mesh Blobs (Floating color fields)
 * 2. Flowing SVG Wave Lines (Energy path animation)
 *
 * Performance optimized with hardware acceleration and theme-aware transitions.
 */
export const AnimatedBackground = () => {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  // Configuration for Aurora Blobs
  const blobs = [
    {
      id: 1,
      color: isDark ? "bg-accent/20" : "bg-blue-400/20",
      size: "w-[50vw] h-[50vw]",
      initial: { top: "-10%", left: "-10%" },
      animate: {
        x: [0, 100, -50, 0],
        y: [0, 50, 100, 0],
        scale: [1, 1.1, 0.9, 1],
      },
      duration: 20,
    },
    {
      id: 2,
      color: isDark ? "bg-purple-600/10" : "bg-purple-300/20",
      size: "w-[60vw] h-[60vw]",
      initial: { bottom: "-10%", right: "-10%" },
      animate: {
        x: [0, -80, 40, 0],
        y: [0, -100, 20, 0],
        scale: [1, 1.2, 0.8, 1],
      },
      duration: 25,
    },
    {
      id: 3,
      color: isDark ? "bg-blue-500/10" : "bg-cyan-200/30",
      size: "w-[40vw] h-[40vw]",
      initial: { top: "40%", left: "30%" },
      animate: {
        x: [0, 50, -30, 0],
        y: [0, -40, 60, 0],
        scale: [1, 0.9, 1.1, 1],
      },
      duration: 22,
    },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background transition-colors duration-1000 pointer-events-none">
      {/* 1. LAYER ONE: Animated Aurora / Mesh Gradients */}
      <div className="absolute inset-0 filter blur-[100px] md:blur-[140px] opacity-70">
        <AnimatePresence>
          {blobs.map((blob) => (
            <motion.div
              key={`${blob.id}-${isDark}`}
              className={`absolute rounded-full pointer-events-none ${blob.size} ${blob.color}`}
              style={blob.initial}
              animate={blob.animate}
              transition={{
                duration: blob.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 2. LAYER TWO: Flowing SVG Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] md:opacity-[0.25]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="energyLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor={isDark ? "var(--color-accent)" : "#3b82f6"}
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor={isDark ? "var(--color-accent)" : "#3b82f6"}
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              stopColor={isDark ? "var(--color-accent)" : "#3b82f6"}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -500 ${300 + i * 180} Q ${window.innerWidth / 2} ${100 + i * 150} ${window.innerWidth + 500} ${300 + i * 180}`}
            fill="none"
            stroke="url(#energyLineGradient)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{
              pathLength: [0.15, 0.45, 0.15],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Deep Field Wave */}
        <motion.path
          d="M -300 800 Q 600 500 1500 800 T 2500 800"
          fill="none"
          stroke={
            isDark ? "rgba(14, 165, 233, 0.1)" : "rgba(59, 130, 246, 0.08)"
          }
          strokeWidth="3"
          animate={{
            d: [
              "M -300 800 Q 600 500 1500 800 T 2500 800",
              "M -300 750 Q 700 850 1600 750 T 2500 750",
              "M -300 800 Q 600 500 1500 800 T 2500 800",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* 3. LAYER THREE: Noise / Texture Finish */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. BASE GRADIENT VIGNETTE */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${
          isDark
            ? "bg-gradient-to-b from-[#0a0f1c]/40 via-transparent to-[#0a0f1c]/40"
            : "bg-gradient-to-b from-white/30 via-transparent to-white/30"
        }`}
      />
    </div>
  );
};
