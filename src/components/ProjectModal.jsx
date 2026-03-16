"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  Github,
} from "lucide-react";

const ProjectModal = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          onClick={() => setSelectedProject(null)}
        />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-6xl max-h-[92vh] bg-card border border-border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 z-[110] w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Left: Content Area (60%) */}
          <div className="w-full md:w-[60%] p-8 md:p-14 overflow-y-auto custom-scrollbar space-y-12">
            {/* Header Section */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                {selectedProject.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Project Overview */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">
                Project Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                A deep dive into the architecture and execution of this{" "}
                {selectedProject.purpose} platform, focused on delivering a
                high-performance solution that aligns with business
                objectives.
              </p>
            </div>

            {/* Challenge & Solution Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-background/50 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Target className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-foreground">The Challenge</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.challenge ||
                    "Navigating a complex legacy infrastructure while aiming for a 2x performance increase without disrupting live users."}
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-background/50 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <Zap className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-foreground">The Solution</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-foreground tracking-tight">
                Technical Ecosystem
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full border border-border bg-muted/30 text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-foreground">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  "Highly Responsive Architecture",
                  "Automated Workflow Integration",
                  "Scalable Cloud Backend",
                  "Real-time Data Visualization",
                  "Performance Optimized Assets",
                  "Secure OAuth Integration",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20 space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <TrendingUp className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-widest">
                  Results & Impact
                </h4>
              </div>
              <p className="text-xl font-medium text-foreground leading-relaxed">
                "{selectedProject.impact}"
              </p>
              <div className="flex gap-8 pt-2">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">40%+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-mono">
                    Performance Boost
                  </p>
                </div>
                <div className="space-y-1 border-l border-border pl-8">
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-mono">
                    Uptime Reliability
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 pb-2">
              <button className="px-8 py-3.5 bg-accent text-accent-foreground font-bold rounded-lg flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-accent/20">
                Live Project <ExternalLink className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-border text-foreground font-bold rounded-lg flex items-center gap-2 hover:bg-muted transition-all">
                View Source <Github className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Right: Visual Showcase (40%) */}
          <div className="w-full md:w-[40%] bg-muted/30 border-l border-border relative">
            <div className="sticky top-0 h-full p-8 md:p-10 overflow-y-auto hidden md:block custom-scrollbar space-y-8">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Gallery
                </h4>
                <div className="h-0.5 w-8 bg-accent/30 rounded-full" />
              </div>

              <div className="space-y-8 pb-10">
                <div className="rounded-xl overflow-hidden border border-border shadow-xl group cursor-zoom-in">
                  <img
                    src={selectedProject.thumbnail}
                    alt="Main"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {selectedProject.gallery?.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-border shadow-xl group cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Gallery (Stacked) */}
            <div className="md:hidden p-8 space-y-6">
              <img
                src={selectedProject.thumbnail}
                alt="hero"
                className="w-full rounded-xl border border-border"
              />
              {selectedProject.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="gallery"
                  className="w-full rounded-xl border border-border"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
