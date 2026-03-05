"use client";

import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import { Sparkles, Zap, Rocket, Globe, Code2, MapPin } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function ContactPage() {
  const tiltOptions = {
    tiltMaxAngleX: 10,
    tiltMaxAngleY: 10,
    perspective: 1000,
    scale: 1.02,
    transitionSpeed: 1000,
    gyroscope: true,
  };

  return (
    <div className="pt-12 space-y-4 overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Content */}
          <div className="space-y-8 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/5 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Let's Build Something Extraordinary</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
              Turning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500">
                Vision
              </span>{" "}
              <br />
              Into Reality.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              I specialize in bridging the gap between complex business
              requirements and high-performance technical solutions. Whether
              it's a new product or a technical challenge, I'm here to scale
              your impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border/10 shadow-sm transition-all hover:bg-accent/5">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-foreground">
                  Global Reach
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border/10 shadow-sm transition-all hover:bg-emerald-500/5">
                <Code2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-foreground">
                  Clean Tech
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: High-Impact Visual */}
          <div className="relative group order-1 lg:order-2">
            <Tilt {...tiltOptions}>
              <div className="relative z-10 p-3 glass rounded-[3rem] overflow-hidden group-hover:border-accent/40 transition-all duration-700 shadow-2xl">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/images/contact-hero.png"
                    alt="Innovation Collaboration Visual"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </Tilt>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 lg:-right-10 glass p-5 rounded-3xl border border-accent/30 shadow-2xl z-20 animate-floating">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/20">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-black text-foreground">
                    Ready
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    To Scale Your Business
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 lg:-left-10 glass p-5 rounded-3xl border border-blue-500/30 shadow-2xl z-20 animate-floating [animation-delay:2s]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-xl font-black text-foreground">Fast</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Execution Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <div className="relative py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-accent/5 blur-[150px] rounded-full -z-10" />
        <ProfessionalHighlights />
      </div>

      {/* Immersive Map Section */}
      <section className="relative w-full py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653428233!2d74.1950!3d31.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff013f993a4b%3A0xe6bf4357065f3f03!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709673400000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
            ></iframe>

            <div className="absolute bottom-8 left-8 right-8 md:right-auto glass p-6 rounded-3xl border border-accent/30 shadow-2xl z-20 animate-floating">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-accent/20">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-black text-foreground tracking-tight">
                    Visit My Hub
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Chung, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Narrative Section */}
      <SectionWrapper
        title="Where Innovation Meets Location"
        subtitle="Global Hub"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            Based in the strategically located tech enclave of{" "}
            <span className="text-foreground font-extrabold tracking-tight">
              Chung, Lahore
            </span>
            , I leverage a unique position at the heart of one of Pakistan's
            growing innovation corridors. From here, I collaborate with
            forward-thinking businesses worldwide, turning visionary ideas into
            battle-tested digital realities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="glass p-8 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-500 group">
              <div className="text-accent font-black text-3xl mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">
                Virtual Operations
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-border/50 hover:border-blue-500/30 transition-all duration-500 group">
              <div className="text-blue-500 font-black text-3xl mb-2 group-hover:scale-110 transition-transform">
                GMT +5
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">
                Strategic Timezone
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-border/50 hover:border-emerald-500/30 transition-all duration-500 group">
              <div className="text-emerald-500 font-black text-3xl mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">
                Agile Performance
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Contact />
    </div>
  );
}
