"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Layers,
  Code,
  Zap,
  Shield,
  Monitor,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "UI Architecture",
      description: "Scalable design systems",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      label: "Engineered Code",
      description: "Clean & performant logic",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Secure Systems",
      description: "Hardened infrastructure",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Blazing Speed",
      description: "Optimized user flows",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden "
    >
      {/* Premium Background Layering */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-accent/15 rounded-full blur-[140px] animate-floating"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[140px] animate-floating [animation-delay:3s]"
        />

        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />

        {/* Radial Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_90%)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        {/* Elite Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 glass rounded-full border border-accent/20 shadow-[0_0_20px_rgba(var(--accent),0.1)]"
        >
          <div className="relative flex h-2 w-2">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></div>
            <div className="relative inline-flex rounded-full h-2 w-2 bg-accent"></div>
          </div>
          <span className="text-[10px] sm:text-xs font-black text-accent uppercase tracking-[0.25em]">
            Available for Premium Engagements
          </span>
        </motion.div>

        {/* Hero Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] tracking-tighter">
            ARCHITECTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto] italic">
              DIGITAL ELITE
            </span>
          </h1>
        </motion.div>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium px-4 opacity-80"
        >
          Senior Software Engineer specializing in building high-performance,
          visually arresting interfaces. Dedicated to pushing the boundaries of
          what&apos;s possible with Next.js and Modern Web Standards.
        </motion.p>

        {/* Strategic CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 mb-28"
        >
          <Link href="/projects" className="w-full sm:w-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative w-full px-12 py-5 bg-foreground text-background font-black uppercase text-xs tracking-[0.3em] rounded-2xl transition-all flex items-center justify-center gap-3">
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 rounded-2xl border border-border bg-card/20 text-foreground font-black uppercase text-xs tracking-[0.3em] hover:bg-card/50 transition-all backdrop-blur-sm"
          >
            Inquire Now
          </Link>
        </motion.div>

        {/* Engineering Principles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-border/10 pt-16 px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-xl shadow-accent/5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[11px] uppercase font-black text-foreground tracking-[0.2em]">
                  {feature.label}
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1.5 font-bold opacity-60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "400%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[20%] bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
