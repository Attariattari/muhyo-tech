"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * AdvancedAnimatedBackground Component - NEXT-GEN EDITION
 * Concept: "Digital Topographic Ocean" (3D Liquid Grid)
 *
 * This advanced animation creates a 3D perspective grid that moves like
 * liquid energy waves. It responds to mouse movements by distorting
 * the grid in 3D space, creating a sophisticated futuristic aura.
 */
export const AdvancedAnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    // Advanced Configuration
    const config = {
      gridSize: 35, // Distance between lines
      gridRows: 30,
      gridCols: 40,
      perspective: 800,
      waveSpeed: 0.015,
      distortionStrength: 60,
      color: isDark
        ? { line: "rgba(14, 165, 233, 0.15)", glow: "rgba(14, 165, 233, 0.05)" }
        : { line: "rgba(59, 130, 246, 0.1)", glow: "rgba(59, 130, 246, 0.02)" },
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) / 10;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) / 10;
    };

    // 3D Projection Function
    const project = (x, y, z) => {
      const scale = config.perspective / (config.perspective + z);
      const px = x * scale + canvas.width / 2;
      const py = y * scale + canvas.height / 2.2; // Slightly tilted up
      return { x: px, y: py, scale };
    };

    const animate = () => {
      time += config.waveSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const centerX = config.gridCols / 2;
      const centerY = config.gridRows / 2;

      ctx.beginPath();
      ctx.strokeStyle = config.color.line;
      ctx.lineWidth = 0.6;

      // Draw Horizontal Lines
      for (let r = 0; r < config.gridRows; r++) {
        let firstPoint = true;
        for (let c = 0; c < config.gridCols; c++) {
          const xPos = (c - centerX) * config.gridSize;
          const yPos = (r - centerY) * config.gridSize;

          // Wave logic (Liquid motion)
          const dist = Math.sqrt((c - centerX) ** 2 + (r - centerY) ** 2);
          const wave = Math.sin(dist * 0.4 - time) * config.distortionStrength;

          // Mouse distortion
          const mouseDist = Math.sqrt(
            (xPos - mouseRef.current.x * 20) ** 2 +
              (yPos - mouseRef.current.y * 20) ** 2,
          );
          const mouseWave = Math.exp(-mouseDist / 400) * 40;

          const zPos = wave + mouseWave;
          const p = project(
            xPos + mouseRef.current.x,
            yPos + mouseRef.current.y,
            zPos,
          );

          if (firstPoint) {
            ctx.moveTo(p.x, p.y);
            firstPoint = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
      }

      // Draw Vertical Lines
      for (let c = 0; c < config.gridCols; c++) {
        let firstPoint = true;
        for (let r = 0; r < config.gridRows; r++) {
          const xPos = (c - centerX) * config.gridSize;
          const yPos = (r - centerY) * config.gridSize;

          const dist = Math.sqrt((c - centerX) ** 2 + (r - centerY) ** 2);
          const wave = Math.sin(dist * 0.4 - time) * config.distortionStrength;

          const mouseDist = Math.sqrt(
            (xPos - mouseRef.current.x * 20) ** 2 +
              (yPos - mouseRef.current.y * 20) ** 2,
          );
          const mouseWave = Math.exp(-mouseDist / 400) * 40;

          const zPos = wave + mouseWave;
          const p = project(
            xPos + mouseRef.current.x,
            yPos + mouseRef.current.y,
            zPos,
          );

          if (firstPoint) {
            ctx.moveTo(p.x, p.y);
            firstPoint = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
      }

      ctx.stroke();

      // Atmospheric Glow
      const ambientGlow = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2.5,
        0,
        canvas.width / 2,
        canvas.height / 2.5,
        canvas.width / 1.2,
      );
      ambientGlow.addColorStop(0, "transparent");
      ambientGlow.addColorStop(
        1,
        isDark ? "rgba(10, 15, 28, 0.4)" : "rgba(240, 249, 255, 0.3)",
      );
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 bg-background overflow-hidden pointer-events-none transition-colors duration-1000">
      {/* Background Energy Blooms (CSS Layer) */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-gradient"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
          style={{ background: isDark ? "var(--color-accent)" : "#3b82f6" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] opacity-10 transition-colors duration-1000"
          style={{
            background: isDark
              ? "rgba(139, 92, 246, 0.3)"
              : "rgba(34, 211, 238, 0.3)",
          }}
        />
      </div>

      {/* Main Liquid 3D Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full mix-blend-screen transition-opacity duration-1000"
        style={{ opacity: isDark ? 0.7 : 0.4 }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Final Fade Cover */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${
          isDark
            ? "bg-gradient-to-t from-background via-transparent to-background/50"
            : "bg-gradient-to-t from-background via-transparent to-background/20"
        }`}
      />
    </div>
  );
};
