import { portfolioData } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="p-24 bg-zinc-950 text-white min-h-screen">
      <h1 className="text-5xl font-black mb-16 italic tracking-tight">
        ENGINEERING EXCELLENCE
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <Link
            key={id}
            href={`/projects/project-${id}`}
            className="p-12 border border-white/5 bg-white/5 rounded-3xl hover:bg-white/10 transition flex flex-col gap-6"
          >
            <h2 className="text-3xl font-black italic">PROJECT-0{id}</h2>
            <p className="opacity-50 text-sm italic uppercase tracking-widest">
              Built with precision technology.
            </p>
            <span className="mt-4 font-bold tracking-widest text-xs uppercase opacity-30 hover:opacity-100 italic transition underline">
              Inspect Core Code &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
