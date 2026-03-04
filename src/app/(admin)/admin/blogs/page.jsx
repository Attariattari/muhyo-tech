import Link from "next/link";

export default function AdminBlogsPage() {
  return (
    <main className="p-12">
      <Link
        href="/admin/dashboard"
        className="text-xs opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; Dashboard
      </Link>
      <h1 className="text-4xl font-black mb-12 italic uppercase tracking-tighter">
        MANAGE BLOGS
      </h1>
      <div className="flex flex-col gap-6">
        <button className="self-start px-8 py-3 bg-cyan-600 rounded font-bold hover:bg-cyan-500 transition">
          Create New Entry +
        </button>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-xs font-black uppercase tracking-widest italic">
              <tr>
                <th className="p-6">Title</th>
                <th className="p-6">Status</th>
                <th className="p-6">Date</th>
                <th className="p-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 opacity-80 font-medium">
              <tr>
                <td className="p-6">
                  Next.js 15: The Future of Web Engineering
                </td>
                <td className="p-6">
                  <span className="text-emerald-500">Published</span>
                </td>
                <td className="p-6 italic">2026-03-01</td>
                <td className="p-6 flex gap-4">
                  <button className="text-cyan-500 hover:underline">
                    Edit
                  </button>
                  <button className="text-rose-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-6">Design Systems in Modern UI</td>
                <td className="p-6">
                  <span className="text-emerald-500">Published</span>
                </td>
                <td className="p-6 italic">2026-02-15</td>
                <td className="p-6 flex gap-4">
                  <button className="text-cyan-500 hover:underline">
                    Edit
                  </button>
                  <button className="text-rose-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
