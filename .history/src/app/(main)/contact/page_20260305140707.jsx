"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import {
  Sparkles,
  MapPin,
  Globe,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-0 overflow-hidden bg-background">
      {/* 1. Refined Minimalist Hero */}
      <section className="relative px-4 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Collaboration • Innovation • Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-black text-foreground tracking-tighter leading-[0.8] mix-blend-plus-lighter"
          >
            CONNECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-emerald-400">
              GLOBALLY.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Based in Lahore, scaling impact worldwide. Reach out to start a
            conversation about your next technical breakthrough.
          </motion.p>
        </div>
      </section>

      {/* 2. The Bento Contact Hub */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Form Tile (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 glass rounded-[3rem] overflow-hidden"
          >
            <Contact />
          </motion.div>

          {/* Sidebar Tiles */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Location Tile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex-1 glass p-8 rounded-[2.5rem] border border-accent/20 flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                  <MapPin className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-foreground mb-2">
                  Chung, Lahore
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Strategic Tech Hub, Punjab, Pakistan
                </p>
              </div>
            </motion.div>

            {/* Timezone Tile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-[2.5rem] flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-black uppercase text-accent tracking-widest block mb-1">
                  Current Sync
                </span>
                <div className="text-4xl font-black text-foreground">
                  GMT +5
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </div>
            </motion.div>

            {/* Social Connect Tile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-[2.5rem] grid grid-cols-3 gap-4"
            >
              {[
                { icon: <Github />, label: "GH" },
                { icon: <Linkedin />, label: "IN" },
                { icon: <Twitter />, label: "TW" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-accent group-hover:text-black transition-all">
                    {s.icon}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Full-Width Structural Map Section */}
      <section className="relative w-full h-[600px] border-y border-border/50">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none z-10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="grayscale invert opacity-30 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000"
        ></iframe>

        {/* Map UI Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="glass p-10 rounded-[3rem] border border-accent/40 shadow-3xl text-center space-y-4 max-w-sm pointer-events-auto">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-accent animate-spin-slow" />
            </div>
            <h4 className="text-2xl font-black text-foreground">
              Global Operations
            </h4>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              Operating from Lahore, reaching the world. No project is too
              distant.
            </p>
            <div className="pt-4">
              <button className="px-6 py-2 rounded-full border border-accent/30 text-accent text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-black transition-all">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Success Metrics Section */}
      <div className="py-32">
        <SectionWrapper
          title="Success Metrics"
          subtitle="Quantifiable Performance"
        >
          <ProfessionalHighlights />
        </SectionWrapper>
      </div>
    </div>
  );
}
