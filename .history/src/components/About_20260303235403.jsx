"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code2, Rocket, Heart } from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { Tilt } from "react-tilt";

export default function About({ data }) {
  if (!data) return null;

  const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Problem Solver",
      "Creative Thinker",
      "Tech Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Pixel perfect design & code",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      desc: "Optimized for speed & SEO",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Maintainable & scalable architecture",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="Crafting Digital Excellence"
      subtitle="About Me"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0], // Auto floating animation
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative group"
        >
          <Tilt options={tiltOptions}>
            {/* The 'Edited' Tech Portrait */}
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden group">
              {/* Professional Gradient Backdrop (Hides original BG) */}
              <div className="absolute inset-0 bg-[#0a0f1c] z-[-1]" />

              <Image
                src="/about-profile-new.jpg"
                alt="Muhyo Tech Developer"
                fill
                className="object-cover transition-all duration-700 contrast-[1.1] brightness-[1.1] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] group-hover:scale-105"
                priority
              />

              {/* Holographic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-accent/5 opacity-80" />

              {/* Animated Scanning Line (Tech Effect) */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-10 opacity-50 blur-[2px]"
              />

              {/* Floating UI Elements (Represents 'Work') */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border border-accent/20 rounded-full border-dashed opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 border border-blue-500/20 rounded-full border-dashed opacity-20"
              />

              {/* Tech Scan Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* Deep Shadow Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,15,28,0.8)] pointer-events-none" />
            </div>
          </Tilt>

          {/* Experience Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: [0, 10, 0], // Badge floating
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl border border-accent/20 shadow-2xl z-20"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-accent/20 glass flex items-center justify-center"
                  >
                    <Heart className="w-3 h-3 text-accent fill-accent" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-black text-accent leading-none">
                  8+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] -z-10 group-hover:border-accent/20 transition-colors" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <Rocket className="w-3 h-3" />
            <span>Passionate Developer</span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">
            I am a Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              {text}
            </span>
            <Cursor cursorColor="#0ea5e9" cursorStyle="|" />
          </h3>

          <p className="text-muted-foreground mb-10 text-lg leading-relaxed font-medium">
            {data.longDescription ||
              "I build high-performance web applications with a focus on clean code and exceptional user experience."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {data.values?.map((val) => (
              <div
                key={val}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/40 border border-border/30 hover:bg-card/60 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground/80">
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-xs uppercase tracking-wider mb-1">
                    {f.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase leading-tight font-bold">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
