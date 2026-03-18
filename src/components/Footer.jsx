"use client";

import Link from "next/link";
import {
  Mail,
  ArrowUp,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/50 py-32 px-6 lg:px-24 overflow-hidden mt-20">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="group flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-foreground italic tracking-tighter uppercase leading-none">
                  Muhyo
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">
                    Tech
                  </span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mt-2">
                  Modern Digital Studio
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md italic font-light">
              Creating high-quality websites and beautiful designs for
              businesses worldwide. Built with care, modern style, and fast
              results.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">
                  v4.0.2 Live Site
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">
                  Secure & Safe
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8 lg:pl-10">
            <h4 className="text-foreground font-black uppercase text-[10px] tracking-[0.4em] italic opacity-40">
              Quick Links
            </h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em]">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-foreground font-black uppercase text-[10px] tracking-[0.4em] italic opacity-40">
              Connect with Me
            </h4>
            <div className="w-full">
              <SocialLinks 
                buttonClassName="w-14 h-14 rounded-2xl glass border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-500 group relative shadow-2xl"
                iconSize="w-6 h-6 group-hover:scale-110 transition-transform" 
              />
            </div>
            <div className="p-6 rounded-3xl bg-muted/20 border border-border italic text-[11px] text-muted-foreground leading-loose">
              Available for high-stakes technical consultations and
              international architectural projects.
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50">
              &copy; {new Date().getFullYear()} MUHYO TECH. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-accent opacity-60 italic">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-accent hover:opacity-80 group transition-all"
          >
            <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </div>
            Scroll Up
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
