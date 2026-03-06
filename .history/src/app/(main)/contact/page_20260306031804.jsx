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
      className="relative selection:bg-accent selection:text-white bg-background overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-floating" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px] animate-floating"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px] opacity-20" />
      </div>

      {/* Executive Studio Hero - Redesigned to be centered and professional */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden border-b border-border/50">
        <div className="relative z-20 max-w-5xl w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-accent/5 rounded-full border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                Strategic Engineering Partnership
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black tracking-tighter text-foreground leading-[1] md:leading-[0.95]">
              Architecting <br />
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              <br />
              Legacy Systems.
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              Fusing strategic engineering with creative precision to deliver
              <span className="text-foreground font-semibold">
                {" "}
                high-impact{" "}
              </span>
              digital solutions for the world&apos;s most ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-foreground text-background rounded-full font-bold uppercase text-xs tracking-[0.2em] cursor-pointer shadow-2xl transition-all hover:bg-accent hover:text-white flex items-center gap-3"
              >
                Initiate Consultation
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-foreground transition-all">
                  Exploration Portfolio
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Availability Status - Refined */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center justify-center gap-6 p-1 pr-6 bg-card/10 backdrop-blur-md border border-border/50 rounded-full w-fit mx-auto scale-90"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[9px] font-black uppercase tracking-widest">
                System Active
              </span>
            </div>
            <span className="text-[9px] font-bold text-muted-foreground/80 uppercase tracking-widest">
              Available for Strategic Projects Q2-Q3 2025
            </span>
          </motion.div>
        </div>

        {/* Dynamic Grid Background Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Minimal Scroll Hint */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>
      </section>

      {/* Strategic Engagement Section - Rebalanced */}
      <div className="relative z-30 py-24 lg:py-40 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: Engineering Pillars */}
          <div className="space-y-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-[1px] bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  Process Architecture
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Core Engineering <br />
                <span className="text-muted-foreground/30 italic">
                  Pillars.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                I partner with ambitious brands to navigate the complexities of
                modern digital architecture, ensuring unmatched scalability and
                performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  label: "Security",
                  detail:
                    "Military-grade data protection and protocols for mission-critical apps.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  label: "Performance",
                  detail:
                    "Optimized runtime execution for sub-second global delivery.",
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  label: "Scalability",
                  detail:
                    "Elastic architecture built for millions of concurrent interactions.",
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  label: "Intelligence",
                  detail:
                    "Smart logic integrations for adaptive user experiences.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "var(--color-card)" }}
                  className="space-y-4 p-6 rounded-3xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-xl group"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-sm font-black uppercase tracking-widest leading-none">
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: The Engagement Form */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-br from-border/50 to-transparent border border-border shadow-2xl overflow-hidden glass">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Global Intelligence Dashboard - Refined */}
      <section className="py-32 bg-card/10 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 rounded-full border border-accent/20">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">
                  Operations Intelligence
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Global Network <br />
                <span className="text-muted-foreground/20 italic">
                  Synchronization.
                </span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-3xl font-black tracking-tighter text-foreground">
                Lahore, PK
              </div>
              <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-[.25em]">
                Principal Studio Terminal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Immersive Map Container */}
            <div className="lg:col-span-8 group relative h-[500px] overflow-hidden rounded-[3rem] border border-border shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale invert-[0.9] dark:invert-0 opacity-40 group-hover:opacity-60 transition-all duration-[2s] scale-110 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-[2rem] border border-white/5 z-20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-widest">
                        Low-Latency Node
                      </div>
                      <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">
                        Active connectivity across all major hubs
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <span className="text-[10px] text-white/60 font-black tracking-widest">
                      EST. PING: 18ms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Metrics - Professional Card Style */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-6">
              {[
                {
                  label: "Temporal Zone",
                  value: "UTC +5",
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  label: "Availability",
                  value: "Consulting",
                  icon: <CheckCircle2 className="w-5 h-5" />,
                },
                {
                  label: "Engineering Rank",
                  value: "Senior Tier",
                  icon: <Award className="w-5 h-5" />,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-8 rounded-[2rem] border border-border flex flex-col justify-between group hover:border-accent/50 transition-all hover:bg-accent/[0.02]"
                >
                  <div className="text-accent group-hover:rotate-12 transition-transform w-fit bg-accent/5 p-3 rounded-2xl">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                      {stat.label}
                    </div>
                    <div className="text-3xl font-black tracking-tighter text-foreground">
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Tech Grids */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 mask-radial-fade opacity-50 pointer-events-none" />
      </section>

      {/* Strategic Benchmarks - Clean & Impactful */}
      <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
        <SectionWrapper
          title="Strategic Benchmarks"
          subtitle="Quantifiable results and technical excellence metrics achieved through a decade of engineering partnerships."
        >
          <div className="mt-20 group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>

      {/* Footer-like Branding Close */}
      <div className="py-20 border-t border-border/50 text-center space-y-4">
        <div className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[1em]">
          Innovating with Precision
        </div>
        <div className="flex items-center justify-center gap-8 opacity-40">
          {/* Abstract representions of tech stack or partners */}
          <div className="h-6 w-px bg-border" />
          <Code2 className="w-5 h-5" />
          <Cpu className="w-5 h-5" />
          <Globe className="w-5 h-5" />
          <Layers className="w-5 h-5" />
          <div className="h-6 w-px bg-border" />
        </div>
      </div>
    </div>
  );
}
