"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AnimatedBackground Component
 * Creates a premium "Aurora / Mesh Gradient" effect with floating blobs.
 * Optimized for performance and perfectly theme-aware.
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
      initialX: "-10%",
      initialY: "-10%",
      animateX: ["0%", "20%", "-10%"],
      animateY: ["0%", "30%", "0%"],
      duration: 25,
      color: isDark ? "bg-accent/30" : "bg-blue-300/40",
      size: "w-[60%] h-[60%]",
      blur: "blur-[120px]",
    },
    {
      initialX: "60%",
      initialY: "10%",
      animateX: ["0%", "-30%", "0%"],
      animateY: ["0%", "40%", "0%"],
      duration: 30,
      color: isDark ? "bg-purple-600/20" : "bg-purple-200/40",
      size: "w-[50%] h-[50%]",
      blur: "blur-[130px]",
    },
    {
      initialX: "10%",
      initialY: "50%",
      animateX: ["0%", "40%", "0%"],
      animateY: ["0%", "-30%", "0%"],
      duration: 28,
      color: isDark ? "bg-blue-600/20" : "bg-cyan-200/40",
      size: "w-[55%] h-[55%]",
      blur: "blur-[140px]",
    },
    {
      initialX: "50%",
      initialY: "60%",
      animateX: ["0%", "-20%", "0%"],
      animateY: ["0%", "-40%", "0%"],
      duration: 22,
      color: isDark ? "bg-cyan-500/20" : "bg-blue-200/50",
      size: "w-[45%] h-[45%]",
      blur: "blur-[110px]",
    },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background pointer-events-none transition-colors duration-1000">
      {/* Background Noise / Grain Overlay for Premium Feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: isDark
            ? "contrast(120%) brightness(100%)"
            : "contrast(100%) brightness(120%)",
        }}
      />

      {/* Subtle Grid Pattern */}
      <div
        className={`absolute inset-0 opacity-[0.03] ${isDark ? "invert" : ""}`}
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Mesh Gradient Blobs */}
      <div className="absolute inset-0 filter saturate-150">
        <AnimatePresence mode="wait">
          {blobs.map((blob, index) => (
            <motion.div
              key={`${index}-${isDark}`}
              initial={{
                x: blob.initialX,
                y: blob.initialY,
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                x: blob.animateX,
                y: blob.animateY,
                scale: [1, 1.1, 1],
                opacity: 1,
              }}
              transition={{
                x: {
                  duration: blob.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: blob.duration + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: blob.duration / 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 2 },
              }}
              className={`absolute rounded-full pointer-events-none will-change-transform ${blob.size} ${blob.color} ${blob.blur}`}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Finishing Vignette for Depth */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,15,28,0.4)_100%)]"
            : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.3)_100%)]"
        }`}
      />
    </div>
  );
};
