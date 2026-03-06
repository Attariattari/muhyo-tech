"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  ExternalLink,
  ArrowRight,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

/**
 * Modern Contact Component
 * Includes: Hero, Information Cards, Professional Contact Form,
 * Google Map Integration, Quick Contact CTA, and Social Links.
 */
const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      details: "Chung, Lahore, Pakistan",
      description: "Visit our main headquarters",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "MuhyoTech@gmail.com",
      description: "Send us an inquiry anytime",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: "+92 322 4458481",
      description: "Mon-Fri from 9am to 6pm",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+92 322 4458481",
      description: "Instant professional support",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]",
      border: "hover:border-[#0077b5]/50",
      bg: "hover:bg-[#0077b5]/10",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "#",
      label: "GitHub",
      color: "hover:text-white",
      border: "hover:border-white/50",
      bg: "hover:bg-white/10",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "#",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
      border: "hover:border-[#1DA1F2]/50",
      bg: "hover:bg-[#1DA1F2]/10",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/923224458481",
      label: "WhatsApp",
      color: "hover:text-[#25D366]",
      border: "hover:border-[#25D366]/50",
      bg: "hover:bg-[#25D366]/10",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "#",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
      border: "hover:border-[#1877F2]/50",
      bg: "hover:bg-[#1877F2]/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative px-6 py-20 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
            Get In Touch
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-foreground"
        >
          CONTACT <span className="text-accent italic">US</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium"
        >
          Have a vision for the next big thing? We're here to help you architect
          the future. Reach out and let's start a professional engagement.
        </motion.p>
      </section>

      {/* 2. Contact Information Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer hover:border-accent/40 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${info.bg} flex items-center justify-center ${info.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                {info.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-2">
                {info.title}
              </h3>
              <p className="text-xl font-black tracking-tight text-foreground mb-3 leading-tight">
                {info.details}
              </p>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Contact Form & Map Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        {/* Form area (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-3 glass p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <MessageSquare className="w-64 h-64 text-accent" />
          </div>

          <div className="relative z-10 space-y-12">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-foreground uppercase mb-4">
                Send a Message
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-card/40 border border-border/60 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/60 focus:ring-4 focus:ring-accent/5 transition-all outline-none placeholder:text-muted-foreground/40 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-card/40 border border-border/60 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/60 focus:ring-4 focus:ring-accent/5 transition-all outline-none placeholder:text-muted-foreground/40 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-card/40 border border-border/60 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/60 focus:ring-4 focus:ring-accent/5 transition-all outline-none placeholder:text-muted-foreground/40 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full bg-card/40 border border-border/60 rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/60 focus:ring-4 focus:ring-accent/5 transition-all outline-none placeholder:text-muted-foreground/40 font-medium resize-none shadow-inner"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-accent text-white font-black uppercase text-xs tracking-[0.4em] rounded-2xl shadow-xl shadow-accent/10 flex items-center justify-center gap-3 group transition-all"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* 4. Google Map Integration (2 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-2 relative h-full min-h-[500px]"
        >
          <div className="absolute inset-0 glass p-2 rounded-[3.5rem] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.111956555135!2d74.1950337!3d31.4284542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff06c9a3d767%3A0xe67195449552b75a!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709800000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[3rem] grayscale invert contrast-[1.1] opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
          {/* Subtle marker indicator overlay */}
          <div className="absolute bottom-10 left-10 glass px-6 py-4 rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground">
                  View Our Office
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Chung, Lahore
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Quick Contact & 6. Social Media */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 bg-accent/5 border-accent/20">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
              Have a project in mind? <br />
              <span className="text-accent italic">
                Let's build something amazing together.
              </span>
            </h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.a
                href="mailto:MuhyoTech@gmail.com"
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-10 py-5 bg-white text-black font-extrabold uppercase text-[11px] tracking-[0.3em] rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_-12px_rgba(255,255,255,0.2)] transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
              <motion.a
                href="https://wa.me/923224458481?text=Hello%20Muhyo%20Tech%2C%20I&#39;d%20like%20to%20discuss%20a%20project."
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-10 py-5 bg-[#25D366] text-white font-extrabold uppercase text-[11px] tracking-[0.3em] rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_-12px_rgba(37,211,102,0.3)] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:+923224458481"
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-10 py-5 glass border-accent/30 text-accent font-extrabold uppercase text-[11px] tracking-[0.3em] rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_-12px_rgba(var(--accent),0.1)] transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </div>

          <div className="space-y-8 text-center lg:text-right">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground mb-6">
                Connected Networks
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground shadow-xl transition-all duration-300 ${social.color} ${social.border} ${social.bg}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="pt-8 border-t border-border/10">
              <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest flex items-center justify-center lg:justify-end gap-2">
                Engineered with Precision <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle background decoration */}
      <div className="fixed top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
};

export default Contact;
