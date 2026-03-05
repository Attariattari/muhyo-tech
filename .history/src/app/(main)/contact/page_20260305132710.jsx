"use client";

import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function ContactPage() {
  const slides = [
    {
      image: "/images/contact/hero-1.png",
      title: "Let's innovate together",
      subtitle: "TRANSFORMING IDEAS INTO REALITY",
      description:
        "I believe the best results come from transparent communication and clear goals.",
    },
    {
      image: "/images/contact/hero-2.png",
      title: "Digital Excellence",
      subtitle: "GLOBAL REACH, LOCAL IMPACT",
      description:
        "Building scalable solutions that drive growth and enhance user experience.",
    },
    {
      image: "/images/contact/hero-3.png",
      title: "Future of Tech",
      subtitle: "STAY AHEAD OF THE CURVE",
      description:
        "Leveraging cutting-edge technologies to solve complex business challenges.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full Slider Hero */}
      <section className="h-[75vh] w-full relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl px-8 text-center text-white">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block"
                    >
                      {slide.subtitle}
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto italic"
                    >
                      "{slide.description}"
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Section */}
      <div className="py-8">
        <Contact />
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
              FAQ
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Common Questions
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                q: "How do you handle project timelines?",
                a: "I work with milestones. We'll define clear deadlines for each phase of the project to ensure we stay on track.",
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes, I provide maintenance and support packages to ensure your application remains updated and secure.",
              },
              {
                q: "What is your typical project cost?",
                a: "Costs vary based on complexity and scope. After our initial chat, I'll provide a detailed proposal with transparent pricing.",
              },
              {
                q: "Which technologies do you specialize in?",
                a: "I specialize in modern web stacks including React, Next.js, Node.js, and cloud infrastructure like AWS/GCP.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-foreground flex items-center gap-3">
                  <span className="text-accent underline decoration-accent/30 tracking-tighter">
                    0{i + 1}.
                  </span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent/10 pl-6 italic">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
