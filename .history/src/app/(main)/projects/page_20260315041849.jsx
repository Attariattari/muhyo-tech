import Portfolio from "@/components/Portfolio";
import ProjectsClientPage from "./ProjectsClientPage";
import { portfolioData } from "@/lib/data";

export const metadata = {
  title: "Premium Portfolio & Works | Muhyo Tech",
  description:
    "Explore our curated selection of digital masterpieces. Discover how Muhyo Tech solves complex engineering challenges with modern architecture and design.",
  openGraph: {
    title: "Muhyo Tech Portfolio | Featured Engineering Projects",
    description:
      "Browse our high-performance web and mobile solutions, showcasing our expertise in Next.js, React, Node.js, and cutting-edge UI/UX.",
    images: [
      "https://res.cloudinary.com/dg5gwixf1/image/upload/v1772738795/ChatGPT_Image_Mar_5_2026_12_26_08_PM_hdvfoz.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhyo Tech Portfolio | Digital Product Innovation",
    description:
      "Witness the convergence of stunning aesthetics and resilient software architecture.",
  },
};

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return <Portfolio projects={projects} />;
}
