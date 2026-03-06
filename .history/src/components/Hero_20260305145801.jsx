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
import Link from "next/link";
import Image from "next/image";

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
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements - Optimized for Mobile */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={
            !isMobile
              ? {
                  x: [0, 30, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full opacity-50 ${isMobile ? "blur-[60px]" : "blur-[120px]"}`}
        />
        <motion.div
          animate={
            !isMobile
              ? {
                  x: [0, -40, 0],
                  y: [0, -30, 0],
                  scale: [1.1, 1, 1.1],
                }
              : {}
          }
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
              <div className="h-[40px] text-xl md:text-2xl font-bold text-muted-foreground flex items-center">
                <span>{text}</span>
                <Cursor cursorStyle="_" cursorColor="var(--color-accent)" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">
              Engineering high-performance software solutions with a focus on
              scalability, precision, and modern architectural patterns.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-foreground text-background rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-accent hover:text-white transition-all"
                >
                  Hire Me Now
                </motion.button>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground group cursor-pointer hover:text-accent transition-all px-4">
                <Layout size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Explore Systems
                </span>
              </div>
            </div>

            {/* Principles Grid - Optimized Spacing */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/10">
              {principles.map((principle, idx) => (
                <EngineeringPrinciple key={idx} {...principle} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Elements */}
          <div className="relative hidden lg:block">
            {isMobile ? (
              <div className="relative z-10 p-4">
                <div className="relative aspect-square max-w-[500px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <img
                    src="/images/hero-profile.png"
                    alt="Engineering Visual"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            ) : (
              <Tilt
                perspective={1200}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                className="relative z-10 p-4"
              >
                <motion.div
                  style={{ y: y1 }}
                  className="relative aspect-square max-w-[500px] mx-auto group"
                >
                  <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full group-hover:bg-accent/40 transition-all duration-700" />
                  <div className="relative h-full w-full rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden p-1.5 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <img
                      src="/images/hero-profile.png"
                      alt="Engineering Visual"
                      className="w-full h-full object-cover rounded-[2.8rem] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />

                    {/* Floating HUD Element */}
                    <div className="absolute top-10 right-10 z-20 glass p-4 rounded-2xl border border-white/10 flex items-center gap-3 animate-float-slow">
                      <div className="p-2 bg-emerald-500/20 text-emerald-500 rounded-lg">
                        <Zap size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">
                          Latency
                        </span>
                        <span className="text-sm font-black text-white">
                          {"< 14MS"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            )}
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted-foreground/40 hidden md:block"
      >
        <ArrowDownCircle size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
