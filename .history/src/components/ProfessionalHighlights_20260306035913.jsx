"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Award,
  Database,
  ChartBar,
  Cloud,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "System Architecture",
    metric: "99.99% Uptime",
    desc: "Architecting distributed, high-availability systems engineered for global scale and fault-tolerant operations.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Security Protocols",
    metric: "Zero-Trust Mesh",
    desc: "Rigorous security integration with end-to-end encryption and mission-critical data sovereignty standards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    metric: "Kubernetes Ready",
    desc: "Advanced cloud-agnostic infrastructures leveraging auto-scaling clusters for seamless workload portability.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: ChartBar,
    title: "Performance Optimization",
    metric: "<50ms Latency",
    desc: "Obsessive focus on high-throughput data streams and sub-second response times for elite user experiences.",
    color: "from-orange-500 to-amber-400",
  },
];

function Card({ item, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative flex flex-col justify-between h-[380px] p-8 glass-dark rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
    >
      {/* Background Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, var(--accent), transparent 40%)`,
          ),
          opacity: 0.1,
        }}
      />

      <div className="relative z-10">
        <div
          className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-500`}
        >
          <item.icon className="w-6 h-6 text-white" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">
              {item.metric}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-6 border-t border-white/5">
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-accent transition-colors">
          Discovery Protocol{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decorative background icon */}
      <item.icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500" />
    </motion.div>
  );
}

export default function ProfessionalHighlights() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#020617]">
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <Zap className="w-3 h-3 fill-accent" /> Technical Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Engineering <span className="text-accent">Pillars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed font-medium opacity-80"
          >
            Architecting the future through precision engineering and
            mission-critical reliability standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
