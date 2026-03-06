"use client";

import React from "react";
import Contact from "@/components/Contact";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";

/**
 * Main Contact Page
 * Serves as a high-end wrapper for the Contact component,
 * providing page-level layout, depth, and supplemental trust sections.
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
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

        {/* 
          Engineered Trust Section 
          Adding this below the main contact sections to reinforce authority.
        */}
        <section className="mt-40 space-y-20 px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="px-5 py-2 rounded-full bg-accent/5 border border-accent/10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">
              Core Engineering{" "}
              <span className="text-accent italic">Pillars</span>
            </h2>
            <p className="text-muted-foreground max-w-xl font-medium leading-relaxed">
              Our commitment to technical excellence ensures every project we
              undertake is built on a foundation of reliability, security, and
              performance.
            </p>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          <ProfessionalHighlights />
        </section>
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
