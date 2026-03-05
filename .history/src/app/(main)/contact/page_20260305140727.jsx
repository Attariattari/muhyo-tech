"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import { Sparkles, MapPin, Globe, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-0 overflow-hidden bg-background">
      {/* Cinematic Hero Header */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4">
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent)] opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            <span>Ready for the next big challenge</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-none">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
              Touch.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's turn your ambitious ideas into
            high-performance digital solutions.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12 flex justify-center"
          >
            <div className="w-10 h-16 rounded-full border-2 border-muted flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <div className="relative z-10 -mt-12 pb-24">
        <Contact />
      </div>

      {/* Global Location Section */}
      <section className="relative py-24 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-[0.2em] text-xs">
                  <Globe className="w-4 h-4" />
                  <span>Global Operations</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  Location is <br />
                  No Barrier.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Operating from the heart of Lahore, I provide world-class
                  digital services to clients across Europe, USA, and beyond.
                  Efficiency and quality are my only borders.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-2xl font-black text-foreground">
                    GMT +5
                  </div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest transition-colors group-hover:text-accent">
                    Current Timezone
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-foreground">
                    100%
                  </div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest transition-colors group-hover:text-accent">
                    Remote Ready
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-all duration-700" />
              <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-background/50 backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full grayscale-[0.8] hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
                ></iframe>
                <div className="absolute top-6 left-6 glass px-6 py-4 rounded-3xl pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-accent/10">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-black uppercase text-foreground">
                        Chung, Lahore
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground">
                        Punjab, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <div className="py-24">
        <SectionWrapper title="Success Metrics" subtitle="Why Work With Me">
          <ProfessionalHighlights />
        </SectionWrapper>
      </div>
    </div>
  );
}
