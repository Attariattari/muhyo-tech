import { Button, SectionWrapper } from "@/components/ui";
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
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border/10 pb-12">
            <div>
              <h3 className="mb-2">{profile.name}</h3>
              <p className="text-accent font-black uppercase tracking-[0.3em] text-small">
                {profile.role}
              </p>
            </div>
            <Button
              variant="primary"
              className="px-10 py-4 shadow-xl shadow-accent/20"
              icon={Download}
            >
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-8">
                <h4 className="flex items-center gap-4 card-title text-foreground border-b border-border/5 pb-4">
                  <Briefcase size={20} className="text-accent icon-scale" />{" "}
                  Experience
                </h4>
                <div className="space-y-10 pl-4 border-l-2 border-accent/10">
                  <div className="relative pl-8">
                    <span className="absolute left-[-29px] top-1.5 w-5 h-5 rounded-full bg-accent ring-8 ring-accent/5" />
                    <div className="font-bold text-foreground text-small uppercase tracking-wider">
                      Principal Architect @ TechGiant
                    </div>
                    <div className="text-xs text-secondary font-bold uppercase tracking-widest mt-1 mb-4">
                      2020 - PRESENT
                    </div>
                    <p className="leading-relaxed">
                      Leading the migration of microfrontends into Next.js 15,
                      improving build performance by 40%.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[-29px] top-1.5 w-5 h-5 rounded-full bg-slate-700 ring-8 ring-slate-700/5" />
                    <div className="font-bold text-foreground/80 text-small uppercase tracking-wider">
                      Full-Stack Dev @ WebSol Labs
                    </div>
                    <div className="text-xs text-secondary/70 font-bold uppercase tracking-widest mt-1 mb-4">
                      2017 - 2020
                    </div>
                    <p className="leading-relaxed">
                      Developed custom UI libraries and robust Node.js APIs for
                      pharmaceutical SaaS applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="flex items-center gap-4 card-title text-foreground border-b border-border/5 pb-4">
                  <GraduationCap size={20} className="text-accent icon-scale" />{" "}
                  Education
                </h4>
                <div className="space-y-10 pl-4 border-l-2 border-accent/10">
                  <div className="relative pl-8">
                    <span className="absolute left-[-29px] top-1.5 w-5 h-5 rounded-full bg-accent ring-8 ring-accent/5" />
                    <div className="font-bold text-foreground text-small uppercase tracking-wider">
                      Computer Science (B.S.)
                    </div>
                    <div className="text-xs text-secondary font-bold uppercase tracking-widest mt-1 mb-4">
                      2013 - 2017
                    </div>
                    <p className="font-bold text-accent">
                      Standard University of Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <h4 className="flex items-center gap-4 card-title text-foreground border-b border-border/5 pb-4">
                  <FileText size={20} className="text-accent icon-scale" />{" "}
                  Summary
                </h4>
                <p className="italic border-l-4 border-accent/10 pl-6 py-4 bg-accent/5 rounded-2xl leading-relaxed">
                  {profile.longDescription}
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="card-title text-foreground border-b border-border/5 pb-4 uppercase tracking-[0.3em] text-small">
                  Core Skillset
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-5 py-2.5 rounded-xl bg-card border border-border/20 text-small font-bold text-foreground hover:border-accent hover:text-accent transition-all cursor-default"
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
