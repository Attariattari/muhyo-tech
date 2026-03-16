"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Github,
  ExternalLink,
  Code,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { SectionWrapper, Card } from "./ui";
import Link from "next/link";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    className="h-full group relative"
  >
    {/* Subtle Ambient Glow on Hover */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/20 rounded-[1.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

    <div className="relative h-full bg-card backdrop-blur-3xl border border-border/50 rounded-[1.5rem] overflow-hidden flex flex-col transition-all duration-500 group-hover:translate-y-[-10px] group-hover:border-accent/50 shadow-2xl">
      {/* Project Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/50 bg-muted/20">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        {/* Hover ActionsOverlay */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="p-4 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform shadow-lg shadow-accent/20"
            >
              <Link2 className="w-5 h-5 font-black" />
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="p-4 rounded-full bg-background text-foreground border border-border hover:scale-110 hover:bg-muted transition-transform shadow-lg"
            >
              <Github className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Purpose Tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 rounded-lg bg-background/80 backdrop-blur-xl border border-border/50 text-[8px] font-black uppercase tracking-[0.3em] text-foreground shadow-xl">
            {project.purpose}
          </span>
        </div>
      </div>

      {/* Content Specs */}
      <div className="p-6 sm:p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-3 sm:gap-4 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 mb-6 sm:mb-8">
          <div className="w-8 h-[2px] bg-accent/40 rounded-full" />
          <span>{project.category || "Case Study"}</span>
        </div>

        <Link
          href={`/projects/${project.slug || project.id}`}
          className="block group/title mb-auto z-20"
        >
          <h3 className="text-2xl md:text-3xl font-black text-card-foreground group-hover/title:text-accent transition-colors leading-[1.1] tracking-tighter mb-6 uppercase italic">
            {project.title}
          </h3>
          <p className="text-muted-foreground/80 text-sm leading-relaxed line-clamp-3 font-medium italic opacity-80 border-l-2 border-accent/10 pl-6">
            "{project.description}"
          </p>
        </Link>

        {/* Tech Stack */}
        <div className="mt-8 mb-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[8px] font-black px-3 py-1.5 rounded-md bg-accent/5 border border-accent/10 text-foreground/80 tracking-widest uppercase shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Explorer */}
        <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-bold text-muted-foreground/60 uppercase tracking-widest">
              View Project
            </span>
            <span className="text-[11px] font-black text-card-foreground/90 uppercase tracking-widest">
              Case Study
            </span>
          </div>

          <Link
            href={`/projects/${project.slug || project.id}`}
            className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-card-foreground group/explore relative z-20"
          >
            <span className="opacity-60 group-hover/explore:opacity-100 transition-opacity">
              Explore
            </span>
            <div className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center transition-all group-hover/explore:bg-accent group-hover/explore:border-accent group-hover/explore:text-accent-foreground group-hover/explore:scale-110 shadow-xl">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Projects({ data, showViewAll = false }) {
  if (!data) return null;

  const displayData = showViewAll ? data.slice(0, 4) : data;

  return (
    <SectionWrapper id="projects" title="Featured Work" subtitle="My Portfolio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {displayData.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {showViewAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-accent text-accent-foreground font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects <Code className="w-4 h-4" />
            </span>
            <div className="absolute top-0 -right-full w-full h-full bg-foreground/10 group-hover:right-0 transition-all duration-300" />
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
          </Link>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
