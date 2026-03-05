"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Official Correspondence",
      value: "alex@muhyo.tech",
      link: "mailto:alex@muhyo.tech",
      color: "text-accent",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Direct Consult",
      value: "+92 321 456 7890",
      link: "tel:+923214567890",
      color: "text-accent",
    },
  ];

  return (
    <div className="bg-card/40 p-10 md:p-20 space-y-16 relative overflow-hidden backdrop-blur-2xl">
      {/* Structural Decor */}
      <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none">
        <ShieldCheck className="w-80 h-80 text-foreground" />
      </div>

      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
            Inquiry Canvas
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
          Project <br /> Engagement.
        </h3>
        <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed">
          Provide your project overview below. Our team evaluates every inquiry
          within 12 business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group space-y-4">
            <label
              className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors ${activeField === "name" ? "text-accent" : "text-muted-foreground/40"}`}
            >
              Full Name
            </label>
            <input
              onFocus={() => setActiveField("name")}
              onBlur={() => setActiveField(null)}
              placeholder="e.g. Alexander Pierce"
              className="w-full bg-transparent border-b border-border/60 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
              required
            />
          </div>
          <div className="group space-y-4">
            <label
              className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors ${activeField === "email" ? "text-accent" : "text-muted-foreground/40"}`}
            >
              Corporate Email
            </label>
            <input
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
              type="email"
              placeholder="name@company.com"
              className="w-full bg-transparent border-b border-border/60 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
              required
            />
          </div>
        </div>

        <div className="group space-y-4">
          <label
            className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors ${activeField === "subject" ? "text-accent" : "text-muted-foreground/40"}`}
          >
            Project Focus
          </label>
          <input
            onFocus={() => setActiveField("subject")}
            onBlur={() => setActiveField(null)}
            placeholder="e.g. Enterprise Scale-up"
            className="w-full bg-transparent border-b border-border/60 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
            required
          />
        </div>

        <div className="group space-y-4">
          <label
            className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors ${activeField === "message" ? "text-accent" : "text-muted-foreground/40"}`}
          >
            Brief Overview
          </label>
          <textarea
            onFocus={() => setActiveField("message")}
            onBlur={() => setActiveField(null)}
            rows={4}
            placeholder="Describe the challenges and objectives of the project..."
            className="w-full bg-transparent border border-border/40 p-8 rounded-[2.5rem] text-lg font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/10"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={isSending || isSent}
          className="group w-full py-8 rounded-[3rem] bg-foreground text-background font-black uppercase text-xs tracking-[0.5em] shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50"
        >
          {isSending ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isSent ? (
            "Transmission Successful"
          ) : (
            <>
              Submit Inquiry
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Direct Professional Lines */}
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-border/30 relative z-10">
        {contactInfo.map((info, idx) => (
          <a
            key={idx}
            href={info.link}
            className="flex items-center gap-5 group"
          >
            <div
              className={`p-4 rounded-2xl bg-foreground/5 text-foreground group-hover:bg-accent group-hover:text-white transition-all`}
            >
              {info.icon}
            </div>
            <div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
                {info.label}
              </div>
              <div className="text-sm font-black group-hover:text-accent transition-colors">
                {info.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
