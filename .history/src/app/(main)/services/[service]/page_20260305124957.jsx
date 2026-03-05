"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { SectionWrapper, Card, Button } from "@/components/ui";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Shield,
  MessageSquare,
  PlayCircle,
  Star,
  HelpCircle,
  Layers,
  Cpu,
  Workflow,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/50 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-foreground/80 group-hover:text-accent transition-colors">
          {question}
        </span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-accent" />
        ) : (
          <Plus className="w-5 h-5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="py-4 text-muted-foreground leading-relaxed italic">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function ServiceDetailPage() {
  const { service: serviceId } = useParams();

  // Find service by ID or Slug
  const service = portfolioData.services.find(
    (s) => s.id.toString() === serviceId || s.slug === serviceId,
  );

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 selection:bg-accent/30 selection:text-foreground">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Navigation & Header */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-accent transition-all mb-12"
            >
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-accent/60" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                  Professional Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-tight italic">
                {service.title.split(" ").map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-accent" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground font-medium italic max-w-xl pb-2 leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Detailed Content */}
          <div className="lg:col-span-8 space-y-24">
            {/* Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-border/50 group shadow-2xl"
            >
              <img
                src={service.banner}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

              <div className="absolute top-6 right-6">
                <div className="glass px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">
                    Premium Service
                  </span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white shadow-xl border border-white/20">
                    <Layers className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                      Category
                    </p>
                    <p className="text-lg font-bold text-white uppercase tracking-tight">
                      {service.slug.replace("-", " ")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strategic Value */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Zap className="w-5 h-5 fill-accent/20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-foreground">
                  The Strategic Edge
                </h3>
              </div>
              <div className="p-10 rounded-[2.5rem] glass border border-border/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />
                <p className="text-2xl md:text-3xl text-foreground/90 leading-tight font-light relative z-10">
                  <span className="text-accent font-bold">"</span>
                  {service.problemSolved}
                  <span className="text-accent font-bold">"</span>
                </p>
              </div>
            </section>

            {/* Process / Execution */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-foreground">
                  Execution Framework
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[2rem] border border-border/50 bg-foreground/[0.01] hover:bg-foreground/[0.03] hover:border-accent/30 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-6 right-8 text-5xl font-black text-foreground/[0.03] group-hover:text-accent/[0.08] transition-colors italic">
                      {i + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tighter italic">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features & Tech */}
            <div className="grid md:grid-cols-2 gap-16">
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 flex items-center gap-3">
                  <Star className="w-4 h-4 fill-accent" /> Key Capabilities
                </h3>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border/40 hover:border-accent/20 hover:bg-accent/[0.02] transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                      <span className="text-sm font-bold text-foreground/80 tracking-tight">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 flex items-center gap-3">
                  <Cpu className="w-4 h-4" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-secondary/10 border border-border/50 text-foreground text-[10px] font-black uppercase tracking-widest hover:border-accent/40 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* FAQs */}
            <section className="pt-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-foreground">
                  Common Inquiries
                </h3>
              </div>
              <div className="divide-y divide-border/30">
                {service.faq.map((item, i) => (
                  <FAQItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Business Sidebar */}
          <div className="lg:col-span-4 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-blue-600 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

                <Card className="p-8 border border-border/50 relative overflow-hidden bg-card/40 backdrop-blur-xl rounded-[2.5rem]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div className="mb-10 text-center">
                    <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter italic leading-none">
                      Kickstart Your <br /> Solution
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed font-medium italic">
                      Ready to build something extraordinary? Our team is
                      standing by to bring your technical vision to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href="/contact" className="block relative group/btn">
                      <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur opacity-0 group-hover/btn:opacity-100 transition duration-500" />
                      <button className="relative w-full h-16 text-[10px] font-black uppercase tracking-[0.3em] bg-foreground text-background rounded-2xl transition-all shadow-xl hover:translate-y-[-2px] active:translate-y-0">
                        Secure Proposal
                      </button>
                    </Link>
                    <button className="w-full h-16 text-[10px] font-black uppercase tracking-[0.3em] text-foreground border border-border/80 hover:bg-foreground/5 rounded-2xl transition-all font-bold">
                      Quick Consultation
                    </button>
                  </div>

                  <div className="mt-12 pt-10 border-t border-border/30">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-background glass overflow-hidden"
                          >
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                              alt="Verified User"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[8px] font-black text-white">
                          +120
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-foreground uppercase tracking-widest leading-none">
                          5.0 Rating
                        </p>
                        <div className="flex gap-0.5 mt-1 justify-end">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className="w-2.5 h-2.5 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-accent/[0.03] border border-accent/10">
                      <Shield className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-[10px] font-black text-foreground uppercase tracking-widest mb-1 leading-none">
                          Quality Guaranteed
                        </p>
                        <p className="text-[9px] text-muted-foreground font-medium italic">
                          Rigorous testing and peer review protocols on every
                          asset produced.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-[2rem] bg-foreground/[0.02] border border-border/50 text-center">
                <p className="text-[11px] text-muted-foreground font-medium mb-3">
                  High-volume needs or complex legacy migrations?
                </p>
                <Link
                  href="/contact"
                  className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Request Custom Partnership
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
