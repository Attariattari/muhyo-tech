"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  ArrowRight,
  Search,
  Clock,
  Zap,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Button } from "./ui";

// --- SUB-COMPONENTS ---

const EditorialHeader = ({ totalArticles, totalCategories, latestUpdate }) => (
  <header className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
        {/* Left Side: Editorial Context */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-accent uppercase"
          >
            <span className="w-8 h-px bg-accent/30" />
            Insights / Articles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9] uppercase italic"
          >
            Stories, Guides & <br />
            <span className="text-accent underline decoration-accent/10 underline-offset-[12px]">
              Engineering Insights.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-lg leading-relaxed font-medium italic max-w-xl border-l-2 border-accent/20 pl-6"
          >
            Dive into professional guides on web development, system
            architecture, and modern software design patterns.
          </motion.p>
        </div>

        {/* Right Side: Minimal Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-12 lg:pb-4 border-t lg:border-t-0 lg:border-l border-border/50 lg:pl-12 pt-8 lg:pt-0"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">
              Articles
            </span>
            <p className="text-2xl font-black text-foreground">
              {totalArticles}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">
              Categories
            </span>
            <p className="text-2xl font-black text-foreground">
              {totalCategories}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">
              Updated
            </span>
            <p className="text-[10px] font-black text-accent uppercase tracking-tighter pt-2">
              {latestUpdate}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const FeaturedBlogArea = ({ posts }) => {
  if (!posts || posts.length === 0) return null;
  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Large Featured Card (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 relative h-[500px] md:h-[620px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-border/50 bg-card shadow-2xl"
        >
          <Image
            src={mainPost.image}
            alt={mainPost.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-lg bg-accent text-accent-foreground text-[9px] font-black uppercase tracking-widest shadow-xl">
                Featured Article
              </span>
              <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                {mainPost.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-none uppercase italic max-w-3xl">
              {mainPost.title}
            </h2>

            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 pt-2">
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent" /> {mainPost.readTime}
              </span>
              <span className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-accent" /> {mainPost.author}
              </span>
            </div>

            <Link
              href={`/blog/${mainPost.slug}`}
              className="absolute inset-0 z-10"
            />
          </div>
        </motion.div>

        {/* Editorial List (Right) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {sidePosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 p-8 rounded-[2rem] bg-card/30 border border-border/50 hover:bg-card/50 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <span className="text-[9px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />{" "}
                  {post.category}
                </span>
                <h3 className="text-xl font-black text-foreground leading-tight tracking-tight uppercase italic group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="absolute inset-0 z-10"
              />
            </motion.div>
          ))}
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
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-card/30 border border-border/50 p-3 rounded-[2.5rem]">
      {/* Category Navigation */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-8 py-3.5 rounded-[1.8rem] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeCategory === category
                ? "text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="relative z-10">{category}</span>
            {activeCategory === category && (
              <motion.div
                layoutId="pill-selector"
                className="absolute inset-0 bg-accent rounded-[1.8rem] shadow-xl shadow-accent/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative w-full lg:w-[400px] group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
        <input
          type="text"
          placeholder="SEARCH ARTICLES..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-background/50 border border-border/30 rounded-[1.8rem] py-4 pl-14 pr-8 focus:outline-none focus:border-accent/40 transition-all text-[10px] font-black tracking-widest text-foreground placeholder:text-muted-foreground/30 uppercase"
        />
      </div>
    </div>
  </div>
);

const TrendingTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "latest", label: "Recent Articles", icon: Clock },
    { id: "trending", label: "Trending Now", icon: TrendingUp },
    { id: "picks", label: "Editor's Picks", icon: Award },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <div className="flex items-center gap-12 border-b border-border/50 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group pb-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4 relative whitespace-nowrap ${
              activeTab === tab.id
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon
              className={`w-4 h-4 ${activeTab === tab.id ? "text-accent" : "text-muted-foreground/40"}`}
            />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline-selector"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
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
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="h-full group"
  >
    <div className="relative h-full bg-card backdrop-blur-3xl border border-border/50 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-accent/30">
      {/* Editorial Thumbnail */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-[8px] font-black uppercase tracking-widest shadow-xl">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Architecture */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 mb-8">
          <span>{blog.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
          <span className="text-muted-foreground/80">{blog.readTime}</span>
        </div>

        <Link href={`/blog/${blog.slug}`} className="block group/title mb-auto">
          <h3 className="text-2xl font-black text-foreground group-hover/title:text-accent transition-colors leading-[1.1] tracking-tighter mb-6 uppercase italic">
            {blog.title}
          </h3>
          <p className="text-muted-foreground/80 text-sm leading-relaxed line-clamp-3 font-medium italic opacity-80 border-l-2 border-accent/10 pl-6">
            &quot;{blog.summary}&quot;
          </p>
        </Link>

        {/* Footer Architecture */}
        <div className="mt-12 pt-8 border-t border-border/50 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-bold text-muted-foreground/60 uppercase tracking-widest">
              Author
            </span>
            <span className="text-[11px] font-black text-foreground uppercase tracking-widest">
              {blog.author}
            </span>
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-foreground group/explore"
          >
            <div className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center transition-all group-hover/explore:bg-accent group-hover/explore:border-accent group-hover/explore:text-accent-foreground shadow-xl">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const NewsletterCTA = () => (
  <div className="max-w-7xl mx-auto px-6 py-24">
    <div className="relative p-12 lg:p-24 rounded-[4rem] bg-gradient-to-br from-card/80 to-background border border-border/50 overflow-hidden shadow-2xl group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="space-y-8 flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest mx-auto lg:mx-0">
            <Zap className="w-4 h-4" /> Editorial Subscription
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
            Insights <br />{" "}
            <span className="text-accent italic underline decoration-accent/10 underline-offset-8">
              for you.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/60 max-w-sm italic font-medium leading-relaxed mx-auto lg:mx-0">
            &quot;Get professional engineering articles delivered straight to
            your inbox.&quot;
          </p>
        </div>

        <div className="w-full lg:w-[450px] space-y-6">
          <div className="bg-background/40 backdrop-blur-3xl border border-border/50 rounded-[2.5rem] p-3 flex flex-col md:flex-row items-center gap-3 shadow-inner">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 bg-transparent border-none outline-none py-6 px-10 text-[10px] font-black tracking-widest uppercase text-foreground placeholder:text-muted-foreground/30 w-full"
            />
            <Button className="w-full md:w-auto">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function Blog({ data, isHomePage = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("latest");

  const categories = useMemo(
    () => ["All", ...new Set(data?.map((b) => b.category) || [])],
    [data],
  );

  if (!data) return null;

  if (isHomePage) {
    const recentBlogs = data.slice(0, 3);
    return (
      <SectionWrapper id="blog" title="Latest Articles" subtitle="My Blog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentBlogs.map((blog, i) => (
              <ArticleCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/blog"
              className="group relative px-10 py-5 bg-accent text-accent-foreground font-black uppercase tracking-widest text-[10px] rounded-full overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Articles <ArrowRight className="w-4 h-4 ml-1" />
              </span>
              <div className="absolute top-0 -right-full w-full h-full bg-foreground/10 group-hover:right-0 transition-all duration-300" />
              <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    );
  }

  const filteredBlogs = data.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = data.slice(0, 4);
  const displayPosts = useMemo(() => {
    let posts = [...filteredBlogs];
    if (activeTab === "trending") posts = [...posts].reverse();
    return posts;
  }, [filteredBlogs, activeTab]);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-accent-foreground">
      {/* 1. Blog Hero Introduction */}
      <EditorialHeader
        totalArticles={data.length}
        totalCategories={categories.length - 1}
        latestUpdate={data[0]?.date || "Updated recently"}
      />

      {/* 2. Featured Articles */}
      {!searchQuery && activeCategory === "All" && (
        <FeaturedBlogArea posts={featuredPosts} />
      )}

      {/* 3. Category + Search Controls */}
      <ControlHub
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 4. Trending / Recent Tabs */}
      <TrendingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 5. Blog Articles Grid */}
      <section className="pb-24 px-6 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayPosts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                <div className="w-24 h-24 rounded-[3rem] bg-card/40 border border-border/50 flex items-center justify-center mb-8">
                  <Search className="w-10 h-10 text-muted-foreground/30" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">
                  No Results Found.
                </h3>
                <p className="text-muted-foreground text-lg italic max-w-sm opacity-60">
                  Try adjusting your search or category filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-12"
                >
                  Reset Discovery
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}
