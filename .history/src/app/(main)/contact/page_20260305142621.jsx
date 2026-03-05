"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import {
  Sparkles,
  MapPin,
  Globe,
  ArrowDown,
  Clock,
  Zap,
  ShieldCheck,
  Coffee,
  ExternalLink,
  Award,
  ChevronRight,
  MousePointer2,
  CheckCircle2,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative selection:bg-accent selection:text-white"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-[10%] w-[70%] h-[70%] bg-accent/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 -right-[10%] w-[70%] h-[70%] bg-accent/5 blur-[120px] rounded-full opacity-50" />
      </div>

      {/* Executive Studio Hero */}
      <section className="relative h-[100vh] flex items-center overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="relative z-20 flex flex-col justify-center px-8 lg:px-24 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-4">
                <span className="h-[2px] w-12 bg-accent" />
                <span className="text-[11px] font-black uppercase tracking-[0.6rem] text-accent/80">
                  Strategic Engagement
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,9rem)] font-black tracking-tighter text-foreground leading-[0.85]">
                Pioneering <br />
                <span className="text-muted-foreground/20 italic">
                  Digital
                </span>{" "}
                <br />
                Prestige.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed opacity-80">
                Strategic engineering fused with creative precision to deliver
                <span className="text-foreground"> high-impact </span>{" "}
                enterprise solutions.
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-6">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-7 bg-foreground text-background rounded-full font-black uppercase text-[10px] tracking-[0.3em] cursor-pointer shadow-2xl transition-all hover:bg-accent hover:text-white"
                >
                  Start Consultation
                </motion.div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all cursor-pointer group px-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Our Portfolio
                  </span>
                  <div className="p-2 rounded-full border border-border/50 group-hover:border-accent group-hover:bg-accent/5 transition-all">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Operational Status */}
            <div className="absolute bottom-12 left-8 lg:left-24 flex items-center gap-8 px-6 py-4 bg-card/40 backdrop-blur-3xl border border-white/10 rounded-3xl scale-90 origin-left shadow-2xl">
              <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                  Ready for Q3 2024
                </span>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em] whitespace-nowrap">
                Limited Strategic Openings
              </span>
            </div>
          </div>

          {/* portrait/visual Side */}
          <div className="hidden lg:block relative h-full">
            <motion.div
              style={{ y: heroY }}
              className="absolute inset-x-16 inset-y-24"
            >
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src="/images/contact-elite.png"
                  alt="Executive Presence"
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2.5s] ease-out"
                />

                {/* Performance HUD */}
                <div className="absolute bottom-10 left-10 right-10 glass p-10 rounded-[2.5rem] border border-white/10 z-20 transition-all hover:-translate-y-2 shadow-3xl">
                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <div className="text-[11px] font-black text-accent uppercase tracking-[0.4em]">
                        Performance Index
                      </div>
                      <div className="text-3xl font-black text-white tracking-tighter">
                        Enterprise <br /> Grade.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-black text-white tracking-tighter">
                        99.9<span className="text-accent/50 text-2xl">%</span>
                      </div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                        Precision Reliability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>
      </section>

      {/* Strategic Partnership Section */}
      <div className="relative z-30 py-40 lg:py-56 px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left: Strategic Columns */}
          <div className="lg:col-span-5 space-y-24 lg:sticky lg:top-32">
            <div className="space-y-10">
              <h2 className="text-6xl font-black tracking-tighter leading-none">
                Engineering <br />
                <span className="text-accent relative inline-block">
                  Standards.
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent/20 rounded-full" />
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                I partner with high-growth organizations to architect resilient
                digital infrastructures that define industry benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-border/50 pt-20">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  label: "Security",
                  detail: "Advanced cryptography and data sovereignty.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  label: "Velocity",
                  detail: "High-frequency deployment architectures.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  label: "Integrity",
                  detail: "Immutable state management and tracking.",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  label: "Sovereignty",
                  detail: "Decentralized and global distribution.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4 p-6 hover:bg-accent/5 border border-transparent hover:border-accent/10 rounded-3xl transition-all duration-500 group"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform origin-left w-fit">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3rem] leading-none text-foreground">
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed font-semibold">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Engagement Form */}
          <div className="lg:col-span-7">
            <div className="relative p-1 rounded-[4rem] bg-gradient-to-br from-border/50 via-border/20 to-transparent border border-border shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)] overflow-hidden glass">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Global intelligence Dashboard */}
      <section className="py-48 bg-card/10 border-y border-border/30 relative overflow-hidden">
        {/* Abstract Data Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full text-[10px] font-mono leading-none break-all p-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="mb-2">
                01010011 01010100 01010010 01000001 01010100 01000101 01000111
                01011001
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-accent/10 rounded-full border border-accent/20 shadow-xl shadow-accent/5">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-black text-accent uppercase tracking-[0.4rem]">
                  Operational Hub
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                Global Network <br />
                <span className="text-muted-foreground/30 italic">
                  Presence.
                </span>
              </h2>
            </div>
            <div className="text-right hidden md:block pb-4">
              <div className="text-4xl font-black tracking-tighter text-foreground">
                Lahore, PK
              </div>
              <p className="text-[11px] font-bold text-muted-foreground/40 uppercase tracking-[0.3rem] mt-2">
                Strategic Base Coordinates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Interactive Intelligence Map */}
            <div className="lg:col-span-8 group relative h-[550px] overflow-hidden rounded-[4rem] border border-border shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale-[1] invert-[0.05] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-[2s] opacity-30 group-hover:opacity-100 scale-105 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-transparent to-transparent pointer-events-none opacity-60" />

              <div className="absolute bottom-10 left-10 glass p-10 rounded-[2.5rem] border border-white/10 z-20 shadow-2xl transition-all group-hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full animate-ping opacity-40" />
                    <div className="w-4 h-4 bg-accent rounded-full absolute top-0 left-0 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-black text-white uppercase tracking-[0.4rem]">
                      Pulse Active
                    </div>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-loose">
                      Synchronized across all Global Nodes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Metrics Panel */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-10">
              {[
                { label: "Temporal Zone", value: "UTC +5", icon: <Clock /> },
                {
                  label: "Integrity",
                  value: "L8 Tier",
                  icon: <Award />,
                },
                { label: "Uptime", value: "99.9%", icon: <Zap /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-11 rounded-[3rem] border border-border flex flex-col justify-between group hover:border-accent/40 transition-all shadow-xl hover:shadow-accent/5"
                >
                  <div className="text-accent group-hover:scale-125 transition-all duration-500 w-fit p-4 bg-accent/5 rounded-2xl group-hover:bg-accent group-hover:text-white border border-accent/10 shadow-inner">
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[11px] font-black text-muted-foreground/40 uppercase tracking-[0.5rem]">
                      {stat.label}
                    </div>
                    <div className="text-5xl font-black tracking-tightest text-foreground">
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Success Framework */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <SectionWrapper
          title="Performance Benchmarks"
          subtitle="Quantifiable results and strategic milestones from high-impact engineering partnerships."
        >
          <div className="mt-20 group">
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
