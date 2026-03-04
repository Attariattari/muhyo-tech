"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui";
import { Cpu, Globe, Database, PenTool, Layout, Terminal } from "lucide-react";

const icons = {
  Frontend: Layout,
  Backend: Database,
  Mobile: Globe,
  Cloud: Terminal,
  "UI/UX": PenTool,
  Core: Cpu,
};

const SkillCard = ({ name, level, category, index }) => {
  const Icon = icons[category] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8 rounded-3xl bg-card/40 border border-border/50 hover:border-accent/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
            <Icon size={24} />
          </div>
          <span className="text-[10px] font-black uppercase text-accent/40 tracking-[0.2em]">
            Skill Level: {level}%
          </span>
        </div>

        <h3 className="text-xl font-black text-foreground mb-4 uppercase italic tracking-tighter">
          {name}
        </h3>

        <div className="space-y-4">
          {/* High-End Progress Meter */}
          <div className="h-1.5 w-full bg-muted/20 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-accent to-blue-500 relative"
            >
              <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-sm skew-x-12 animate-shimmer" />
            </motion.div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              {category} Specialized
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full ${i < level / 20 ? "bg-accent" : "bg-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper
      id="skills"
      title="Architecture & Tools"
      subtitle="Technical Stack"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
