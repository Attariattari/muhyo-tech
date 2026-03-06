"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Official Correspondence",
      value: "hello@muhyo.tech",
      link: "mailto:hello@muhyo.tech",
      color: "text-accent",
      gradient: "from-accent/20 to-transparent",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Direct Strategic Line",
      value: "+92 321 456 7890",
      link: "tel:+923214567890",
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-transparent",
    },
  ];

  return (
    <div className="relative group/form transition-all duration-700">
      {/* Dynamic Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-blue-500/20 to-accent/20 rounded-[4rem] blur-2xl opacity-20 group-hover/form:opacity-40 transition-opacity" />

      <div className="relative bg-card/40 backdrop-blur-3xl p-10 md:p-16 lg:p-24 space-y-20 rounded-[3.5rem] border border-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Structural Tech Background Elements */}
        <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none select-none">
          <ShieldCheck className="w-96 h-96 text-foreground" />
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-[1.5px] bg-accent" />
                <div className="absolute -left-1 -top-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                Inquiry Terminal
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
              Start Your <br />
              <span className="text-muted-foreground/30 italic">Legacy.</span>
            </h3>
          </div>
          <div className="space-y-4 lg:text-right">
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-sm ml-auto leading-relaxed">
              We evaluate every inquiry within
              <span className="text-foreground font-bold">
                {" "}
                12 business hours{" "}
              </span>
              . Let&apos;s architect something exceptional together.
            </p>
          </div>
        </div>

        {/* The Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-12 relative z-10"
          ref={formRef}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Input Wrapper - Name */}
            <div className="relative group">
              <label
                className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${activeField === "name" ? "text-accent translate-x-1" : "text-muted-foreground/40"}`}
              >
                Full Name
              </label>
              <div
                className={`relative border-b transition-all duration-500 ${activeField === "name" ? "border-accent" : "border-border/60"}`}
              >
                <input
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  autoComplete="off"
                  placeholder="e.g. Alexander Pierce"
                  className="w-full bg-transparent py-5 text-xl font-bold focus:outline-none transition-all placeholder:text-muted-foreground/10 text-foreground"
                  required
                />
                {activeField === "name" && (
                  <motion.div
                    layoutId="glow"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                )}
              </div>
            </div>

            {/* Input Wrapper - Email */}
            <div className="relative group">
              <label
                className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${activeField === "email" ? "text-accent translate-x-1" : "text-muted-foreground/40"}`}
              >
                Corporate Email
              </label>
              <div
                className={`relative border-b transition-all duration-500 ${activeField === "email" ? "border-accent" : "border-border/60"}`}
              >
                <input
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  type="email"
                  autoComplete="off"
                  placeholder="name@company.com"
                  className="w-full bg-transparent py-5 text-xl font-bold focus:outline-none transition-all placeholder:text-muted-foreground/10 text-foreground"
                  required
                />
                {activeField === "email" && (
                  <motion.div
                    layoutId="glow"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Textarea Wrapper */}
            <div className="md:col-span-2 relative group">
              <label
                className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${activeField === "message" ? "text-accent translate-x-1" : "text-muted-foreground/40"}`}
              >
                Project Brief
              </label>
              <div
                className={`relative min-h-[160px] p-6 rounded-3xl border bg-white/5 transition-all duration-500 ${activeField === "message" ? "border-accent/40 ring-1 ring-accent/20" : "border-border/40"}`}
              >
                <textarea
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  rows={4}
                  placeholder="Tell us about the challenges and objectives..."
                  className="w-full bg-transparent text-lg font-medium focus:outline-none transition-all placeholder:text-muted-foreground/10 resize-none text-foreground"
                  required
                />
              </div>
            </div>

            {/* Side Panel for form details */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="p-6 rounded-3xl bg-accent/5 border border-accent/10 space-y-4">
                <div className="flex items-center gap-3 text-accent">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Premium Support
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                  All inquiries are handled directly by our senior engineering
                  leads. No middlemen.
                </p>
              </div>

              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Agent"
                        className="w-full h-full grayscale"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                  Active Leads <br />{" "}
                  <span className="text-foreground">Online Now</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-8 relative overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isSending || isSent}
              className="group w-full py-10 rounded-[2.5rem] bg-foreground text-background font-black uppercase text-xs tracking-[0.6em] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-6 disabled:opacity-50 overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {isSending ? (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4"
                  >
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing Data...
                  </motion.div>
                ) : isSent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 text-emerald-400"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    Mission Success
                  </motion.div>
                ) : (
                  <motion.div key="default" className="flex items-center gap-4">
                    Transmit Inquiry
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlay Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-45 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
            </motion.button>
          </div>
        </form>

        {/* Professional Contact Nodes */}
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 relative z-10">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 group hover:bg-white/[0.08] hover:border-accent/30 transition-all duration-500"
            >
              {/* Contact Form Content */}
              <div className="space-y-12">
                <div className="space-y-10">
                  {/* Category Selector */}
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-2">
                      Select Service Architecture
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "System Design",
                        "Cloud Native",
                        "Security Audit",
                        "Full-Stack Velocity",
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className="px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-accent/10 transition-all"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField label="Full Name" placeholder="e.g. John Doe" />
                    <FormField
                      label="Corporate Email"
                      placeholder="e.g. name@company.com"
                    />
                  </div>
                  <FormField
                    label="Project Brief"
                    placeholder="Outline your technical requirements..."
                    isTextArea
                  />
                </div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-accent" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
