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
