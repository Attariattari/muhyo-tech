"use client";

import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Zap,
  Code2,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe,
  Cpu,
  Verified,
  ShieldCheck,
  Target,
  Briefcase,
  History,
  Layers,
} from "lucide-react";
import { SectionWrapper, Button } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const StatBadge = ({ icon: Icon, text, subtitle, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-3 p-4 rounded-2xl glass border border-white/10 hover:border-accent/30 transition-all group scale-90 md:scale-100"
    >
      <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-black text-foreground">{text}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
};

export default function About({ data, isHomePage = false }) {
  if (!data) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const narrativeRef = useRef(null);

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

  const tiltOptions = {
    tiltReverse: false,
    tiltMaxAngleX: 12,
    tiltMaxAngleY: 12,
    perspective: 1000,
    scale: 1.05,
    transitionSpeed: 1000,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const features = [
    {
      icon: Award,
      title: "Top Quality Work",
      desc: "Architecting high-performance systems with precision and scalability.",
      color: "text-accent",
      bg: "bg-accent/10",
      gradient: "from-accent/20 to-blue-500/10",
    },
    {
      icon: Zap,
      title: "Super Fast Speed",
      desc: "Optimizing every byte for instant load times and fluid interaction.",
      color: "text-accent/90",
      bg: "bg-accent/10",
      gradient: "from-accent/20 to-indigo-500/10",
    },
    {
      icon: Code2,
      title: "Smart & Future Proof",
      desc: "Systems engineered to grow and adapt with emerging technologies.",
      color: "text-accent/80",
      bg: "bg-accent/10",
      gradient: "from-accent/20 to-emerald-500/10",
    },
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Web Developer",
      company: "Muhyo Tech",
      duration: "Present",
      description:
        "Specializing in building high-performance, responsive web applications using Next.js and Tailwind CSS. Focus on delivering seamless user experiences and modern UI architectures.",
      milestones: [
        "Custom Enterprise Dashboards",
        "SEO Optimized Web Apps",
        "Responsive UI Design Expert",
      ],
    },
    {
      year: "2023 - 2024",
      role: "Full-Stack Web Developer",
      company: "Muhyo Tech",
      duration: "1 Year",
      description:
        "Architecting robust backend systems and dynamic frontends. Implementing real-time features and secure API integrations to create comprehensive web solutions.",
      milestones: [
        "Real-time Data Integration",
        "Secure User Auth Systems",
        "API Performance Tuning",
      ],
    },
    {
      year: "2022 - 2023",
      role: "Frontend Specialist",
      company: "Muhyo Tech",
      duration: "1 Year",
      description:
        "Crafting pixel-perfect designs and fluid animations. Working closely with modern JavaScript frameworks to bring complex digital concepts to life on the web.",
      milestones: [
        "Fluid Framer Motion Animations",
        "Modern Component Architecture",
        "Atomic Design Implementation",
      ],
    },
  ];

  const coreValuesLarge = [
    {
      icon: CheckCircle2,
      title: "Top Quality Work",
      desc: "Meticulous attention to detail ensures every pixel and line of code is perfect.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      desc: "Engineered for speed and stability, ensuring your platform is always ready for traffic.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Cpu,
      title: "Future-Proof Solutions",
      desc: "Building with the latest industry standards to ensure long-term scalability.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Target,
      title: "User-Centric Design",
      desc: "Creating intuitive experiences that your users will actually love using every day.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  const focusAreas = [
    {
      icon: Sparkles,
      title: "Clean & Modern UI/UX",
      desc: "We focus on creating aesthetic designs that not only look premium but provide effortless navigation and usability.",
    },
    {
      icon: Zap,
      title: "High Performance",
      desc: "Speed is our priority. We optimize every image and script to ensure lightning-fast interaction for every visitor.",
    },
    {
      icon: Code2,
      title: "Scalable Architecture",
      desc: "Our systems are built to grow. Whether you have 100 or 100,000 users, our architecture handles it with ease.",
    },
    {
      icon: Verified,
      title: "Client-Centric",
      desc: "Your vision is our mission. We provide personalized consultations to ensure we deliver exactly what your business needs.",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      link: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      link: `tel:${data.phone}`,
    },
    { icon: MapPin, label: "Office Location", value: data.location },
    {
      icon: Clock,
      label: "Working hours",
      value: data.workingHours || "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: data.socials.linkedin,
      color: "hover:text-[#0077b5]",
    },
    { icon: Github, url: data.socials.github, color: "hover:text-foreground" },
    { icon: Twitter, url: data.socials.twitter, color: "hover:text-[#1da1f2]" },
    {
      icon: Facebook,
      url: data.socials.facebook,
      color: "hover:text-[#1877f2]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div
      className={`relative overflow-hidden ${isHomePage ? "pb-4 md:pb-8" : "pb-32"}`}
    >
      {/* Visual Enhancements Background */}
      <div
        className={`absolute top-0 left-0 w-full ${isHomePage ? "h-full" : "h-[1500px]"} pointer-events-none -z-10`}
      >
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <SectionWrapper
        id="about"
        subtitle="Bridging Technology & Innovation"
        title="Muhyo Tech"
        className={isHomePage ? "pb-0 mb-0" : ""}
      >
        {/* Step 1: Hero / Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/10 blur-[100px] rounded-full -z-10 animate-pulse" />

            <Tilt {...tiltOptions}>
              <div className="relative z-10 p-2 glass rounded-[3rem] overflow-hidden group border border-white/10 hover:border-accent/30 transition-all duration-700">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={data.avatar}
                    alt={data.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  {/* Dynamic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

                  {/* Floating ID Tag */}
                  <div className="absolute bottom-10 left-10 p-4 glass rounded-2xl border border-border backdrop-blur-xl translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-1 underline decoration-accent/30 decoration-2 underline-offset-4 italic">
                      Founder
                    </div>
                    <div className="text-xl font-black text-foreground italic">
                      {data.name}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Floating Stats Badges */}
            <div className="absolute -bottom-10 right-0 md:-right-6 lg:-right-12 z-20 flex flex-col gap-4">
              <StatBadge
                icon={Sparkles}
                text="3+ Years"
                subtitle="Software Professional"
                delay={0.6}
              />
              <StatBadge
                icon={Verified}
                text="100%"
                subtitle="Trust Metrics Verified"
                delay={0.8}
              />
            </div>

            {/* Decorations */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-accent/20 rounded-tl-[3rem] -z-10" />
          </motion.div>

          {/* Right: Narrative & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col pt-4 lg:pt-12 order-1 lg:order-2"
          >
            {/* Typewriter Header */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl md:text-5xl font-black leading-[1.1] tracking-tight text-foreground italic uppercase">
                Engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent animate-gradient-flow bg-[length:200%_auto]">
                  {text}
                </span>
                <Cursor cursorColor="var(--color-accent)" cursorStyle="|" />
              </h3>
            </motion.div>

            {/* Narrative with Read More */}
            <motion.div variants={itemVariants} className="mb-10">
              <div
                ref={narrativeRef}
                className={`text-muted-foreground text-lg leading-relaxed font-medium transition-all duration-700 overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-[180px] lg:max-h-none"}`}
              >
                {data.longDescription}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden mt-4 flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest hover:underline cursor-pointer"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read Full Story <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>

            {/* Core Values Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            >
              {data.values?.map((val, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "var(--color-card)",
                  }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 backdrop-blur-sm transition-all shadow-sm group/val"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover/val:bg-accent group-hover/val:text-accent-foreground transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground/80 group-hover/val:text-foreground italic">
                    {val}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-4 opacity-50" />
            </motion.div>

            {/* Read Full Story Button for Home Page */}
            {isHomePage && (
              <motion.div variants={itemVariants} className="mt-12">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="group/btn relative overflow-hidden px-10 py-5 bg-transparent border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-black uppercase tracking-[0.2em] text-xs"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Discover My Full Story
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

        {!isHomePage && (
          <div className="space-y-40">
            {/* Experience Section */}
            <div className="mt-40">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Professional Journey
                </h4>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  Experience & Expertise
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 glass rounded-[2.5rem] border border-border hover:border-accent/30 transition-all duration-500 group shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/20">
                        {exp.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-foreground mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-muted-foreground mb-4 italic">
                      {exp.company} • {exp.duration}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium italic">
                      "{exp.description}"
                    </p>

                    <div className="space-y-3 pt-6 border-t border-border/10">
                      {exp.milestones.map((milestone, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs font-bold text-foreground/80">
                            {milestone}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Values Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Our DNA
                </h4>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  The Values We Stand By
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValuesLarge.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 glass rounded-3xl border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden relative group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 ${value.bg} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                    <div
                      className={`w-12 h-12 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-black text-foreground mb-3 uppercase tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redesigned Mission Focus - Futuristic Bento Grid */}
            <div className="relative">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 mb-6 group hover:bg-accent/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                    Core Philosophy
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight uppercase italic">
                  Mission Focus
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                  Our mission is to bridge the gap between complex engineering
                  and intuitive user experiences.
                </p>
              </motion.div>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto px-4 relative z-10">
                {/* 1. UI/UX - Large Hero Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:col-span-4 md:row-span-2 p-1 relative overflow-hidden rounded-[3.5rem] group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="h-full w-full glass p-12 flex flex-col justify-between relative z-10 rounded-[3.4rem] border border-border group-hover:border-accent/30 transition-all duration-500 shadow-2xl">
                    <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                      <Sparkles className="w-80 h-80 text-accent" />
                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-accent flex items-center justify-center shadow-[0_0_30px_var(--color-accent)] group-hover:scale-110 transition-transform mb-20 shadow-accent/40">
                      <Sparkles className="w-8 h-8 text-accent-foreground" />
                    </div>

                    <div>
                      <h3 className="text-4xl font-black text-foreground mb-4 uppercase tracking-tighter">
                        {focusAreas[0].title}
                      </h3>
                      <p className="text-muted-foreground text-xl leading-relaxed font-medium max-w-2xl">
                        {focusAreas[0].desc}
                      </p>
                      <div className="mt-8 flex items-center gap-6">
                        <div className="h-px w-20 bg-accent/30" />
                        <span className="text-accent text-xs font-black uppercase tracking-widest">
                          Premium Aesthetic Guaranteed
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Performance - Vertical Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 md:row-span-2 glass p-10 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center justify-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Zap className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4 uppercase">
                    {focusAreas[1].title}
                  </h3>
                  <p className="text-muted-foreground font-medium text-center">
                    {focusAreas[1].desc}
                  </p>
                </motion.div>

                {/* 3. Scalability - Horizontal Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 glass p-10 rounded-[3.5rem] border border-border flex items-center gap-8 group shadow-xl"
                >
                  <div className="p-5 rounded-3xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-lg shadow-accent/5">
                    <Code2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground mb-2 uppercase italic tracking-tighter">
                      {focusAreas[2].title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {focusAreas[2].desc}
                    </p>
                  </div>
                </motion.div>

                {/* 4. Client-Centric - Interactive Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 glass p-10 rounded-[3.5rem] border border-border flex items-center gap-8 group bg-gradient-to-r from-transparent to-accent/5 shadow-xl"
                >
                  <div className="p-5 rounded-3xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-lg shadow-accent/5">
                    <Verified className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground mb-2 uppercase italic tracking-tighter">
                      {focusAreas[3].title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {focusAreas[3].desc}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none -z-10" />
            </div>

            {/* Professional Features Section */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Unmatched Precision
                </h4>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  Why Choose Muhyo Tech?
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative p-10 glass rounded-[2.5rem] border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem]`}
                    />

                    <div
                      className={`w-16 h-16 rounded-2xl ${f.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}
                    >
                      <f.icon className={`w-8 h-8 ${f.color}`} />
                    </div>

                    <div className="relative z-10">
                      <h5 className="text-xl font-black mb-4 text-foreground group-hover:text-accent transition-colors tracking-tight">
                        {f.title}
                      </h5>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-accent opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Explore Standard
                      </span>
                      <div className="h-px flex-1 bg-accent/20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info & Support */}
            <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                    Availability
                  </h4>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                    Let's Discuss Your Next Move.
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-md">
                    Whether you're starting from scratch or scaling an existing
                    platform, our doors are open for collaboration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-base font-bold text-foreground hover:text-accent transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-bold text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Interactive Achievement Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-1 glass rounded-[3rem] overflow-hidden group shadow-2xl"
              >
                <div className="relative p-12 lg:p-16 h-full flex flex-col justify-center gap-8 relative z-10">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Globe className="w-64 h-64 text-accent" />
                  </div>

                  <div className="flex -space-x-4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-background bg-accent/20 flex items-center justify-center p-1 overflow-hidden backdrop-blur-xl"
                      >
                        <Image
                          src={`https://res.cloudinary.com/dg5gwixf1/image/upload/v1772736622/ChatGPT_Image_Mar_5_2026_11_36_42_AM_auw4uw.png`}
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-foreground leading-[1.2] tracking-tight">
                    Trusted by Forward-Thinking Brands{" "}
                    <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8 font-serif leading-none">
                      Globally.
                    </span>
                  </h3>

                  <div className="mt-4 p-8 bg-accent/5 border border-accent/20 rounded-[2rem] flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-accent group-hover:shadow-[0_0_30px_var(--color-accent)] transition-shadow duration-500 shadow-accent/40">
                      <Verified className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-foreground">
                        AESTHETIC
                      </div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                        Precision Verified
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Step 4: Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-40 relative glass p-10 md:p-20 rounded-[4rem] border border-accent/20 overflow-hidden group text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.08]" />
              <div className="absolute -top-[50%] -left-[50%] w-full h-full bg-accent/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-10">
                <h3 className="text-4xl md:text-6xl font-black text-foreground max-w-4xl leading-[1.05] tracking-tight uppercase italic">
                  Ready to bring your project to life? Let's build something{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent animate-gradient">
                    amazing together!
                  </span>
                </h3>

                <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
                  We're currently accepting new projects and inquiries for
                  Spring 2026. Reach out today for a consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full group/btn relative overflow-hidden px-12 py-7 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-[0_20px_40px_var(--color-accent)] transition-all duration-300 font-black uppercase tracking-[0.2em] rounded-2xl shadow-accent/20 hover:shadow-accent/40 cursor-pointer">
                      <span className="relative z-10 flex items-center justify-center gap-4">
                        Contact via Email
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </button>
                  </Link>

                  <a href={`tel:${data.phone}`} className="w-full sm:w-auto">
                    <button className="w-full group/btn border-2 border-accent text-accent hover:bg-accent/10 px-12 py-7 text-base font-black uppercase tracking-[0.2em] transition-all rounded-2xl cursor-pointer">
                      <span className="flex items-center justify-center gap-4">
                        Call Now
                        <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </SectionWrapper>

      {/* Interactive Particles Background Component */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
