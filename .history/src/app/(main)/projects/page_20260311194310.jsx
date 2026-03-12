import Portfolio from "@/components/Portfolio";

import { portfolioData } from "@/lib/data";

export default async function ProjectsPage() {
  const { projects } = portfolioData;

  return <Portfolio projects={projects} />;
}
