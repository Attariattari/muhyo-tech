"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  MessageSquare,
  ArrowRight,
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
      icon: <Mail className="w-5 h-5" />,
      label: "Direct Email",
      value: "alex@muhyo.tech",
      link: "mailto:alex@muhyo.tech",
      color: "text-blue-400",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Voice / Signal",
      value: "+92 321 456 7890",
      link: "tel:+923214567890",
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="bg-card/30 p-8 md:p-16 space-y-12 relative overflow-hidden backdrop-blur-3xl">
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
        <MessageSquare className="w-64 h-64" />
      </div>

      <div className="space-y-4">
        <h3 className="text-4xl font-black tracking-tight text-foreground uppercase">
          Project Inquiry
        </h3>
        <p className="text-muted-foreground font-medium max-w-md">
          Tell me about your vision. For urgent matters, use the direct lines
          below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group space-y-4">
            <label
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${activeField === "name" ? "text-accent" : "text-muted-foreground/60"}`}
            >
              Full Identity
            </label>
            <input
              onFocus={() => setActiveField("name")}
              onBlur={() => setActiveField(null)}
              placeholder="e.g. Satoshi Nakamoto"
              className="w-full bg-transparent border-b-2 border-white/5 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/20"
              required
            />
          </div>
          <div className="group space-y-4">
            <label
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${activeField === "email" ? "text-accent" : "text-muted-foreground/60"}`}
            >
              Secure Email
            </label>
            <input
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
              type="email"
              placeholder="name@domain.com"
              className="w-full bg-transparent border-b-2 border-white/5 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/20"
              required
            />
          </div>
        </div>

        <div className="group space-y-4">
          <label
            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${activeField === "subject" ? "text-accent" : "text-muted-foreground/60"}`}
          >
            Nature of Collaboration
          </label>
          <input
            onFocus={() => setActiveField("subject")}
            onBlur={() => setActiveField(null)}
            placeholder="e.g. Ecosystem Architecture"
            className="w-full bg-transparent border-b-2 border-white/5 p-4 text-lg font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/20"
            required
          />
        </div>

        <div className="group space-y-4">
          <label
            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${activeField === "message" ? "text-accent" : "text-muted-foreground/60"}`}
          >
            The Vision Detail
          </label>
          <textarea
            onFocus={() => setActiveField("message")}
            onBlur={() => setActiveField(null)}
            rows={4}
            placeholder="Describe the impact you want to create..."
            className="w-full bg-transparent border border-white/5 p-6 rounded-[2rem] text-lg font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/20"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSending || isSent}
          className="group w-full py-8 rounded-[2.5rem] bg-foreground text-background font-black uppercase text-xs tracking-[0.5em] shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50"
        >
          {isSending ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isSent ? (
            "Transmission Successful"
          ) : (
            <>
              Launch Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Direct Lines */}
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5">
        {contactInfo.map((info, idx) => (
          <a
            key={idx}
            href={info.link}
            className="flex items-center gap-4 group"
          >
            <div
              className={`p-4 rounded-2xl bg-white/5 ${info.color} group-hover:bg-accent group-hover:text-white transition-all`}
            >
              {info.icon}
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
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
