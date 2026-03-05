"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Github,
  Linkedin,
  Twitter,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Card } from "./ui";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      title: "Direct Email",
      value: "alex@muhyo.tech",
      banner: "/images/contact/hero-1.png",
      description:
        "Available for technical inquiries, project proposals, and collaborations.",
      label: "Response within 24h",
      color: "text-accent",
      href: "mailto:alex@muhyo.tech",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone Call",
      value: "+1 (555) 000-1234",
      banner: "/images/contact/hero-2.png",
      description:
        "For urgent matters or scheduled discovery calls regarding your enterprise needs.",
      label: "Mon - Fri, 9am - 6pm PST",
      color: "text-blue-500",
      href: "tel:+15550001234",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Office Location",
      value: "San Francisco, CA",
      banner: "/images/contact/hero-3.png",
      description:
        "Based in the heart of innovation. Open for in-person meetings by appointment.",
      label: "Strategic Hub",
      color: "text-cyan-500",
      href: null,
    },
  ];

  return (
    <div className="space-y-24">
      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full border border-border/20 group hover:border-accent/40 transition-all flex flex-col p-6 overflow-hidden bg-background/50 backdrop-blur-sm">
              <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-8">
                <img
                  src={method.banner}
                  alt={method.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center ${method.color} shadow-lg border border-border/10`}
                >
                  <method.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${method.color}`}
                >
                  {method.label}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {method.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border/10">
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-sm font-bold text-foreground hover:text-accent transition-colors flex items-center justify-between group/link"
                    >
                      {method.value}
                      <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all" />
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-foreground">
                      {method.value}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Form Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Ready to start your <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                  next big project?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                I'm currently accepting new projects and would love to hear
                about your goals. Fill out the form, and I'll get back to you
                within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Direct Communication",
                  desc: "No middleman. Talk directly to the expert.",
                },
                {
                  title: "Strategic Approach",
                  desc: "Focus on business goals, not just code.",
                },
                {
                  title: "Rapid Turnaround",
                  desc: "Efficient workflows that respect your time.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl border border-border/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-10 border border-border/10 lg:translate-y-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-accent tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="w-full bg-secondary/5 border border-border/20 p-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-accent tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-secondary/5 border border-border/20 p-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-accent tracking-widest ml-1">
                  Subject
                </label>
                <input
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-secondary/5 border border-border/20 p-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-accent tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-secondary/5 border border-border/20 p-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending || isSent}
                className="w-full py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-accent/20"
              >
                {isSending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSent ? (
                  "Message Sent Successfully"
                ) : (
                  <>
                    Initialize Connection <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
