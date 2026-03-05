"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { SectionWrapper, Card } from "./ui";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

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

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Connect With Me"
      className="pb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="p-8 glass-dark rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
            <h3 className="text-xl font-black mb-8 text-foreground tracking-tight">
              Contact Details
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "alex@muhyo.tech",
                  href: "mailto:alex@muhyo.tech",
                  color: "text-accent",
                  bg: "bg-accent/10",
                  border: "border-accent/20",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 000-1234",
                  href: "tel:+15550001234",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/20",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "San Francisco, CA",
                  href: null,
                  color: "text-cyan-500",
                  bg: "bg-cyan-500/10",
                  border: "border-cyan-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 group/item"
                >
                  <div
                    className={`p-4 rounded-2xl ${item.bg} border ${item.border} ${item.color} group-hover/item:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-bold text-foreground hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base font-bold text-foreground">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-10 bg-accent rounded-3xl border border-accent/20 relative overflow-hidden group shadow-xl shadow-accent/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)]" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
            <h4 className="text-xl font-black text-accent-foreground mb-4 tracking-tighter uppercase relative z-10">
              Let's Build Something Great!
            </h4>
            <p className="text-sm text-accent-foreground/80 leading-relaxed relative z-10 font-medium">
              Whether you have a question or a new project idea, I'm ready to
              work together and deliver the best results.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <Card className="p-12 border border-white/10 glass-dark shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                    Name
                  </label>
                  <input
                    placeholder="Your Full Name"
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@world.com"
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                  Subject
                </label>
                <input
                  placeholder="Project Idea / Question"
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me more about your project..."
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none placeholder:text-muted-foreground/50 placeholder:italic"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending || isSent}
                className="w-full py-6 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-sm tracking-[0.4em] shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all flex items-center justify-center gap-4 disabled:opacity-50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] animate-shimmer" />
                {isSending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSent ? (
                  "Message Sent Successfully!"
                ) : (
                  "Send Message"
                )}
                {!isSending && !isSent && <Send className="w-4 h-4" />}
              </motion.button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
