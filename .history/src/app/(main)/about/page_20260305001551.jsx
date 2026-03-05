import About from "@/components/About";
import { SectionWrapper } from "@/components/ui";
import { portfolioData } from "@/lib/data";

export default async function AboutPage() {
  const { profile } = portfolioData;

  return (
    <div className="pt-20">
      <SectionWrapper title="My Story" subtitle="Who I Am">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass p-10 rounded-3xl border-border/10">
            <h3 className="text-2xl font-bold mb-6 text-accent uppercase tracking-widest">
              My Mission
            </h3>
            <p className="text-xl leading-relaxed text-foreground/90 italic">
              "{profile.mission}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase text-muted-foreground tracking-widest border-b border-border/50 pb-2">
                Experience
              </h4>
              <ul className="space-y-6">
                <li className="relative pl-8 border-l-2 border-accent/20">
                  <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-accent" />
                  <div className="font-bold text-foreground">
                    Senior Web Developer
                  </div>
                  <div className="text-xs text-secondary mb-2">
                    2020 - Present
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Leading teams to build high-quality websites and apps using
                    the latest tools and technologies.
                  </p>
                </li>
                <li className="relative pl-8 border-l-2 border-border/10">
                  <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-border" />
                  <div className="font-bold text-foreground">
                    Lead Website Developer
                  </div>
                  <div className="text-xs text-secondary mb-2">2017 - 2020</div>
                  <p className="text-sm text-muted-foreground">
                    Focused on building beautiful and easy-to-use interfaces for
                    modern web platforms.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase text-muted-foreground tracking-widest border-b border-border/50 pb-2">
                Values
              </h4>
              <div className="flex flex-wrap gap-4">
                {profile.values.map((v) => (
                  <span
                    key={v}
                    className="px-5 py-2 rounded-xl border border-accent/20 text-accent font-bold uppercase text-[10px] tracking-widest"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <div className="pt-10">
                <h4 className="text-sm font-black uppercase text-muted-foreground tracking-widest border-b border-border/50 pb-2 mb-6">
                  What I Focus On
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focusing on modern designs, smart systems, and reliable tech
                  solutions that help businesses grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <About data={profile} />
    </div>
  );
}
