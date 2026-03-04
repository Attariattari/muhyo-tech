import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

async function getData() {
  const [profile, skills, services, projects, blogs] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/profile`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/skills`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/services`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/projects`,
    ).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/blogs`,
    ).then((res) => res.json()),
  ]);

  return {
    profile: profile.profile,
    skills: skills.skills,
    services: services.services,
    projects: projects.projects,
    blogs: blogs.blogs,
  };
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="flex flex-col bg-background relative selection:bg-accent selection:text-accent-foreground">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[80%] h-[60%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <Hero />

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12 xl:px-24 space-y-48 pb-48">
        <div className="w-full max-w-7xl">
          <About data={data.profile} />
        </div>

        <div className="w-full max-w-7xl">
          <Skills data={data.skills} />
        </div>

        <div className="w-full max-w-7xl">
          <Services data={data.services} />
        </div>

        <div className="w-full max-w-7xl">
          <Projects data={data.projects} />
        </div>

        <div className="w-full max-w-7xl">
          <Blog data={data.blogs} />
        </div>

        <div className="w-full max-w-7xl">
          <Contact />
        </div>
      </div>
    </div>
  );
}
