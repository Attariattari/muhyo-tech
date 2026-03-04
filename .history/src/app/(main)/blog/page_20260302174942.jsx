import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Next.js 15: The Future of Web Engineering",
      slug: "nextjs-15-future",
      date: "2026-03-01",
      description:
        "Exploring the revolutionary features of the latest Next.js release.",
    },
    {
      title: "Design Systems in Modern UI",
      slug: "design-systems-modern-ui",
      date: "2026-02-15",
      description:
        "Why building a visual core is essential for scalable applications.",
    },
  ];

  return (
    <main className="p-32 bg-black text-white min-h-screen">
      <h1 className="text-6xl font-black mb-24 italic tracking-tight uppercase tracking-widest text-emerald-500">
        INSIGHTS
      </h1>
      <div className="flex flex-col gap-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-16 border border-white/5 bg-white/5 rounded-3xl hover:bg-white/10 transition block relative overflow-hidden"
          >
            <span className="text-xs uppercase font-black opacity-40 mb-4 block tracking-widest">
              {post.date}
            </span>
            <h2 className="text-4xl font-black italic">{post.title}</h2>
            <p className="opacity-60 text-xl mt-6 max-w-xl leading-relaxed">
              {post.description}
            </p>
            <span className="mt-12 block font-bold text-xs uppercase opacity-30 group-hover:opacity-100 italic transition underline">
              Access Insight &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
