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
  Sparkles,
  Zap,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper, Button } from "@/components/ui";

export default function BlogPostDetail({ blog }) {
  if (!blog) return null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-background min-h-screen pb-24 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      {/* Hero Header */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden group">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-grayscale-[20%]"></div>
        
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-6 md:px-12 pb-20 max-w-7xl mx-auto w-full z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
           >
             <Link 
               href="/blog" 
               className="inline-flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-[0.3em] group/back"
             >
               <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover/back:bg-accent group-hover/back:text-accent-foreground transition-all">
                 <ArrowLeft className="w-4 h-4" />
               </div>
               Back to Insights
             </Link>
             
             <div className="flex flex-wrap items-center gap-6">
               <span className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-2xl">
                 <Sparkles className="w-3.5 h-3.5" /> {blog.category}
               </span>
               <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
               <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                 <Clock className="w-4 h-4 text-accent" /> {blog.readTime}
               </span>
               <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                 <Calendar className="w-4 h-4 text-accent" /> {blog.date}
               </span>
             </div>

             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-6xl drop-shadow-2xl">
               {blog.title}
             </h1>

             <div className="flex items-center gap-5 pt-10 border-t border-white/10 max-w-fit">
               <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                 <Image 
                   src="https://res.cloudinary.com/dg5gwixf1/image/upload/v1772736622/ChatGPT_Image_Mar_5_2026_11_36_42_AM_auw4uw.png" 
                   alt={blog.author}
                   width={56}
                   height={56}
                   className="object-cover"
                 />
               </div>
               <div className="space-y-1">
                 <p className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">{blog.author}</p>
                 <p className="text-accent text-[9px] font-black uppercase tracking-[0.15em]">{blog.authorRole || "Lead Architect"}</p>
               </div>
             </div>
           </motion.div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10">
        <SectionWrapper className="pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-7xl mx-auto">
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div 
                className="blog-content 
                  [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-8 [&_h2]:tracking-tight [&_h2]:text-foreground
                  [&_p]:text-muted-foreground [&_p]:leading-[1.8] [&_p]:text-lg [&_p]:mb-8 [&_p]:font-medium
                  [&_blockquote]:border-l-[6px] [&_blockquote]:border-accent [&_blockquote]:pl-10 [&_blockquote]:py-8 [&_blockquote]:my-16 [&_blockquote]:bg-card [&_blockquote]:rounded-r-[2rem] [&_blockquote]:text-2xl [&_blockquote]:font-bold [&_blockquote]:text-foreground [&_blockquote]:italic [&_blockquote]:shadow-xl
                  [&_ul]:list-none [&_ul]:ml-0 [&_ul]:mb-8 [&_ul]:space-y-4
                  [&_li]:text-muted-foreground [&_li]:text-lg [&_li]:font-medium [&_li]:flex [&_li]:items-start [&_li]:gap-4
                  [&_li:before]:content-[''] [&_li:before]:w-2 [&_li:before]:h-2 [&_li:before]:mt-3 [&_li:before]:rounded-full [&_li:before]:bg-accent [&_li:before]:flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-24 pt-10 border-t border-border/10 flex flex-wrap gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mr-4 self-center">Filed Under:</span>
                 {blog.tags?.map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-xl bg-card border border-border/50 text-muted-foreground text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all cursor-pointer">
                     #{tag}
                   </span>
                 ))}
              </div>

              {/* Enhanced CTA Section */}
              <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-accent/20 via-card to-card border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                 <div className="space-y-4 relative z-10">
                   <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to innovate?</h3>
                   <p className="text-muted-foreground text-lg italic font-medium opacity-80">
                     Let's bring these technical insights to your specific digital ecosystem.
                   </p>
                 </div>
                 <Link href="/contact" className="relative z-10">
                   <button className="px-10 py-5 bg-accent text-accent-foreground font-bold uppercase text-[10px] tracking-[0.3em] rounded-2xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 transition-all">
                     Start Strategy Session
                   </button>
                 </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              
              {/* Modern Share Box */}
              <div className="p-10 rounded-[2.5rem] border border-border/50 bg-card/50 backdrop-blur-xl sticky top-24 shadow-sm">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
                      <Share2 className="w-4 h-4 text-accent" /> Share Insight
                    </h4>
                    <div className="h-[1px] w-8 bg-accent/30 rounded-full" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-border/50 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2]">
                        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 group-hover:text-foreground">Twitter</span>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-border/50 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 group-hover:text-foreground">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Trending Section */}
                <div className="mt-16 space-y-8">
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
                      <TrendingUp className="w-4 h-4 text-accent" /> Emerging
                    </h4>
                    <div className="h-[1px] w-8 bg-accent/30 rounded-full" />
                  </div>
                  
                  <div className="space-y-10">
                    {[
                      { cat: "Engineering", title: "Scale-driven CI/CD Pipelines" },
                      { cat: "Design", title: "Micro-interactions in SaaS" }
                    ].map((item, i) => (
                      <div key={i} className="group cursor-pointer space-y-3">
                        <span className="text-[9px] font-black text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-md">{item.cat}</span>
                        <h5 className="text-sm font-bold leading-tight group-hover:text-accent transition-colors block">
                          {item.title}
                        </h5>
                        <div className="flex items-center gap-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="text-[9px] font-bold uppercase tracking-widest">Read More</span>
                           <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
