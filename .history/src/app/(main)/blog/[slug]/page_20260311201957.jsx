"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Tag,
  Sparkles
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { portfolioData } from "@/lib/data";
import { Button, Card } from "@/components/ui";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const foundBlog = portfolioData.blogs.find((b) => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      // Fallback or 404
    }
  }, [slug]);

  if (!blog) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  );

  const relatedPosts = portfolioData.blogs
    .filter((b) => b.slug !== slug && b.category === blog.category)
    .slice(0, 2);

  return (
    <main className="relative min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-[0.3em] mb-12 hover:underline decoration-2 underline-offset-8 transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-1.5 bg-accent rounded-full text-[10px] font-black uppercase text-accent-foreground tracking-[0.2em] italic shadow-lg shadow-accent/20">
                {blog.category}
              </span>
              <div className="flex items-center gap-6 text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] italic">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {blog.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> {blog.readTime}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-foreground italic uppercase tracking-tighter leading-[0.95]">
              {blog.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium italic border-l-4 border-accent pl-8 py-2 bg-accent/5 rounded-r-3xl leading-relaxed">
              "{blog.summary}"
            </p>

            <div className="flex items-center gap-5 pt-6 border-t border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-xl shadow-accent/20 border border-white/10">
                <User className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic opacity-60">Published By</p>
                <p className="text-lg font-black text-foreground italic uppercase tracking-tight">{blog.author}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-4xl border border-border group"
          >
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-32">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Main Article */}
          <div className="lg:col-span-8">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-medium prose-p:italic
                prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:font-black prose-blockquote:text-lg
                prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-3xl prose-pre:shadow-2xl
                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-border
                prose-li:text-muted-foreground prose-li:font-medium
                "
            >
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </motion.div>

            {/* Tags & Sharing */}
            <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex flex-wrap gap-3">
                {blog.tags?.map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-card border border-border rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:border-accent/40 transition-all shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60 italic">Architectural Broadcast</span>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all shadow-xl active:scale-95">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                  <button className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/20 hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Author Card Sidebar */}
            <Card className="p-8 border border-border/50 bg-card/20 rounded-[2.5rem] shadow-2xl backdrop-blur-xl sticky top-24">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-accent tracking-[0.2em] italic">Engineering Lead</h4>
                    <p className="text-lg font-black text-foreground italic uppercase">Pir Ghulam Muhyo Din</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic font-medium">
                  Founder of Muhyo Tech, specializing in high-performance digital ecosystems and scalable system architecture.
                </p>
                <Link href="/contact">
                  <Button className="w-full py-4 text-[10px] font-black shadow-xl decoration-accent/30 underline-offset-8">Consult with Author</Button>
                </Link>
                
                {/* Related Logic Section */}
                {relatedPosts.length > 0 && (
                  <div className="pt-8 border-t border-border/10 space-y-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent flex items-center gap-3">
                      <TrendingUp className="w-3 h-3" /> Concurrent Logic
                    </h5>
                    <div className="space-y-6">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-white/5">
                              <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h6 className="text-[11px] font-black text-foreground uppercase italic tracking-tight line-clamp-2 leading-[1.3] group-hover:text-accent transition-colors">
                                {post.title}
                              </h6>
                              <p className="text-[8px] text-muted-foreground mt-1 uppercase font-bold tracking-widest opacity-60 italic">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 border-t border-border/50 bg-card/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[9px] font-black uppercase tracking-[0.3em]">
               <MessageSquare className="w-3 h-3" /> Collaboration Protocol
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-foreground italic uppercase tracking-tighter leading-none">
               Enjoyed this <span className="text-accent italic">Exploration?</span>
             </h2>
             <p className="text-muted-foreground text-xl font-medium italic opacity-80 leading-relaxed max-w-2xl mx-auto">
               Every great system begins with a conversation. Let's discuss how we can engineer your vision into reality.
             </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:px-16 py-8 rounded-3xl text-sm font-black tracking-[0.4em] shadow-2xl shadow-accent/20">
                Initiate Project Dialogue
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none -z-10" />
      </section>
    </main>
  );
}
