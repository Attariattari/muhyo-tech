"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <main className="p-32 bg-zinc-950 text-white min-h-screen">
      <Link
        href="/blog"
        className="text-sm opacity-50 hover:opacity-100 hover:underline uppercase font-black tracking-widest italic mb-24 block"
      >
        &larr; Return to Insights
      </Link>
      <h1 className="text-6xl font-black mb-8 italic italic uppercase tracking-tighter italic">
        INSIGHT: {slug?.replace("-", " ")}
      </h1>
      <div className="max-w-4xl flex flex-col gap-12 text-2xl leading-relaxed opacity-80 font-medium">
        <p>
          This insight exploration delves deep into the core concepts driving
          modern web performance and user experience. We explore how recent
          advancements in React and Next.js are shifting the paradigm from
          simple rendering to intelligent data orchestration.
        </p>
        <p>
          By leveraging the latest in server components and high-efficiency
          styling, developers can now build applications that were previously
          thought impossible at scale.
        </p>
      </div>
      <div className="mt-24 p-12 border border-white/5 bg-white/5 rounded-3xl flex flex-col gap-8 italic opacity-60">
        <span className="text-xs uppercase font-black opacity-40 italic">
          Key Takeaways
        </span>
        <ul className="list-disc ml-8 flex flex-col gap-4">
          <li className="font-bold underline leading-relaxed">
            Performance is the core feature, not an afterthought.
          </li>
          <li className="font-bold underline leading-relaxed">
            Server-side rendering is the key to dynamic, responsive interfaces.
          </li>
          <li className="font-bold underline leading-relaxed">
            Consistency in design systems is the foundation of high-quality
            products.
          </li>
        </ul>
      </div>
    </main>
  );
}
