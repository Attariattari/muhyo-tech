"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Clock,
  ShieldCheck,
  Cpu,
  Zap,
  ArrowRight,
  Sparkles,
  Command,
} from "lucide-react";
import Contact from "@/components/Contact";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";

export default function ContactPage() {
  const bentoCards = [
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: "Global Reach",
      value: "Remote & Scalable",
      description:
        "Delivering high-performance architecture to clients worldwide.",
      gridSpan: "md:col-span-2",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Rapid Response",
      value: "< 12H ETA",
      description:
        "Guaranteed initial consultation for every enterprise inquiry.",
      gridSpan: "md:col-span-1",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Data Sovereignty",
      value: "Encrypted Briefs",
      description:
        "Your intellectual property is protected by rigorous security.",
      gridSpan: "md:col-span-1",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Tech Consulting",
      value: "Architectural Lead",
      description:
        "Strategic planning for complex system migrations and builds.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Execution",
      value: "Precision Scale",
      description:
        "Moving from concept to production with sub-second accuracy.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10 animate-floating" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-floating [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header Section */}
        <section className="relative pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent/40" />
              <div className="flex items-center gap-2">
                <Command className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/80">
                  Strategic Partnership
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
              LET'S DEFINE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto] italic">
                NEXT FRONTIER.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed opacity-80">
              Transforming complex technical requirements into elegant, scalable
              digital experiences. Start your professional engagement today.
            </p>
          </motion.div>
        </section>

        {/* Bento Grid Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${card.gridSpan} group p-10 glass rounded-[3rem] hover:border-accent/40 transition-all duration-500 relative overflow-hidden`}
            >
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {card.icon}
                  </div>
                  <Sparkles className="w-4 h-4 text-accent/0 group-hover:text-accent/50 transition-all duration-700" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-accent/60">
                      {card.title}
                    </h3>
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-foreground leading-none">
                    {card.value}
                  </div>
                  <p className="text-[13px] text-muted-foreground font-medium leading-relaxed opacity-70">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Subtle Grid Pattern inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            </motion.div>
          ))}
        </section>

        {/* Main Contact Form Section */}
        <section className="relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[4rem] overflow-hidden border border-border/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative bg-background/40 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-blue-500/[0.03] pointer-events-none" />
            <Contact />
          </motion.div>
        </section>

        {/* Supplemental Content / Core Pillars */}
        <section className="space-y-16 py-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-accent">
                Value Proposiiton
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
              Core Engineering Pillars
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <ProfessionalHighlights />
        </section>

        {/* Final CTA / Engagement Section */}
        <section className="relative py-32 overflow-hidden rounded-[5rem] group">
          <div className="absolute inset-0 bg-foreground pointer-events-none" />

          {/* Animated Grid on CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center space-y-12 px-6"
          >
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                READY TO <span className="text-accent italic">SCALE?</span>
              </h3>
              <p className="text-white/40 font-medium max-w-xl mx-auto text-lg leading-relaxed">
                Every great system begins with a single conversation. Let's
                discuss your objectives and build the future of your digital
                identity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-accent text-white font-black uppercase text-xs tracking-[0.4em] rounded-[2rem] shadow-2xl shadow-accent/20 transition-all flex items-center gap-3"
              >
                Schedule Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-[0.4em] rounded-[2rem] hover:bg-white/10 transition-all backdrop-blur-xl"
              >
                View System Specs
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Glow */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-1/2 h-48 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        </section>
      </div>

      {/* Page-level Scroll Progress indicator (side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${i === 2 ? "bg-accent h-6" : "bg-border"} transition-all duration-500`}
          />
        ))}
      </div>
    </div>
  );
}
