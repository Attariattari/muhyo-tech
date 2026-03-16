"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  Target,
  ChevronRight,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";

const Portfolio = ({ projects }) => {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    [projects],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = projects.slice(0, 3); // Changed from slice(0, 3) to use all projects

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

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
    <div className="relative overflow-hidden ">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-12 px-6 overflow-hidden min-h-[95vh] flex items-center">
        {/* Advanced Background Gradients */}
        <div className="absolute z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[160px] rounded-full opacity-40" />
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full opacity-30" />
          {/* Subtle Grid Pattern */}
          <div className="absolute bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* LEFT SIDE: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Top Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-accent/40" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">
                  Portfolio / Selected Work
                </span>
              </div>

              {/* Impactful Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-[ -0.04em] mb-10">
                Engineering <br />
                <span className="text-accent underline decoration-accent/10 underline-offset-[12px]">
                  Modern Digital
                </span>{" "}
                <br />
                Products.
              </h1>

              {/* Refined Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl font-medium opacity-90">
                A showcase of high-performance web applications, scalable SaaS
                architectures, and user-centric digital experiences built with
                mathematical precision and creative intent.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={scrollToProjects}
                  className="px-10 py-5 bg-accent text-accent-foreground font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center gap-3 group"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <Link href="/contact">
                  <button className="px-10 py-5 bg-card/50 backdrop-blur-md border border-border/80 text-foreground font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-muted/80 transition-all">
                    Start a Project
                  </button>
                </Link>
              </div>

              {/* Floating Social/Trust Badges (Subtle) */}
              <div className="mt-16 flex items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Trusted By
                  </span>
                  <div className="flex gap-4">
                    <span className="text-sm font-bold">TechCorp</span>
                    <span className="text-sm font-bold">SaaSFlow</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Elevated Visual Showcase */}
            <div
              className="relative h-[600px] hidden lg:flex items-center justify-center"
              style={{ perspective: "2000px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {featuredProjects.map((project, idx) => {
                  const position =
                    (idx - currentSlide + featuredProjects.length) %
                    featuredProjects.length;
                  const isActive = position === 0;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 200, rotateY: 30 }}
                      animate={{
                        opacity: isActive ? 1 : 0.4 / (position + 1),
                        x: position * 45,
                        y: position * -25,
                        z: position * -100,
                        rotateY: -20 + position * 5,
                        rotateX: position * 2,
                        scale: 1 - position * 0.05,
                        zIndex: 10 - position,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                        mass: 1.2,
                      }}
                      className={`absolute w-[500px] h-[320px] rounded-[2.5rem] overflow-hidden border bg-card shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all cursor-pointer ${
                        isActive
                          ? "border-accent/50 ring-1 ring-accent/20"
                          : "border-border/40"
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Browser Frame Mockup Effect */}
                      <div className="absolute top-0 inset-x-0 h-10 bg-muted/20 backdrop-blur-xl border-b border-border/10 flex items-center px-6 gap-2 z-20">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/20" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                          <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        </div>
                        <div className="flex-1" />
                        <div className="w-24 h-4 rounded-md bg-white/5 border border-white/5" />
                        <div className="flex-1" />
                      </div>

                      <div className="relative w-full h-full pt-10">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-all duration-[2s] ${
                            isActive
                              ? "grayscale-0 scale-100"
                              : "grayscale scale-110 opacity-50"
                          }`}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                        {/* Card Info Overlay */}
                        <div
                          className={`absolute inset-0 p-10 flex flex-col justify-end transition-opacity duration-700 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white tracking-tight leading-none uppercase italic">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-30" />
                    </motion.div>
                  );
                })}

                {/* Decorative Elements for depth */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Grid: Clean & Compact */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Minimal Section Header */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-accent/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  Featured Projects
                </span>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-foreground uppercase italic">
                Engineering <span className="text-accent">Showcase</span>
              </h2>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={scrollToProjects}
              className="px-6 py-3 bg-card/40 backdrop-blur-xl border border-border/50 text-foreground font-black uppercase text-[9px] tracking-[0.3em] rounded-xl hover:bg-accent hover:text-accent-foreground transition-all flex items-center gap-2 group"
            >
              View Full Gallery
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Clean 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Modern Project Card */}
                <div
                  className="h-full bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:border-accent/30 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top: Image Area */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Bottom: Content Area */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-accent/5 border border-accent/10 text-[8px] font-bold text-accent uppercase tracking-widest"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors leading-tight uppercase italic">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-2 mb-8 font-medium italic opacity-80">
                      "{project.description}"
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                        View Details
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selected Projects Grid: Enhanced for Consistency */}
      {/* 4. Selected Projects Grid: Re-designed as a Dynamic exploration Tree */}
      <section
        id="projects-grid"
        className="py-12 md:py-24 px-6 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-accent/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                  Archived Excellence
                </span>
                <div className="h-[1px] w-8 bg-accent/40" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic underline decoration-accent/10 underline-offset-8">
                Selected Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6 font-medium italic opacity-80">
                A legacy of digital precision—exploring the intersections of
                scalable architecture and impactful user experience.
              </p>
            </motion.div>
          </div>

          {/* Category Filter - Premium Switcher */}
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border overflow-hidden group ${
                  activeCategory === cat
                    ? "text-accent-foreground border-accent z-10"
                    : "bg-card/30 text-muted-foreground border-border/50 hover:border-accent/40"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-accent -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform -z-0" />
              </button>
            ))}
          </div>

          {/* Project Tree Structure */}
          <div className="relative group/tree-main">
            {/* Central Vertical Trunk */}
            <div className="absolute left-[24px] md:left-[52px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0 lg:-translate-x-1/2 z-0" />
            <div className="absolute left-[24px] md:left-[52px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-accent/10 blur-[3px] lg:-translate-x-1/2 z-0 hidden lg:block" />

            <div className="flex flex-col gap-32 md:gap-40 relative z-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const isReversed = index % 2 !== 0;

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`relative flex flex-col lg:flex-row items-center justify-between w-full pl-16 md:pl-32 lg:pl-0 group`}
                    >
                      {/* Interactive Connector Node */}
                      <div className="absolute left-[13px] md:left-[41px] lg:left-1/2 top-10 lg:top-1/2 w-8 h-8 rounded-xl bg-card border-2 border-accent/30 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center justify-center z-20 transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:scale-110 shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]">
                        <div className="w-2 h-2 rounded-full bg-accent group-hover:animate-ping" />
                      </div>

                      {/* Animated Connector Path (Desktop Only) */}
                      <div
                        className={`hidden lg:block absolute top-1/2 ${
                          isReversed
                            ? "left-[calc(50%+4rem)]"
                            : "right-[calc(50%+4rem)]"
                        } w-[4rem] h-[2px] bg-gradient-to-r ${
                          isReversed
                            ? "from-accent via-accent/50 to-transparent"
                            : "from-transparent via-accent/50 to-accent"
                        } -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      />

                      {/* Content Side */}
                      <div
                        className={`w-full lg:w-[calc(50%-6rem)] flex flex-col gap-6 ${
                          isReversed
                            ? "lg:order-2 text-left"
                            : "lg:order-1 lg:text-right text-left"
                        } relative z-10`}
                      >
                        <div
                          className={`flex flex-col ${
                            isReversed
                              ? "items-start"
                              : "lg:items-end items-start"
                          }`}
                        >
                          <span className="px-4 py-1.5 bg-accent/5 rounded-full border border-accent/10 text-[9px] font-black uppercase tracking-[0.3em] text-accent/60 mb-5 group-hover:text-accent transition-colors">
                            {project.category}
                          </span>
                          <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-none mb-6 group-hover:text-accent transition-colors uppercase">
                            {project.title}
                          </h3>
                          <p
                            className={`text-muted-foreground text-sm md:text-lg leading-relaxed font-medium italic mb-10 max-w-lg ${
                              isReversed ? "" : "lg:ml-auto"
                            }`}
                          >
                            "{project.description}"
                          </p>

                          {/* Tech Minimalist View */}
                          <div
                            className={`flex flex-wrap gap-2 mb-10 ${
                              isReversed ? "" : "lg:justify-end"
                            }`}
                          >
                            {project.techStack.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 rounded-xl bg-card border border-border/50 text-[10px] font-bold text-foreground/60 uppercase tracking-widest hover:border-accent/30 hover:text-foreground transition-all"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Refined Actions */}
                          <div
                            className={`flex items-center gap-8 ${
                              isReversed ? "" : "lg:flex-row-reverse"
                            }`}
                          >
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="group/link flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-foreground hover:text-accent transition-all"
                            >
                              Case Study
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                            </button>
                            <div className="w-px h-6 bg-border/20" />
                            <div className="flex gap-4">
                              <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                              <Github className="w-4 h-4 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image Side: Elevated with 3D feel */}
                      <div
                        className={`w-full lg:w-[calc(50%-6rem)] relative group/img-side ${
                          isReversed ? "lg:order-1" : "lg:order-2"
                        } mt-12 lg:mt-0`}
                      >
                        <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full scale-50 opacity-0 group-hover/img-side:opacity-100 transition-opacity duration-1000" />

                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            rotateX: 2,
                            rotateY: isReversed ? 2 : -2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                          }}
                          className="relative p-2 rounded-[3.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-3xl overflow-hidden shadow-2xl group-hover/img-side:border-accent/40 transition-colors cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="relative rounded-[2.8rem] overflow-hidden aspect-[16/11] w-full">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="w-full h-full object-cover transform transition-all duration-1000 group-hover/img-side:scale-110 group-hover/img-side:rotate-1"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-transparent opacity-80" />

                            {/* Floating Metadata */}
                            <div className="absolute top-8 left-8">
                              <div className="px-4 py-2 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="text-[9px] font-black text-white uppercase tracking-widest">
                                  Production Ready
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Client Results Section */}
      <section className="py-32 px-6 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                label: "Completed Projects",
                value: "50+",
                sub: "Engineering Excellence",
              },
              { label: "Happy Clients", value: "30+", sub: "Global Trust" },
              {
                label: "Performance Inc",
                value: "120%",
                sub: "Average Metric",
              },
              { label: "User Growth", value: "45%+", sub: "Engagement Delta" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-center items-center text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-accent mb-3 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-foreground font-bold uppercase text-[10px] tracking-widest mb-1">
                  {stat.label}
                </span>
                <span className="text-muted-foreground text-[8px] font-medium uppercase tracking-[0.2em]">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. Core Approach Overview Section */}
      <section className="py-24 px-6 border-y border-border/50 bg-card/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              How We Build Modern Digital Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
              We combine architectural integrity with user-centered precision to
              deliver software that scales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Architecture",
                desc: "We build scalable, maintainable systems using clean code principles that stay resilient as you grow.",
                icon: Layers,
                color: "text-blue-500 bg-blue-500/10",
              },
              {
                title: "Performance First",
                desc: "Optimized for speed, SEO, and accessibility to ensure the best possible experience for every user.",
                icon: Zap,
                color: "text-amber-500 bg-amber-500/10",
              },
              {
                title: "User-Centered Design",
                desc: "Strategic UI/UX that aligns with user behavior and business goals to drive measurable impact.",
                icon: Users,
                color: "text-purple-500 bg-purple-500/10",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-border bg-card hover:border-accent/30 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technologies Section */}
      <section className="py-24 px-6 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-4">
              Ecosystem Mastery
            </h2>
            <div className="h-1 w-20 bg-accent/30 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-opacity duration-700">
            {[
              "Next.js",
              "React",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "Stripe",
              "AWS",
              "Framer",
            ].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 group/tech cursor-default"
              >
                <Code className="w-8 h-8 text-foreground/40 group-hover/tech:text-accent transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-accent/20 via-card to-card border border-accent/20 relative overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              Have an idea for your <br /> next{" "}
              <span className="text-accent">digital product?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto italic font-medium opacity-80">
              Let's build a high-performance web platform or SaaS experience
              that helps you reach your targets faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-10 py-5 bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.3em] rounded-2xl shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all hover:-translate-y-1">
                  Start a Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 bg-background border border-border text-foreground font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-muted transition-all">
                  Contact Muhyo Tech
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
