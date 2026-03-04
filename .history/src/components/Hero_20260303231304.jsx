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
import Image from "next/image";

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
      description: "Scalable systems",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      label: "Engineered Code",
      description: "Clean logic",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Secure Systems",
      description: "Hardened infra",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Blazing Speed",
      description: "Optimized flows",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Premium Background Layering */}
      <div className="absolute  z-0 overflow-hidden pointer-events-none">
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

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left">
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

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                Hello, I am Muhyo Tech
              </span>
            </motion.div>

            {/* Hero Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
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
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium opacity-80"
            >
              Senior Software Engineer specializing in building
              high-performance, visually arresting interfaces. Dedicated to
              pushing the boundaries of Next.js and Modern Web Standards.
            </motion.p>

            {/* Strategic CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Link
                href="/projects"
                className="w-full sm:w-auto relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <button className="relative w-full px-12 py-5 bg-foreground text-background font-black uppercase text-xs tracking-[0.3em] rounded-2xl transition-all flex items-center justify-center gap-3">
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-border bg-card/20 text-foreground font-black uppercase text-xs tracking-[0.3em] hover:bg-card/50 transition-all backdrop-blur-sm"
              >
                Inquire Now
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
              {/* Main Visual */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass border-accent/20 shadow-2xl shadow-accent/10">
                <Image
                  src="/hero-visual.png"
                  alt="Professional Tech Visual"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              />

              {/* Floating Code Snippet Card */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -right-6 top-1/4 glass p-4 rounded-xl border-accent/30 shadow-xl hidden xl:block"
              >
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-24 bg-accent/30 rounded" />
                  <div className="h-1.5 w-16 bg-muted-foreground/30 rounded" />
                  <div className="h-1.5 w-20 bg-accent/20 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Principles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mr-auto border-t border-border/10 mt-24 pt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-xl shadow-accent/5">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-[11px] uppercase font-black text-foreground tracking-[0.2em]">
                  {feature.label}
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 font-bold opacity-60">
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
