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
    <Card className="p-4 border border-border/10 overflow-hidden group">
      <div className="relative aspect-video rounded-xl bg-card/60 overflow-hidden border border-border/10 mb-6 group-hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
          <button className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform cursor-pointer">
            <Link2 className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform cursor-pointer border border-border">
            <Github className="w-5 h-5" />
          </button>
        </div>
        <img
          src={`https://images.unsplash.com/photo-${index === 0 ? "1498050108023-c5249f4df085" : "1461749280684-dccba630e2f6"}?auto=format&fit=crop&q=80&w=800`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur text-[9px] font-black uppercase text-accent tracking-widest border border-accent/30">
            {project.purpose}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors italic uppercase tracking-tighter">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed italic">
          "{project.description}"
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-bold px-2 py-0.5 rounded bg-muted/50 border border-border text-muted-foreground tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="w-full py-4 rounded-xl border border-accent/20 bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/40 text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 group cursor-pointer">
          Project Intelligence <ExternalLink className="w-4 h-4" />
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
