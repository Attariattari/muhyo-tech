"use client";

import Link from "next/link";
import { THEME_COLORS } from "@/lib/constants";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-24 text-white"
      style={{ background: THEME_COLORS.background }}
    >
      <h1
        className="text-6xl font-bold mb-4"
        style={{ color: THEME_COLORS.accent }}
      >
        {portfolioData.name}
      </h1>
      <p
        className="text-xl mb-8 opacity-80"
        style={{ color: THEME_COLORS.text }}
      >
        {portfolioData.title}
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">
        <Link
          href="/about"
          className="p-6 border rounded-xl hover:bg-white/10 transition"
        >
          <h2 className="text-2xl font-bold">About &rarr;</h2>
          <p>Learn more about my journey and background.</p>
        </Link>
        <Link
          href="/projects"
          className="p-6 border rounded-xl hover:bg-white/10 transition"
        >
          <h2 className="text-2xl font-bold">Projects &rarr;</h2>
          <p>Check out my latest web engineering work.</p>
        </Link>
        <Link
          href="/services"
          className="p-6 border rounded-xl hover:bg-white/10 transition"
        >
          <h2 className="text-2xl font-bold">Services &rarr;</h2>
          <p>Discover how I can help your next project.</p>
        </Link>
        <Link
          href="/contact"
          className="p-6 border rounded-xl hover:bg-white/10 transition"
        >
          <h2 className="text-2xl font-bold">Contact &rarr;</h2>
          <p>Get in touch for collaborations or inquiries.</p>
        </Link>
      </div>

      <Link
        href="/admin/login"
        className="mt-12 text-sm opacity-50 hover:opacity-100 italic"
      >
        Go to Admin Dashboard &rarr;
      </Link>
    </main>
  );
}
