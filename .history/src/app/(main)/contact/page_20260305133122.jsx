import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="pt-24 space-y-16">
      <SectionWrapper title="Start a Conversation" subtitle="Contact Me">
        <p className="max-w-3xl mx-auto text-center text-muted-foreground text-lg italic bg-accent/5 p-8 rounded-3xl border border-accent/10">
          "I believe the best results come from transparent communication and
          clear goals. If you have a potential project or just want to chat
          about tech, I'm all ears."
        </p>
      </SectionWrapper>
      <Contact />
    </div>
  );
}
