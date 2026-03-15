"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Button } from "@/components/ui";

export default function BlogPostDetail({ blog }) {
  if (!blog) return null;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-[0.2em] mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Tag className="w-3 h-3" /> {blog.category}
              </span>
              <span className="text-white/60 text-xs font-medium flex items-center gap-2">
                <Clock className="w-3 h-3" /> {blog.readTime}
              </span>
              <span className="text-white/60 text-xs font-medium flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {blog.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight max-w-5xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 py-6 border-t border-white/10 max-w-fit">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20">
                <Image
                  src="https://res.cloudinary.com/dg5gwixf1/image/upload/v1772736622/ChatGPT_Image_Mar_5_2026_11_36_42_AM_auw4uw.png"
                  alt={blog.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-black uppercase text-xs tracking-widest">
                  {blog.author}
                </p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">
                  {blog.authorRole}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Area */}
      <SectionWrapper className="pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div
              className="blog-content 
                [&_h2]:text-3xl [&_h2]:font-black [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:uppercase [&_h2]:tracking-tight
                [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:text-lg [&_p]:mb-6
                [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-8 [&_blockquote]:py-4 [&_blockquote]:my-10 [&_blockquote]:bg-accent/5 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:text-foreground
                [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-8 [&_ul]:space-y-2
                [&_li]:text-muted-foreground [&_li]:pl-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-border/10">
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-muted/20 text-muted-foreground text-xs font-bold hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-blue-600/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-black mb-4">Enjoyed this post?</h3>
                <p className="text-muted-foreground italic">
                  Let's discuss how we can implement these technologies for your
                  next project.
                </p>
              </div>
              <Link href="/contact">
                <Button className="whitespace-nowrap">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Share Buttons */}
            <div className="p-8 rounded-3xl border border-border/10 bg-background/40 backdrop-blur-sm sticky top-24">
              <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-6 pb-4 border-b border-border/10">
                <Share2 className="w-4 h-4 text-accent" /> Share this post
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/20 hover:bg-accent/10 hover:text-accent transition-all group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Share on Twitter
                  </span>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/20 hover:bg-accent/10 hover:text-accent transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Share on LinkedIn
                  </span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/20 hover:bg-accent/10 hover:text-accent transition-all group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Share on Facebook
                  </span>
                </a>
              </div>
            </div>

            {/* Trending / Related (Placeholder) */}
            <div className="p-8 rounded-3xl border border-border/10 bg-background/40 backdrop-blur-sm">
              <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-6 pb-4 border-b border-border/10">
                <TrendingUp className="w-4 h-4 text-accent" /> Trending Now
              </h4>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">
                      Technology
                    </p>
                    <h5 className="text-sm font-bold group-hover:text-accent transition-colors line-clamp-2">
                      The Impact of AI on Modern Web Scalability
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </div>
  );
}
