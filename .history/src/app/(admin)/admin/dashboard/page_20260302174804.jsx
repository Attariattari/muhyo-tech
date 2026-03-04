import Link from "next/link";
import { ADMIN_NAVIGATION_LINKS } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <main className="p-12">
      <h1 className="text-4xl font-black mb-8 italic">CORE DASHBOARD</h1>
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div className="p-8 border-white/5 border bg-white/5 rounded-2xl flex flex-col gap-2">
          <span className="text-xs opacity-50 uppercase font-black">
            Active Projects
          </span>
          <span className="text-6xl font-black text-cyan-500">24</span>
        </div>
        <div className="p-8 border-white/5 border bg-white/5 rounded-2xl flex flex-col gap-2">
          <span className="text-xs opacity-50 uppercase font-black">
            Total Reads
          </span>
          <span className="text-6xl font-black text-violet-500">12k</span>
        </div>
        <div className="p-8 border-white/5 border bg-white/5 rounded-2xl flex flex-col gap-2">
          <span className="text-xs opacity-50 uppercase font-black">
            New Messages
          </span>
          <span className="text-6xl font-black text-emerald-500">08</span>
        </div>
        <div className="p-8 border-white/5 border bg-white/5 rounded-2xl flex flex-col gap-2">
          <span className="text-xs opacity-50 uppercase font-black">
            System Status
          </span>
          <span className="text-6xl font-black text-amber-500 italic">OP</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4 opacity-70">
          Management Modules
        </h2>
        <div className="flex flex-wrap gap-4">
          {ADMIN_NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-8 py-5 border border-white/10 rounded-xl hover:bg-white/10 transition uppercase tracking-widest text-sm font-bold"
            >
              {link.name} &rarr;
            </Link>
          ))}
        </div>
      </div>

      <Link
        href="/"
        className="mt-16 block text-sm opacity-50 hover:opacity-100 hover:underline"
      >
        Back to Public Realm &rarr;
      </Link>
    </main>
  );
}
