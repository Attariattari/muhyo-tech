"use client";

import React from "react";
import Contact from "@/components/Contact";

/**
 * Main Contact Page
 * Serves as a high-end wrapper for the Contact component,
 * providing page-level layout, depth, and supplemental trust sections.
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-floating" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-floating [animation-delay:3s]" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto pt-20 pb-20 relative z-10">
        {/* 
          The Contact component contains the core requirements:
          Hero, Info Cards, Form, Map, and Social Links.
        */}
        <Contact />
      </main>

      {/* Floating Indicators */}
      <div className="fixed left-8 bottom-12 hidden lg:flex flex-col gap-6 z-50">
        <div className="w-[1px] h-32 bg-gradient-to-t from-accent/40 to-transparent" />
        <p className="[writing-mode:vertical-rl] text-[10px] uppercase font-black tracking-[0.6em] text-muted-foreground/30 select-none">
          ESTABLISHED 2024
        </p>
      </div>

      {/* Side Scroll / Status Tracker */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 z-50">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i === 0
                ? "bg-accent scale-150 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                : "bg-border opacity-50"
            } transition-all duration-700`}
          />
        ))}
      </div>
    </div>
  );
}
