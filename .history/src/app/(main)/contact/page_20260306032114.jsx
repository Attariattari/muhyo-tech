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
  Cpu,
  Layers,
  Code2,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative selection:bg-accent selection:text-white bg-background overflow-hidden min-h-screen"
    >
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-400 to-accent z-[100] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Abstract Background Architecture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-floating" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px] animate-floating"
          style={{ animationDelay: "-2s" }}
        />
        
        {/* Animated Structural Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
           pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* High-Impact Centered Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 max-w-6xl w-full text-center space-y-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">
                Executive Partner Terminal
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black tracking-tighter text-foreground leading-[0.85] md:leading-[0.8]">
              Architecting <br />
              <span className="bg-gradient-to-br from-accent via-blue-400 to-indigo-500 bg-clip-text text-transparent">Strategic</span> <br />
              Excellence.
            </h1>

            <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed md:px-12">
              Engineering <span className="text-foreground">elite-grade</span> digital systems for global leaders. 
              Sub-second performance meets <span className="italic">uncompromising</span> scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 px-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-6 bg-foreground text-background rounded-full font-black uppercase text-xs tracking-[0.3em] cursor-pointer shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] transition-all hover:bg-accent hover:text-white overflow-hidden"
              >
                <span className="relative z-10">Initiate Protocol</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-6 group"
              >
                <div className="w-12 h-[1.5px] bg-border group-hover:bg-accent group-hover:w-16 transition-all" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Explore Infrastructure</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Status Dashboard Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-20 p-8 bg-card/5 backdrop-blur-3xl border border-white/5 rounded-[3rem] w-fit mx-auto"
          >
            {[
              { label: "Connectivity", value: "99.9% Uptime", dot: "bg-emerald-500" },
              { label: "Operational", value: "Lahore Hub", dot: "bg-accent" },
              { label: "Status", value: "Active Q2 2025", dot: "bg-blue-400" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group/stat">
                <div className={`w-2 h-2 ${stat.dot} rounded-full group-hover/stat:scale-[2] transition-transform`} />
                <div className="text-left">
                  <div className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
                  <div className="text-sm font-bold text-foreground">{stat.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Minimalist Anchor Scroll */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
           <div className="text-[9px] font-black text-accent uppercase tracking-[0.8em] rotate-90 mb-8 origin-center translate-y-4">SCROLL</div>
          <div className="w-px h-24 bg-gradient-to-b from-accent via-accent/20 to-transparent" />
        </motion.div>
      </section>

      {/* Strategic Engagement Matrix */}
      <div className="relative z-30 py-40 lg:py-64 px-8 max-w-[1600px] mx-auto bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_50%)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-24 lg:sticky lg:top-32">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-accent" />
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent">Strategic Pillars</h2>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Core <br />
                <span className="text-muted-foreground/20">Engineering</span> <br />
                Pillars.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                Designing resilient architectures that serve as the technological backbone for high-stakes digital environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: <ShieldCheck />, title: "Security", text: "Zero-trust protocols for mission integrity." },
                { icon: <Zap />, title: "Performance", text: "Sub-second global runtime execution." },
                { icon: <Layers />, title: "Scale", text: "Elastic architecture for millions of users." },
                { icon: <Cpu />, title: "Intelligence", text: "Adaptive logic & data-driven insights." },
              ].map((item, i) => (
                <div key={i} className="space-y-4 p-8 rounded-[2rem] bg-card/5 border border-white/5 hover:border-accent/40 transition-all group shadow-inner">
                  <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-foreground">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-bold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
             <div className="relative">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
                <Contact />
             </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Intelligence Map */}
      <section className="py-48 bg-card/10 border-y border-white/5 relative overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div className="space-y-8">
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-accent/5 rounded-full border border-accent/20">
                  <Globe className="w-4 h-4 text-accent animate-spin-slow" />
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest">Global Terminal</span>
               </div>
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                Network <br />
                <span className="text-muted-foreground/10 italic">Intelligence.</span>
              </h2>
            </div>
            <div className="text-right pb-4">
              <div className="text-4xl font-black tracking-tighter text-foreground mb-1">Lahore Hub</div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[.4em] opacity-40">UTC+05:00 Terminal</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Map Container */}
            <div className="lg:col-span-8 group relative h-[600px] overflow-hidden rounded-[4rem] border border-white/5 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale invert-[0.9] dark:invert-0 opacity-20 group-hover:opacity-40 transition-all duration-[3s] scale-125 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-[2.5rem] border border-white/5 z-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                       <div className="w-4 h-4 bg-accent rounded-full animate-ping opacity-75" />
                       <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white uppercase tracking-widest">Master Node: Active</div>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">Unified Connectivity for Strategic Partners</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                     {[1,2,3].map(i => <div key={i} className="w-1 h-8 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div 
                          animate={{ height: ["0%", "100%", "0%"] }}
                          transition={{ duration: 1 + i, repeat: Infinity }}
                          className="absolute bottom-0 w-full bg-accent" 
                        />
                     </div>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Stack */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              {[
                { label: "Temporal sync", value: "UTC +5", icon: <Clock /> },
                { label: "Operational", value: "Available", icon: <CheckCircle2 /> },
                { label: "Engineering", value: "Senior L8", icon: <Award /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -10, scale: 1.02 }}
                  className="glass p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between group hover:border-accent/40 transition-all"
                >
                  <div className="text-accent group-hover:scale-125 transition-transform w-fit bg-white/5 p-4 rounded-3xl shadow-2xl">
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] opacity-40">
                      {stat.label}
                    </div>
                    <div className="text-4xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors">
                      {stat.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Metrics Dashboard */}
      <section className="py-48 bg-background relative">
        <SectionWrapper
          title="Performance Benchmarks"
          subtitle="Quantifiable technical outcomes delivered across global infrastructure projects."
        >
          <div className="mt-32 group relative">
             <div className="absolute inset-0 bg-accent/5 blur-[150px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>

      {/* Closing Terminal Branding */}
      <div className="py-32 border-t border-white/5 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="relative z-10 space-y-12">
            <div className="text-[10px] font-black text-muted-foreground/20 uppercase tracking-[2em] animate-pulse">
            Terminal End
            </div>
            <div className="flex items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all hover:opacity-100 duration-700">
            <Code2 className="w-6 h-6" />
            <Cpu className="w-6 h-6" />
            <Globe className="w-6 h-6" />
            <Layers className="w-6 h-6" />
            </div>
            <div className="text-[8px] font-black text-muted-foreground/10 uppercase tracking-[0.5em]">
            &copy; 2025 Muhyo Systems Architecture. All Rights Reserved.
            </div>
        </div>
      </div>
    </div>
  );
}
