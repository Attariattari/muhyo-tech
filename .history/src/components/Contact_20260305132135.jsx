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
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "alex@muhyo.tech",
      href: "mailto:alex@muhyo.tech",
      color: "bg-accent/10 border-accent/20 text-accent",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 000-1234",
      href: "tel:+15550001234",
      color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
      color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", name: "Github" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <SectionWrapper id="contact" title="Contact Details" subtitle="Reach Out">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left Column: Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Projects
            </motion.div>

            <h3 className="text-3xl font-bold text-foreground">
              Let's talk about your project
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a specific proposal or just want
              to explore possibilities, feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-5 p-4 rounded-2xl glass border border-border/10 hover:border-accent/40 transition-all duration-300"
              >
                <div
                  className={`p-4 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-accent flex items-center gap-2">
              <Clock className="w-4 h-4" /> Response Time
            </h4>
            <ul className="space-y-4">
              {[
                "Typical response within 24 hours",
                "Available Mon-Fri, 9am - 6pm PST",
                "Video calls available upon request",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Follow Me:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-full glass border border-border/10 hover:border-accent/50 hover:text-accent transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 border border-border/10 glass-dark relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  <p className="text-sm text-muted-foreground italic">
                    Required fields are marked with *
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 ml-1">
                        Name *
                      </label>
                      <input
                        placeholder="John Doe"
                        className="w-full bg-background/30 border border-border/10 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted-foreground/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 ml-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-background/30 border border-border/10 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted-foreground/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/70 ml-1">
                      Subject
                    </label>
                    <input
                      placeholder="Project Inquiry / General Chat"
                      className="w-full bg-background/30 border border-border/10 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/70 ml-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="High-level overview of your project goals..."
                      className="w-full bg-background/30 border border-border/10 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending || isSent}
                    className="group relative w-full py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-sm tracking-[0.2em] shadow-xl shadow-accent/20 overflow-hidden transition-all disabled:opacity-70"
                  >
                    <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000" />

                    <span className="relative flex items-center justify-center gap-3">
                      {isSending ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : isSent ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Message Sent!
                        </span>
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
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
