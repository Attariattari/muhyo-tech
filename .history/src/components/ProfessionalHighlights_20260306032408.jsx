"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Award,
  Database,
  ChartBar,
  Cloud,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "System Architecture",
    desc: "Designing highly-available, distributed system architectures for complex enterprise requirements and global scale.",
    color: "text-blue-400",
    bg: "bg-blue-400/5",
  },
  {
    icon: ShieldCheck,
    title: "Security Protocols",
    desc: "Implementing rigorous security benchmarks and data sovereignty protocols to ensure mission-critical integrity.",
    color: "text-accent",
    bg: "bg-accent/5",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Leveraging advanced cloud-native technologies to build resilient, auto-scaling, and cost-effective infrastructures.",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    icon: ChartBar,
    title: "Performance Metrics",
    desc: "Obsessive focus on sub-second response times, low-latency data flow, and high-throughput reliability.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
];

export default function ProfessionalHighlights() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-20"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full p-12 bg-card/20 border border-border/60 rounded-[3rem] group hover:border-accent hover:bg-card/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] -z-10 group-hover:scale-110 transition-transform">
                  <item.icon className="w-32 h-32" />
                </div>

                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-10 group-hover:translate-x-2 transition-transform duration-500`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-bold uppercase tracking-widest opacity-60">
                    Engineering Metric
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--accent);
          opacity: 0.1;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 4px;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
