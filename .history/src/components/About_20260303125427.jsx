"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code2, ArrowUpRight } from "lucide-react";
import { SectionWrapper, Card } from "./ui";

export default function About({ data }) {
  if (!data) return null;

  const features = [
    {
      icon: Award,
      title: "8+ Years Exp.",
      desc: "Architecting mission-critical systems",
    },
    {
      icon: Zap,
      title: "Next-Gen UI",
      desc: "World-class interactive interfaces",
    },
    {
      icon: Code2,
      title: "Scalable Logic",
      desc: "Ultra-efficient backend ecosystems",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="ENGINEERING SUPERIORITY"
      subtitle="The Identity"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
              alt="Muhyo Tech Principal"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            {/* Corner Badge */}
            <div className="absolute top-8 right-8 z-20 w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-accent group-hover:rotate-12 transition-transform shadow-lg">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 glass p-10 rounded-[2rem] hidden xl:block border border-accent/20 shadow-2xl z-20">
            <div className="text-6xl font-black text-accent mb-2 tracking-tighter italic">
              08<span className="text-foreground/20 text-4xl">.</span>
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap opacity-60">
              Years of Technical Dominance
            </div>
          </div>

          {/* Orbital rings behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/5 rounded-full z-0 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/5 rounded-full z-0 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1] tracking-tight uppercase italic drop-shadow-sm">
            Crafting Digital Platforms with{" "}
            <span className="text-accent underline decoration-accent/20 underline-offset-8">
              Absolute Precision
            </span>
          </h3>

          <p className="text-muted-foreground mb-12 text-xl leading-relaxed italic font-light">
            {data.longDescription ||
              "I specialize in bridging the gap between high-end visual design and rigorous technical architecture, delivering solutions that are as robust as they are beautiful."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {(
              data.values || [
                "Scalable Core",
                "Neural Performance",
                "Obsidian UX",
                "Clean Logic",
              ]
            ).map((val) => (
              <div
                key={val}
                className="flex items-center gap-4 text-foreground font-black uppercase text-[11px] tracking-widest group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <CheckCircle2 size={16} />
                </div>
                <span>{val}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl glass border border-border/40 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors" />
                <f.icon
                  size={28}
                  className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="font-black text-xs uppercase tracking-[0.2em] mb-2">
                  {f.title}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose opacity-60">
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
