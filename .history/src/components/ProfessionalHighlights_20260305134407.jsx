"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare,
  Target,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Masterful Engineering",
    desc: "Every line of code is a brushstroke. I build scalable, high-performance systems that don't just work—they excel.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Integrity",
    desc: "Trust is earned through transparency. I provide clear timelines, honest feedback, and military-grade reliability.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Zap,
    title: "Elite Optimization",
    desc: "Speed is a feature, not an afterthought. I deliver lightning-fast experiences that rank higher and convert better.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Rocket,
    title: "Future-Ready Vision",
    desc: "I don't just follow trends; I anticipate them. Your project will be built with tomorrow's standards today.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function ProfessionalHighlights() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-20"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full p-10 glass rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-700 bg-card/30 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div
                  className={`w-20 h-20 rounded-3xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl relative z-10`}
                >
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>

                <h3 className="text-xl font-black mb-4 tracking-tight text-foreground group-hover:text-accent transition-colors relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium relative z-10">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--accent);
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 10px;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
