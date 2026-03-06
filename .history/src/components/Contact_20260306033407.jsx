"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  MessageSquare,
  ShieldCheck,
  Layers,
  Code,
  ArrowRight,
  ArrowLeft,
  Monitor,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const nextStep = (e) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setStep(1);
        setFormData({
          name: "",
          email: "",
          service: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 2000);
  };

  const services = [
    {
      id: "ui-ux",
      label: "UI/UX Architecture",
      icon: <Layers className="w-5 h-5 text-accent" />,
      desc: "Visual Systems",
    },
    {
      id: "fullstack",
      label: "Full-Stack Build",
      icon: <Code className="w-5 h-5 text-accent" />,
      desc: "Scale Apps",
    },
    {
      id: "cloud",
      label: "Cloud & Security",
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      desc: "Infrastructure",
    },
    {
      id: "consulting",
      label: "Technical Audit",
      icon: <Monitor className="w-5 h-5 text-accent" />,
      desc: "Expert Advice",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Official Correspondence",
      value: "alex@muhyo.tech",
      link: "mailto:alex@muhyo.tech",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Direct Consult",
      value: "+92 321 456 7890",
      link: "tel:+923214567890",
    },
  ];

  return (
    <div className="bg-card/40 p-8 md:p-16 lg:p-24 space-y-16 relative overflow-hidden backdrop-blur-3xl border border-border/20 rounded-[4rem] shadow-2xl">
      {/* Decorative Layer */}
      <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none -z-10">
        <ShieldCheck className="w-96 h-96 text-foreground" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
              Phase {step} of {totalSteps}
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[1.1]">
            {step === 1 && (
              <>
                DEFINE YOUR <span className="text-accent italic">STANCE.</span>
              </>
            )}
            {step === 2 && (
              <>
                CHOOSE YOUR <span className="text-accent italic">PILLAR.</span>
              </>
            )}
            {step === 3 && (
              <>
                OUTLINE THE <span className="text-accent italic">VISION.</span>
              </>
            )}
          </h3>
          <p className="text-muted-foreground font-medium max-w-sm">
            {step === 1 &&
              "Start by identifying your corporate identity and contact points."}
            {step === 2 &&
              "Select the core discipline that aligns with your project needs."}
            {step === 3 &&
              "Provide a high-level overview of your objectives and challenges."}
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-2">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-700 ${step > i ? "bg-accent w-16" : "bg-border w-5"}`}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={step === totalSteps ? handleSubmit : nextStep}
        className="relative z-10"
      >
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-[300px]"
        >
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 group-focus-within:text-accent transition-colors">
                  Consultant / Client Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alexander Pierce"
                  className="w-full bg-transparent border-b border-border/60 p-5 text-2xl font-black focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/5"
                />
              </div>
              <div className="group space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 group-focus-within:text-accent transition-colors">
                  Executive Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-b border-border/60 p-5 text-2xl font-black focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/5"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, service: s.id })}
                  className={`p-10 rounded-[2.5rem] border-2 text-left transition-all duration-500 group relative overflow-hidden ${formData.service === s.id ? "border-accent bg-accent/5" : "border-border/40 hover:border-accent/30"}`}
                >
                  <div
                    className={`p-4 rounded-2xl w-fit mb-6 transition-all duration-500 ${formData.service === s.id ? "bg-accent text-white scale-110" : "bg-foreground/5 text-foreground group-hover:bg-accent/10"}`}
                  >
                    {s.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="block font-black text-sm uppercase tracking-tighter transition-colors group-hover:text-accent">
                      {s.label}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-40">
                      {s.desc}
                    </span>
                  </div>
                  {formData.service === s.id && (
                    <div className="absolute top-6 right-6">
                      <Zap className="w-4 h-4 text-accent animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-12">
              <div className="group space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 group-focus-within:text-accent transition-colors">
                  Primary Objective
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Modernizing Legacy Infrastructure"
                  className="w-full bg-transparent border-b border-border/60 p-5 text-2xl font-black focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/5"
                />
              </div>
              <div className="group space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 group-focus-within:text-accent transition-colors">
                  Technical Overview
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe the challenges and technical objectives in detail..."
                  className="w-full bg-transparent border border-border/40 p-10 rounded-[3rem] text-lg font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/5 shadow-inner"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-16">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="w-full sm:w-auto px-12 py-6 rounded-full border border-border text-[10px] font-black uppercase tracking-[0.4em] hover:bg-foreground/5 transition-all flex items-center justify-center gap-3"
            >
              <ArrowLeft className="w-4 h-4" />
              Return
            </button>
          )}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending || isSent}
            className={`w-full ${step === 1 ? "sm:w-full" : "sm:flex-grow"} group py-7 rounded-full bg-foreground text-background font-black uppercase text-[10px] tracking-[0.6em] shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50`}
          >
            {isSending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isSent ? (
              "INQUIRY TRANSMITTED"
            ) : (
              <>
                {step === totalSteps
                  ? "Secure Consultation"
                  : "Commence Next Phase"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </div>
      </form>

      {/* Trust Lines */}
      <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-border/20 relative z-10">
        <div className="flex flex-col sm:flex-row gap-10">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className="flex items-center gap-5 group"
            >
              <div className="p-4 rounded-2xl bg-foreground/5 text-foreground group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-100 group-hover:scale-110">
                {info.icon}
              </div>
              <div className="space-y-1">
                <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground opacity-40">
                  {info.label}
                </div>
                <div className="text-sm font-black group-hover:text-accent transition-colors">
                  {info.value}
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.3em] leading-relaxed opacity-30 text-left lg:text-right max-w-sm ml-auto">
          Authorized interactions only. <br />
          Encrypted Data handling protocols in effect.
        </p>
      </div>
    </div>
  );
}
