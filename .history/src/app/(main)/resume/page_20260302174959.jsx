export default function ResumePage() {
  return (
    <main className="p-32 bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-black mb-16 italic tracking-tight uppercase tracking-[0.2em] text-white">
        PROFESSIONAL DOSSIER
      </h1>
      <div className="w-full max-w-4xl p-24 border border-white/10 bg-white/5 rounded-3xl flex flex-col gap-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-xs font-black uppercase tracking-widest opacity-20 italic">
          CONFIDENTIAL-MUHYO-ARCHIVE
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="text-3xl font-black mb-8 italic border-b-2 border-white/10 pb-4">
            CORE ARCHITECTURE
          </h2>
          <div className="flex flex-col gap-12 text-2xl leading-relaxed opacity-80 font-medium">
            <p>
              Dedicated to engineering high-performance web applications and
              sophisticated design systems. Deep expertise in React, Next.js,
              and modern CSS architectures.
            </p>
            <div className="grid grid-cols-2 gap-12 italic opacity-60">
              <div>
                <span className="text-xs uppercase font-black opacity-40">
                  Specialization
                </span>
                <p className="font-bold underline">
                  Frontend Engineering, UI/UX Design
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-black opacity-40">
                  Infrastructure
                </span>
                <p className="font-bold underline">Vercel, AWS, Google Cloud</p>
              </div>
              <div>
                <span className="text-xs uppercase font-black opacity-40">
                  Interests
                </span>
                <p className="font-bold underline">
                  AI-Driven UI, High-Performance Graphics
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-black opacity-40">
                  Education
                </span>
                <p className="font-bold underline">
                  Advanced Computational Design Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-16 px-12 py-5 border border-white/20 rounded-full hover:bg-white/10 transition uppercase tracking-widest text-xs font-bold italic">
        Download PDF Dossier &rarr;
      </button>
    </main>
  );
}
