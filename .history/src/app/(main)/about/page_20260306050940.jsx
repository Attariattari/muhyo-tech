import About from "@/components/About";
import Skills from "@/components/Skills";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import { SectionWrapper, Button } from "@/components/ui";
import { portfolioData } from "@/lib/data";
import { Trophy, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function AboutPage() {
  const { profile, skills } = portfolioData;

  return (
    <div className="flex flex-col gap-0 pb-20">
      <About data={profile} />

      {/* Mission Section */}
      <section className="py-20 bg-accent/5 border-y border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-3 rounded-2xl bg-accent/20 text-accent animate-bounce">
              <Trophy className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            My Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium italic leading-relaxed">
            "
            {profile.mission ||
              "To build simple, powerful, and beautiful websites that make a difference."}
            "
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-2xl">99%</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Client Satisfaction
              </span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-2xl">24/7</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Reliability
              </span>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalHighlights />

      <div className="py-20 lg:py-32">
        <Skills data={skills} />
      </div>

      {/* CTA Section */}
      <SectionWrapper id="cta">
        <div className="relative p-12 lg:p-24 rounded-[3rem] bg-gradient-to-br from-accent/20 via-blue-900/10 to-transparent border border-white/10 overflow-hidden text-center lg:text-left">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
            <ShieldCheck className="w-64 h-64 text-accent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Ready to start a <br />
                <span className="text-accent">Success Story?</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium max-w-md mx-auto lg:mx-0">
                Lets collaborate to transform your vision into a
                high-performance digital reality that outpaces the competition.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="/contact">
                <Button className="w-full sm:w-auto flex items-center gap-3">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
