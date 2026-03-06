"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Award,
  Database,
  ChartBar,
  Cloud,
  ArrowRight,
  Monitor,
  Code2,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "System Architecture",
    desc: "Designing high-concurrency, distributed systems for global scalability and mission-critical reliability.",
    tag: "Scalability",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    desc: "Implementing zero-trust architecture and military-grade encryption protocols for data sovereignty.",
    tag: "Security",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Code2,
    title: "Full-Stack Velocity",
    desc: "Rapid development of enterprise-grade applications with modern typesafe stacks and optimized delivery pipelines.",
    tag: "Engineering",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    desc: "Expertise in Kubernetes, serverless architectures, and infrastructure-as-code for fluid modernization.",
    tag: "Cloud",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: ChartBar,
    title: "Runtime Optimization",
    desc: "Eliminating bottlenecks with deep performance profiling, sub-second latency, and horizontal scaling.",
    tag: "Performance",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function ProfessionalHighlights() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12 group/slider">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-1000" />

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-24 !px-4"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index} className="h-auto pb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full flex flex-col"
            >
              <div
                className={`flex-1 relative p-10 bg-card/30 backdrop-blur-3xl border ${item.border} rounded-[3rem] overflow-hidden group hover:bg-card/50 hover:border-accent/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]`}
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] -z-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700">
                  <item.icon className="w-40 h-40" />
                </div>
                <div
                  className={`absolute top-0 left-0 w-32 h-32 ${item.bg} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-12">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black tracking-tighter text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-accent transition-all duration-500">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-accent/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Learn Methodology
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--accent) !important;
          opacity: 0.1 !important;
          height: 8px !important;
          width: 8px !important;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 32px !important;
          border-radius: 6px !important;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
      `}</style>
    </div>
  );
}
