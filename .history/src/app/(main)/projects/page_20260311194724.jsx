import Projects from "@/components/Projects";

import { portfolioData } from "@/lib/data";

export default async function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="pt-20">
      <Projects data={projects} />
    </div>
  );
}
