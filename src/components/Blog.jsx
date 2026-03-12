"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Clock, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Card } from "./ui";
import BlogSlider from "./BlogSlider";

const BlogCard = ({ blog, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="h-full border border-border/10 group flex flex-col p-0 overflow-hidden bg-background/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-500">
      {/* Blog Thumbnail */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-lg bg-accent/90 backdrop-blur-md text-accent-foreground text-[10px] font-black uppercase tracking-widest">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" /> {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> {blog.readTime}
          </span>
        </div>

        <Link href={`/blog/${blog.id}`} className="block flex-grow">
          <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-accent transition-colors leading-tight">
            {blog.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed italic">
            {blog.summary}
          </p>
        </Link>

        <div className="flex items-center justify-between pt-6 border-t border-border/10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/20">
               <User className="w-4 h-4 text-accent" />
             </div>
             <span className="text-[11px] font-black uppercase tracking-wider text-foreground">{blog.author}</span>
          </div>

          <Link
            href={`/blog/${blog.id}`}
            className="p-3 rounded-xl bg-accent/5 hover:bg-accent text-accent hover:text-accent-foreground transition-all duration-300 group/link"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

  const categories = ["All", ...new Set(data.map(blog => blog.category))];

  const filteredBlogs = data.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SectionWrapper id="blog" title="Insights & News" subtitle="Knowledge Hub">
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-16 max-w-6xl mx-auto">
        <div className="relative w-full md:w-[400px]">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/50 border border-border/20 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-background/40 hover:bg-background/60 text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Slider - Only on Index or if specifically requested */}
      {!searchQuery && activeCategory === "All" && (
         <BlogSlider posts={data} />
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((b, i) => (
              <BlogCard key={b.id} blog={b} index={i} />
            ))
          ) : (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
               <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mb-6">
                 <Search className="w-8 h-8 text-muted-foreground" />
               </div>
               <h3 className="text-2xl font-bold mb-2">No posts found</h3>
               <p className="text-muted-foreground italic">Try adjusting your search or filter to find what you're looking for.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-24 text-center">
        <Link
          href="/blog"
          className="group relative inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-accent px-8 py-4 rounded-2xl bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">Explore Our Entire Archive</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

    </SectionWrapper>
  );
}
