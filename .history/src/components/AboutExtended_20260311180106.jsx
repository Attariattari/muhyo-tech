```javascript
"use client";

import { motion, useInView } from "framer-motion";
import {
  Code2,
  Zap,
  Layout,
  DraftingCompass,
  Lightbulb,
  Users,
  ArrowRight,
  TrendingUp,
  Award,
  CircleDot,
  Globe,
  Cpu,
} from "lucide-react";
import { SectionWrapper, Card, Button } from "./ui";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const StatCounter = ({ value, label, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative flex flex-col items-center p-8 glass rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-500 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2 flex items-baseline gap-1">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
          {count}
        </span>
        <span className="text-accent text-2xl">+</span>
      </div>
      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

export default function AboutExtended() {
  const features = [
    {
      icon: Code2,
      title: "Clean Architecture",
      desc: "High-quality, maintainable, and scalable code that stands the test of time.",
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      desc: "Fast, efficient, and smooth user experience with sub-second load times.",
      gradient: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
    },
    {
      icon: Layout,
      title: "UI/UX Excellence",
      desc: "Interfaces that delight and retain users through intuitive and aesthetic design.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: DraftingCompass,
      title: "Solution Architecture",
      desc: "Strategic technical solutions for complex problems with long-term vision.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      desc: "Turning challenges into effective digital solutions with creative engineering.",
      gradient: "from-rose-500/20 to-red-500/20",
      iconColor: "text-rose-400",
    },
    {
      icon: Users,
      title: "Collaboration & Reliability",
      desc: "Dependable partner for your tech projects with clear communication.",
      gradient: "from-cyan-500/20 to-sky-500/20",
      iconColor: "text-cyan-400",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "50" },
    { label: "Clients Served", value: "20" },
    { label: "Years Experience", value: "3" },
    { label: "Tech Mastered", value: "10" },
  ];

  const techIcons = [
    { icon: Globe, label: "React" },
    { icon: Cpu, label: "Next.js" },
    { icon: CircleDot, label: "Node.js" },
    { icon: TrendingUp, label: "GraphQL" },
    { icon: Award, label: "AWS" },
    { icon: Zap, label: "Tailwind" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-48 -right-24 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Animated Particles Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute hidden lg:block w-1.5 h-1.5 rounded-full bg-accent/20 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <SectionWrapper subtitle="Extended Expertise" title="Mastering the Craft">
        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative p-8 glass rounded-[2.5rem] border border-white/5 hover:border-accent/20 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2.5rem]`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Innovation focus
                  </span>
                  <div className="h-px flex-1 bg-accent/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <StatCounter key={index} {...stat} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Skill Badge Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-12 mb-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {techIcons.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 group cursor-default"
            >
              <tech.icon className="w-5 h-5 group-hover:text-accent transition-colors" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">
                {tech.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-10 md:p-16 rounded-[3rem] border border-accent/20 overflow-hidden group text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-50" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 blur-[120px] rounded-full animate-pulse" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h3 className="text-3xl md:text-5xl font-black text-foreground max-w-2xl leading-[1.1]">
              Want to collaborate? Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                amazing together.
              </span>
            </h3>

            <p className="text-muted-foreground text-lg max-w-xl font-medium">
              Ready to turn your vision into a high-performance digital reality?
              Let's discuss your next project.
            </p>

            <Link href="/contact" className="mt-4">
              <Button className="group/btn relative overflow-hidden px-10 py-5 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-[0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
