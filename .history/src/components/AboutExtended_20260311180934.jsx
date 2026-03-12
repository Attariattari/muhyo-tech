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
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  User,
  ExternalLink,
} from "lucide-react";
import { SectionWrapper, Button } from "./ui";
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
      let incrementTime = totalMiliseconds / end;

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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2 flex items-baseline gap-1">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
          {count}
        </span>
        <span className="text-accent text-2xl font-bold">+</span>
      </div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors text-center">
        {label}
      </p>
    </motion.div>
  );
};

export default function AboutExtended({ data }) {
  if (!data) return null;

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

  const techStack = [
    { icon: Globe, label: "Next.js" },
    { icon: Cpu, label: "React" },
    { icon: CircleDot, label: "Tailwind" },
    { icon: TrendingUp, label: "Node.js" },
    { icon: Award, label: "TypeScript" },
    { icon: Zap, label: "MongoDB" },
  ];

  const personalDetails = [
    { icon: User, label: "Full Name", value: data.name },
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      link: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      link: `tel:${data.phone}`,
    },
    { icon: MapPin, label: "Location", value: data.location },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: data.socials.linkedin,
      color: "hover:text-[#0077b5]",
    },
    {
      icon: Github,
      name: "GitHub",
      url: data.socials.github,
      color: "hover:text-[#333] dark:hover:text-white",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: data.socials.twitter,
      color: "hover:text-[#1da1f2]",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-[#e4405f]",
    },
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
    <div className="relative overflow-hidden pb-24 -mt-12 lg:-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Social Media & Personal Details Section */}
      <SectionWrapper subtitle="Identification" title="Personal & Social">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <User className="w-32 h-32" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              {personalDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1 block">
                      {detail.label}
                    </label>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className="text-foreground font-bold hover:text-accent transition-colors break-all"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-bold">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                Connect With Me <ExternalLink className="w-4 h-4 text-accent" />
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-accent/20 group`}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Expertise Section */}
      <SectionWrapper subtitle="Expertise" title="Core Pillars">
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
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent/80">
                    Premium Standard
                  </span>
                  <div className="h-px flex-1 bg-accent/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Tech Stack Strip */}
        <div className="mb-24 overflow-hidden relative py-10 bg-accent/5 -mx-6 lg:-mx-16 px-6 lg:px-16 border-y border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 items-center"
          >
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 group grayscale transition-all hover:grayscale-0"
              >
                <div className="p-3 rounded-xl bg-background border border-accent/10 group-hover:border-accent/30 group-hover:shadow-lg transition-all">
                  <tech.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                  {tech.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-10 md:p-16 rounded-[3rem] border border-accent/20 overflow-hidden group text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-50" />
          <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full animate-pulse" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h3 className="text-3xl md:text-5xl font-black text-foreground max-w-2xl leading-[1.1] tracking-tight">
              Want to collaborate? Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                amazing together.
              </span>
            </h3>

            <p className="text-muted-foreground text-lg max-w-xl font-medium">
              Ready to turn your vision into a high-performance digital reality?
              Let's discuss your next project and how I can help you scale.
            </p>

            <Link href="/contact" className="mt-4">
              <Button className="group/btn relative overflow-hidden px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-[0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 font-black uppercase tracking-[0.2em]">
                <span className="relative z-10 flex items-center gap-4">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            className="absolute w-1 h-1 rounded-full bg-accent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
