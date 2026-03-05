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
    title: "Premium Engineering",
    desc: "Every line of code is written with precision, ensuring your application is scalable, maintainable, and built for performance.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Relationship",
    desc: "Transparency is the foundation of my work. You'll get regular updates and honest feedback throughout our collaboration.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    desc: "Speed is critical. I build lightning-fast digital experiences that keep your users engaged and improve your SEO rankings.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MessageSquare,
    title: "Fluid Communication",
    desc: "I translate complex technical jargon into clear, actionable business insights, making sure we're always on the same page.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Target,
    title: "Strategic Results",
    desc: "I don't just build features; I build solutions that drive real business impact and help you achieve your specific goals.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Rocket,
    title: "Future-Ready Vision",
    desc: "I stay ahead of the curve, utilizing the latest technologies to ensure your project remains relevant in the rapidly evolving digital landscape.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

export default function ProfessionalHighlights() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full p-8 glass rounded-3xl border border-border/10 flex flex-col items-center text-center group hover:border-accent/30 transition-all duration-500 bg-accent/5 backdrop-blur-xl">
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-accent/20`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
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
