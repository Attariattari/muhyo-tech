"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Zap,
  Code2,
  Rocket,
  Heart,
  Sparkles,
  Target,
  ShieldCheck,
} from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About({ data }) {
  if (!data) return null;

  const tiltOptions = {
    tiltReverse: false,
    tiltMaxAngleX: 12,
    tiltMaxAngleY: 12,
    perspective: 1000,
    scale: 1.05,
    transitionSpeed: 1000,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full-Stack Developer",
      "UI/UX Enthusiast",
      "Solution Architect",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const features = [
    {
      icon: Award,
      title: "Built for Excellence",
      desc: "Pixel-perfect implementation of complex designs.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Zap,
      title: "Optimized Speed",
      desc: "Ultra-fast response times and smooth interactions.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Code2,
      title: "Scalable Logic",
      desc: "Code that grows with your business needs effortlessly.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper
      id="about"
      title="Architecture of Quality"
      subtitle="The Journey So Far"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Profile Image with Premium Effects */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Background Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[100px] rounded-full -z-10 animate-pulse" />

          <Tilt {...tiltOptions}>
            <div className="relative z-10 p-2 glass rounded-[2.5rem] overflow-hidden group-hover:border-accent/30 transition-all duration-500">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden">
                <Image
                  src="/about-portrait-new.jpg"
                  alt="Professional Portfolio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Dynamic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 border-[6px] border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
          </Tilt>

          {/* Floating Stats Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-6 -right-6 lg:-right-10 glass p-6 rounded-3xl border border-accent/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/20">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground">
                    3+ <span className="text-accent text-sm">Years</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Software Professional
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-border/50 my-1" />
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-background bg-accent/30 flex items-center justify-center text-[10px] font-bold"
                  >
                    {i === 4 ? (
                      "+"
                    ) : (
                      <ShieldCheck className="w-3 h-3 text-accent" />
                    )}
                  </div>
                ))}
                <span className="pl-4 text-[10px] font-bold text-muted-foreground flex items-center">
                  Trust Metrics Verified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl -z-10" />
        </motion.div>

        {/* Right Side: Narrative & Execution */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 w-fit shadow-inner"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Defined by Results</span>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-black mb-8 leading-[1.1] tracking-tight text-foreground"
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto]">
              {text}
            </span>
            <Cursor cursorColor="#0ea5e9" cursorStyle="|" />
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-10 text-lg leading-relaxed font-medium max-w-xl"
          >
            {data.longDescription ||
              "I specialize in bridging the gap between complex business requirements and high-performance technical solutions. My approach balances aesthetic precision with architectural integrity."}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            {data.values?.map((val) => (
              <motion.div
                key={val}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card/30 border border-border/20 backdrop-blur-sm transition-all shadow-sm group/val"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover/val:bg-accent group-hover/val:text-accent-foreground transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-accent group-hover/val:text-inherit" />
                </div>
                <span className="text-sm font-bold text-foreground/70 group-hover/val:text-foreground">
                  {val}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Strategic Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col gap-4 group/item"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 group-hover/item:shadow-lg`}
                >
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider mb-2 text-foreground">
                    {f.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed font-medium">
                    {f.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
