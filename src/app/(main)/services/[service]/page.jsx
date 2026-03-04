"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ServiceDetailPage() {
  const { service } = useParams();

  return (
    <main className="p-32 bg-zinc-950 text-white min-h-screen">
      <Link
        href="/services"
        className="text-sm opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; View All Services
      </Link>
      <h1 className="text-6xl font-black mb-8 italic uppercase tracking-tighter italic">
        CORE SERVICE: {service?.replace("-", " ")}
      </h1>
      <div className="max-w-4xl flex flex-col gap-12 text-2xl leading-relaxed opacity-80 font-medium">
        <p>
          This service represents our core expertise in delivering high-value
          solutions to modern challenges. We prioritize engineering integrity,
          scalability, and exceptional user experience across all our
          deliverables.
        </p>
        <p>
          Our methodology involves a rigorous discovery phase followed by agile
          development and deep testing to ensure flawless execution.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-24 inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-cyan-500 transition-colors"
      >
        Inquire for Service &rarr;
      </Link>
    </main>
  );
}
