import { portfolioData } from "@/lib/data";

export default function SkillsPage() {
  return (
    <main className="p-24 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Technological Arsenal</h1>
      <div className="flex flex-wrap gap-4">
        {portfolioData.skills.map((skill) => (
          <div
            key={skill}
            className="px-8 py-4 border border-white/10 rounded-full hover:border-cyan-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </main>
  );
}
