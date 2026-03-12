"use client";

import { motion } from "framer-motion";
import { Link2, Github, ExternalLink, Code } from "lucide-react";
import { SectionWrapper, Card } from "./ui";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
  >
    <Card className="p-4 border border-border/50 overflow-hidden group shadow-2xl relative bg-card/40 backdrop-blur-sm">
      <div className="relative aspect-video rounded-2xl bg-muted/20 overflow-hidden border border-border/10 mb-6 group-hover:shadow-3xl transition-all duration-700">
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
          <button className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-accent/20">
            <Link2 className="w-5 h-5 font-black" />
          </button>
          <button className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform cursor-pointer border border-border shadow-md">
            <Github className="w-5 h-5" />
          </button>
        </div>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] blur-[1px] group-hover:blur-0 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-lg bg-accent/90 backdrop-blur text-[9px] font-black uppercase text-accent-foreground tracking-widest border border-accent/30 italic shadow-sm">
            {project.purpose}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[2px] bg-accent/40 rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 italic">
            {project.category || "Case Study"}
          </span>
        </div>
        <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-accent transition-colors italic uppercase tracking-tighter leading-none">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-8 line-clamp-2 leading-relaxed italic opacity-80 font-medium">
          "{project.description}"
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-black px-3 py-1.5 rounded-lg bg-muted/40 border border-border/50 text-foreground/70 tracking-widest uppercase italic shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="w-full py-5 rounded-2xl border border-accent/20 bg-accent text-accent-foreground shadow-2xl shadow-accent/20 hover:shadow-accent/40 text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 group cursor-pointer hover:-translate-y-1">
          Explore Intelligence{" "}
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  </motion.div>
);

export default function Projects({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper id="projects" title="Featured Work" subtitle="My Portfolio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <div className="mt-20 text-center">
        <button className="px-10 py-5 rounded-full border border-border text-foreground hover:bg-card transition-all font-black uppercase text-xs tracking-[0.2em]">
          See More Projects
        </button>
      </div>
    </SectionWrapper>
  );
}
