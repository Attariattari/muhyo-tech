"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionWrapper, Card } from "./ui";

const BlogCard = ({ blog, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="h-full border border-border/10 group flex flex-col p-8">
      <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase text-accent tracking-[0.2em] border-b border-border pb-4 w-full">
        <span className="flex items-center gap-2">
          <Calendar className="w-3" /> {blog.date}
        </span>
        <span className="flex items-center gap-2">
          <User className="w-3" /> {blog.author}
        </span>
      </div>
      <Link href={`/blog/${blog.id}`} className="block flex-grow">
        <h3 className="text-xl font-black mb-4 group-hover:text-accent transition-colors leading-tight">
          {blog.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-8 leading-relaxed italic">
          {blog.summary}
        </p>
      </Link>
      <Link
        href={`/blog/${blog.id}`}
        className="w-full text-center py-4 rounded-xl border border-border/30 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent-foreground font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-3"
      >
        Read Article <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  </motion.div>
);

export default function Blog({ data }) {
  if (!data) return null;

  return (
    <SectionWrapper id="blog" title="Knowledge Sharing" subtitle="Latest News">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.map((b, i) => (
          <BlogCard key={b.id} blog={b} index={i} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link
          href="/blog"
          className="text-[11px] font-black uppercase tracking-[0.3em] text-accent hover:underline underline-offset-8"
        >
          Visit Tech Insights Archive
        </Link>
      </div>
    </SectionWrapper>
  );
}
