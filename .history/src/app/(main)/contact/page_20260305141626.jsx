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
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative bg-background selection:bg-accent selection:text-white"
    >
      {/* Immersive Studio Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Split Screen Concept */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="relative z-20 flex flex-col justify-center px-6 lg:px-20 pt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-4 group cursor-default">
                <div className="w-12 h-[1px] bg-accent transition-all group-hover:w-20" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">
                  Studio Elite
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,9rem)] font-black tracking-tight text-foreground leading-[0.85]">
                Shape the <br />
                <span className="italic font-serif font-light text-muted-foreground/50">
                  Future
                </span>{" "}
                <br />
                Together.
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed opacity-80">
                Transforming complex challenges into{" "}
                <span className="text-foreground">iconic digital products</span>{" "}
                through meticulous engineering.
              </p>

              <div className="flex items-center gap-8 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 px-8 py-5 bg-foreground text-background rounded-full font-black uppercase text-xs tracking-widest cursor-pointer shadow-2xl transition-all hover:shadow-accent/20"
                >
                  Start Project <MousePointer2 className="w-4 h-4" />
                </motion.div>
                <div className="hidden sm:flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Our Method
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-20 flex items-center gap-4 scale-90 origin-left"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
                <div className="w-3 h-3 bg-emerald-500 rounded-full relative z-10" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                Currently taking <span className="text-emerald-500">2</span>{" "}
                custom projects
              </span>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="hidden lg:block relative h-full overflow-hidden">
            <motion.div
              style={{ y: heroY }}
              className="absolute inset-x-4 inset-y-12"
            >
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden group shadow-3xl bg-accent/10">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 " />
                <img
                  src="/images/contact-elite.png"
                  alt="Premium Engineering Visual"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                />
                {/* Floating Overlay Card */}
                <div className="absolute top-12 left-12 glass p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl z-20 max-w-xs transition-all hover:translate-y-2">
                  <Sparkles className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-xl font-black text-white mb-2">
                    99.9% Excellence
                  </h4>
                  <p className="text-xs text-white/60 font-medium leading-relaxed uppercase tracking-wider">
                    Every pixel, every line of code, crafted for impact.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background Texture for Split */}
            <div className="absolute inset-0 bg-accent/5 -z-10" />
          </div>
        </div>

        {/* Scroll Progress Indicator for Hero */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-accent to-transparent" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* Main Bridge Section */}
      <div className="relative z-30 pt-32 pb-48 px-4 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Strategic Info */}
          <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-32">
            <div className="space-y-6">
              <h2 className="text-5xl font-black tracking-tighter leading-tight">
                Global Strategy, <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-8">
                  Local Precision.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-serif italic">
                "We don't just build websites; we architect digital legacies for
                brands that refuse to be ignored."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent transition-all hover:gap-4 cursor-default">
                  <Clock className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none pt-1">
                    Response Speed
                  </span>
                </div>
                <div className="text-3xl font-black tracking-tighter">
                  &lt; 12 Hours
                </div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
                  Guaranteed feedback
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400 transition-all hover:gap-4 cursor-default">
                  <Globe className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none pt-1">
                    TimezoneSync
                  </span>
                </div>
                <div className="text-3xl font-black tracking-tighter">
                  Lahore, PK
                </div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
                  Universal Connectivity
                </p>
              </div>
            </div>

            {/* Partner Logos / Trust Icons - Visual Representation */}
            <div className="pt-8 space-y-6 opacity-40 hover:opacity-100 transition-opacity">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                Trusted by visionaries at
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-8 grayscale items-center">
                <div className="font-serif text-2xl font-bold tracking-tighter text-foreground">
                  FRAME.
                </div>
                <div className="text-xl font-black tracking-widest text-foreground">
                  VOLT
                </div>
                <div className="font-serif italic text-2xl text-foreground">
                  Nexus
                </div>
                <div className="text-lg font-black tracking-tight text-foreground underline decoration-accent underline-offset-4">
                  CORE.
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Canvas */}
          <div className="lg:col-span-8">
            <div className="relative group p-1 glass rounded-[4.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 shadow-3xl overflow-hidden hover:border-accent/30 transition-all duration-700">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* The Operations Bento - High End Visuals */}
      <section className="py-40 bg-card/10 border-y border-white/5 relative overflow-hidden">
        {/* Dynamic Background decor */}
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-black tracking-tighter leading-none">
              A Global Operating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                Intelligence.
              </span>
            </h2>
          </div>

          {/* Refined Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px]">
            {/* Interactive World Map */}
            <div className="md:col-span-12 group relative overflow-hidden rounded-[4rem] border border-white/10 bg-black/40 shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full grayscale-[1] group-hover:grayscale-0 transition-all duration-[2s] opacity-30 group-hover:opacity-100 scale-110 group-hover:scale-100"
              ></iframe>

              <div className="absolute top-12 left-12 z-20 glass p-10 rounded-[3rem] border border-white/10 group-hover:-translate-y-2 transition-transform duration-700">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-accent">
                    <MapPin className="w-6 h-6" />
                    <span className="text-xs font-black uppercase tracking-[0.5em]">
                      Global Hub
                    </span>
                  </div>
                  <div className="text-4xl font-black text-white tracking-tighter">
                    Lahore, PK
                  </div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest pt-2">
                    The Heart of South Asian Tech
                  </p>
                </div>
              </div>
            </div>

            {/* Performance KPIs */}
            {[
              {
                icon: <ShieldCheck />,
                label: "Security First",
                value: "Verified Ops",
                color: "text-blue-400",
              },
              {
                icon: <Zap />,
                label: "Speed Elite",
                value: "Rapid Flow",
                color: "text-accent",
              },
              {
                icon: <Award />,
                label: "Certifications",
                value: "Senior Tier",
                color: "text-emerald-400",
              },
            ].map((kpi, i) => (
              <div
                key={i}
                className="md:col-span-4 group relative overflow-hidden rounded-[3.5rem] glass p-10 border border-white/5 hover:border-accent/40 transition-all duration-700 hover:-translate-y-2"
              >
                <div className="h-full flex flex-col justify-between">
                  <div
                    className={`p-5 rounded-3xl bg-white/5 w-fit ${kpi.color} shadow-xl group-hover:rotate-12 transition-transform`}
                  >
                    {kpi.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                      {kpi.label}
                    </div>
                    <div className="text-4xl font-black tracking-tighter text-foreground uppercase">
                      {kpi.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics / Social Proof */}
      <section className="py-40">
        <SectionWrapper
          title="Success Metrics"
          subtitle="Quantifiable results and professional benchmarks from a decade of engineering excellence."
        >
          <div className="mt-20 group relative">
            <div className="absolute -inset-10 bg-accent/5 blur-[150px] rounded-full -z-10 group-hover:bg-accent/10 transition-all duration-1000" />
            <ProfessionalHighlights />
          </div>
        </SectionWrapper>
      </section>

      {/* Finale Visual Statement */}
      <section className="pb-40 px-6">
        <div className="max-w-[1400px] mx-auto relative group overflow-hidden rounded-[5rem] bg-foreground p-[1px]">
          <div className="relative bg-background rounded-[4.9rem] p-16 md:p-32 overflow-hidden flex flex-col items-center text-center">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] grayscale pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              className="space-y-10 max-w-4xl relative z-10"
            >
              <h3 className="text-5xl md:text-[9rem] font-black tracking-tighter leading-[0.85] text-foreground">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent/40 italic font-serif font-light">
                  Evolve.
                </span>
              </h3>

              <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed opacity-60">
                Let's move beyond the ordinary. Your vision deserves an
                architect with no limits.
              </p>

              <div className="pt-10">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-8 bg-accent text-accent-foreground rounded-full font-black uppercase text-sm tracking-[0.5em] shadow-2xl transition-all flex items-center gap-4 group"
                >
                  Initiate Contact{" "}
                  <ArrowDown className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Page Footer Visual Decor */}
      <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-accent/[0.03] to-transparent pointer-events-none -z-10" />
    </div>
  );
}
