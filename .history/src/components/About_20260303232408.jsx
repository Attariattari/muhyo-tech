"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code2, Rocket, Heart } from "lucide-react";
import { SectionWrapper } from "./ui";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

export default function About({ data }) {
  if (!data) return null;

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
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/50 glass-dark">
            <Image
              src="/about-portrait.png"
              alt="Muhyo Tech Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
          </div>

          {/* Experience Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
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
