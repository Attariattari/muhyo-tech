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
              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10 text-accent transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Mail size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col">
                  <span className="text-small font-black uppercase text-secondary tracking-[0.2em] mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:alex@muhyo.tech"
                    className="text-base font-bold text-foreground hover:text-accent transition-colors"
                  >
                    alex@muhyo.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-500 transition-all group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                  <Phone size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col">
                  <span className="text-small font-black uppercase text-secondary tracking-[0.2em] mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+15550001234"
                    className="text-base font-bold text-foreground hover:text-accent transition-colors"
                  >
                    +1 (555) 000-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-500 transition-all group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                  <MapPin size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col">
                  <span className="text-small font-black uppercase text-secondary tracking-[0.2em] mb-1">
                    Location
                  </span>
                  <span className="text-base font-bold text-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 glass rounded-3xl border border-border/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
            <h4 className="text-lg font-bold text-accent mb-4 tracking-widest uppercase">
              Let's Build Something Great!
            </h4>
            <p className="text-sm leading-relaxed">
              Whether you have a question or a new project idea, I'm ready to
              collaborate and deliver high-performance results.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-10 border border-border/10 glass-dark">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-small font-black uppercase text-secondary tracking-[0.2em] ml-2">
                    Name
                  </label>
                  <input
                    placeholder="Your Full Name"
                    className="w-full bg-background/50 border border-border/10 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-small font-black uppercase text-secondary tracking-[0.2em] ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@world.com"
                    className="w-full bg-background/50 border border-border/10 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-small font-black uppercase text-secondary tracking-[0.2em] ml-2">
                  Subject
                </label>
                <input
                  placeholder="Project Idea / Consultation / Question"
                  className="w-full bg-background/50 border border-border/10 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-small font-black uppercase text-secondary tracking-[0.2em] ml-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="How can I help you achieve your goals?"
                  className="w-full bg-background/50 border border-border/10 p-4 rounded-xl text-sm font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground"
                  required
                />
              </div>

              <button
                disabled={isSending || isSent}
                className="w-full inline-flex items-center justify-center gap-3 py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-small tracking-[0.3em] shadow-xl shadow-accent/20 hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                {isSending ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : isSent ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Dispatch Message
                    <Send size={18} className="icon-scale" />
                  </>
                )}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
