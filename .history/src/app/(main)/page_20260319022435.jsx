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
      <div className="absolute  z-0">
        {/* Editorial Grid Pattern */}

        {/* Large Faded "EDITORIAL" Text */}
        <div className="absolute -top-10 -left-10 select-none pointer-events-none opacity-[0.02] dark:opacity-[0.03]">
          <h2 className="text-[20rem] font-black tracking-tighter uppercase italic -rotate-12 translate-x-[-10%] translate-y-[-10%]">
            HOME
          </h2>
        </div>

        {/* Floating Background Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-[5%] w-96 h-96 bg-accent/5 blur-[100px] rounded-full"
        />
      </div>
      <About data={data.profile} isHomePage={true} />
      <Skills data={data.skills} />
      <Services data={data.services} showViewAll={true} />
      <Projects data={data.projects} showViewAll={true} />
      <Blog data={data.blogs} isHomePage={true} />
      <Contact isHomePage={true} />
    </>
  );
}
