import Projects from "@/components/Projects";

async function getProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/projects`,
  );
  return res.json();
}

export default async function ProjectsPage() {
  const { projects } = await getProjects();

  return (
    <div className="pt-20">
      <Projects data={projects} />
    </div>
  );
}
