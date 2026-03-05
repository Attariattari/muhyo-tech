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
      {/* Premium Background Layering - Matching Hero Style */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <div className="absolute top-0 -left-[10%] w-[70%] h-[70%] bg-accent/5 blur-[120px] rounded-full opacity-50 animate-floating" />
        <div className="absolute bottom-0 -right-[10%] w-[70%] h-[70%] bg-accent/5 blur-[120px] rounded-full opacity-50 animate-floating [animation-delay:3s]" />

        {/* Professional Grid Pattern - Match Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-border/20 pt-20">
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                <div className="inline-flex items-center gap-4 py-2 px-6 bg-accent/5 border border-accent/20 rounded-full w-fit">
                  <div className="relative flex h-2.5 w-2.5">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                    Consultation Open
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tightest text-foreground leading-[0.9]">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 italic">
                    Something
                  </span>{" "}
                  <br />
                  Amazing.
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                  Strategic software engineering fused with creative precision
                  to deliver
                  <span className="text-foreground"> high-impact </span>{" "}
                  enterprise solutions that scale.
                </p>

                <div className="flex flex-wrap items-center gap-8 pt-4">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-6 bg-foreground text-background rounded-2xl font-black uppercase text-sm tracking-[0.2em] cursor-pointer shadow-2xl transition-all hover:bg-accent hover:text-white"
                  >
                    Start Project
                  </motion.div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all cursor-pointer group px-4">
                    <span className="text-sm font-black uppercase tracking-widest">
                      View My Work
                    </span>
                    <div className="p-2 rounded-xl border border-border/50 group-hover:border-accent group-hover:bg-accent/5 transition-all">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Status Indicator */}
              <div className="flex items-center gap-6 p-5 bg-card/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] w-fit shadow-2xl">
                <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <span className="text-[12px] font-black uppercase tracking-widest text-emerald-500/80">
                    Available for HIRE
                  </span>
                </div>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">
                  Q2/Q3 2024 Slots Available
                </span>
              </div>
            </div>

            {/* Right Visual Side */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div
                style={{ y: heroY }}
                className="relative h-[650px] w-full"
              >
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img
                    src="/images/contact-elite.png"
                    alt="Work Atmosphere"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2.5s] ease-out"
                  />

                  {/* Floating Performance Indicator */}
                  <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[2.5rem] border border-white/10 z-20 transition-all hover:-translate-y-2">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-xs font-black text-accent uppercase tracking-[0.3em]">
                          Global Trust
                        </div>
                        <div className="text-2xl font-black text-white">
                          Verified Architect.
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-white">L8</div>
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          Seniority Level
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <div className="relative z-30 py-40 lg:py-48 px-6 max-w-7xl mx-auto border-b border-border/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left: Columns */}
          <div className="lg:col-span-5 space-y-20 lg:sticky lg:top-32">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tightest leading-none">
                Core <br />
                <span className="text-accent underline underline-offset-8 decoration-accent/20">
                  Pillars.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                I help ambitious businesses solve complex challenges through
                performance-driven architecture and seamless user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                {
                  icon: <ShieldCheck className="w-7 h-7" />,
                  label: "Reliability",
                  detail: "Built for zero-failure enterprise environments.",
                },
                {
                  icon: <Zap className="w-7 h-7" />,
                  label: "Performance",
                  detail: "Optimized for sub-second global response times.",
                },
                {
                  icon: <Award className="w-7 h-7" />,
                  label: "Excellence",
                  detail: "Industry-leading standards in every codebase.",
                },
                {
                  icon: <Globe className="w-7 h-7" />,
                  label: "Scalability",
                  detail: "Distributed systems for worldwide traffic.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4 p-8 bg-card/20 hover:bg-accent/5 border border-border/50 hover:border-accent/40 rounded-[2.5rem] transition-all duration-500 group"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform origin-left w-fit p-3 bg-accent/5 rounded-xl">
                    {item.icon}
                  </div>
                  <div className="text-sm font-black uppercase tracking-widest text-foreground">
                    {item.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Form - More Prominent */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-1.5 rounded-[3.5rem] bg-gradient-to-br from-border/50 via-border/10 to-transparent border border-border shadow-3xl overflow-hidden glass">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Global intelligence Dashboard */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-xs font-black text-accent uppercase tracking-widest">
                  Global Presence
                </span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-black tracking-tightest leading-none">
                Based in <br />
                <span className="text-muted-foreground/30 italic">Lahore.</span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-5xl font-black tracking-tighter text-foreground">
                GMT +5
              </div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-2">
                Coordinated Universal Time
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Immersive Map */}
            <div className="lg:col-span-2 group relative h-[500px] overflow-hidden rounded-[3.5rem] border border-border bg-card/20 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[2s] opacity-40 group-hover:opacity-100 scale-105"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 glass p-8 rounded-[2rem] border border-white/10 z-20">
                <div className="flex items-center gap-5">
                  <div className="relative h-4 w-4">
                    <div className="w-full h-full bg-accent rounded-full animate-ping opacity-40" />
                    <div className="w-3 h-3 bg-accent rounded-full absolute top-0.5 left-0.5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-widest">
                      Primary Node Active
                    </div>
                    <p className="text-xs text-white/50 uppercase font-black tracking-widest mt-1">
                      Collaborating across all Timezones
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Stats */}
            <div className="flex flex-col gap-10">
              {[
                { label: "Performance", value: "99.9%", icon: <Zap /> },
                { label: "Seniority", value: "8+ Years", icon: <Award /> },
                { label: "Uptime", value: "24/7", icon: <Clock /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-10 rounded-[3rem] border border-border flex flex-col justify-center group hover:border-accent/40 transition-all shadow-xl h-full"
                >
                  <div className="text-accent group-hover:scale-125 transition-all duration-500 w-fit p-4 bg-accent/5 rounded-2xl mb-6">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm font-black text-muted-foreground/40 uppercase tracking-[0.4em] mb-2">
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
      <section className="py-40 relative overflow-hidden bg-accent/[0.02]">
        <SectionWrapper
          title="Industry Benchmarks"
          subtitle="Quantifiable results and professional milestones from high-impact engineering partnerships."
        >
          <div className="mt-20">
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
