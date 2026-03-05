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
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "./ui";

const ContactInfoCard = ({ icon: Icon, title, value, href, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative p-6 glass rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
  >
    <div
      className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${color}`}
    />
    <div className="flex items-center gap-5">
      <div
        className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}
      >
        <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] mb-1">
          {title}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm font-black text-foreground hover:text-accent transition-colors block leading-tight"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-black text-foreground leading-tight">
            {value}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper id="contact" className="relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Vision & Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for new projects
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-none">
                Let's Start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500 italic">
                  Conversation.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md">
                Have a vision you want to bring to life? I'm here to handle the
                technical complexity so you can focus on the impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <ContactInfoCard
                icon={Mail}
                title="Direct Email"
                value="hello@muhyo.tech"
                href="mailto:hello@muhyo.tech"
                color="bg-accent"
              />
              <ContactInfoCard
                icon={MessageSquare}
                title="Chat with me"
                value="Schedule a Call"
                href="#"
                color="bg-blue-400"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Current Location"
                value="Chung, Lahore, Pakistan"
                color="bg-emerald-400"
              />
            </div>

            <div className="pt-4">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.3em] mb-6 ml-2">
                Connect Digitally
              </p>
              <div className="flex gap-4">
                <SocialLink icon={Github} href="#" label="GitHub" />
                <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
                <SocialLink icon={Twitter} href="#" label="Twitter" />
              </div>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-1 glass rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <div className="bg-[#050505]/60 backdrop-blur-3xl p-8 md:p-12 rounded-[2.8rem] space-y-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-2">
                        Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-2">
                      Project Subject
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Mobile App Development"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your vision..."
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending || isSent}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full py-6 rounded-2xl bg-gradient-to-r from-accent to-blue-500 text-white font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-accent/20 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {isSending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isSent ? (
                      "Message Received!"
                    ) : (
                      <>
                        Ignite Partnership
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="pt-10 border-t border-white/5 text-center">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                    Average response time: &lt; 12 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
