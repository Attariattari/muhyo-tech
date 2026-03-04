export default function ContactPage() {
  return (
    <main className="p-24 flex flex-col items-center justify-center bg-black text-white min-h-screen">
      <h1 className="text-4xl font-black mb-8 italic uppercase tracking-widest text-cyan-500">
        INITIATE CONTACT
      </h1>
      <form className="w-full max-w-lg flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-widest opacity-40">
            Identity
          </label>
          <input
            className="p-4 bg-white/5 border border-white/5 rounded-lg outline-none focus:border-cyan-500 transition"
            placeholder="Full Name..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-widest opacity-40">
            Communication Node
          </label>
          <input
            className="p-4 bg-white/5 border border-white/5 rounded-lg outline-none focus:border-cyan-500 transition"
            placeholder="Email Address..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-widest opacity-40">
            Information Data
          </label>
          <textarea
            rows={5}
            className="p-4 bg-white/5 border border-white/5 rounded-lg outline-none focus:border-cyan-500 transition"
            placeholder="Detailed message..."
          />
        </div>
        <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-cyan-500 transition-colors">
          Transmit Message &rarr;
        </button>
      </form>
    </main>
  );
}
