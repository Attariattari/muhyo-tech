"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Card } from "./ui";

const SkillBar = ({ name, level, category, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="mb-8 group"
  >
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <span className="text-small font-black uppercase text-foreground tracking-widest">
          {name}
        </span>
        <span className="text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/5 border border-accent/10 uppercase tracking-widest">
          {category}
        </span>
      </div>
      <span className="text-small font-bold text-muted-foreground">
        {level}%
      </span>
    </div>
    <div className="h-3 w-full bg-muted/50 rounded-full overflow-hidden border border-border/10 p-[2px]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.2 + index * 0.05,
        }}
        className="h-full bg-gradient-to-r from-blue-600 via-accent to-cyan-400 rounded-full relative group-hover:brightness-110 transition-all"
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay" />
      </motion.div>
    </div>
  </motion.div>
);

export default function Skills({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper
      id="skills"
      title="Technical Proficiency"
      subtitle="My Skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {data.map((skill, index) => (
          <SkillBar key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
