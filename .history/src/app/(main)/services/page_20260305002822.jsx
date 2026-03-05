"use client";

import { motion } from "framer-motion";
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
    <div className=" min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-6">
              Expert Solutions
            </h4>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tighter">
              Transforming Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                Digital Excellence
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
              I provide high-end web development and design services tailored to
              your specific business needs. My focus is on quality, performance,
              and delivering real results.
            </p>
          </motion.div>
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
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full  -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full  -ml-32 -mb-32" />

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
