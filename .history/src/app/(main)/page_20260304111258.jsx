import { portfolioData } from "@/lib/data";

export default async function HomePage() {
  const data = portfolioData;

  return (
    <>
      <Hero />
      <About data={data.profile} />
      <Skills data={data.skills} />
      <Services data={data.services} />
      <Projects data={data.projects} />
      <Blog data={data.blogs} />
      <Contact />
    </>
  );
}
