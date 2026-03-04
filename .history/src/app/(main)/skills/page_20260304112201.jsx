import Skills from "@/components/Skills";
import { portfolioData } from "@/lib/data";

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <Skills data={portfolioData.skills} />
    </div>
  );
}
