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
    <Card className="h-full border border-border/10 flex flex-col p-8 group">
      <div className="flex items-center gap-6 mb-6 text-small font-black uppercase text-accent tracking-[0.2em] border-b border-border/10 pb-4">
        <span className="flex items-center gap-2">
          <Calendar size={14} className="icon-scale" /> {blog.date}
        </span>
        <span className="flex items-center gap-2">
          <User size={14} className="icon-scale" /> {blog.author}
        </span>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
          {blog.title}
        </h3>
        <p className="mb-8 line-clamp-3">{blog.summary}</p>
      </div>

      <Link href={`/blog/${blog.id}`} className="block w-full">
        <Button
          variant="secondary"
          className="w-full glass group-hover:bg-accent group-hover:text-accent-foreground"
          icon={ArrowRight}
        >
          Read Article
        </Button>
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
