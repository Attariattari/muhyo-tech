"use client";

import { motion } from "framer-motion";
import {
  Award,
  Zap,
  Code2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Verified,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper, Button } from "./ui";
import Image from "next/image";
import Link from "next/link";

export default function AboutExtended({ data }) {
  if (!data) return null;

  const features = [
    {
      icon: Award,
      title: "Top Quality Work",
      desc: "Architecting high-performance systems with precision and scalability.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      gradient: "from-amber-500/20 to-orange-500/10",
    },
    {
      icon: Zap,
      title: "Super Fast Speed",
      desc: "Optimizing every byte for instant load times and fluid interaction.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      gradient: "from-blue-500/20 to-indigo-500/10",
    },
    {
      icon: Code2,
      title: "Smart & Future Proof",
      desc: "Systems engineered to grow and adapt with emerging technologies.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      gradient: "from-emerald-500/20 to-teal-500/10",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      link: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      link: `tel:${data.phone}`,
    },
    { icon: MapPin, label: "Office Location", value: data.location },
    {
      icon: Clock,
      label: "Working hours",
      value: data.workingHours || "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="relative overflow-visible pb-32">
      <SectionWrapper
        id="extended-about"
        subtitle="Unmatched Precision"
        title="Why Choose Muhyo Tech?"
      >
        {/* Features / Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 glass rounded-[2.5rem] border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem]`}
              />

              <div
                className={`w-16 h-16 rounded-2xl ${f.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}
              >
                <f.icon className={`w-8 h-8 ${f.color}`} />
              </div>

              <div className="relative z-10">
                <h5 className="text-xl font-black mb-4 text-foreground group-hover:text-accent transition-colors tracking-tight">
                  {f.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-accent opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Explore Standard
                </span>
                <div className="h-px flex-1 bg-accent/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                Availability
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
                Let's Discuss Your Next Move.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-md">
                Whether you're starting from scratch or scaling an existing
                platform, our doors are open for collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-base font-bold text-foreground hover:text-accent transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-bold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Achievement Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-1 glass rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="relative p-12 lg:p-16 h-full flex flex-col justify-center gap-8 relative z-10">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Globe className="w-64 h-64" />
              </div>

              <div className="flex -space-x-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-background bg-accent/20 flex items-center justify-center p-1 overflow-hidden backdrop-blur-xl"
                  >
                    <Image
                      src={data.avatar}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-[1.2] tracking-tight">
                Trusted by Forward-Thinking Brands{" "}
                <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8 font-serif leading-none">
                  Globally.
                </span>
              </h3>

              <div className="mt-4 p-8 bg-accent/5 border border-accent/20 rounded-[2rem] flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-accent group-hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-shadow duration-500">
                  <Verified className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground">
                    AESTHETIC
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                    Precision Verified
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 relative glass p-10 md:p-20 rounded-[4rem] border border-accent/20 overflow-hidden group text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.1)_0%,transparent_50%)]" />
          <div className="absolute -top-[50%] -left-[50%] w-full h-full bg-accent/5 blur-[150px] rounded-full animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-10">
            <h3 className="text-4xl md:text-6xl font-black text-foreground max-w-4xl leading-[1.05] tracking-tight">
              Ready to bring your project to life? Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                amazing together!
              </span>
            </h3>

            <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
              We're currently accepting new projects and inquiries for Spring
              2026. Reach out today for a consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full group/btn relative overflow-hidden px-12 py-7 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-[0_20px_40px_rgba(14,165,233,0.3)] transition-all duration-300 font-black uppercase tracking-[0.2em]">
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Contact via Email
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>

              <a href={`tel:${data.phone}`} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full group/btn border-2 border-accent text-accent hover:bg-accent/10 px-12 py-7 text-base font-black uppercase tracking-[0.2em] transition-all"
                >
                  <span className="flex items-center justify-center gap-4">
                    Call Now
                    <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Interactive Particles Background */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
