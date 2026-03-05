import Contact from "@/components/Contact";
import { SectionWrapper } from "@/components/ui";

export const metadata = {
  title: "Contact | Alex Cameron - Full-Stack Developer",
  description:
    "Get in touch with Alex Cameron for web development, UI/UX design, and cloud infrastructure projects. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <SectionWrapper
        title="Start a Conversation"
        subtitle="Contact Me"
        className="pb-0"
      >
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative p-10 bg-background/40 backdrop-blur-xl rounded-[32px] border border-accent/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L110 110M110 10L10 110"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <p className="relative text-center text-foreground/80 text-xl md:text-2xl font-medium leading-relaxed italic">
              "I believe the best results come from{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                transparent communication
              </span>{" "}
              and clear goals. If you have a potential project or just want to
              chat about tech, I'm all ears."
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <div className="h-1.5 w-12 bg-accent rounded-full" />
              <div className="h-1.5 w-4 bg-accent/30 rounded-full" />
              <div className="h-1.5 w-4 bg-accent/30 rounded-full" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Contact />

      {/* Footer-like Section for Contact Page */}
      <SectionWrapper className="py-20 bg-accent/5 rounded-[60px] mx-4 md:mx-12 mt-12 border border-accent/10">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Based in San Francisco, working worldwide.
          </h3>
          <p className="text-muted-foreground">
            Available for freelance projects and full-time opportunities.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
