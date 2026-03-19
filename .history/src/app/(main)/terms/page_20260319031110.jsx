"use client";

import { motion } from "framer-motion";
import { FileText, Gavel, Scale, Info, ChevronRight, Cpu, Zap, Circle } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    {
      title: "Consensus Agreement",
      icon: <FileText size={20} />,
      content: "These Terms constitute a legally binding agreement governing the digital interaction between you and Muhyo Tech.",
      details: ["Binding Contract", "Mutual Acceptance", "Global Applicability", "Periodic Refinement"]
    },
    {
      title: "Creative Assets",
      icon: <Cpu size={20} />,
      content: "All proprietary code, architecture, and design tokens remain the exclusive intellectual property of the studio.",
      details: ["Source Integrity", "Copyright v4.1", "Licensing Tokens", "Usage Restrictions"]
    },
    {
      title: "Operational Ethics",
      icon: <Gavel size={20} />,
      content: "By engaging with our platform, you warrant adherence to accurate registration and secure digital conduct.",
      details: ["Identity Integrity", "Network Decorum", "Prohibited Malice", "System Respect"]
    },
    {
      title: "Liability Boundaries",
      icon: <Zap size={20} />,
      content: "Muhyo Tech maintains defined liability caps for digital services, ensuring project-based risk management.",
      details: ["Direct Damage Caps", "Force Majeure", "Operational Uptime", "Financial Immunity"]
    },
    {
      title: "Conflict Resolution",
      icon: <Scale size={20} />,
      content: "Resolution frameworks for digital disputes, prioritizing international arbitration and technical mediation.",
      details: ["Binding Protocols", "Legal Seat: Int.", "Timeframe Metrics", "Escalation Steps"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-40 px-6 lg:px-24 relative overflow-hidden bg-background text-foreground selection:bg-primary/30">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-primary/5 blur-[150px] pointer-events-none opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="mb-40 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-primary"
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">Nexus</Link>
            <ChevronRight size={10} className="text-muted-foreground" />
            <span className="text-muted-foreground/50">Service Governance</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] mix-blend-difference"
          >
            Terms <span className="text-primary">Engagement</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-xl lg:text-2xl italic max-w-3xl leading-relaxed pl-2 border-l-2 border-primary/20"
          >
            Strategic framework governing the technical collaboration and professional engagement at Muhyo Tech.
          </motion.p>
        </div>

        {/* Minimalist Tree Visualization */}
        <div className="relative">
          {/* Trunk SVG with Path Animation */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 overflow-visible">
            <svg width="2" height="100%" className="overflow-visible h-full w-[2px]">
              <motion.line
                x1="1" y1="0" x2="1" y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>

          <div className="space-y-40">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Branch Connection */}
                <div className={`absolute left-6 lg:left-1/2 top-6 h-px bg-gradient-to-r ${
                  idx % 2 === 0 
                  ? "from-primary/50 to-transparent lg:right-1/2 lg:left-auto" 
                  : "from-transparent to-primary/50 lg:left-1/2 lg:right-auto"
                } w-24 hidden lg:block`} />

                {/* Node Point Glower */}
                <div className="absolute left-6 lg:left-1/2 top-6 w-3 h-3 rounded-full bg-primary animate-pulse lg:-translate-x-1.5 z-20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />

                {/* Information Block (No Card) */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0 truncate whitespace-normal`}>
                  <div className="space-y-6">
                    <div className={`flex items-center gap-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="text-primary w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                        {section.icon}
                      </div>
                      <h3 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-lg italic leading-snug max-w-md ml-auto mr-0 md:ml-0 md:mr-auto">
                      {section.content}
                    </p>

                    <div className={`flex flex-wrap gap-x-6 gap-y-3 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {section.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 group cursor-default">
                          <Circle size={4} className="text-primary group-hover:scale-150 transition-transform" fill="currentColor" />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground opacity-40 group-hover:opacity-100 transition-opacity">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ghost Column */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-60 text-center space-y-12"
        >
          <div className="h-px w-24 bg-primary/30 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            Operational <span className="text-primary">Integrity</span> Verified
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/contact"
              className="text-xs font-black uppercase tracking-[0.4em] text-primary hover:text-foreground transition-colors group flex items-center gap-3"
            >
              Consult Legal Advisor
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
