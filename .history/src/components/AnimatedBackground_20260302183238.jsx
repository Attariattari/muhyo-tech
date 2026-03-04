"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AnimatedBackground Component
 * Concept: "Premium Aurora Mesh Gradient"
 *
 * Features:
 * - Large, morphing color blobs (Aurora effect)
 * - Organic, slow-motion floating paths
 * - High-end grain/noise texture overlay
 * - Full Theme Support (Light/Dark adaptive)
 * - Hardware accelerated for performance
 */
export const AnimatedBackground = () => {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  const blobs = [
    {
      id: "orb-1",
      color: isDark ? "rgba(14, 165, 233, 0.3)" : "rgba(59, 130, 246, 0.15)",
      size: "w-[65vw] h-[65vw]",
      initialPosition: { top: "-10%", left: "-10%" },
      animate: {
        x: [0, 100, -50, 0],
        y: [0, 50, 150, 0],
        scale: [1, 1.1, 0.9, 1],
      },
      duration: 25,
    },
    {
      id: "orb-2",
      color: isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(167, 139, 250, 0.12)",
      size: "w-[60vw] h-[60vw]",
      initialPosition: { bottom: "-15%", right: "-10%" },
      animate: {
        x: [0, -120, 40, 0],
        y: [0, -80, 20, 0],
        scale: [1, 1.2, 0.8, 1],
      },
      duration: 30,
    },
    {
      id: "orb-3",
      color: isDark ? "rgba(30, 64, 175, 0.25)" : "rgba(103, 232, 249, 0.18)",
      size: "w-[45vw] h-[45vw]",
      initialPosition: { top: "40%", left: "30%" },
      animate: {
        x: [0, 60, -80, 0],
        y: [0, -60, 40, 0],
        scale: [1, 0.85, 1.15, 1],
      },
      duration: 22,
    },
    {
      id: "orb-4",
      color: isDark ? "rgba(6, 182, 212, 0.15)" : "rgba(56, 189, 248, 0.1)",
      size: "w-[55vw] h-[55vw]",
      initialPosition: { bottom: "10%", left: "5%" },
      animate: {
        x: [0, 40, 100, 0],
        y: [0, 120, -30, 0],
        scale: [1, 1.05, 0.95, 1],
      },
      duration: 28,
    },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background pointer-events-none transition-colors duration-1000">
      {/* 1. LAYER ONE: Aurora / Mesh Gradient Blobs */}
      <div className="absolute inset-0 filter blur-[100px] md:blur-[150px] opacity-80 mix-blend-normal">
        <AnimatePresence>
          {blobs.map((blob) => (
            <motion.div
              key={`${blob.id}-${isDark}`}
              className={`absolute rounded-full pointer-events-none ${blob.size}`}
              style={{
                ...blob.initialPosition,
                backgroundColor: blob.color,
              }}
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

      {/* 2. LAYER TWO: Premium Noise / Grain Texture */}
      {/* This layer gives the background a high-end studio feel and prevents color banding */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. LAYER THREE: Ambient Vignette & Contrast Control */}
      {/* Ensures content in the middle is perfectly readable */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${
          isDark
            ? "bg-gradient-to-b from-transparent via-background/40 to-background/80"
            : "bg-gradient-to-b from-transparent via-white/20 to-white/60"
        }`}
      />

      {/* Subtle Bottom Glow to ground the UI */}
      <div
        className={`absolute bottom-0 w-full h-[30vh] pointer-events-none transition-colors duration-1000 ${
          isDark
            ? "bg-gradient-to-t from-accent/10 to-transparent"
            : "bg-gradient-to-t from-blue-500/5 to-transparent"
        }`}
      />
    </div>
  );
};
