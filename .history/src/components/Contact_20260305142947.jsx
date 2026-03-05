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
        <div className="flex items-center gap-4">
          <div className="w-10 h-[2px] bg-accent" />
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-accent">
            Inquiry Canvas
          </span>
        </div>
        <h3 className="text-5xl md:text-6xl font-black tracking-tightest text-foreground leading-[0.85]">
          Project <br /> Engagement.
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-md leading-relaxed">
          Provide your project overview below. Our team evaluates every inquiry
          within 12 business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group space-y-4">
            <label
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeField === "name" ? "text-accent" : "text-muted-foreground/60"}`}
            >
              Full Name
            </label>
            <input
              onFocus={() => setActiveField("name")}
              onBlur={() => setActiveField(null)}
              placeholder="e.g. Abdullah Tariq"
              className="w-full bg-transparent border-b border-border/60 p-5 text-xl font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
              required
            />
          </div>
          <div className="group space-y-4">
            <label
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeField === "email" ? "text-accent" : "text-muted-foreground/60"}`}
            >
              Corporate Email
            </label>
            <input
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
              type="email"
              placeholder="name@company.com"
              className="w-full bg-transparent border-b border-border/60 p-5 text-xl font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
              required
            />
          </div>
        </div>

        <div className="group space-y-4">
          <label
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeField === "subject" ? "text-accent" : "text-muted-foreground/60"}`}
          >
            Project Focus
          </label>
          <input
            onFocus={() => setActiveField("subject")}
            onBlur={() => setActiveField(null)}
            placeholder="e.g. Enterprise Scale-up"
            className="w-full bg-transparent border-b border-border/60 p-5 text-xl font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/10"
            required
          />
        </div>

        <div className="group space-y-4">
          <label
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeField === "message" ? "text-accent" : "text-muted-foreground/60"}`}
          >
            Brief Overview
          </label>
          <textarea
            onFocus={() => setActiveField("message")}
            onBlur={() => setActiveField(null)}
            rows={5}
            placeholder="Describe the challenges and objectives of the project..."
            className="w-full bg-transparent border border-border/40 p-8 rounded-[3rem] text-xl font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/10"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSending || isSent}
          className="group w-full py-8 rounded-[2.5rem] bg-foreground text-background font-black uppercase text-sm tracking-[0.4em] shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50"
        >
          {isSending ? (
            <Loader2 className="w-7 h-7 animate-spin" />
          ) : isSent ? (
            "Transmission Successful"
          ) : (
            <>
              Submit Inquiry
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Direct Professional Lines */}
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-border/20 relative z-10">
        {contactInfo.map((info, idx) => (
          <a
            key={idx}
            href={info.link}
            className="flex items-center gap-6 group"
          >
            <div
              className={`p-5 rounded-[1.5rem] bg-accent/5 text-accent border border-accent/10 group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-accent/5`}
            >
              {info.icon}
            </div>
            <div className="space-y-1">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/50">
                {info.label}
              </div>
              <div className="text-base font-black group-hover:text-accent transition-colors">
                {info.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
