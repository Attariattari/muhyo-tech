"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Card } from "./ui";

const SkillBar = ({ name, level, category, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="mb-10 group"
  >
    <div className="flex justify-between items-end mb-4 px-2">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-black uppercase text-accent tracking-[0.4em] italic opacity-60">
          {category || "Technical Engine"}
        </span>
        <span className="text-lg font-black uppercase text-foreground tracking-tighter italic">
          {name}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">
          Efficiency
        </span>
        <span className="text-xl font-black text-foreground italic">
          {level}%
        </span>
      </div>
    </div>
    <div className="h-2.5 w-full bg-muted/20 rounded-full overflow-hidden border border-border/50 relative shadow-inner">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 0.5 + index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-full bg-gradient-to-r from-blue-600 via-accent to-cyan-400 group-hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] transition-all relative"
      >
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/20 to-transparent" />
      </motion.div>
    </div>
  </motion.div>
);

export default function Skills({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper
      id="skills"
      title="TECHNICAL COMMAND"
      subtitle="The Capability Stack"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-6">
        {data.map((skill, index) => (
          <SkillBar key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
