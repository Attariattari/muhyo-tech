"use client";

import { motion } from "framer-motion";
import { Layout, Palette, Server, ArrowRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className="h-full border border-border/20 flex flex-col"
        icon={Icon}
        title={service.title}
        subtitle={service.description}
      >
        <div className="space-y-6 mt-8 mb-8 flex-grow">
          <div className="flex flex-col gap-2">
            <span className="text-small font-black uppercase text-accent tracking-[0.2em]">
              The Problem
            </span>
            <p className="text-sm italic">"{service.problemSolved}"</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-small font-black uppercase text-secondary tracking-[0.2em]">
              Key Benefits
            </span>
            <ul className="flex flex-wrap gap-2 pt-2">
              {service.benefits.map((b, i) => (
                <li
                  key={i}
                  className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-xs font-bold text-muted-foreground transition-all hover:bg-accent/10 hover:text-accent"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 text-small font-black uppercase tracking-widest text-accent hover:opacity-70 transition-all group">
          Details{" "}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
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
      title="Solutions for Success"
      subtitle="My Services"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
