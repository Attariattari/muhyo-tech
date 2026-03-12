import PortfolioGallery from "@/components/PortfolioGallery";

import { portfolioData } from "@/lib/data";

export const metadata = {
  title: "Portfolio | Muhyo Tech",
  description:
    "Explore our featured projects, case studies, and digital transformations at Muhyo Tech. We specialize in engineering high-performance web and mobile solutions.",
};

export default async function ProjectsPage() {
  const { projects } = portfolioData;

  return <PortfolioGallery projects={projects} />;
}
