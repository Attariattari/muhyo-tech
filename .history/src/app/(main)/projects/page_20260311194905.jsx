import Portfolio from "@/components/Portfolio";
import { portfolioData } from "@/lib/data";

export default async function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen">
      <Portfolio projects={projects} />
    </main>
  );
}
