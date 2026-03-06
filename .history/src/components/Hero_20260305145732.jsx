"use client";

import React, { useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  Layout,
  Rocket,
  ArrowDownCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const EngineeringPrinciple = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
  >
    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-sm font-bold text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "UI/UX Architect",
      "Innovation Specialist",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const principles = useMemo(
    () => [
      {
        icon: Rocket,
        title: "Deployment Precision",
        description: "Zero-downtime CI/CD architecture.",
        delay: 0.1,
      },
      {
        icon: Cpu,
        title: "System Performance",
        description: "Sub-second response optimization.",
        delay: 0.2,
      },
      {
        icon: Globe,
        title: "Global Scalability",
        description: "Distributed infrastructure design.",
        delay: 0.3,
      },
    ],
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements - Optimized for Mobile */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={!isMobile ? {
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full opacity-50 ${isMobile ? "blur-[60px]" : "blur-[120px]"}`}
        />
        <motion.div
          animate={!isMobile ? {
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full opacity-30 ${isMobile ? "blur-[80px]" : "blur-[150px]"}`}
        />
        {/* Optimized Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div style={{ opacity }} className="space-y-8">
            <div className="inline-flex items-center gap-3 py-2 px-4 bg-accent/10 border border-accent/20 rounded-full text-accent">
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                System Architect & Engineer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50 leading-tight">
                Abdullah <br />
                <span className="text-accent underline underline-offset-8 decoration-accent/20">
                  Tariq
                </span>
              </h1>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-border bg-card/20 text-foreground font-black uppercase text-xs tracking-[0.3em] hover:bg-card/50 transition-all backdrop-blur-sm"
              >
                Let's Talk
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
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
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
