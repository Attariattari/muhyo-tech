"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Clock,
  Tag,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Card } from "./ui";

const MagazineMainCard = ({ blog }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative group cursor-pointer h-full"
  >
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <div className="relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-border/10 shadow-2xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end space-y-6">
          <div className="flex items-center gap-4">
            <span className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-widest shadow-xl">
              Featured Insight
            </span>
            <span className="px-5 py-2 rounded-full bg-background/40 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-widest border border-white/10">
              {blog.category}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-white max-w-2xl group-hover:text-accent transition-colors">
            {blog.title}
          </h2>

          <p className="text-white/70 text-lg md:text-xl line-clamp-2 max-w-xl font-medium leading-relaxed italic">
            {blog.summary}
          </p>

          <div className="flex items-center gap-8 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center border border-white/10">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                {blog.author}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest">
              <Clock className="w-4 h-4" /> {blog.readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const MagazineSideCard = ({ blog }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="relative group cursor-pointer"
  >
    <Link href={`/blog/${blog.id}`} className="block">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 rounded-[2rem] border border-border/10 bg-card/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-500">
        <div className="md:col-span-2 relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="md:col-span-3 flex flex-col justify-center space-y-4">
          <span className="text-accent text-[10px] font-black uppercase tracking-widest">
            {blog.category}
          </span>
          <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-accent transition-colors tracking-tight">
            {blog.title}
          </h3>
          <div className="flex items-center gap-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> {blog.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" /> {blog.author}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogCard = ({ blog, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full group"
  >
    <Card className="h-full border border-border/10 flex flex-col p-6 overflow-hidden bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 rounded-[2.5rem]">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 rounded-xl bg-background/80 backdrop-blur-md text-accent text-[9px] font-black uppercase tracking-widest border border-white/5">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow space-y-4">
        <div className="flex items-center gap-4 text-[9px] font-bold uppercase text-muted-foreground tracking-widest">
          <span className="flex items-center gap-2">
            <Calendar className="w-3 h-3" /> {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3 h-3" /> {blog.readTime}
          </span>
        </div>

        <Link href={`/blog/${blog.id}`} className="block flex-grow group/title">
          <h3 className="text-xl md:text-2xl font-bold group-hover/title:text-accent transition-colors leading-tight tracking-tight">
            {blog.title}
          </h3>
          <p className="mt-4 text-muted-foreground text-sm line-clamp-2 leading-relaxed opacity-80">
            {blog.summary}
          </p>
        </Link>

        {/* Author & Arrow */}
        <div className="flex items-center justify-between pt-6 border-t border-border/10 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
              <User className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                {blog.author}
              </span>
              <span className="text-[8px] text-muted-foreground font-medium lowercase">
                Architect
              </span>
            </div>
          </div>

          <Link
            href={`/blog/${blog.id}`}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Blog({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  if (!data) return null;

  const categories = ["All", ...new Set(data.map((blog) => blog.category))];

  const filteredBlogs = data.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured Content for Magazine Layout
  const featuredMain = data.find((b) => b.featured) || data[0];
  const featuredSide = data.filter((b) => b.id !== featuredMain.id).slice(0, 2);
  const regularGridPosts = filteredBlogs.filter((b) =>
    !searchQuery && activeCategory === "All"
      ? b.id !== featuredMain.id && !featuredSide.some((s) => s.id === b.id)
      : true,
  );

  const isDiscoveryView = !searchQuery && activeCategory === "All";

  return (
    <SectionWrapper id="blog">
      {/* 1. "Command Center" Blog Header */}
      <div className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-full h-32  from-accent/5 to-transparent -z-10" />
      </div>

      {/* Magazine Top Section - Only on Discovery View */}
      {isDiscoveryView && featuredMain && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Large Main Feature */}
            <div className="lg:col-span-8">
              <MagazineMainCard blog={featuredMain} />
            </div>

            {/* Side Stack */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {featuredSide.map((blog, idx) => (
                <MagazineSideCard key={blog.id} blog={blog} />
              ))}

              {/* Decorative Newsletter / CTA Box placeholder */}
              <div className="flex-1 rounded-[2rem] bg-accent/5 border border-accent/20 p-8 flex flex-col justify-center items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                  <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <h4 className="text-xl font-bold tracking-tight">
                  Stay Insightful
                </h4>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.2em] leading-relaxed">
                  Get my latest technical architecture deep-dives sent to your
                  inbox.
                </p>
                <button className="w-full py-3 bg-accent text-accent-foreground rounded-2xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Archive Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-accent/30" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-foreground/60 leading-none">
            {isDiscoveryView
              ? "Latest from the Archive"
              : `Found Results (${filteredBlogs.length})`}
          </h2>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {regularGridPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {regularGridPosts.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-32 text-center"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-muted/20 flex items-center justify-center mb-8 border border-border/50">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                No Insights Found
              </h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto italic font-medium opacity-70">
                It seems we haven't covered this perspective yet. Try refining
                your keywords or exploring categories.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Archive CTA */}
      <div className="mt-32 pb-24 text-center px-6">
        <Link
          href="/blog"
          className="group relative inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-accent px-12 py-6 rounded-2xl bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-all duration-700 overflow-hidden shadow-2xl shadow-accent/5 hover:shadow-accent/20"
        >
          <span className="relative z-10">Explore Our Full Archive</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
