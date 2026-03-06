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
      className="relative  selection:bg-accent selection:text-white"
    >
      {/* Executive Studio Hero */}
      <section className="relative h-[100vh] flex items-center overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="relative z-20 flex flex-col justify-center px-8 lg:px-24 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-4">
                <span className="h-[1px] w-12 bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">
                  Executive Partnership
                </span>
              </div>

              <h1 className="text-[clamp(3rem,7vw,8rem)] font-black tracking-tighter text-foreground leading-[0.9]">
                Architecting <br />
                <span className="text-muted-foreground/30">Digital</span> <br />
                Excellence.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed opacity-90">
                Strategic engineering fused with creative precision to deliver
                <span className="text-foreground"> high-impact </span> digital
                solutions.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="px-10 py-6 bg-foreground text-background rounded-full font-bold uppercase text-xs tracking-[0.2em] cursor-pointer shadow-xl transition-all hover:bg-accent hover:text-white"
                >
                  Initiate Project
                </motion.div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group px-4">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    View Portfolio
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Live Status Bar */}
            <div className="absolute bottom-12 left-8 lg:left-24 flex items-center gap-6 p-1 pr-6 bg-card/30 backdrop-blur-xl border border-border/50 rounded-full scale-90 origin-left">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  Available
                </span>
              </div>
              <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                Taking select projects for Q2 2024
              </span>
            </div>
          </div>

          {/* Portrait/Visual Side */}
          <div className="hidden lg:block relative h-full bg-slate-900/10">
            <motion.div
              style={{ y: heroY }}
              className="absolute inset-x-12 inset-y-24"
            >
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden group shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src="/images/contact-elite.png"
                  alt="Professional Architecture"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s]"
                />

                {/* Floating Metric */}
                <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-[2rem] border border-white/10 z-20 transition-all hover:-translate-y-2">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="text-[10px] font-black text-accent uppercase tracking-widest">
                        Global Reach
                      </div>
                      <div className="text-2xl font-black text-white">
                        Deliverance.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-white">99%</div>
                      <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                        Precision Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Hint */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Strategic Partnership Section */}
      <div className="relative z-30 py-32 lg:py-48 px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left: Strategic Columns */}
          <div className="lg:col-span-5 space-y-20 lg:sticky lg:top-32">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tighter leading-none">
                Engineering <br />
                <span className="text-accent underline decoration-accent/10 underline-offset-[12px]">
                  Pillars.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                I partner with ambitious brands to navigate the complexities of
                modern digital architecture, ensuring scalability and
                performance at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-border pt-16">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  label: "Security",
                  detail: "Military-grade data protection and protocols.",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  label: "Efficiency",
                  detail: "Optimized workflows for rapid market entry.",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Reliability",
                  detail: "Consistent uptime and long-term stability.",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  label: "Global",
                  detail: "Architecture built for worldwide scale.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-3 p-2 hover:bg-card/50 rounded-2xl transition-colors"
                >
                  <div className="text-accent">{item.icon}</div>
                  <div className="text-sm font-black uppercase tracking-widest leading-none">
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Engagement Form */}
          <div className="lg:col-span-7">
            <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-br from-border/50 to-transparent border border-border shadow-2xl overflow-hidden glass">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Global Intelligence Dashboard */}
      <section className="py-40 bg-card/20 border-y border-border relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 rounded-full border border-accent/20">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">
                  Operations Hub
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Global Operating <br />
                <span className="text-muted-foreground/40 italic">
                  Intelligence.
                </span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-3xl font-black tracking-tighter">
                Lahore, PK
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Principal Studio Location
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Immersive Map Container */}
            <div className="lg:col-span-8 group relative h-[500px] overflow-hidden rounded-[3rem] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale-[1] group-hover:grayscale-0 transition-all duration-[1.5s] opacity-40 group-hover:opacity-100"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-10 left-10 glass p-8 rounded-3xl border border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-widest">
                      Active Connectivity
                    </div>
                    <p className="text-[9px] text-white/50 uppercase font-bold tracking-widest">
                      Real-time collaboration across all timezones
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Metrics */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              {[
                { label: "Local Time", value: "GMT +5", icon: <Clock /> },
                {
                  label: "Performance",
                  value: "Enterprise",
                  icon: <CheckCircle2 />,
                },
                { label: "Seniority", value: "L8 Tier", icon: <Award /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-10 rounded-[2.5rem] border border-border flex flex-col justify-between group hover:border-accent/50 transition-all"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform w-fit">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                      {stat.label}
                    </div>
                    <div className="text-4xl font-black tracking-tighter text-foreground">
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Refined Success Metrics */}
      <section className="py-40">
        <SectionWrapper
          title="Strategic Benchmarks"
          subtitle="Quantifiable results from a decade of engineering partnerships."
        >
          <div className="mt-16 group">
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
