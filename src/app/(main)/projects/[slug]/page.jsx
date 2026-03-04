"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams();

  return (
    <main className="p-32 bg-zinc-950 text-white min-h-screen">
      <Link
        href="/projects"
        className="text-sm opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; Back to Nexus
      </Link>
      <h1 className="text-6xl font-black mb-8 italic italic uppercase tracking-tighter">
        PROJECT: {slug?.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-12 text-2xl leading-relaxed opacity-80 font-medium">
          <p>
            This project represents the pinnacle of our engineering efforts. We
            utilized advanced state management and high-performance rendering
            techniques to achieve unparalleled speeds.
          </p>
          <p>
            Key innovations include custom-built animation systems and
            deep-integration database syncing.
          </p>
        </div>
        <div className="p-16 border border-white/5 bg-white/5 rounded-3xl flex flex-col gap-12 italic opacity-60">
          <div>
            <span className="text-xs uppercase font-black opacity-40">
              Tech Stack
            </span>
            <p className="font-bold underline">
              Next.js 15, React 19, Tailwind, Prisma
            </p>
          </div>
          <div>
            <span className="text-xs uppercase font-black opacity-40">
              Outcome
            </span>
            <p className="font-bold underline">
              100% Performance Score, Zero Latency
            </p>
          </div>
          <div>
            <span className="text-xs uppercase font-black opacity-40">
              Timeline
            </span>
            <p className="font-bold underline">
              12 Weeks from Genesis to Deployment
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
