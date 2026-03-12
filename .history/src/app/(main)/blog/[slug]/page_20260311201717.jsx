"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ChevronLeft, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Link2
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { SectionWrapper, Card, Button } from "@/components/ui";
import ReactMarkdown from "react-markdown";

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
    if (slug) {
      const foundBlog = portfolioData.blogs.find((b) => b.slug === slug);
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        // Fallback or Redirect if needed
      }
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-20 h-20 border-t-2 border-accent rounded-full animate-spin" />
      </div>
    );
  }

  const relatedPosts = portfolioData.blogs
    .filter(b => b.id !== blog.id)
    .slice(0, 2);

  return (
    <main className="relative min-h-screen pt-32 pb-40 overflow-hidden bg-background">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1.5 bg-accent z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      {/* Decorative Aura */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/blog" 
            className="group flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-[10px] font-black uppercase tracking-[0.4em] italic"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
            Return to Insights
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Main Article Section */}
          <article className="lg:col-span-8">
            {/* Header */}
            <header className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-accent/20">
                  {blog.category}
                </span>
                <span className="h-px w-12 bg-border/50" />
                <span className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground tracking-widest italic">
                  <Clock className="w-4 h-4 text-accent" /> {blog.readTime}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-foreground italic uppercase tracking-tighter leading-[0.9] mb-12"
              >
                {blog.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-10 pt-10 border-t border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xl font-black italic shadow-xl shadow-accent/10 border-2 border-accent/20">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1 italic">Research by</p>
                    <p className="text-lg font-black text-foreground italic">{blog.author}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic">Published on</p>
                  <p className="text-lg font-bold text-foreground/80 italic">{blog.date}</p>
                </div>
              </motion.div>
            </header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[21/10] rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl mb-24 group"
            >
              <img 
                src={blog.featuredImage} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              <div className="absolute bottom-8 right-8">
                <div className="p-4 glass rounded-2xl border border-white/10 backdrop-blur-xl flex items-center gap-3">
                   <Sparkles className="w-5 h-5 text-accent" />
                   <span className="text-[10px] font-black uppercase text-white tracking-widest">High-Definition Insight</span>
                </div>
              </div>
            </motion.div>

            {/* Content Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-p:italic prose-p:font-medium prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:rounded-r-2xl prose-blockquote:p-8 prose-blockquote:italic prose-pre:bg-card/40 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-2xl"
            >
              <ReactMarkdown 
                components={{
                  h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl mt-20 mb-10 text-foreground" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-foreground/90" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl md:text-3xl mt-12 mb-6 text-foreground/80" {...props} />,
                  p: ({node, ...props}) => <p className="mb-8 leading-relaxed text-lg" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-8 mb-8 space-y-4" {...props} />,
                  li: ({node, ...props}) => <li className="text-muted-foreground font-bold" {...props} />,
                  blockquote: ({node, ...props}) => (
                    <blockquote className="my-16 border-l-4 border-accent bg-accent/5 p-10 rounded-r-3xl" {...props} />
                  ),
                  code: ({node, inline, className, children, ...props}) => (
                    <code className="bg-muted px-2 py-1 rounded-md text-accent text-sm" {...props}>
                      {children}
                    </code>
                  )
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </motion.div>

            {/* Share & Tags Bottom */}
            <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-wrap gap-3">
                {blog.tags?.map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-card/40 border border-border/50 rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground cursor-pointer transition-colors shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">Disseminate Logic:</span>
                <div className="flex gap-4">
                   {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                     <button key={i} className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all cursor-pointer">
                        <Icon className="w-5 h-5" />
                     </button>
                   ))}
                   <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Intelligence link copied to clipboard");
                    }}
                    className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                   >
                     <Link2 className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </div>

            {/* Newsletter CTA at bottom of article */}
            <div className="mt-32 p-12 lg:p-20 glass rounded-[4rem] border border-accent/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-[2s]">
                  <TrendingUp className="w-80 h-80 text-accent" />
               </div>
               <div className="relative z-10 flex flex-col items-center text-center gap-8">
                  <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center shadow-2xl shadow-accent/40 mb-4">
                     <Mail className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground italic uppercase tracking-tighter leading-tight">
                    Stay ahead of the <br /> <span className="text-accent underline decoration-accent/10 underline-offset-12">Engineering Curve</span>
                  </h2>
                  <p className="text-muted-foreground text-lg font-medium italic max-w-xl">
                    Get our latest technical research and studio updates delivered directly to your architecture suite. Zero noise.
                  </p>
                  <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 pt-4" onSubmit={e => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="ARCHITECT_CORE@DOMAIN.COM" 
                      className="flex-1 px-8 py-5 bg-background border border-border rounded-2xl outline-none focus:border-accent/50 text-[11px] font-black uppercase tracking-widest italic"
                    />
                    <Button className="px-10 py-5 rounded-2xl font-black text-[10px]">Initialize</Button>
                  </form>
               </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
             {/* Related insights */}
             <div className="space-y-10">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent flex items-center gap-3 italic">
                 <Link2 className="w-4 h-4" /> Connected Logic
               </h4>
               <div className="space-y-8">
                 {relatedPosts.map((post) => (
                   <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                     <Card className="p-4 border border-border/50 hover:border-accent/30 bg-card/40 transition-all">
                        <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 relative">
                           <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                           <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 bg-accent/90 backdrop-blur rounded text-[8px] font-black uppercase text-accent-foreground">
                                {post.category}
                              </span>
                           </div>
                        </div>
                        <h5 className="text-lg font-black text-foreground uppercase tracking-tight italic leading-[1.3] group-hover:text-accent transition-colors line-clamp-2">
                           {post.title}
                        </h5>
                        <p className="text-[9px] text-muted-foreground mt-2 uppercase font-black opacity-40 tracking-widest">
                           {post.date} • {post.readTime}
                        </p>
                     </Card>
                   </Link>
                 ))}
               </div>
             </div>

             {/* Sticky Action Sidebar */}
             <div className="sticky top-32 space-y-12">
                <Card className="p-10 border border-border/50 bg-card flex flex-col items-center text-center gap-8 shadow-2xl">
                   <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <MessageSquare className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">Have a Technical Question?</h4>
                   <p className="text-sm text-muted-foreground font-medium italic">Our lead architects are ready to discuss your next systemic challenge.</p>
                   <Link href="/contact" className="w-full">
                     <Button className="w-full py-5 rounded-xl font-black text-[10px]">Start Dialogue</Button>
                   </Link>
                </Card>

                <div className="px-4">
                   <div className="flex items-center gap-4 text-accent/40 mb-4 h-4">
                      <div className="h-px flex-1 bg-border/20" />
                      <Sparkles className="w-4 h-4" />
                      <div className="h-px flex-1 bg-border/20" />
                   </div>
                   <p className="text-[10px] text-center font-black uppercase tracking-[0.4em] text-muted-foreground/30 italic">
                      Muhyo Tech Studio V4.0
                   </p>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
