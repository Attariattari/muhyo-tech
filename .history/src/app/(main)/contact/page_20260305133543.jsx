"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="pt-20 space-y-0">
      <div className="relative w-full overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/hero-premium.png"
            alt="Contact Background"
            fill
            className="object-cover opacity-60 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* Hero Content */}
        <SectionWrapper className="relative z-10 !py-0 !mb-0">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h4 className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4 bg-accent/10 px-6 py-2 rounded-full inline-block border border-accent/20">
                Contact Me
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter leading-tight">
                Let's Start a{" "}
                <span className="text-gradient">Conversation</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-10 md:p-14 glass rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl shadow-black/40"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <p className="text-xl md:text-2xl text-foreground font-light italic leading-relaxed relative z-10">
                <span className="text-accent text-4xl font-serif absolute -top-4 -left-2 opacity-50">
                  "
                </span>
                I believe the best results come from transparent communication
                and clear goals. If you have a potential project or just want to
                chat about tech, I'm all ears.
                <span className="text-accent text-4xl font-serif absolute -bottom-8 -right-2 opacity-50">
                  "
                </span>
              </p>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 delay-100" />
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
        <Contact />
      </div>
    </div>
  );
}
