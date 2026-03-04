"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

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

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Connect With Me"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
          <div className="p-10 glass rounded-[2rem] border border-border/10">
            <h3 className="card-title mb-10 text-foreground">
              Contact Details
            </h3>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10 text-accent">
                  <Mail size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-small font-black uppercase text-muted-foreground tracking-[0.2em]">
                    Email
                  </span>
                  <a
                    href="mailto:alex@muhyo.tech"
                    className="text-sm font-bold text-foreground hover:text-accent transition-colors"
                  >
                    alex@muhyo.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-500">
                  <Phone size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-small font-black uppercase text-muted-foreground tracking-[0.2em]">
                    Phone
                  </span>
                  <a
                    href="tel:+15550001234"
                    className="text-sm font-bold text-foreground hover:text-accent transition-colors"
                  >
                    +1 (555) 000-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-500">
                  <MapPin size={20} className="icon-scale" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-small font-black uppercase text-muted-foreground tracking-[0.2em]">
                    Location
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 glass bg-accent/10 rounded-[2.5rem] border border-accent/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <h4 className="text-lg font-black text-accent mb-4 tracking-tight uppercase">
              Ready for Collaboration?
            </h4>
            <p className="text-small leading-relaxed">
              I'm open to interesting projects and professional networking.
              Let's discuss your vision.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-10 md:p-14 border border-border/10 glass-dark">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-small font-black uppercase text-muted-foreground tracking-[0.3em] ml-1">
                    Your Name
                  </label>
                  <input
                    placeholder="Enter full name"
                    className="w-full bg-background/30 border border-border/30 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-small font-black uppercase text-muted-foreground tracking-[0.3em] ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@company.com"
                    className="w-full bg-background/30 border border-border/30 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-small font-black uppercase text-muted-foreground tracking-[0.3em] ml-1">
                  Project Goal
                </label>
                <input
                  placeholder="What are we building?"
                  className="w-full bg-background/30 border border-border/30 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all placeholder:text-muted-foreground/50 placeholder:italic"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-small font-black uppercase text-muted-foreground tracking-[0.3em] ml-1">
                  Detailed Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Share your requirements and timelines..."
                  className="w-full bg-background/30 border border-border/30 p-5 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all resize-none placeholder:text-muted-foreground/50 placeholder:italic"
                  required
                />
              </div>

              <Button
                disabled={isSending || isSent}
                className="w-full py-6 text-sm font-black tracking-[0.3em] shadow-2xl"
                icon={isSending ? Loader2 : Send}
                type="submit"
              >
                {isSending
                  ? "Transmitting..."
                  : isSent
                    ? "Message Received"
                    : "Dispatch Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
