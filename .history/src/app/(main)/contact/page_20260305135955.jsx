"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import { Sparkles, Zap, Rocket, Globe, Code2, MapPin } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function ContactPage() {
  const tiltOptions = {
    tiltMaxAngleX: 10,
    tiltMaxAngleY: 10,
    perspective: 1000,
    scale: 1.02,
    transitionSpeed: 1000,
    gyroscope: true,
  };

  return (
  return (
    <div className="pt-24 space-y-24 overflow-hidden bg-background text-foreground">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Advanced Background Architecture */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,183,255,0.05),transparent_70%)]" />
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 blur-[180px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse [animation-delay:2s]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
          {/* Left Side: Content Hierarchy */}
          <div className="flex-1 space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-accent text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Innovating Digital Experiences</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
            >
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accent via-blue-400 to-indigo-500">
                Elevate?
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium"
            >
              I bridge the gap between abstract business goals and high-performance technical execution. Let's turn your most ambitious ideas into reality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all group">
                <div className="p-2 rounded-xl bg-accent/20 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">Global Scale</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all group">
                <div className="p-2 rounded-xl bg-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">Elite Tech</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Abstract Visual Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 relative group"
          >
            <Tilt {...tiltOptions}>
              <div className="relative z-10 p-4 glass rounded-[4rem] overflow-hidden group-hover:border-accent/30 transition-all duration-1000 shadow-[0_0_80px_-15px_rgba(0,183,255,0.3)]">
                <div className="relative w-full aspect-square md:aspect-[5/4] rounded-[3.5rem] overflow-hidden">
                  <Image
                    src="/images/contact-hero.png"
                    alt="Innovation Visual"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </Tilt>

            {/* Floating Intelligence Badges */}
            <div className="absolute -top-10 -right-10 glass p-7 rounded-[2.5rem] border border-accent/40 shadow-2xl z-20 animate-floating">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-accent/20">
                  <Rocket className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground leading-tight">Scale-Ready</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Architecting Growth</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 glass p-7 rounded-[2.5rem] border border-blue-500/40 shadow-2xl z-20 animate-floating [animation-delay:2s]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/20">
                  <Zap className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground leading-tight">Fast-Track</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Execution at Speed</p>
                </div>
              </div>
            </div>
          </section>

      {/* Highlights Section */}
      <div className="relative py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-accent/5 blur-[150px] rounded-full -z-10" />
        <ProfessionalHighlights />
      </div>

      {/* Immersive Map Architecture */}
      <section className="relative w-full py-24 group">
        <div className="absolute inset-0 bg-accent/5 -z-10 blur-[120px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative w-full h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.8] contrast-[1.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:contrast-100"
            ></iframe>
            
            <div className="absolute bottom-12 left-12 glass p-8 rounded-[2.5rem] border border-accent/40 shadow-2xl z-20 animate-floating">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-accent/20">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground tracking-tight">The Innovation Lab</div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Chung, Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Infrastructure */}
      <SectionWrapper
        title="Global Presence, Local Intelligence"
        subtitle="Operational Hub"
      >
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-medium"
          >
            Strategically centered in <span className="text-foreground font-black underline decoration-accent/30 decoration-4 underline-offset-8">Chung, Lahore</span>, 
            I operate at the intersection of emerging tech and established reliability. 
            My hub serves as a high-density production environment for elite digital solutions.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {[
              { label: "Availability", value: "24/7 Virtual", color: "text-accent", border: "hover:border-accent/30" },
              { label: "Efficiency", value: "GMT +5", color: "text-blue-500", border: "hover:border-blue-500/30" },
              { label: "Commitment", value: "100% Elite", color: "text-emerald-500", border: "hover:border-emerald-500/30" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-10 rounded-[2.5rem] border border-white/5 ${stat.border} transition-all duration-700 group cursor-default`}
              >
                <div className={`${stat.color} font-black text-4xl mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tighter`}>{stat.value}</div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Contact />
    </div>
  );
}
