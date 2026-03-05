"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Palette,
  Server,
  ArrowRight,
  MousePointerClick,
} from "lucide-react";
import { SectionWrapper, Card } from "./ui";
import Link from "next/link";

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
      <Card className="h-full border border-border/20 group hover:border-accent/40 transition-all flex flex-col p-10">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase text-accent tracking-widest whitespace-nowrap">
              The Challenge
            </span>
            <p className="text-xs text-secondary italic">
              "{service.problemSolved}"
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest whitespace-nowrap">
              Your Benefits
            </span>
            <ul className="flex flex-wrap gap-2 pt-2">
              {service.benefits.map((b, i) => (
                <li
                  key={i}
                  className="px-2 py-1 rounded bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-muted-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/services/${service.id}`}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent hover:opacity-80 transition-opacity"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </Card>
    </motion.div>
  );
};

export default function Services({ data, showViewAll = false }) {
  if (!data) return null;

  return (
    <SectionWrapper
      id="services"
      title="How I Can Help You"
      subtitle="My Services"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
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
            href="/services"
            className="group relative px-8 py-4 bg-accent text-accent-foreground font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Services <MousePointerClick className="w-4 h-4" />
            </span>
            <div className="absolute top-0 -right-full w-full h-full bg-foreground/10 group-hover:right-0 transition-all duration-300" />
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
          </Link>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
