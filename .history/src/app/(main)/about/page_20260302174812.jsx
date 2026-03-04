import { portfolioData } from "@/lib/data";
import { THEME_COLORS } from "@/lib/constants";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-24 text-white"
      style={{ background: THEME_COLORS.background }}
    >
      <h1
        className="text-5xl font-bold mb-8 italic uppercase tracking-tighter"
        style={{ color: THEME_COLORS.accent }}
      >
        About Muhyo Tech
      </h1>
      <div className="max-w-3xl flex flex-col gap-6 text-xl leading-relaxed opacity-90 p-12 border-white/10 border-l-4">
        <p>{portfolioData.about}</p>
        <p>
          Currently specializing in sophisticated React applications and
          bleeding-edge frontend architectures.
        </p>
        <p>
          Our philosophy is deeply rooted in delivering high-end user
          experiences through premium aesthetics and robust engineering.
        </p>
      </div>
      <Link
        href="/"
        className="mt-12 text-sm opacity-50 hover:opacity-100 italic transition underline"
      >
        Return to Nexus &rarr;
      </Link>
    </main>
  );
}
