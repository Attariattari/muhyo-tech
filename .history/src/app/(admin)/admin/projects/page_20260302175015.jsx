import Link from "next/link";

export default function AdminProjectsPage() {
  return (
    <main className="p-12">
      <Link
        href="/admin/dashboard"
        className="text-xs opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; Dashboard
      </Link>
      <h1 className="text-4xl font-black mb-12 italic uppercase tracking-tighter">
        MANAGE PROJECTS
      </h1>
      <div className="flex flex-col gap-6">
        <button className="self-start px-8 py-3 bg-violet-600 rounded font-bold hover:bg-violet-500 transition shadow-lg">
          New Project Architecture +
        </button>
        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="p-10 border border-white/5 bg-white/5 rounded-3xl flex flex-col gap-8 italic hover:border-violet-500 transition relative group group-hover:bg-white/10"
            >
              <span className="text-xs uppercase font-black opacity-40">
                PRJ-0{id}
              </span>
              <h2 className="text-2xl font-black">Project {id} Core</h2>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition absolute top-0 right-0 p-8">
                <button className="text-cyan-500 hover:underline">Edit</button>
                <button className="text-rose-500 hover:underline">Purge</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
