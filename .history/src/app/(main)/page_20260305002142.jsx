import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { portfolioData } from "@/lib/data";

export default async function HomePage() {
  const data = portfolioData;

  return (
    <>
      <Hero />
      <About data={data.profile} />
      <Skills data={data.skills} />
      <Services data={data.services} showViewAll={true} />
      <Projects data={data.projects} />
      <Blog data={data.blogs} />
      <Contact />
    </>
  );
}
