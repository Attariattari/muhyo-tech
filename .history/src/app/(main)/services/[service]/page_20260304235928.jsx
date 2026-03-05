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
        SERVICE: {service?.replace("-", " ")}
      </h1>
      <div className="max-w-4xl flex flex-col gap-12 text-2xl leading-relaxed opacity-80 font-medium">
        <p>
          This service focuses on delivering high-quality results for your
          needs. I prioritize great design, solid building, and ease of use in
          every project I handle.
        </p>
        <p>
          My process involves learning about your goals, building the right
          solution, and making sure it works perfectly for you and your users.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-24 inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-cyan-500 transition-colors"
      >
        Let's Get Started &rarr;
      </Link>
    </main>
  );
}
