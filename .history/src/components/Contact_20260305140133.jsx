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
import { SectionWrapper } from "./ui";

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
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "alex@muhyo.tech",
      link: "mailto:alex@muhyo.tech",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 321 456 7890",
      link: "tel:+923214567890",
      color: "bg-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chung, Lahore, Pakistan",
      link: "#",
      color: "bg-accent",
    },
  ];

  return (
    <SectionWrapper id="contact" className="relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent/5 blur-[180px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Visual & Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9] mb-6">
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                  Collaborate
                </span>{" "}
                <br />
                on Your Vision.
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                I'm currently available for freelance work and full-time
                opportunities. If you have a project that needs a professional
                touch, let's talk.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-card border border-border/10 hover:border-accent/30 transition-all duration-500 shadow-sm"
                >
                  <div
                    className={`p-4 rounded-2xl ${info.color}/10 text-white ${info.color.replace("bg-", "text-")} group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-${info.color.split("-")[1]}/10`}
                  >
                    {/* Fallback for icon color since dynamic text- classes can be tricky with Tailwind sometimes */}
                    <div
                      style={{
                        color:
                          info.label === "Email"
                            ? "#3b82f6"
                            : info.label === "Phone"
                              ? "#10b981"
                              : "#0ea5e9",
                      }}
                    >
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">
                      {info.label}
                    </span>
                    <div className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            <div className="p-8 glass rounded-[2.5rem] border border-accent/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-black text-foreground mb-2">
                Fast Response
              </h4>
              <p className="text-sm text-muted-foreground font-medium">
                Expect to hear from me within 24 hours. I value your time and
                look forward to our synergy.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative p-1 glass rounded-[3.5rem] overflow-hidden"
            >
              <div className="bg-card/50 p-10 md:p-14 rounded-[3.2rem] border border-border/10 space-y-10 relative">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tight text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Fill out the form below and I'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label
                        className={`text-[10px] font-black uppercase tracking-[0.2em] ml-2 transition-colors ${activeField === "name" ? "text-accent" : "text-muted-foreground"}`}
                      >
                        Your Name
                      </label>
                      <input
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        placeholder="e.g. John Doe"
                        className="w-full bg-background border border-border/20 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted-foreground/30"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        className={`text-[10px] font-black uppercase tracking-[0.2em] ml-2 transition-colors ${activeField === "email" ? "text-accent" : "text-muted-foreground"}`}
                      >
                        Email Address
                      </label>
                      <input
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-background border border-border/20 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted-foreground/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label
                      className={`text-[10px] font-black uppercase tracking-[0.2em] ml-2 transition-colors ${activeField === "subject" ? "text-accent" : "text-muted-foreground"}`}
                    >
                      Subject
                    </label>
                    <input
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField(null)}
                      placeholder="What is this about?"
                      className="w-full bg-background border border-border/20 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted-foreground/30"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      className={`text-[10px] font-black uppercase tracking-[0.2em] ml-2 transition-colors ${activeField === "message" ? "text-accent" : "text-muted-foreground"}`}
                    >
                      Message Details
                    </label>
                    <textarea
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      rows={5}
                      placeholder="Tell me more about your visionary project..."
                      className="w-full bg-background border border-border/20 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none placeholder:text-muted-foreground/30"
                      required
                    />
                  </div>

                  <button
                    disabled={isSending || isSent}
                    className="group w-full py-6 rounded-[2rem] bg-accent text-accent-foreground font-black uppercase text-sm tracking-[0.3em] shadow-2xl shadow-accent/40 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSending ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : isSent ? (
                        "Sent Successfully!"
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
