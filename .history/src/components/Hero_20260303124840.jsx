"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Layers,
  Code,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-24 lg:pt-0 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[10px] font-black text-accent uppercase tracking-[0.3em] border-accent/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Senior Engineering Portfolio 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-black text-foreground mb-10 leading-[0.95] tracking-tighter"
        >
          Digital{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent animate-gradient-flow bg-[length:200%_auto]">
            Evolution
          </span>{" "}
          <br />
          <span className="italic font-light opacity-90">Powered by Code.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Architecting high-performance web systems and premium interactive
          experiences with modern design principles and enterprise-grade
          scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
        >
          <Link href="/projects" className="group w-full sm:w-auto">
            <button className="w-full h-20 px-12 rounded-3xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-accent/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group/btn">
              Explore Craft
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
            </button>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto h-20 px-12 rounded-3xl border border-border bg-card/20 backdrop-blur-xl text-foreground font-black uppercase text-xs tracking-[0.3em] hover:bg-card/50 transition-all flex items-center justify-center border-white/5 active:scale-95"
          >
            Start Conversation
          </Link>
        </motion.div>

        {/* Cinematic Stats/Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto border-t border-border pt-16"
        >
          {[
            {
              icon: Layers,
              label: "Scalable Architecture",
              color: "text-accent",
            },
            {
              icon: Terminal,
              label: "Premium Backend",
              color: "text-blue-400",
            },
            { icon: Code, label: "Clean Production", color: "text-purple-400" },
            { icon: Code, label: "Professional UX", color: "text-emerald-400" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 group/feat"
            >
              <div
                className={`p-4 rounded-2xl bg-muted/20 border border-border/50 group-hover/feat:border-accent/40 group-hover/feat:scale-110 transition-all duration-500 ${item.color}`}
              >
                <item.icon size={24} />
              </div>
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-foreground group-hover/feat:text-foreground transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-10 bottom-10 hidden xl:flex flex-col gap-6 text-muted-foreground/30">
        <Github
          size={20}
          className="hover:text-accent transition-colors cursor-pointer"
        />
        <Linkedin
          size={20}
          className="hover:text-accent transition-colors cursor-pointer"
        />
        <Twitter
          size={20}
          className="hover:text-accent transition-colors cursor-pointer"
        />
      </div>

      <div className="absolute right-10 bottom-10 hidden xl:block overflow-hidden h-40 w-px bg-gradient-to-t from-accent to-transparent">
        <motion.div
          animate={{ y: [0, 160] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-8 bg-white"
        />
      </div>
    </section>
  );
}
