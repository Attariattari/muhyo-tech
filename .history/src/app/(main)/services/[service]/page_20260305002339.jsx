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
} from "lucide-react";

export default function ServiceDetailPage() {
  const { service: serviceId } = useParams();
  const service = portfolioData.services.find(
    (s) => s.id.toString() === serviceId,
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
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-accent/20">
                Premium Service
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-8 uppercase tracking-tighter leading-none italic">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 italic border-l-4 border-accent pl-6">
                "{service.description}"
              </p>

              <div className="space-y-12 mb-16">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> The Problem It Solves
                  </h3>
                  <p className="text-lg text-foreground opacity-90 leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-border/20"
                      >
                        <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-bold text-sm tracking-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Sidebar / CTA */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32"
            >
              <Card className="p-10 border-2 border-accent/20 relative overflow-hidden bg-zinc-950">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />

                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">
                  Start Your <br /> Journey
                </h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  Ready to take your project to the next level? Let's discuss
                  how {service.title} can help you achieve your goals.
                </p>

                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button className="w-full py-4 text-xs font-black uppercase tracking-widest">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full py-4 text-xs font-black uppercase tracking-widest text-white border-white/20 hover:bg-white/10"
                  >
                    Schedule a Call
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-accent overflow-hidden"
                      >
                        <div className="w-full h-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-white">
                          U{i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                    Joined by 50+ Clients
                  </span>
                </div>
              </Card>

              <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-accent/5 border border-accent/10 italic">
                <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Need a custom solution not listed here?{" "}
                  <Link href="/contact" className="text-accent underline">
                    Let's talk.
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
