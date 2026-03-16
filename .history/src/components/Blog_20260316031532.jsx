"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Clock,
  ChevronRight,
  ChevronLeft,
  Mail,
  Zap,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Card } from "./ui";

/**
 * THE ELITE JOURNAL ARCHITECTURE
 * Inspired by: Vercel, Stripe Press, Linear.
 * Focus: Sophisticated typography, immersive imagery, and liquid transitions.
 */

// --- SUB-COMPONENTS ---

const EditorialHeader = () => (
  <header className=" pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-8">
        {/* Superior Labeling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 text-[9px] font-black tracking-[0.5em] text-accent uppercase"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          BLOG_POSTS / UPDATED 2024
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Principal Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase italic"
          >
            Our <br />
            <span className="text-accent underline decoration-accent/10 underline-offset-[12px] md:underline-offset-[16px]">
              Stories.
            </span>
          </motion.h1>

          {/* Descriptive Abstract */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 lg:pt-4 space-y-6"
          >
            <p className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground/50 font-bold tracking-[0.15em] md:tracking-[0.18em] leading-loose uppercase italic max-w-sm border-l-2 border-accent/20 pl-4 md:pl-6">
              Explore easy-to-read guides on web development, system
              architecture, and modern software design.
            </p>
            <div className="flex items-center gap-4 md:gap-6 pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[8px] font-black text-accent tracking-widest uppercase mb-1">
                  Status
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest">
                  LATEST_POSTS
                </span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[8px] font-black text-accent tracking-widest uppercase mb-1">
                  Collection
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest">
                  GUIDES_01
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </header>
);

const FeaturedBlogSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  }, [posts.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  if (!posts || posts.length === 0) return null;
  const currentPost = posts[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24 group/slider">
      <div
        className="relative h-[500px] md:h-[750px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-card/20 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPost.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              fill
              className="object-cover transition-transform duration-[3s] group-hover/slider:scale-110"
              priority
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 py-10 pd:py-16 px-6 md:px-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 md:space-y-8 max-w-4xl"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-accent text-accent-foreground text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Top Story
                  </span>
                  <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {currentPost.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-7xl font-black leading-tight text-white tracking-tighter">
                  {currentPost.title}
                </h2>

                <p className="text-white/60 text-sm md:text-xl line-clamp-2 max-w-2xl font-medium italic hidden sm:block">
                  {currentPost.summary}
                </p>

                <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-4 md:pt-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <User className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">
                      {currentPost.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8 text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />{" "}
                      {currentPost.readTime}
                    </span>
                    <span className="flex items-center gap-2 hidden sm:flex">
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />{" "}
                      {currentPost.date}
                    </span>
                  </div>
                </div>

                <div className="pt-6 md:pt-8">
                  <Link href={`/blog/${currentPost.id}`}>
                    <button className="group/btn px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-3 md:gap-4 hover:bg-accent hover:text-accent-foreground transition-all">
                      Read Full Article{" "}
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tactical Indicators */}
        <div className="absolute bottom-12 right-12 flex gap-3 z-30">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-1000 rounded-full ${i === currentIndex ? "w-12 bg-accent" : "w-4 bg-white/20"}`}
            />
          ))}
        </div>

        {/* Side Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-8 flex justify-between z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-2xl bg-background/40 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-2xl bg-background/40 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const ControlHub = ({
  searchQuery,
  setSearchQuery,
  categories,
  activeCategory,
  setActiveCategory,
}) => (
  <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
      {/* Category Navigation */}
      <div className="w-full lg:w-auto overflow-hidden">
        <div className="flex items-center gap-1 p-1 bg-card/20 border border-border/10 rounded-2xl md:rounded-[2rem] overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-[1.8rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === category
                  ? "text-accent-foreground shadow-xl shadow-accent/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="pill-selector"
                  className="absolute inset-0 bg-accent rounded-xl md:rounded-[1.8rem]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full lg:w-[400px] h-fit group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
        <input
          type="text"
          placeholder="SEARCH ARTICLES..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-card/30 border border-white/5 rounded-2xl md:rounded-[1.8rem] py-4 md:py-5 pl-14 pr-8 focus:outline-none focus:border-accent/40 transition-all text-[9px] md:text-[10px] font-black tracking-widest text-foreground placeholder:text-muted-foreground/30 focus:shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)] uppercase"
        />
      </div>
    </div>
  </div>
);

const TrendingTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "latest", label: "Recent", icon: Clock },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "picks", label: "Best", icon: Award },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
      <div className="flex items-center gap-8 md:gap-12 border-b border-white/5 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group pb-4 md:pb-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all flex items-center gap-3 md:gap-4 relative whitespace-nowrap ${
              activeTab === tab.id
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon
              className={`w-3 h-3 md:w-3.5 md:h-3.5 ${activeTab === tab.id ? "text-accent" : "text-white/20"}`}
            />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline-selector"
                className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ blog, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    className="h-full group relative"
  >
    {/* Subtle Ambient Glow on Hover */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-blue-600/20 rounded-[1.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

    <div className="relative h-full bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[1.5rem] overflow-hidden flex flex-col transition-all duration-500 group-hover:translate-y-[-10px] group-hover:border-white/10 shadow-2xl">
      {/* Editorial Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />

        {/* Status Metadata */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">
              NEW
            </span>
          </div>
        </div>

        {/* Floating Category Label */}
        <div className="absolute bottom-6 left-6">
          <span className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-[8px] font-black uppercase tracking-[0.3em] shadow-xl">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Architecture */}
      <div className="p-6 md:p-10 flex flex-col flex-grow">
        {/* Editorial Spec Header */}
        <div className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground/30 mb-6 md:mb-8">
          <span>{blog.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
          <span className="text-white/60">{blog.readTime}</span>
        </div>

        <Link href={`/blog/${blog.id}`} className="block group/title mb-auto">
          <h3 className="text-xl md:text-3xl font-black text-white group-hover/title:text-accent transition-colors leading-[1.2] md:leading-[1.1] tracking-tighter mb-4 md:mb-6">
            {blog.title}
          </h3>
          <p className="text-muted-foreground/60 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium italic opacity-80 border-l-2 border-accent/10 pl-4 md:pl-6">
            &quot;{blog.summary}&quot;
          </p>
        </Link>

        {/* Footer Architecture */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] md:text-[8px] font-bold text-muted-foreground/40 uppercase tracking-widest uppercase">
              Written by
            </span>
            <span className="text-[10px] md:text-[11px] font-black text-white/80 uppercase tracking-widest">
              {blog.author}
            </span>
          </div>

          <Link
            href={`/blog/${blog.id}`}
            className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white group/explore"
          >
            <span className="opacity-40 group-hover/explore:opacity-100 transition-opacity hidden sm:inline">
              Read Article
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border border-white/10 flex items-center justify-center transition-all group-hover/explore:bg-accent group-hover/explore:border-accent group-hover/explore:scale-110 shadow-xl">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const NewsletterCTA = () => (
  <SectionWrapper>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="relative p-8 md:p-24 rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br from-card/80 to-background border border-white/10 overflow-hidden shadow-2xl group">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 blur-[80px] md:blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="space-y-6 md:space-y-8 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] md:text-[10px] font-black uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" /> Stay Updated
            </div>
            <h2 className="text-3xl md:text-7xl font-black tracking-tighter leading-[1] md:leading-[0.9] text-white">
              Insights <br className="hidden md:block" />{" "}
              <span className="text-accent italic underline decoration-accent/10 underline-offset-8">
                for you.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/60 max-w-sm italic font-medium leading-relaxed mx-auto lg:mx-0">
              &quot;Get our latest articles sent directly to your email.&quot;
            </p>
          </div>

          <div className="w-full lg:w-[450px] space-y-6">
            <div className="bg-background/40 backdrop-blur-3xl border border-white/5 rounded-2xl md:rounded-[2.5rem] p-2 md:p-3 flex flex-col sm:flex-row items-center gap-2 md:gap-3 shadow-inner">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-transparent border-none outline-none py-4 md:py-6 px-6 md:px-10 text-[10px] md:text-xs font-black tracking-widest uppercase text-white placeholder:text-muted-foreground/10 w-full"
              />
              <button className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-white text-black rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

// --- MAIN PAGE ---

export default function Blog({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("latest");

  if (!data) return null;

  const categories = useMemo(
    () => ["All", ...new Set(data.map((b) => b.category))],
    [data],
  );

  const filteredBlogs = useMemo(() => {
    return data.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [data, searchQuery, activeCategory]);

  const featuredPosts = useMemo(() => data.slice(0, 5), [data]);
  const displayPosts = useMemo(() => {
    let posts = [...filteredBlogs];
    if (activeTab === "trending") posts = [...posts].reverse();
    return posts;
  }, [filteredBlogs, activeTab]);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-accent-foreground">
      {/* 1. Identity Header */}
      <EditorialHeader />

      {/* 2. Primary Feature Presentation */}
      {!searchQuery && activeCategory === "All" && (
        <FeaturedBlogSlider posts={featuredPosts} />
      )}

      {/* 3. Archive Discovery Hub */}
      <ControlHub
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 4. Editorial Filtering */}
      <TrendingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 5. The Grid */}
      <SectionWrapper className="!pt-0 min-h-[400px] md:min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatePresence mode="popLayout">
            {displayPosts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24"
              >
                {displayPosts.map((blog, i) => (
                  <ArticleCard key={blog.id} blog={blog} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-40 text-center"
              >
                <div className="w-24 h-24 rounded-[3rem] bg-card/40 border border-white/5 flex items-center justify-center mb-8 shadow-inner">
                  <Search className="w-10 h-10 text-muted-foreground/10" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">
                  No Results Found.
                </h3>
                <p className="text-muted-foreground text-lg italic max-w-sm opacity-60">
                  We couldn't find any articles matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-12 px-10 py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* 6. Conversion Hub */}
      <NewsletterCTA />
    </div>
  );
}
