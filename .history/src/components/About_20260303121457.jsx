"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code2 } from "lucide-react";
import { SectionWrapper, Card } from "./ui";

export default function About({ data }) {
  if (!data) return null;

  const features = [
    {
      icon: Award,
      title: "8+ Years Exp.",
      desc: "Building scalable enterprise apps",
    },
    {
      icon: Zap,
      title: "Next-Gen UI",
      desc: "Interactive and premium interfaces",
    },
    {
      icon: Code2,
      title: "Backend Scalability",
      desc: "Efficient and secure API development",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="Crafting Digital Excellence"
      subtitle="About Me"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-square rounded-3xl bg-accent overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
              alt="Portfolio Owner"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[2rem] hidden md:block border-accent/20 shadow-2xl">
            <div className="text-5xl font-black text-accent mb-1 tracking-tighter">
              8+
            </div>
            <div className="text-small font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              Years of Excellence
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-6 leading-tight">
            I am a Dedicated{" "}
            <span className="text-accent underline decoration-accent/30">
              Developer
            </span>{" "}
            Focused on Creating Premium Web Experiences.
          </h3>
          <p className="mb-8">{data.longDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {data.values.map((val) => (
              <div
                key={val}
                className="flex items-center gap-4 text-foreground font-bold text-small"
              >
                <CheckCircle2 size={20} className="text-accent icon-scale" />
                <span>{val}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card/40 border border-border/10 hover-glow transition-all group"
              >
                <f.icon
                  size={24}
                  className="text-accent mb-4 group-hover:scale-110 transition-transform icon-scale"
                />
                <div className="font-bold text-small mb-2 tracking-tight">
                  {f.title}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
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
