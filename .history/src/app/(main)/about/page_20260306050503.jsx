import About from "@/components/About";
import { SectionWrapper } from "@/components/ui";
import { portfolioData } from "@/lib/data";

export default async function AboutPage() {
  const { profile } = portfolioData;

  return (
    <div className="pt-20">
      <About data={profile} />
    </div>
  );
}
