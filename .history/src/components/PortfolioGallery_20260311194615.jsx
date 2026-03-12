"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Globe,
  Layout,
  Smartphone,
  Palette,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";
import { SectionWrapper, Card, Button } from "./ui";

const CATEGORIES = ["All", "Web Development", "UI/UX Design", "Mobile App"];

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-card w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-border shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-[110] p-4 rounded-full bg-background border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer shadow-xl"
        >
          <X size={24} />
        </button>

        <div className="grid lg:grid-cols-2 h-full">
          {/* Media Section */}
          <div className="relative bg-muted/20 p-8 lg:p-12 flex flex-col gap-6 lg:border-r border-border min-h-[400px]">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-border shadow-2xl group flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={project.gallery[currentImage]}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gallery Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? project.gallery.length - 1 : prev - 1,
                    )
                  }
                  className="p-3 rounded-full bg-background/40 backdrop-blur-md border border-white/20 text-white hover:bg-accent transition-all cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === project.gallery.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="p-3 rounded-full bg-background/40 backdrop-blur-md border border-white/20 text-white hover:bg-accent transition-all cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${currentImage === idx ? "border-accent ring-4 ring-accent/20" : "border-border grayscale hover:grayscale-0"}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Impact & Success */}
            <div className="mt-auto glass p-8 rounded-[2rem] border border-accent/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-black text-foreground uppercase tracking-tight italic">
                  Impact Achieved
                </h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium italic">
                "{project.impact}"
              </p>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 lg:p-20 space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {project.category}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase italic tracking-tighter leading-none mb-6">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Problem Solved */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-foreground uppercase tracking-widest italic opacity-40">
                The Challenge
              </h4>
              <p className="text-foreground text-sm font-bold leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-foreground uppercase tracking-widest italic opacity-40">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.techStackDetail.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 p-4 glass-dark border border-border rounded-2xl min-w-[120px]"
                  >
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">
                      {tech.name}
                    </span>
                    <span className="text-foreground/60 text-[9px] font-bold uppercase">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <a href={project.liveLink} target="_blank" className="flex-1">
                <button className="w-full py-5 bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.3em] rounded-2xl shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 group transition-all cursor-pointer">
                  Launch Live Project <ExternalLink size={18} />
                </button>
              </a>
              <a href={project.githubLink} target="_blank" className="flex-1">
                <button className="w-full py-5 border border-border text-foreground font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-card transition-all flex items-center justify-center gap-3 group cursor-pointer">
                  View Repository <Github size={18} />
                </button>
              </a>
            </div>

            {/* CTA */}
            <div className="pt-10 border-t border-border mt-10">
              <Link
                href="/contact"
                className="group flex items-center justify-between text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="text-xs font-black uppercase tracking-widest">
                  Interested in a similar project?
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Let's Talk
                  </span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioGallery = ({ projects }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const [text] = useTypewriter({
    words: [
      "Innovative Solutions",
      "Scalable Web Apps",
      "Cutting-Edge UI/UX Designs",
      "Enterprise Era Architectures",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10" />

      <SectionWrapper id="portfolio">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-32 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
              Active Projects 2026
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black text-foreground tracking-tighter leading-[0.8] uppercase italic">
            My <br />
            <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-20">
              Portfolio
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold text-foreground/40 mt-10">
            Engineering{" "}
            <span className="text-accent underline decoration-accent/30 italic uppercase italic">
              {text}
            </span>
            <Cursor cursorColor="var(--color-accent)" />
          </div>

          <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed italic mt-6">
            Explore a curated selection of our most challenging and impactful
            digital transformations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
                filter === cat
                  ? "bg-accent text-accent-foreground border-accent shadow-xl shadow-accent/20 scale-105"
                  : "bg-card border-border text-muted-foreground hover:border-accent/30 hover:text-foreground cursor-pointer"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative"
              >
                <Card className="p-4 border-border/50 overflow-hidden relative group/card">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-muted/20 border border-border">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 z-20 flex items-center justify-center gap-6">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-5 rounded-full bg-accent text-accent-foreground shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Maximize2 size={24} />
                      </button>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="p-5 rounded-full bg-background border border-border text-foreground hover:bg-accent hover:text-accent-foreground shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>

                    <div className="absolute top-6 right-6 z-10">
                      <span className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-accent/20 text-accent text-[8px] font-black uppercase tracking-widest">
                        {project.purpose}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="text-3xl font-black text-foreground uppercase italic tracking-tighter group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium italic line-clamp-2">
                      "{project.description}"
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-black px-3 py-1 rounded bg-muted/30 border border-border text-foreground/60 tracking-widest uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-8 w-full py-4 border border-accent/10 hover:border-accent hover:bg-accent/5 text-[10px] font-black uppercase tracking-[0.4em] text-accent transition-all rounded-2xl flex items-center justify-center gap-3 cursor-pointer"
                    >
                      Audit Showcase{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <div className="mt-60 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-24 rounded-[4rem] border border-accent/20 overflow-hidden group text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.08]" />
            <div className="absolute -top-[50%] -left-[50%] w-full h-full bg-accent/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-10">
              <h3 className="text-5xl md:text-8xl font-black text-foreground max-w-5xl leading-[0.9] tracking-tighter uppercase italic">
                Ready to build your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent animate-gradient">
                  next project?
                </span>
              </h3>

              <p className="text-muted-foreground text-2xl max-w-3xl font-medium leading-relaxed italic">
                Let's collaborate to transform your vision into an
                industry-leading digital reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full group/btn relative overflow-hidden px-14 py-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-[0_20px_40px_var(--color-accent)] transition-all duration-300 font-black uppercase tracking-[0.2em] rounded-2xl shadow-accent/20 hover:shadow-accent/40 cursor-pointer">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Start Your Journey
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full group/btn border-2 border-accent text-accent hover:bg-accent/10 px-14 py-8 text-base font-black uppercase tracking-[0.2em] transition-all rounded-2xl cursor-pointer">
                    <span className="flex items-center justify-center gap-4">
                      Schedule a meeting
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;
