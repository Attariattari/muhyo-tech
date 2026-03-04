import Link from "next/link";

export default function AdminMessagesPage() {
  return (
    <main className="p-12">
      <Link
        href="/admin/dashboard"
        className="text-xs opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; Dashboard
      </Link>
      <h1 className="text-4xl font-black mb-12 italic uppercase tracking-tighter italic">
        MESSAGE QUEUE
      </h1>
      <div className="flex flex-col gap-6">
        <div className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-xs font-black uppercase tracking-widest italic font-bold">
              <tr>
                <th className="p-6">Origin</th>
                <th className="p-6">Content Extract</th>
                <th className="p-6">Date</th>
                <th className="p-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 opacity-80 font-medium italic">
              <tr>
                <td className="p-6">john@example.com</td>
                <td className="p-6">
                  Interested in your web engineering service...
                </td>
                <td className="p-6">2026-03-02 10:24 AM</td>
                <td className="p-6 flex gap-4">
                  <button className="text-cyan-500 hover:underline">
                    Read Info
                  </button>
                  <button className="text-rose-500 hover:underline">
                    Archive
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-6">jane@ux.design</td>
                <td className="p-6">
                  Let's collaborate on a high-end UI project...
                </td>
                <td className="p-6">2026-03-01 02:45 PM</td>
                <td className="p-6 flex gap-4">
                  <button className="text-cyan-500 hover:underline">
                    Read Info
                  </button>
                  <button className="text-rose-500 hover:underline">
                    Archive
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
