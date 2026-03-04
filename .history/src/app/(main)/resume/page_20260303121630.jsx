import { SectionWrapper, Card } from "@/components/ui";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";

async function getData() {
  const [profile, skills] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/profile`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/skills`,
    ).then((res) => res.json()),
  ]);
  return { profile: profile.profile, skills: skills.skills };
}

export default async function ResumePage() {
  const { profile, skills } = await getData();

  return (
    <div className="pt-32 pb-24">
      <SectionWrapper title="My Resume" subtitle="Professional Vitae">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex justify-between items-center border-b border-border/50 pb-8">
            <div>
              <h3 className="text-3xl font-black text-foreground">
                {profile.name}
              </h3>
              <p className="text-accent font-bold uppercase tracking-widest text-sm mt-1">
                {profile.role}
              </p>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-widest hover-glow transition-all">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-6">
                <h4 className="flex items-center gap-3 text-lg font-bold text-foreground border-b border-border/10 pb-2">
                  <Briefcase className="w-5 h-5 text-accent" /> Work Experience
                </h4>
                <div className="space-y-8 pl-4 border-l-2 border-accent/20">
                  <div className="relative pl-6">
                    <span className="absolute left-[-26px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <div className="font-bold text-foreground">
                      Principal Architect @ TechGiant Corp.
                    </div>
                    <div className="text-xs text-secondary italic mb-3">
                      2020 - Present
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading the migration of microfrontends into Next.js 15,
                      improving build performance by 40% and SEO rankings across
                      major international platforms.
                    </p>
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-[-26px] top-1 w-4 h-4 rounded-full bg-slate-600" />
                    <div className="font-bold text-foreground font-medium opacity-80">
                      Full-Stack Dev @ WebSol Labs
                    </div>
                    <div className="text-xs text-secondary italic mb-3">
                      2017 - 2020
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developed custom UI libraries and robust Node.js APIs for
                      pharmaceutical SaaS applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="flex items-center gap-3 text-lg font-bold text-foreground border-b border-border/10 pb-2">
                  <GraduationCap className="w-5 h-5 text-accent" /> Education
                </h4>
                <div className="space-y-8 pl-4 border-l-2 border-accent/20">
                  <div className="relative pl-6">
                    <span className="absolute left-[-26px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <div className="font-bold text-foreground">
                      Computer Science (B.S.)
                    </div>
                    <div className="text-xs text-secondary italic">
                      2013 - 2017
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Standard University of Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h4 className="flex items-center gap-3 text-lg font-bold text-foreground border-b border-border/10 pb-2">
                  <FileText className="w-5 h-5 text-accent" /> Summary
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-accent/10 pl-4 py-2 bg-accent/5 rounded-r-xl">
                  {profile.longDescription}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground border-b border-border/10 pb-2 uppercase tracking-widest text-xs">
                  Core Skillset
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-4 py-2 rounded-xl bg-card border border-border text-xs font-bold text-foreground hover:border-accent transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
