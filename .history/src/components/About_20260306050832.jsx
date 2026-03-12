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
  Cpu,
  Layers,
  Globe,
  Activity,
} from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About({ data }) {
  if (!data) return null;

  const tiltOptions = {
    tiltReverse: false,
    tiltMaxAngleX: 8,
    tiltMaxAngleY: 8,
    perspective: 1000,
    scale: 1.02,
    transitionSpeed: 1000,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const [text] = useTypewriter({
    words: [
      "Solution Architect",
      "Digital Strategist",
      "High-Performance Developer",
      "Full-Stack Engineer",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  const bentoStats = [
    {
      label: "Success Rate",
      value: "100%",
      icon: Target,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      label: "Projects Delivered",
      value: "50+",
      icon: Rocket,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      label: "Hours of Focus",
      value: "5K+",
      icon: Activity,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <SectionWrapper id="about" title="Engineering Excellence" subtitle="Core Persona">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Col: The Identity Block (Visual Anchor) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="relative group perspective-1000">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-blue-500/10 to-indigo-500/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 -z-10" />
            
            <Tilt {...tiltOptions}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-dark group-hover:border-accent/40 transition-all duration-700 shadow-2xl">
                <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                  <Image
                    src="https://res.cloudinary.com/dg5gwixf1/image/upload/v1772736622/ChatGPT_Image_Mar_5_2026_11_36_42_AM_auw4uw.png"
                    alt="Elite Portfolio Persona"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 filter brightness-90 group-hover:brightness-100"
                    priority
                  />
                  {/* Premium Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
                  
                  {/* Floating Identity Label */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/5 backdrop-blur-3xl">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Lead Consultant</p>
                        <h4 className="text-xl font-black text-white tracking-tight">{data.name || "Alex Cameron"}</h4>
                      </div>
                      <Globe className="w-5 h-5 text-white/30 animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Floating Experience Chip */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -right-6 lg:-right-8 bg-white text-black p-5 rounded-3xl shadow-2xl flex flex-col items-center justify-center min-w-[100px] border-4 border-accent/20"
            >
              <span className="text-3xl font-black leading-none">3<span className="text-accent">+</span></span>
              <span className="text-[8px] font-black uppercase tracking-widest text-black/60 mt-1">Yrs Exp</span>
            </motion.div>
          </div>

          {/* Quick Stats Bento */}
          <div className="grid grid-cols-3 gap-3">
            {bentoStats.map((stat, i) => (
              <div key={i} className="glass-dark p-4 rounded-3xl border border-white/5 flex flex-col items-center gap-2 group/stat hover:border-accent/30 transition-all">
                <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-center">
                  <div className="text-lg font-black text-white">{stat.value}</div>
                  <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Col: The Philosophical & Technical Breakdown */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] shadow-inner">
              <Cpu className="w-3.5 h-3.5" />
              <span>Computational Mastery</span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter text-white">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-white animate-gradient-flow bg-[length:200%_auto]">
                {text}
              </span>
              <Cursor cursorColor="#38bdf8" />
            </h3>

            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium max-w-2xl opacity-90">
              {data.longDescription || "Bridging the gap between conceptual complexity and intuitive digital experiences through rigorous engineering."}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {data.values?.slice(0, 4).map((val, i) => (
              <div
                key={val}
                className="group/val flex items-center gap-5 p-5 rounded-[2rem] bg-card/20 border border-white/5 backdrop-blur-md hover:bg-accent/[0.03] hover:border-accent/20 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-accent/20 blur opacity-0 group-hover/val:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover/val:bg-accent group-hover/val:text-black transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white tracking-tight">{val}</span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Core Principle</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Performance Pillars Table (Minimalist) */}
          <motion.div variants={itemVariants} className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-accent/10 to-transparent border border-white/5 overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Layers className="w-32 h-32" />
             </div>
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-2 text-center md:text-left">
                   <h5 className="text-white font-black text-lg">Mission-Critical Focus</h5>
                   <p className="text-muted-foreground text-xs font-bold leading-relaxed max-w-xs">
                     Deploying enterprise-grade solutions that prioritize scalable architecture, security mesh integrations, and extreme performance benchmarks.
                   </p>
                </div>
                <button className="whitespace-nowrap px-8 py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
                  Download Dossier
                </button>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
  );
}
