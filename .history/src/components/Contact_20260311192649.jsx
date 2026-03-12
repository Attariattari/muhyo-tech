"use client";

import React from "react";
import Link from "next/link";
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
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      value: "MuhyoTech@gmail.com",
      href: "mailto:MuhyoTech@gmail.com?subject=Project Inquiry&body=Hi MuhyoTech Team, I'm interested in working with you on a project...",
      color: "from-accent/80 to-accent",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+92 322 4458481",
      href: "tel:+923224458481",
      color: "from-accent to-blue-600/50",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "Active 24/7",
      href: "https://wa.me/923224458481?text=Hi MuhyoTech! I'd like to discuss a new project with you.",
      color: "from-emerald-500 to-teal-500",
      target: "_blank",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Our Office",
      value: "Lahore, Pakistan",
      href: "https://www.google.com/maps/search/?api=1&query=Lahore,+Pakistan",
      color: "from-purple-500 to-indigo-500",
      target: "_blank",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      color: "hover:text-accent",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      color: "hover:text-white",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      color: "hover:text-accent",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      color: "hover:text-accent",
    },
  ];

  return (
    <div className="w-full relative py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                <Clock className="w-3 h-3" /> Quick Response:{" "}
                <span className="text-white ml-1">Under 2h</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white uppercase">
                Let's <br />
                <span className="text-accent">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                Have an idea? We are here to help you build it. Send us a
                message and let's talk about your project.
              </p>
            </motion.div>

            {/* Info Items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.target}
                  rel={
                    info.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 glass-dark rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Socials Connection */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-6">
                Find us on social media
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 glass rounded-2xl flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 border border-white/5`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 glass-dark rounded-[3rem] overflow-hidden"
            >
              {/* Form Content */}
              <div className="relative z-10 p-8 md:p-12 bg-[#020617]/40 rounded-[2.8rem] border border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-white uppercase">
                      Send a Message
                    </h2>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">
                      Quick Contact Form
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <MessageSquare className="w-10 h-10 text-white/[0.05]" />
                  </div>
                </div>

                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80 ml-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent/60 focus:bg-white/[0.05] transition-all outline-none placeholder:text-muted-foreground/30 font-semibold text-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80 ml-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent/60 focus:bg-white/[0.05] transition-all outline-none placeholder:text-muted-foreground/30 font-semibold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80 ml-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What is this about?"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent/60 focus:bg-white/[0.05] transition-all outline-none placeholder:text-muted-foreground/30 font-semibold text-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80 ml-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-accent/60 focus:bg-white/[0.05] transition-all outline-none placeholder:text-muted-foreground/30 font-semibold text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-accent text-white font-black uppercase text-xs tracking-[0.5em] rounded-2xl shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 group transition-all cursor-pointer"
                  >
                    Send to our team
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* What Happens Next Section */}
        <section className="mt-32 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase">
              What happens <span className="text-accent italic">next?</span>
            </h2>
            <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-[0.4em]">
              Simple 3-Step Process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Project Planning",
                desc: "We look at your needs to find the best tools and way to build your project.",
              },
              {
                step: "02",
                title: "Meeting & Chat",
                desc: "We talk together to finalize the budget, timing, and what we will build for you.",
              },
              {
                step: "03",
                title: "Building & Launch",
                desc: "Our team starts coding your project and gives you regular updates until it's ready.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 glass-dark rounded-[2.5rem] border border-white/5 group hover:border-accent/30 transition-all"
              >
                <div className="text-5xl font-black text-white/5 group-hover:text-accent/10 transition-colors absolute top-6 right-8">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-32 mb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <div className="space-y-6">
                <h2 className="text-5xl font-black tracking-tighter text-white uppercase leading-none">
                  Common <br />
                  <span className="text-accent italic">Questions</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                  Here are some simple answers to questions we get asked most
                  often.
                </p>
                <div className="pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                      Need more help?
                    </span>
                  </div>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-fit px-8 py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-accent border-accent/20 cursor-pointer"
                    >
                      Explore our Services
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "How long does a project take?",
                  a: "Most projects take between 6 to 12 weeks. Small tasks can be finished in just 4 weeks.",
                },
                {
                  q: "Do you help after the project is finished?",
                  a: "Yes! We stay with you to fix any bugs and make sure your website stays running perfectly.",
                },
                {
                  q: "Who owns the project code?",
                  a: "You do! Once we finish and you pay, all the code belongs to you forever.",
                },
                {
                  q: "What coding tools do you use?",
                  a: "We use modern and fast tools like React, Next.js, and Node.js to make sure your site is super quick.",
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <details className="glass-dark rounded-3xl border border-white/5 px-8 py-6 cursor-pointer open:bg-white/[0.02] transition-colors overflow-hidden">
                    <summary className="list-none flex justify-between items-center text-sm font-bold text-white group-hover:text-accent transition-colors cursor-pointer">
                      {faq.q}
                      <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90 group-hover:translate-x-1" />
                    </summary>
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive Map Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative h-[500px] glass-dark p-2 rounded-[3.5rem] overflow-hidden group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.111956555135!2d74.1950337!3d31.4284542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff06c9a3d767%3A0xe67195449552b75a!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709800000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[3rem] grayscale invert contrast-[1.1] opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:grayscale-0 group-hover:invert-0"
          ></iframe>

          <div className="absolute top-10 left-10 p-8 glass-dark rounded-[2rem] border border-white/10 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white">
                  Main Lab HQ
                </p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
                  Lahore, Punjab, PK
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
