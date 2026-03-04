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
      <div className="relative aspect-video rounded-2xl bg-card/60 overflow-hidden border border-border/10 mb-8 group-hover:shadow-3xl transition-all duration-500">
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-6">
          <button className="p-4 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform shadow-xl">
            <Link2 size={20} className="icon-scale" />
          </button>
          <button className="p-4 rounded-full bg-slate-900 text-white hover:scale-110 transition-transform shadow-xl">
            <Github size={20} className="icon-scale" />
          </button>
        </div>
        <img
          src={`https://images.unsplash.com/photo-${index === 0 ? "1498050108023-c5249f4df085" : "1461749280684-dccba630e2f6"}?auto=format&fit=crop&q=80&w=800`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-small font-black uppercase text-accent tracking-widest border border-accent/20">
            {project.purpose}
          </span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="card-title mb-4 text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mb-8 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-small font-bold px-3 py-1 rounded-lg bg-secondary/5 border border-border/50 text-foreground tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          variant="secondary"
          className="w-full glass"
          icon={ExternalLink}
          onClick={() => {}}
        >
          View Case Study
        </Button>
      </div>
    </Card>
  </motion.div>
);

export default function Projects({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper id="projects" title="Featured Work" subtitle="My Portfolio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      <div className="mt-20 text-center">
        <Button variant="outline" className="px-12 py-5 border-border/50">
          Browse All Projects
        </Button>
      </div>
    </SectionWrapper>
  );
}
