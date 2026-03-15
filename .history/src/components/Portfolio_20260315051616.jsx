"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  Sparkles,
  ChevronRight,
  Globe,
  CheckCircle2,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const categories = ["All", "Web", "UI/UX", "Mobile", "SaaS"];

const Portfolio = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [text] = useTypewriter({
    words: [
      "Digital Experiences",
      "Scalable Architectures",
      "Next-Gen Applications",
      "Enterprise Solutions",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === activeCategory),
      );
    }
  }, [activeCategory, projects]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col relative selection:bg-accent/30 selection:text-accent-foreground items-center">
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-24 flex flex-col">
        {/* --- Hero Section --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Masterpieces
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-accent">
              The Future.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 text-xl md:text-2xl font-medium text-muted-foreground"
          >
            Building <span className="text-foreground">{text}</span>
            <Cursor cursorColor="#3b82f6" />
          </motion.div>
        </div>

        {/* --- Quick Stats --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {[
            { label: "Completed Projects", value: "50+", icon: CheckCircle2 },
            { label: "Global Clients", value: "30+", icon: Globe },
            { label: "Industry Awards", value: "12", icon: Award },
            { label: "Client ROI", value: "120%", icon: TrendingUp },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm shadow-xl hover:border-accent/40 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-accent mb-4" />
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- Filters --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all overflow-hidden group ${
                activeCategory === cat
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
              {activeCategory !== cat && (
                <div className="absolute inset-0 rounded-full border border-border group-hover:border-accent/50 transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* --- Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Box */}
                <div className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-muted/20 ring-1 ring-border/50 group-hover:ring-accent/50 transition-all duration-500 shadow-2xl">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Actions */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 bg-accent/20 backdrop-blur-md text-accent border border-accent/20 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">
                        {project.category}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Project Details below image */}
                <div className="px-2 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest border border-border/50 px-2 py-1 rounded-md text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 3 && (
                      <span className="text-[10px] uppercase tracking-widest border border-border/50 px-2 py-1 rounded-md text-foreground/50">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- CTA Section --- */}
        <div className="mt-40 relative rounded-[3rem] overflow-hidden border border-border/50 bg-card/20 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 px-8 py-24 md:py-32 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
              Ready to create something{" "}
              <span className="text-accent italic">extraordinary?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Let's combine your vision with our engineering expertise. We are
              currently accepting new strategic partnerships.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>

      {/* --- Project Detail Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[101] h-[90vh] md:h-[85vh] bg-card border-t border-border/50 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:px-12 md:py-8 border-b border-border/50 relative shrink-0">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest hidden md:block">
                    {selectedProject.purpose}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 relative">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
                  {/* Left Column (Images) */}
                  <div className="w-full lg:w-3/5 flex flex-col gap-6">
                    <div className="w-full aspect-video rounded-3xl overflow-hidden ring-1 ring-border shadow-2xl bg-muted relative">
                      <img
                        src={selectedProject.thumbnail}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Secondary Gallery */}
                    {selectedProject.gallery &&
                      selectedProject.gallery.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {selectedProject.gallery.map((img, i) => (
                            <div
                              key={i}
                              className="aspect-video rounded-2xl overflow-hidden ring-1 ring-border/50 bg-muted"
                            >
                              <img
                                src={img}
                                alt={`${selectedProject.title} snapshot ${
                                  i + 1
                                }`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Right Column (Details) */}
                  <div className="w-full lg:w-2/5 flex flex-col">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                      {selectedProject.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-10">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-2">
                          The Challenge & Impact
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {selectedProject.impact}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-2">
                          Architecture & Approach
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {selectedProject.details}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-2">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack?.map((tech, i) => (
                            <div
                              key={i}
                              className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-xs font-semibold tracking-wide"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex items-center gap-4 pb-12">
                      <a
                        href="#"
                        className="flex-1 px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold tracking-widest uppercase text-xs text-center flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors shadow-xl shadow-accent/20"
                      >
                        View Live <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-14 h-14 rounded-xl ring-1 ring-border/50 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
