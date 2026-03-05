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
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
          <div className="p-8 glass rounded-3xl border border-border/10">
            <h3 className="text-xl font-bold mb-8 text-foreground">
              Contact Details
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    Email
                  </span>
                  <a
                    href="mailto:alex@muhyo.tech"
                    className="text-sm font-bold text-foreground hover:text-accent transition-colors"
                  >
                    alex@muhyo.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    Phone
                  </span>
                  <a
                    href="tel:+15550001234"
                    className="text-sm font-bold text-foreground hover:text-accent transition-colors"
                  >
                    +1 (555) 000-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    Location
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 bg-accent/10 rounded-3xl border border-accent/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
            <h4 className="text-lg font-black text-accent mb-4 tracking-tighter uppercase">
              Let's Build Something Great!
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Whether you have a question or a new project idea, I'm ready to
              work together and deliver the best results.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-12 border border-border/10 glass-dark">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                    Name
                  </label>
                  <input
                    placeholder="Your Full Name"
                    className="w-full bg-background/50 border border-border/20 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground placeholder:italic"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@world.com"
                    className="w-full bg-background/50 border border-border/20 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground placeholder:italic"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                  Subject
                </label>
                <input
                  placeholder="Project Idea / Question"
                  className="w-full bg-background/50 border border-border/20 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground placeholder:italic"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me more about your project..."
                  className="w-full bg-background/50 border border-border/20 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground placeholder:italic"
                  required
                />
              </div>

              <button
                disabled={isSending || isSent}
                className="w-full py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-sm tracking-[0.3em] shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSent ? (
                  "Message Sent Successfully!"
                ) : (
                  "Send Message"
                )}
                {!isSending && !isSent && <Send className="w-4 h-4" />}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
