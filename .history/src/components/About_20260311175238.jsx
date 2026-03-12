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
  Globe,
  Users,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function About({ data, skills }) {
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
      "Creative Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const highlights = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "3+ Years",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Award,
      label: "Projects",
      value: "15+ Delivered",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Bachelors IT",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  const philosophy = [
    {
      icon: Lightbulb,
      title: "Clarity Over Complexity",
      desc: "Good code is readable. Good design is intuitive. My philosophy is to simplify everything to its most powerful essence.",
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      desc: "I don’t just build for now. I build systems that grow with you. Clean architecture isn't a luxury; it's a necessity.",
    },
    {
      icon: Users,
      title: "User-First Thinking",
      desc: "Technology is a tool for people. I start with the human experience and build the technology to support it.",
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
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <SectionWrapper
        id="about-hero"
        title="The Architect Behind the Screen"
        subtitle="Who I Am"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/20 blur-[120px] rounded-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <Tilt {...tiltOptions}>
              <div className="relative z-10 p-3 glass rounded-[3rem] overflow-hidden group-hover:border-accent/40 transition-all duration-700 shadow-2xl">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dg5gwixf1/image/upload/v1772736622/ChatGPT_Image_Mar_5_2026_11_36_42_AM_auw4uw.png"
                    alt="Alex Cameron"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  {/* Dynamic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute inset-0 border-[8px] border-white/5 rounded-[2.5rem] pointer-events-none" />
                </div>
              </div>
            </Tilt>

            {/* Highlights Grid */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass p-3 lg:p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl flex flex-col items-center text-center"
                >
                  <h.icon className={`w-5 h-5 ${h.color} mb-2`} />
                  <div className="text-xs lg:text-sm font-black whitespace-nowrap">
                    {h.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Narrative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.2em] mb-8 w-fit shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Excellence</span>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-accent">{data.name.split(" ")[0]}</span>.{" "}
              <br />
              I&apos;m a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto]">
                {text}
              </span>
              <Cursor cursorColor="#0ea5e9" cursorStyle="|" />
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-10 text-lg leading-relaxed font-medium max-w-xl"
            >
              {data.longDescription}
            </motion.p>

            {/* Core Values / Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover/val:bg-accent group-hover/val:text-accent-foreground transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-accent group-hover/val:text-inherit" />
                  </div>
                  <span className="text-md font-bold text-foreground/80 group-hover/val:text-foreground">
                    {val}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <div className="relative py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-[-10%] w-[40%] aspect-square bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] aspect-square bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

        <SectionWrapper
          id="philosophy"
          title="Digital Craftsmanship"
          subtitle="My Approach"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 glass rounded-[2.5rem] border border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="text-xl font-black mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Detailed Skills Section (Optional if passed) */}
      {skills && (
        <SectionWrapper
          id="skills-detailed"
          title="Technical Arsenal"
          subtitle="Tools of Trade"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 glass rounded-2xl border border-white/5 hover:border-accent/20 transition-all flex flex-col gap-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">{skill.name}</span>
                  <span className="text-[10px] bg-accent/10 px-2 py-0.5 rounded-full text-accent font-black">
                    {skill.category}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-accent to-blue-500 group-hover:shadow-[0_0_10px_rgba(var(--accent),0.5)] transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Closing Call to Action / Quote */}
      <SectionWrapper id="quote">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 lg:p-20 border border-accent/20 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <QuoteIcon className="absolute top-10 left-10 w-24 h-24 text-accent/5 -z-0" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black italic mb-8 max-w-3xl mx-auto leading-tight">
              &quot;The only way to do great work is to love what you do, and to
              build it so well that it lasts beyond you.&quot;
            </h2>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full mb-2" />
              <p className="text-accent font-black uppercase tracking-widest text-sm">
                Let&apos;s build something together
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

const QuoteIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
  </svg>
);
