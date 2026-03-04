"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Zap,
  Code2,
  Rocket,
  BrainCircuit,
} from "lucide-react";
import { SectionWrapper } from "./ui";
import Image from "next/image";

export default function About({ data }) {
  if (!data) return null;

  const stats = [
    {
      label: "Years of Experience",
      value: "08+",
      icon: Award,
    },
    {
      label: "Projects Completed",
      value: "150+",
      icon: Rocket,
    },
    {
      label: "Success Rate",
      value: "99%",
      icon: Zap,
    },
  ];

  const features = [
    {
      icon: BrainCircuit,
      title: "Clean Architecture",
      desc: "Maintainable & robust",
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      desc: "Fast & fluid experiences",
    },
    {
      icon: Code2,
      title: "Modern Tech Stack",
      desc: "Cutting-edge solutions",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="CRAFTING DIGITAL EXCELLENCE"
      subtitle="The Designer Behind The Code"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            <Image
              src="/about-visual.png"
              alt="Muhyo Tech Professional Visual"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Soft Glow */}
            <div className="absolute -inset-1 bg-accent/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-8 -right-8 glass p-6 md:p-10 rounded-3xl border-accent/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hidden md:block max-w-[280px]"
          >
            <div className="flex flex-col gap-6">
              {stats.slice(0, 1).map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-5xl font-black text-accent tracking-tighter mb-1 select-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
              <div className="w-full h-px bg-border/20" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70">
                  Ready For New Challenges
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="inline-block mb-6">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] border-b-2 border-accent/30 pb-1">
              Professional Path
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight text-foreground">
            Bridging the gap between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">
              Design & Architecture
            </span>
          </h3>

          <p className="text-muted-foreground mb-10 text-lg md:text-xl leading-relaxed font-medium opacity-90">
            {data.description ||
              "I am a dedicated software architect focused on creating premium digital experiences that are as performant as they are beautiful."}
            <br className="mb-4" />
            {data.longDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {data.values &&
              data.values.map((val) => (
                <div
                  key={val}
                  className="flex items-center gap-4 text-foreground/90 font-bold group"
                >
                  <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm uppercase tracking-wide">{val}</span>
                </div>
              ))}
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl glass border-border/40 hover:border-accent/30 transition-all duration-300 group"
              >
                <f.icon className="w-7 h-7 text-accent mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                <div className="font-black text-xs uppercase tracking-widest mb-2 text-foreground">
                  {f.title}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider opacity-70">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
