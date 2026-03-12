import About from "@/components/About";
import { SectionWrapper } from "@/components/ui";
import { portfolioData } from "@/lib/data";

export default async function AboutPage() {
  const { profile, skills } = portfolioData;

  return (
    <div className="">
      <About data={profile} skills={skills} />
    </div>
  );
}
