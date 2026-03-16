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

  // Auto-slide effect for the hero stack
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProjects.length, currentSlide]); // Added currentSlide to deps so interval resets on manual click

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
      <section className="relative pt-12 pb-32 px-6 overflow-hidden min-h-[95vh] flex items-center">
        {/* Advanced Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[160px] rounded-full opacity-40" />
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full opacity-30" />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
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

      {/* 3. Featured Projects Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Featured Work
              </h2>
              <p className="text-muted-foreground text-lg italic">
                A deep dive into our most impactful engineering feats.
              </p>
            </div>
            <button
              onClick={scrollToProjects}
              className="hidden md:flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all pb-2"
            >
              All Projects <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-32">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center group relative`}
              >
                {/* Connecting Line between items (desktop only) */}
                {idx !== featuredProjects.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 bottom-[-8rem] w-[1px] h-32 bg-gradient-to-b from-border/50 to-transparent -translate-x-1/2" />
                )}

                {/* Image Side */}
                <div
                  className="w-full lg:w-[55%] relative cursor-pointer z-10"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${idx % 2 === 1 ? "from-transparent to-accent/20" : "from-accent/20 to-transparent"} rounded-[3.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700`}
                  />
                  <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-card">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                    {/* Hover Explorer Pill */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                      <div className="px-8 py-4 bg-background/90 backdrop-blur-xl border border-border/50 text-foreground font-black uppercase tracking-[0.3em] text-[10px] rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] scale-90 group-hover:scale-100 transition-all duration-500">
                        Explore Case Study
                      </div>
                    </div>

                    {/* Quick Stat (Bottom Left) */}
                    <div className="absolute bottom-8 left-8 hidden sm:block">
                      <span className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-xl border border-border/50 text-foreground/80 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                        {project.purpose}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[45%] space-y-8 relative z-20">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent/80">
                    <div className="w-12 h-[2px] bg-accent/40 rounded-full" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors leading-[1.1] uppercase italic">
                    {project.title}
                  </h3>

                  <div className="pl-6 border-l-2 border-accent/20 pb-2">
                    <p className="text-muted-foreground/90 text-lg md:text-xl leading-relaxed italic font-medium">
                      "{project.description}"
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-black px-4 py-2 bg-accent/5 border border-accent/10 text-foreground/80 uppercase tracking-widest rounded-lg shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-8 mt-auto border-t border-border/30">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-card-foreground group/explore relative z-20"
                    >
                      <span className="opacity-60 group-hover/explore:opacity-100 transition-opacity">
                        View Full Details
                      </span>
                      <div className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center transition-all group-hover/explore:bg-accent group-hover/explore:border-accent group-hover/explore:text-accent-foreground group-hover/explore:scale-110 shadow-xl">
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selected Projects Grid with Filters */}
      <section id="projects-grid" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            >
              Selected Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              A collection of modern web applications and digital products
              designed for performance, scalability, and user experience.
            </motion.p>
          </div>

          {/* Category Filter Design */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] scale-105"
                    : "bg-card/50 text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-accent -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full">
                    {/* Top Area: Image */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                      {/* Hover Overlay CTAs */}
                      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          <Plus className="w-10 h-10 text-white p-2 rounded-full bg-accent/40 backdrop-blur-md border border-white/20" />
                        </div>
                      </div>
                    </div>

                    {/* Middle Area: Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
                          {project.category}
                        </span>
                        <div className="flex gap-1.5">
                          {project.techStack.slice(0, 2).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-muted text-[9px] font-bold text-foreground/60 uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-8 flex-1 font-medium leading-relaxed">
                        {project.description}
                      </p>

                      {/* Bottom Area: Fixed Buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-border/10">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2.5 bg-accent text-accent-foreground text-xs font-bold rounded-xl transition-all hover:brightness-110 flex items-center justify-center gap-2"
                        >
                          View Case <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <button className="px-4 py-2.5 bg-transparent border border-border text-foreground text-xs font-bold rounded-xl hover:bg-muted transition-all flex items-center justify-center gap-2">
                          Live Demo{" "}
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
