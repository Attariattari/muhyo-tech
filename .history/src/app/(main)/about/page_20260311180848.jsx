import About from "@/components/About";
import AboutExtended from "@/components/AboutExtended";
import { portfolioData } from "@/lib/data";

export default async function AboutPage() {
  const { profile } = portfolioData;

  return (
    <div className="flex flex-col">
      <About data={profile} />
      <AboutExtended data={profile} />
    </div>
  );
}
