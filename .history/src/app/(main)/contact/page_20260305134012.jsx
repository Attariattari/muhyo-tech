import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-16">
      <SectionWrapper
        title="Let's Build Something Extraordinary"
        subtitle="Collaboration"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for New Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Have a Big Idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-indigo-500">
              Let's Make it Real.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I believe the best results come from transparent communication and
            clear goals. Whether you have a potential project or just want to
            chat about tech, I'm all ears.
          </p>
        </div>
      </SectionWrapper>

      <div className="relative overflow-hidden py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-accent/5 blur-[120px] rounded-full -z-10" />
        <ProfessionalHighlights />
      </div>

      <Contact />
    </div>
  );
}
