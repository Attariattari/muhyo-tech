"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Code2,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  Trophy,
  Filter,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const categories = [
  { id: "all", label: "All Works", icon: Layers },
  { id: "Web", label: "Web Apps", icon: Globe },
  { id: "Mobile", label: "Mobile", icon: Smartphone },
  { id: "AI", label: "AI & Data", icon: Cpu },
  { id: "Web3", label: "Blockchain", icon: Code2 },
];

const Portfolio = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [text] = useTypewriter({
    words: [
      "Innovative Solutions",
      "Scalable Web Apps",
      "Cutting-Edge UI/UX Designs",
      "Next-Gen AI Research",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === activeCategory),
      );
    }
  }, [activeCategory, projects]);

  return (
    <div className="min-h-screen bg-transparent pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h4 className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4">
              Featured Work
            </h4>
            <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase italic leading-none">
              My{" "}
              <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-[12px]">
                Portfolio
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-8 h-12">
              <span className="text-xl md:text-3xl font-bold text-muted-foreground uppercase italic tracking-tight">
                Engineering{" "}
                <span className="text-foreground border-b-2 border-accent/20 pb-1">
                  {text}
                </span>
                <Cursor cursorColor="var(--color-accent)" cursorStyle="|" />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-24 z-40 px-6 mb-16">
        <div className="max-w-4xl mx-auto glass p-2 rounded-[2.5rem] border border-border/50 shadow-2xl flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20 scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glass rounded-[2.5rem] border border-border/30 overflow-hidden cursor-pointer hover:border-accent/40 transition-all duration-500 shadow-xl hover:shadow-accent/5 group/card"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full glass border border-accent/20 text-[9px] font-black uppercase text-accent tracking-widest shadow-2xl">
                        {project.purpose}
                      </span>
                    </div>

                    {/* Quick Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity translate-y-4 group-hover/card:translate-y-0 duration-500 z-10">
                      <div className="bg-accent text-accent-foreground px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl flex items-center gap-3">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter transition-colors group-hover/card:text-accent">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 italic font-medium leading-relaxed">
                      "{project.description}"
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-bold text-accent/60 uppercase tracking-widest border-b border-accent/20 pb-0.5"
                        >
                          #{tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[9px] font-bold text-muted-foreground uppercase pb-0.5">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-[4rem] border border-accent/20 relative overflow-hidden text-center group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.05]" />

          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-foreground italic uppercase tracking-tighter leading-[1.1]">
              Ready to engineer your{" "}
              <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-12">
                digital future?
              </span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium tracking-tight">
              We're currently seeking high-impact projects to collaborate on. If
              you're looking for world-class technical expertise, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact">
                <button className="px-12 py-6 bg-accent text-accent-foreground rounded-2xl font-black uppercase text-xs tracking-[0.4em] shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 cursor-pointer">
                  Start a Collaboration
                </button>
              </Link>
              <Link href="/services">
                <button className="px-12 py-6 border-2 border-accent text-accent rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-accent/5 transition-all cursor-pointer">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 lg:p-20 bg-background/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="w-full max-w-6xl h-full glass border border-border shadow-2xl rounded-[3rem] overflow-hidden relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 border-b border-border bg-card/50 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-foreground uppercase italic tracking-tighter">
                      {selectedProject.title}
                    </h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                      Case Study Review
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:bg-muted transition-all cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-16">
                <div className="grid lg:grid-cols-2 gap-16">
                  {/* Image Display */}
                  <div className="space-y-8">
                    <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 group shadow-2xl">
                      <img
                        src={selectedProject.thumbnail}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 glass rounded-3xl border border-border text-center">
                        <div className="text-2xl font-black text-accent mb-1 italic">
                          {selectedProject.role}
                        </div>
                        <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60">
                          My Role
                        </div>
                      </div>
                      <div className="p-6 glass rounded-3xl border border-border text-center">
                        <div className="text-2xl font-black text-foreground mb-1 italic">
                          {selectedProject.impact}
                        </div>
                        <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60">
                          Primary Impact
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Content */}
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-black text-foreground italic uppercase tracking-tighter border-l-4 border-accent pl-6 bg-accent/5 py-4 rounded-r-2xl">
                        Problem & <br /> Solution
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        {selectedProject.details}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                        Engineering Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.techStack.map((tech) => (
                          <div
                            key={tech}
                            className="px-5 py-2.5 glass rounded-xl border border-border text-xs font-bold text-foreground hover:border-accent/50 transition-colors shadow-sm"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                      <a
                        href={selectedProject.links?.live}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-accent text-accent-foreground rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1"
                      >
                        Live Experience <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={selectedProject.links?.github}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-5 glass border border-border text-foreground rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-muted transition-all"
                      >
                        View Blueprint <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Final CTA in Modal */}
                <div className="pt-20 border-t border-border text-center space-y-10">
                  <p className="text-xl font-medium text-muted-foreground italic">
                    Interested in building something similar for your
                    organization?
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                  >
                    <button className="px-10 py-5 bg-foreground text-background dark:bg-foreground dark:text-background rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:opacity-90 transition-all cursor-pointer">
                      Contact Case Architect
                    </button>
                  </Link>
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
