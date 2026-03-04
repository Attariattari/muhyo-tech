import { SectionWrapper, Card, Button } from "@/components/ui";

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
      <SectionWrapper title="Digital CV" subtitle="My Credentials">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-border/10 pb-12">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-foreground mb-2">
                {profile.name}
              </h3>
              <p className="text-accent font-black uppercase tracking-[0.3em] text-xs">
                {profile.role}
              </p>
            </div>
            <Button
              variant="primary"
              className="px-10 py-5 shadow-2xl shadow-accent/25"
              icon={Download}
            >
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-16">
              <div className="space-y-8">
                <h4 className="flex items-center gap-4 text-small font-black uppercase text-secondary tracking-[0.2em] border-b border-border/10 pb-3">
                  <Briefcase size={20} className="text-accent icon-scale" /> Work Experience
                </h4>
                <div className="space-y-12 pl-4 border-l border-border/10">
                  <div className="relative pl-8">
                    <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/10" />
                    <div className="font-bold text-base text-foreground mb-1">
                      Principal Architect @ TechGiant Corp.
                    </div>
                    <div className="text-xs text-secondary font-black uppercase tracking-widest mb-4">
                      2020 - Present
                    </div>
                    <p className="leading-relaxed">
                      Leading the migration of microfrontends into Next.js 15,
                      improving build performance by 40% and SEO rankings across
                      major international platforms.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary/50" />
                    <div className="font-bold text-base text-foreground opacity-80 mb-1">
                      Full-Stack Dev @ WebSol Labs
                    </div>
                    <div className="text-xs text-secondary font-black uppercase tracking-widest mb-4">
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
                <h4 className="flex items-center gap-4 text-small font-black uppercase text-secondary tracking-[0.2em] border-b border-border/10 pb-3">
                  <GraduationCap size={20} className="text-accent icon-scale" /> Education
                </h4>
                <div className="space-y-12 pl-4 border-l border-border/10">
                  <div className="relative pl-8">
                    <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/10" />
                    <div className="font-bold text-base text-foreground mb-1">
                      Computer Science (B.S.)
                    </div>
                    <div className="text-xs text-secondary font-black uppercase tracking-widest">
                      2013 - 2017
                    </div>
                    <p className="text-small font-bold text-muted-foreground mt-2">
                      Standard University of Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="space-y-8">
                <h4 className="flex items-center gap-4 text-small font-black uppercase text-secondary tracking-[0.2em] border-b border-border/10 pb-3">
                  <FileText size={20} className="text-accent icon-scale" /> Professional Summary
                </h4>
                <p className="italic border-l-4 border-accent/20 pl-6 py-4 bg-accent/5 rounded-r-2xl leading-loose">
                  {profile.longDescription}
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="text-small font-black uppercase text-secondary tracking-[0.2em] border-b border-border/10 pb-3">
                  Technical Arsenal
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-5 py-2.5 rounded-xl bg-muted/30 border border-border/10 text-xs font-black uppercase tracking-widest text-foreground hover:border-accent transition-all hover:bg-accent/5"
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
