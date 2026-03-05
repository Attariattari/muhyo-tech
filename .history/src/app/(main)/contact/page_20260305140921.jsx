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
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-0 overflow-hidden bg-background">
      {/* Cinematic Hero Header */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
        {/* Advanced Dynamic Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/15 blur-[160px] rounded-full animate-pulse opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full animate-pulse delay-700 opacity-50" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-[0.15]" />

          {/* Floating Particles/Shapes Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [1, 1.5, 1],
                  x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, -100, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 3,
                }}
                className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-8 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent/5 border border-accent/20 text-accent text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-xl shadow-2xl shadow-accent/10"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Available for global collaboration</span>
          </motion.div>

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tight text-foreground leading-[0.85] mb-4">
            Let's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/20 leading-tight">
              Build.
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed px-4 opacity-80">
            Fusing architecture with creativity to deliver
            <span className="text-foreground"> high-performance </span>
            digital experiences.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-16 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Contact Section - Floating Surface */}
      <div className="relative z-20 -mt-20 pb-32">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="glass rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden bg-card/10 backdrop-blur-md">
            <Contact />
          </div>
        </div>
      </div>

      {/* Professional Bento Grid Operations */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Section Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-[0.3em] text-[10px]">
              <Globe className="w-4 h-4" />
              <span>Global Presence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Boundless <br />
              <span className="text-muted-foreground/40 italic">
                Connections.
              </span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {/* Map Box - Large */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[3rem] border border-border/10">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale-[0.9] group-hover:grayscale-[0.2] transition-all duration-1000 opacity-40 group-hover:opacity-100 scale-105 group-hover:scale-100"
              ></iframe>
              <div className="absolute bottom-8 left-8 glass-dark px-8 py-6 rounded-3xl border border-white/5 backdrop-blur-xl z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-accent/15 text-accent shadow-inner">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black uppercase text-foreground leading-tight tracking-tight">
                      Lahore, PK
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      Punjab Province
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timezone Box */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-card/30 border border-border/50 p-8 flex flex-col justify-between hover:bg-accent/[0.03] transition-colors duration-500">
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-full uppercase tracking-widest">
                  Always On
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-5xl font-black text-foreground tabular-nums tracking-tighter">
                  GMT+5
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  Local Operating Time
                </p>
              </div>
            </div>

            {/* Remote Readiness */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-accent/5 border border-accent/20 p-8 flex flex-col justify-between hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 scale-[2.5] -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Zap className="w-20 h-20" />
              </div>
              <div className="p-4 rounded-2xl bg-accent/15 text-accent w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-foreground tracking-tighter">
                  100%
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  Remote Workflow Ready
                </p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer">
                  Work Samples <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Availability / Stats */}
            <div className="md:col-span-12 mt-4">
              <div className="glass rounded-[3.5rem] border border-white/5 p-10 grid grid-cols-1 md:grid-cols-4 gap-12">
                {[
                  {
                    icon: <ShieldCheck className="w-6 h-6" />,
                    label: "Security",
                    value: "Verified",
                    color: "text-blue-400",
                  },
                  {
                    icon: <Coffee className="w-6 h-6" />,
                    label: "Productivity",
                    value: "Elite",
                    color: "text-amber-400",
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    label: "Delivery",
                    value: "Rapid",
                    color: "text-accent",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    label: "Experience",
                    value: "Senior",
                    color: "text-emerald-400",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
                  >
                    <div
                      className={`p-4 rounded-2xl bg-white/5 ${stat.color} shadow-xl`}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-foreground uppercase tracking-tight">
                        {stat.value}
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Success Metrics */}
      <section className="py-32 relative">
        {/* Subtle Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-foreground/[0.02] tracking-widest uppercase pointer-events-none rotate-6 whitespace-nowrap overflow-hidden">
          Performance Excellence
        </div>

        <SectionWrapper
          title="Success Metrics"
          subtitle="Quantifiable results and professional benchmarks from past collaborations."
        >
          <div className="mt-12 group">
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>

      {/* Final CTA Visual */}
      <div className="pb-32 px-4 max-w-7xl mx-auto">
        <div className="relative group overflow-hidden rounded-[4rem] bg-gradient-to-r from-accent to-blue-600 p-1">
          <div className="relative bg-background rounded-[3.8rem] p-16 md:p-24 overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div className="space-y-6 max-w-2xl">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                  Tired of average? <br />
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">
                    Let's build premium.
                  </span>
                </h3>
                <p className="text-xl text-muted-foreground font-medium">
                  Currently accepting high-impact projects for 2024. Space is
                  limited, so let's start today.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-6 bg-accent text-accent-foreground rounded-full font-black uppercase text-sm tracking-[0.3em] shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all flex items-center gap-3"
              >
                Inquire Now <ArrowDown className="w-4 h-4 -rotate-90" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
