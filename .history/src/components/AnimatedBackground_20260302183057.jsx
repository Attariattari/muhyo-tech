"use client";

import { useTheme } from "./ThemeProvider";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AnimatedBackground Component
 * Concept: "Aurora Energy & Flowing Data"
 *
 * Features:
 * - Animated Aurora Blobs (Morphing light fields)
 * - Flowing SVG Energy Lines (Moving wave paths)
 * - Subtle Mouse Parallax (Interactive depth)
 * - Full Theme Support (Light/Dark adaptive)
 * - Performance Optimized (Hardware accelerated)
 */
export const AnimatedBackground = () => {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const translateX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const translateY = useTransform(smoothY, [-500, 500], [-30, 30]);
  const rotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return <div className="fixed inset-0 -z-50 bg-background" />;

  // Configuration for Aurora Blobs
  const blobs = [
    {
      id: "blob-1",
      color: isDark ? "bg-accent/20" : "bg-blue-400/20",
      size: "w-[50vw] h-[50vw]",
      position: { top: "-10%", left: "-10%" },
      duration: 18,
    },
    {
      id: "blob-2",
      color: isDark ? "bg-purple-600/15" : "bg-purple-300/25",
      size: "w-[60vw] h-[60vw]",
      position: { bottom: "-15%", right: "-10%" },
      duration: 22,
    },
    {
      id: "blob-3",
      color: isDark ? "bg-blue-500/15" : "bg-cyan-200/40",
      size: "w-[40vw] h-[40vw]",
      position: { top: "40%", left: "30%" },
      duration: 20,
    },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background transition-colors duration-1000 pointer-events-none">
      {/* 1. INTERACTIVE PARALLAX CONTAINER */}
      <motion.div
        style={{
          x: translateX,
          y: translateY,
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        className="absolute inset-0 w-full h-full"
      >
        {/* aurora Blobs Layer */}
        <div className="absolute inset-0 filter blur-[100px] md:blur-[140px] opacity-70">
          {blobs.map((blob) => (
            <motion.div
              key={`${blob.id}-${isDark}`}
              className={`absolute rounded-full pointer-events-none ${blob.size} ${blob.color}`}
              style={blob.position}
              animate={{
                x: [0, 80, -40, 0],
                y: [0, 40, 80, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: blob.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Energy Lines Layer */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.2] md:opacity-[0.3]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="premiumLineGradient"
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
              d={`M -500 ${300 + i * 180} Q ${window.innerWidth / 2} ${150 + i * 120} ${window.innerWidth + 500} ${300 + i * 180}`}
              fill="none"
              stroke="url(#premiumLineGradient)"
              strokeWidth="1.2"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{
                pathLength: [0.2, 0.5, 0.2],
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <motion.path
            d="M -300 800 Q 600 550 1500 800 T 2500 800"
            fill="none"
            stroke={
              isDark ? "rgba(14, 165, 233, 0.12)" : "rgba(59, 130, 246, 0.1)"
            }
            strokeWidth="3"
            animate={{
              d: [
                "M -300 800 Q 600 550 1500 800 T 2500 800",
                "M -300 760 Q 750 840 1600 760 T 2500 760",
                "M -300 800 Q 600 550 1500 800 T 2500 800",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* 2. TEXTURE & VIGNETTE (STATIC FOR READABILITY) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${
          isDark
            ? "bg-gradient-to-b from-[#0a0f1c]/50 via-transparent to-[#0a0f1c]/50"
            : "bg-gradient-to-b from-white/40 via-transparent to-white/40"
        }`}
      />
    </div>
  );
};
