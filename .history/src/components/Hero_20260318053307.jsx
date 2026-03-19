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
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { Button } from "@/components/ui";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const [text] = useTypewriter({
    words: [
      "Muhyo Tech",
      "Senior Software Engineer",
      "UX Architect",
      "Full Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const tiltOptions = {
    tiltReverse: false,
    tiltMaxAngleX: 15,
    tiltMaxAngleY: 15,
    perspective: 1000,
    scale: 1.02,
    transitionSpeed: 1000,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "Great Design",
      description: "Built to grow",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      label: "Clean Code",
      description: "Easy to manage",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Safe & Secure",
      description: "Stable setup",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Fast Load",
      description: "Smooth experience",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 py-8 lg:pt-28 xxl:pt-12 md:py-12 overflow-hidden"
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
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[140px] animate-floating [animation-delay:3s]"
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
                Ready for Your Next Project
              </span>
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 h-6"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                Hello, I am <span className="text-foreground">{text}</span>
                <Cursor cursorColor="#0ea5e9" cursorStyle="_" />
              </span>
            </motion.div>

            {/* Hero Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-black text-foreground leading-[1.1] tracking-tighter">
                BUILDING AMAZING{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent animate-gradient-flow bg-[length:200%_auto] italic">
                  WEBSITES
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
              I specialize in building high-quality, modern websites that look
              amazing and work perfectly on every device. By using the latest
              technology, I ensure your site is fast, secure, and easy for your
              visitors to use. My goal is to help your business grow with a
              powerful online presence that makes a great first impression.
            </motion.p>

            {/* Strategic CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto"
            >
              <Link href="/projects" className="w-full md:w-auto">
                <Button className="w-full">
                  See My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Link href="/contact" className="w-full md:w-auto">
                <Button variant="outline" className="w-full backdrop-blur-sm">
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0], // Auto floating animation
            }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative hidden lg:block"
          >
            <Tilt {...tiltOptions}>
              <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
                {/* Main Visual - Borderless & Blended */}
                <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
                  <Image
                    src="/hero-visual.png"
                    alt="Professional Tech Visual"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Glow to match the theme */}
                  <div className="absolute inset-0 bg-accent/10 mix-blend-soft-light pointer-events-none" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                />

                {/* Floating Code Snippet Card */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    y: [0, 10, 0],
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 0.8,
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
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
            </Tilt>
          </motion.div>
        </div>

        {/* Engineering Principles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mr-auto border-t border-border/10 mt-6 pt-6 lg:mt-12 lg:pt-12"
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
