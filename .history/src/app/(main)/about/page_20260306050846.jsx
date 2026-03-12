import About from "@/components/About";
import Skills from "@/components/Skills";
import { portfolioData } from "@/lib/data";

export default async function AboutPage() {
  const { profile, skills } = portfolioData;

  return (
    <div className="flex flex-col gap-0">
      <About data={profile} />
      <div className="py-20 lg:py-32">
        <Skills data={skills} />
      </div>
    </div>
  );
}
