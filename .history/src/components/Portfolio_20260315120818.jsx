"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  ArrowRight,
  X,
  Plus,
  Monitor,
  Smartphone,
  Layout,
  Layers,
  Award,
  TrendingUp,
  Users,
  CheckCircle2,
  ChevronRight,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { SectionWrapper, Card, Button } from "./ui";

const categories = ["All", "Web", "UI/UX", "Mobile", "SaaS"];

const Portfolio = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === activeCategory),
      );
    }
  }, [activeCategory, projects]);

  const scrollToProjects = () => {
    document
      .getElementById("projects-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Portfolio Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6 uppercase tracking-wider"
              >
                Selected Work
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight"
              >
                Projects That Turn <br />
                <span className="text-accent">Ideas Into Scalable</span> <br />
                Digital Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl font-medium"
              >
                We design and engineer high-performance web platforms, SaaS
                products, and modern digital experiences that help growing
                businesses accelerate their impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-5"
              >
                <button
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center gap-2 group"
                >
                  Explore Projects{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all h-full">
                    Start a Project
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Floating stack */}
            <div
              className="relative h-[450px] hidden lg:block"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {projects.slice(0, 3).map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 100,
                      rotate: idx * 5 - 5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1 - idx * 0.05,
                      y: idx * 50 - 25,
                      x: idx * 20,
                      rotate: idx * 10 - 10,
                      zIndex: 3 - idx,
                    }}
                    whileHover={{
                      y: idx * 50 - 50,
                      x: idx * 20 + 20,
                      scale: 1.05 - idx * 0.05,
                      transition: { duration: 0.3 },
                    }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                    className="absolute w-[450px] aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-card backdrop-blur-sm"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <p className="text-white font-bold text-xl mb-1 tracking-tight">
                        {project.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-white/60 text-sm font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Decorative particles/glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick Ribbon */}
      <div className="border-y border-border/50 bg-card/30 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "50+", icon: CheckCircle2 },
              { label: "Global Clients", value: "30+", icon: Globe },
              { label: "Awards Won", value: "12", icon: Award },
              {
                label: "Year-over-Year Growth",
                value: "120%",
                icon: TrendingUp,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start gap-2"
              >
                <div className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <section id="projects-grid" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent shadow-xl shadow-accent/20 scale-105"
                    : "bg-card/40 text-muted-foreground border-border hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group relative p-4 h-full flex flex-col border border-border/50 hover:border-accent/40 shadow-2xl bg-card overflow-hidden">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                      <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-accent rounded-lg text-[9px] font-black uppercase text-accent-foreground tracking-widest italic">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-background/80 backdrop-blur rounded-lg text-[9px] font-black uppercase text-foreground tracking-widest italic border border-border">
                            {project.purpose}
                          </span>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 backdrop-blur-md border border-accent/20">
                          <Plus className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-black text-foreground italic uppercase tracking-tighter mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic opacity-80 line-clamp-2">
                        "{project.description}"
                      </p>

                      <div className="mt-auto pt-6 border-t border-border/10 flex items-center justify-between">
                        <div className="flex gap-2">
                          {project.techStack.slice(0, 3).map((tech, i) => (
                            <div
                              key={i}
                              className="text-[8px] font-black uppercase tracking-widest text-accent/60 italic"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-accent/20"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-24 rounded-[4rem] border border-accent/20 relative overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 flex flex-col items-center gap-10">
              <h2 className="text-4xl md:text-7xl font-black text-foreground italic uppercase tracking-tighter leading-none mb-4">
                Ready to build <br />
                <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-12">
                  the future?
                </span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-2xl font-medium italic opacity-80 leading-relaxed">
                We are currently accepting new strategic partnerships for Spring
                2026. Let's engineer something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <button className="px-12 py-7 bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.4em] rounded-2xl shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-1 cursor-pointer">
                    Start a Consultation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-12 py-7 border-2 border-accent text-accent font-black uppercase text-xs tracking-[0.4em] rounded-2xl hover:bg-accent/10 transition-all cursor-pointer">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl cursor-not-allowed"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[3rem] border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:rotate-90 transition-transform cursor-pointer shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Left: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="flex gap-4 mb-8">
                  <span className="text-accent text-xs font-black uppercase tracking-[0.3em] px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg italic">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground text-xs font-black uppercase tracking-[0.3em] px-3 py-1 border border-border rounded-lg italic">
                    {selectedProject.purpose}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-foreground italic uppercase tracking-tighter leading-tight mb-8">
                  {selectedProject.title}
                </h2>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">
                      The Challenge & Impact
                    </h4>
                    <p className="text-xl font-bold text-foreground italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-2xl">
                      "{selectedProject.impact}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">
                      Technical Deep-Dive
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed italic font-medium">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">
                      Core Ecosystem
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-border hover:border-accent/40 shadow-sm transition-all"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-xs font-black uppercase tracking-widest text-foreground">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 flex gap-6">
                    <button className="flex-1 py-5 bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.4em] rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all cursor-pointer">
                      Live Preview <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:bg-muted transition-colors border border-border cursor-pointer">
                      <Github className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Right: Visuals */}
              <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-card relative group">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Secondary Gallery (Simplified Preview) */}
                <div className="absolute bottom-10 left-10 flex gap-4">
                  {selectedProject.gallery?.map((img, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl hover:border-accent transition-all cursor-pointer group/th"
                    >
                      <img
                        src={img}
                        alt="Gallery"
                        className="w-full h-full object-cover group-hover/th:scale-125 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
