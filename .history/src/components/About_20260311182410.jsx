"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Verified,
} from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useState, useRef } from "react";

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

export default function About({ data }) {
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

  const socialLinks = [
    {
      icon: "Linkedin",
      url: data.socials.linkedin,
      color: "hover:text-[#0077b5]",
    },
    {
      icon: "Github",
      url: data.socials.github,
      color: "hover:text-foreground",
    },
    {
      icon: "Twitter",
      url: data.socials.twitter,
      color: "hover:text-[#1da1f2]",
    },
    {
      icon: "Facebook",
      url: data.socials.facebook,
      color: "hover:text-[#1877f2]",
    },
  ];

  // Helper to map icon names to components for the social loop in the snippet
  const IconMap = {
    Linkedin: (props) => (
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </motion.svg>
    ),
    Github: (props) => (
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </motion.svg>
    ),
    Twitter: (props) => (
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </motion.svg>
    ),
    Facebook: (props) => (
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </motion.svg>
    ),
  };

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
    <SectionWrapper
      id="about"
      subtitle="Bridging Technology & Innovation"
      title="Muhyo Tech"
    >
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
                <div className="absolute bottom-10 left-10 p-4 glass-dark rounded-2xl border border-white/10 backdrop-blur-xl translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-1 underline decoration-accent/30 decoration-2 underline-offset-4">
                    Founder
                  </div>
                  <div className="text-xl font-black text-white">
                    {data.name}
                  </div>
                </div>
              </div>
            </div>
          </Tilt>

          {/* Floating Stats Badges */}
          <div className="absolute -bottom-10 -right-6 lg:-right-12 z-20 flex flex-col gap-4">
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
            <h3 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight text-foreground">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto]">
                {text}
              </span>
              <Cursor cursorColor="#0ea5e9" cursorStyle="|" />
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
              className="lg:hidden mt-4 flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest hover:underline"
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
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-sm transition-all shadow-sm group/val"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover/val:bg-accent group-hover/val:text-accent-foreground transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-foreground/80 group-hover/val:text-foreground">
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
            {socialLinks.map((social, i) => {
              const Icon = IconMap[social.icon];
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
