"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/components/Services";
import { portfolioData } from "@/lib/data";
import { SectionWrapper, Card, Button } from "@/components/ui";
import {
  CheckCircle2,
  Zap,
  Shield,
  Rocket,
  Laptop,
  MessageSquare,
  ArrowRight,
  Monitor,
  Code,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const ServiceSlider = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div className="relative w-full aspect-[16/10] max-w-[520px] mx-auto group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 1.1, x: -50 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear scale-110 group-hover:scale-125"
            style={{ backgroundImage: `url(${services[currentIndex].banner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Service {currentIndex + 1}
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                {services[currentIndex].title}
              </h3>
              <p className="text-white/70 text-sm md:text-base line-clamp-2 italic mb-6">
                "{services[currentIndex].description}"
              </p>

              <Link href={`/services/${services[currentIndex].slug}`}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs"
                >
                  View service details <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-12 right-12 flex gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function ServicesPage() {
  const { services } = portfolioData;

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      description:
        "Optimized for speed to ensure your visitors stay engaged and convert.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description:
        "Built with the latest security standards to protect your data and users.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Fully Responsive",
      description:
        "Your site will look and work perfectly on every device, from mobile to desktop.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "SEO Optimized",
      description:
        "Clean code structure that search engines love, helping you rank higher.",
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description:
        "We start by understanding your goals, audience, and technical requirements.",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      title: "Architecture",
      description:
        "I design the structure and layout to ensure the best possible user flow.",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      title: "Development",
      description:
        "Using the best tools, I build your solution with clean, efficient code.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Launch",
      description:
        "I handle the deployment and fine-tuning to make sure everything is perfect.",
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <div className=" min-h-screen pt-12">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-12 pb-16 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-accent bg-[size:300%_300%] animate-gradient">
                  Digital Excellence
                </span>
              </h1>
              <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-10">
                I provide high-end web development and design services tailored
                to your specific business needs. My focus is on quality,
                performance, and delivering real results that help you scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#services">
                  <Button className="px-10 py-4 shadow-2xl shadow-accent/20">
                    Explore Services{" "}
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-10 py-4">
                    Book a Call
                  </Button>
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
                className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-xl p-6 rounded-3xl border border-border/50 shadow-2xl z-20 hidden md:block"
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
                className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-xl p-6 rounded-3xl border border-border/50 shadow-2xl z-20 hidden md:block"
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
          {features.map((feature, index) => (
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
            {processSteps.map((step, index) => (
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
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32" />

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
              <Link href="/contact">
                <Button className="w-full sm:w-auto px-12 py-5 text-base">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-12 py-5 text-base"
                >
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
