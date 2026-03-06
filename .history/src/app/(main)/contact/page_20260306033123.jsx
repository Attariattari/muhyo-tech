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
  Plus,
} from "lucide-react";
import Contact from "@/components/Contact";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import Image from "next/image";

export default function ContactPage() {
  const bentoCards = [
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: "Operational Radius",
      value: "95% Global",
      description: "Delivering architectural excellence across 14+ time zones.",
      gridSpan: "md:col-span-2",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Initial Assessment",
      value: "8H ETA",
      description: "Priority response for strategic system briefly.",
      gridSpan: "md:col-span-1",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Confidentiality",
      value: "L5 Secure",
      description: "Enterprise-grade data sovereignty protocols.",
      gridSpan: "md:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10 animate-floating" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-floating [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Unique Hero Section with Immersive Visual */}
        <section className="relative pt-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <span className="w-16 h-[1px] bg-accent/40" />
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2 w-2 bg-accent"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent/80">
                  Strategic Acquisition
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tight text-foreground leading-[0.85]">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 animate-gradient-flow bg-[length:200%_auto] italic">
                S-LEVEL
              </span>{" "}
              <br />
              SYSTEMS.
            </h1>

            <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed opacity-70">
              Where technical precision meets artistic architectural vision.
              Engage for exclusive system builds and digital transformation.
            </p>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-background bg-accent flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <div className="text-sm font-black text-foreground">
                  50+ Enterprise Clients
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
                  Global Strategic Partners
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:block group"
          >
            <div className="relative z-10 w-full aspect-square rounded-[4rem] overflow-hidden border border-border/40 shadow-2xl group-hover:rotate-1 transition-transform duration-700">
              <Image
                src="/contact_hero_abstract_1772792967278.png"
                alt="Digital Architecture"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl border-accent/30 shadow-2xl z-20"
            >
              <Cpu className="w-8 h-8 text-accent mb-4 animate-pulse" />
              <div className="text-[10px] font-black uppercase tracking-widest">
                Architectural Node
              </div>
              <div className="text-xs font-bold text-muted-foreground">
                Active Connection
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Dynamic Bento Section */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-widest uppercase">
              Operational Metrics
            </h2>
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-border/40 via-accent/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bentoCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`${card.gridSpan} p-12 glass rounded-[3.5rem] border-border/40 hover:border-accent/40 transition-all duration-700 space-y-8 group overflow-hidden relative`}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {card.icon}
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-black uppercase tracking-[0.4em] text-accent/60">
                      {card.title}
                    </div>
                    <div className="text-4xl font-black tracking-tighter text-foreground">
                      {card.value}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed opacity-70">
                      {card.description}
                    </p>
                  </div>
                </div>
                {/* Decorative Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--accent-rgb),0.03),transparent_50%)]" />
              </motion.div>
            ))}

            <div className="md:col-span-1 p-12 rounded-[3.5rem] bg-accent/5 border border-accent/10 flex flex-col justify-center items-center text-center space-y-4">
              <Sparkles className="w-8 h-8 text-accent animate-spin-slow" />
              <div className="text-[10px] font-black uppercase tracking-widest text-accent">
                Elite Status
              </div>
              <div className="text-xs font-bold leading-relaxed">
                Top 1% Architecture Agency Rank
              </div>
            </div>
          </div>
        </section>

        {/* The Consultation Journey Form */}
        <section className="relative">
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10">
              <Zap className="w-3 h-3 text-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-accent">
                Initiation Protocol
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Secure Your <br /> Engagement.
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <Contact />
            {/* Aesthetic Side Bars */}
            <div className="absolute top-0 -left-6 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden xl:block" />
            <div className="absolute top-0 -right-6 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden xl:block" />
          </motion.div>
        </section>

        {/* Final Interactive CTA */}
        <section className="relative py-40 rounded-[6rem] bg-foreground overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-blue-500/20" />

          <div className="relative z-10 text-center space-y-16 px-6">
            <div className="space-y-6">
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic">
                Build The <br /> Future.
              </h3>
              <p className="text-white/40 font-bold max-w-2xl mx-auto text-xl uppercase tracking-widest">
                Every masterpiece starts with a technical brief.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center justify-center"
            >
              <div className="absolute -inset-4 bg-accent blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative px-20 py-8 bg-accent text-white font-black uppercase text-xs tracking-[0.6em] rounded-full shadow-2xl flex items-center gap-4">
                Phase 01: Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.button>
          </div>

          {/* Animated Grid lines for CTA */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5" />
        </section>
      </div>

      {/* Decorative World Time Display (Side) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col gap-12 text-accent/20 font-black text-xs vertical-text tracking-[1em] uppercase select-none">
        <span>Global Access 24/7</span>
        <span>S-Level Engineering</span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
