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
  Instagram,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { SectionWrapper, Card } from "./ui";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: portfolioData.profile.socials.github,
      color: "hover:text-white hover:bg-zinc-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: portfolioData.profile.socials.linkedin,
      color: "hover:text-white hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: portfolioData.profile.socials.twitter,
      color: "hover:text-white hover:bg-sky-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "#", // Add Instagram if available
      color: "hover:text-white hover:bg-pink-600",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        service: "",
        message: "",
      });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Connect With Me"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        {/* Left Column: Contact info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl border border-border/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail className="w-32 h-32 rotate-12" />
            </div>

            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full" />
              Contact Information
            </h3>

            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value={portfolioData.profile.email}
                href={`mailto:${portfolioData.profile.email}`}
                color="bg-accent/10 text-accent border-accent/20"
              />

              <ContactInfoItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value={portfolioData.profile.phone}
                href={`tel:${portfolioData.profile.phone.replace(/\D/g, "")}`}
                color="bg-blue-500/10 text-blue-500 border-blue-500/20"
              />

              <ContactInfoItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value={portfolioData.profile.location}
                color="bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              />
            </div>

            <div className="mt-12 pt-8 border-t border-border/10">
              <p className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-6 px-2">
                Follow Me
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl bg-background/50 border border-border/20 text-muted-foreground transition-all duration-300 ${social.color} hover:scale-110 shadow-lg hover:shadow-xl`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Quick Link */}
          <motion.a
            href={`https://wa.me/${portfolioData.profile.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl group transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Quick Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Available on WhatsApp
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Map Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border/10 h-64 grayscale hover:grayscale-0 transition-all duration-700 relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709673000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-background/20 pointer-events-none group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-3 rounded-2xl border border-border/10 text-xs font-bold flex items-center justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <span>San Francisco, CA</span>
              <ExternalLink className="w-3 h-3 text-accent" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-8 md:p-12 border border-border/10 glass-dark relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Subject"
                  name="subject"
                  placeholder="I want to discuss..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background/40 border border-border/20 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="bg-background">
                      Select a service
                    </option>
                    {portfolioData.services.map((service) => (
                      <option
                        key={service.id}
                        value={service.slug}
                        className="bg-background"
                      >
                        {service.title}
                      </option>
                    ))}
                    <option value="other" className="bg-background">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background/40 border border-border/20 p-5 rounded-3xl text-sm font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/50"
                  required
                />
              </div>

              <button
                disabled={isSending || isSent}
                className="w-full py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-sm tracking-[0.3em] shadow-xl shadow-accent/20 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSent ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ContactInfoItem({ icon, label, value, href, color }) {
  const Content = (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div
        className={`p-4 rounded-2xl border transition-all duration-300 group-hover:scale-110 shadow-lg ${color}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
          {label}
        </span>
        <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
          {value}
        </span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {Content}
    </a>
  ) : (
    Content
  );
}

function FormInput({ label, type = "text", ...props }) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] ml-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-background/40 border border-border/20 p-4 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50"
        {...props}
      />
    </div>
  );
}
