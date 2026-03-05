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
    <div className="bg-background min-h-screen pt-32 pb-24 selection:bg-accent selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Core Services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[9px] font-black uppercase tracking-widest border border-accent/20">
                  Global Standard
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
              </div>

              <h1 className="text-5xl md:text-8xl font-black text-foreground mb-10 uppercase tracking-tighter leading-[0.9] italic">
                {service.title}
              </h1>

              {/* Service Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-20 border border-border/50 group"
              >
                <img
                  src={service.banner}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-accent backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                        Service Vertical
                      </p>
                      <p className="text-sm font-bold text-white uppercase tracking-tighter">
                        {service.slug.replace("-", " ")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative mb-20 group">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/40 group-hover:bg-accent transition-colors" />
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-tight italic max-w-2xl">
                  "{service.description}"
                </p>
              </div>

              {/* Problem Solved Section */}
              <div className="mb-24 p-8 rounded-3xl bg-foreground/[0.02] border border-border/50 backdrop-blur-sm">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
                  <Zap className="w-4 h-4 fill-accent" /> THE CHALLENGE WE SOLVE
                </h3>
                <p className="text-xl text-foreground/80 leading-relaxed font-light">
                  {service.problemSolved}
                </p>
              </div>

              {/* Development Process */}
              <section className="mb-24">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-12 flex items-center gap-3">
                  <Workflow className="w-4 h-4" /> THE EXECUTION BLUEPRINT
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-3xl bg-secondary/5 border border-border/50 hover:border-accent/40 transition-all group"
                    >
                      <div className="text-4xl font-black text-foreground/5 mb-6 group-hover:text-accent/20 transition-colors">
                        0{i + 1}
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4 italic uppercase tracking-tighter">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Key Features Grid */}
              <section className="mb-24">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-12 flex items-center gap-3">
                  <Layers className="w-4 h-4" /> CORE CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/[0.01] border border-border/50 hover:bg-foreground/[0.03] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg font-bold text-foreground/90 tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section className="mb-24">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 flex items-center gap-3">
                  <Cpu className="w-4 h-4" /> THE TECH ECOSYSTEM
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 rounded-full bg-secondary/5 border border-border/50 text-muted-foreground text-xs font-bold uppercase tracking-widest hover:border-accent/60 hover:text-foreground transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 flex items-center gap-3">
                  <MessageSquare className="w-4 h-4" /> FREQUENTLY ASKED
                </h3>
                <div className="space-y-2">
                  {service.faq.map((item, i) => (
                    <FAQItem
                      key={i}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </section>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent to-blue-600 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

                <Card className="p-10 border border-border/50 relative overflow-hidden bg-card rounded-[2.5rem]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />

                  <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none italic">
                    Initiate <br /> Development
                  </h3>
                  <p className="text-muted-foreground text-sm mb-10 leading-relaxed font-light">
                    Ready to engineer your next success? Let's discuss how{" "}
                    <span className="text-accent font-bold">
                      {service.title}
                    </span>{" "}
                    can evolve your business operations.
                  </p>

                  <div className="space-y-4">
                    <Link href="/contact" className="block">
                      <Button className="w-full h-16 text-xs font-black uppercase tracking-[0.2em] bg-accent hover:bg-accent/90 text-white rounded-2xl shadow-lg shadow-accent/20 border-none">
                        Request Proposal
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full h-16 text-xs font-black uppercase tracking-[0.2em] text-foreground border-border/50 hover:bg-foreground/5 rounded-2xl transition-all"
                    >
                      Discovery Call
                    </Button>
                  </div>

                  <div className="mt-10 pt-10 border-t border-border/50 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-background bg-secondary/20 overflow-hidden flex items-center justify-center"
                          >
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                              alt="Client"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-foreground uppercase tracking-wider">
                          50+ Active Clients
                        </span>
                        <div className="flex gap-0.5 mt-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className="w-2.5 h-2.5 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-foreground/[0.03] border border-border/50">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-black text-foreground uppercase tracking-widest mb-1">
                          Guaranteed Quality
                        </p>
                        <p className="text-[10px] text-muted-foreground leading-normal">
                          Full confidentiality and legal protection on all
                          intellectual property.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-4 p-6 rounded-[2rem] bg-accent/5 border border-accent/10 relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent transition-all" />
                <HelpCircle className="w-6 h-6 text-accent shrink-0" />
                <p className="text-xs text-zinc-400 font-medium">
                  Looking for a custom bundle or agency-style partnership?{" "}
                  <Link
                    href="/contact"
                    className="text-accent underline hover:text-foreground transition-colors"
                  >
                    Inquire directly.
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
