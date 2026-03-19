"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/components/Services";
import { portfolioData } from "@/lib/data";
import { SectionWrapper, Card, Button } from "@/components/ui";
import { Zap, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceSlider = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 5000; // 5 seconds
    const step = 100; // update progress every 100ms

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
      setProgress(0);
    }, interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (interval / step);
      });
    }, step);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [services.length]);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-square max-w-[600px] mx-auto group">
      {/* Decorative Outer Glow */}
      <div className="absolute inset-0 bg-accent/20 blur-[40px] rounded-full scale-90 animate-pulse -z-10" />

      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10 bg-background">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image with Ken Burns Effect */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${services[currentIndex].banner})`,
              }}
            >
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 pointer-events-auto"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Service {currentIndex + 1}
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
                  {services[currentIndex].title}
                </h3>

                <p className="text-white/70 text-sm md:text-base mb-8 line-clamp-2 italic font-medium max-w-md border-l-2 border-accent/50 pl-4">
                  "{services[currentIndex].description}"
                </p>

                <Link href={`/services/${services[currentIndex].slug}`}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] text-[10px] md:text-xs bg-white/5 w-fit px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    Experience details <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Modern Progress Indicators */}
        <div className="absolute top-10 right-10 flex flex-col gap-3">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setProgress(0);
              }}
              className="group relative h-12 w-1 flex items-center justify-center cursor-pointer"
            >
              <div className="h-full w-full bg-white/20 rounded-full overflow-hidden transition-all group-hover:bg-white/40">
                {idx === currentIndex && (
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: `${progress}%` }}
                    className="absolute inset-0 bg-accent"
                  />
                )}
              </div>
              {/* Tooltip on hover */}
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-[10px] font-black text-white uppercase tracking-widest bg-black/80 px-2 py-1 rounded border border-white/10 scale-90 group-hover:scale-100 origin-right transition-transform">
                {services[idx].title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const { services, serviceFeatures, serviceProcess } = portfolioData;

  return (
    <div className=" min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-4 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[80px] -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[80px] -ml-48 -mb-48 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <h4 className="text-accent text-sm font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent opacity-50"></span>
                Expert Solutions
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                Transforming Ideas <br />
                Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent bg-[size:300%_300%] animate-gradient">
                  Digital Excellence
                </span>
              </h1>
              <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-10">
                I provide high-end web development and design services tailored
                to your specific business needs. My focus is on quality,
                performance, and delivering real results that help you scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Services <ArrowRight className="w-5 h-5 inline" />
                </Button>
                <Link href="/contact">
                  <Button variant="outline">Book a Call</Button>
                </Link>
              </div>

              {/* Stats/Badges */}
              <div className="mt-12 flex items-center gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-black text-foreground">3+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    Years Exp
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-border/50"></div>
                <div>
                  <div className="text-3xl font-black text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    Projects
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-border/50"></div>
                <div>
                  <div className="text-3xl font-black text-foreground">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    Success
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Professional Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <ServiceSlider services={services} />

              {/* Decorative Card Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-md p-6 rounded-3xl border border-border/50 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest opacity-60">
                      Uptime
                    </div>
                    <div className="text-xl font-black text-green-500">
                      99.9% Reliable
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-md p-6 rounded-3xl border border-border/50 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest opacity-60">
                      Performance
                    </div>
                    <div className="text-xl font-black text-accent">
                      High-End
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services data={services} />

      {/* Why Choose Me Section */}
      <SectionWrapper
        title="What You Get"
        subtitle="The Advantage"
        className="bg-secondary/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* My Process Section */}
      <SectionWrapper title="How I Work" subtitle="The Process">
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-border/30 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center text-accent mx-auto mb-6 relative z-10 shadow-xl shadow-accent/10 font-black text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-widest">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{step.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="pb-32">
        <Card className="p-12 md:p-20 text-center relative overflow-hidden border-accent/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tighter">
              Ready to build <br />
              something professional?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg italic">
              "Let's work together to create a website that actually helps your
              business grow."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full">Start Your Project</Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </Card>
      </SectionWrapper>
    </div>
  );
}
