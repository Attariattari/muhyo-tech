"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Palette,
  Server,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { SectionWrapper, Card } from "./ui";

const icons = {
  1: Layout,
  2: Palette,
  3: Server,
};

const ServiceCard = ({ service, index }) => {
  const Icon = icons[service.id] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card className="h-full border border-border/40 group hover:border-accent/40 transition-all duration-500 flex flex-col p-12 relative overflow-hidden">
        {/* Backdrop Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 blur-[60px] group-hover:bg-accent/10 transition-colors" />

        <div className="w-20 h-20 rounded-[1.75rem] bg-accent/5 border border-accent/20 flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-xl group-hover:shadow-accent/20">
          <Icon size={32} />
        </div>

        <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight italic">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 italic font-light opacity-80">
          {service.description}
        </p>

        <div className="space-y-8 mb-12 flex-grow">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-accent" />
              <span className="text-[10px] font-black uppercase text-accent tracking-[0.3em]">
                Problem Solved
              </span>
            </div>
            <p className="text-xs text-muted-foreground italic pl-5 border-l border-accent/20 py-1">
              "{service.problemSolved}"
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em]">
                Core Benefits
              </span>
            </div>
            <ul className="flex flex-wrap gap-3 pt-1 pl-5">
              {service.benefits.map((b, i) => (
                <li
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border/50 text-[10px] font-black tracking-widest text-muted-foreground uppercase"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent hover:opacity-80 transition-all group/btn italic">
          Specifications{" "}
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-3 transition-transform"
          />
        </button>
      </Card>
    </motion.div>
  );
};

export default function Services({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper
      id="services"
      title="TECHNICAL ARCHITECTURE"
      subtitle="Strategic Services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {data.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
