"use client";

import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Professional Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4">
              Get In Touch
            </h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Let's craft your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                digital future
              </span>
              .
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a visionary project in mind? Or simply want to discuss the
              latest in tech? I am here to bridge the gap between your ideas and
              reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Content */}
      <div className="pb-24">
        <Contact />
      </div>

      {/* Trust & FAQ Section */}
      <section className="py-24 border-t border-border/10 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
                Intelligence
              </h4>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Frequently <br />
                Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quick answers to common inquiries. For more detailed
                discussions, please use the contact form above.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "What is your project workflow?",
                  a: "I follow an agile methodology: Discovery, Planning, Development, and Iteration, ensuring transparency at every stage.",
                },
                {
                  q: "Do you handle enterprise scaling?",
                  a: "Yes, I specialize in building highly scalable cloud architectures capable of handling millions of concurrent requests.",
                },
                {
                  q: "How are project costs determined?",
                  a: "Pricing is based on technical complexity, resource requirements, and project duration. I provide fixed-price and hourly options.",
                },
                {
                  q: "What post-launch support is included?",
                  a: "Every project includes 30 days of complimentary critical support, with extended maintenance packages available.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background/50 border border-border/10 hover:border-accent/20 transition-all"
                >
                  <h4 className="text-sm font-bold text-foreground mb-3 flex gap-3 text-balance">
                    <span className="text-accent">0{i + 1}.</span>
                    {faq.q}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
