"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Tag, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSlider({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Filter for featured posts, but fallback to first 3 if none are marked featured to prevent empty slider
  const featuredPosts = posts.filter(post => post.featured).length > 0 
    ? posts.filter(post => post.featured) 
    : posts.slice(0, 3);

  useEffect(() => {
    if (!isHovered && featuredPosts.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, featuredPosts.length]);

  const nextSlide = () => {
    if (featuredPosts.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    if (featuredPosts.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  if (featuredPosts.length === 0) return null;

  const currentPost = featuredPosts[currentIndex];

  return (
    <div 
      className="relative w-full h-[550px] md:h-[650px] overflow-hidden rounded-[3rem] border border-border/50 group shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPost.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* Background Image with Parallax-ish Effect */}
          <div className="absolute inset-0">
            <motion.div 
               initial={{ scale: 1.1 }}
               animate={{ scale: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="relative w-full h-full"
            >
              <Image
                src={currentPost.image}
                alt={currentPost.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Multi-layered Gradients for Cinematic Look */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content Layer */}
          <div className="relative h-full flex flex-col justify-center px-10 md:px-20 lg:px-32 max-w-5xl z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                <span className="px-5 py-2 rounded-full bg-accent backdrop-blur-md text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2.5 shadow-xl">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Perspective
                </span>
                <span className="h-[1px] w-12 bg-accent/30" />
                <span className="text-foreground/60 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent" /> {currentPost.readTime}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] text-foreground tracking-tight drop-shadow-sm">
                {currentPost.title}
              </h2>

              <p className="text-xl text-muted-foreground line-clamp-2 md:line-clamp-3 leading-relaxed max-w-2xl font-medium opacity-90">
                {currentPost.summary}
              </p>

              <div className="pt-6">
                <Link
                  href={`/blog/${currentPost.id}`}
                  className="inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-2xl font-bold uppercase text-[10px] tracking-[0.3em] transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-2xl hover:shadow-accent/40 group/btn"
                >
                  Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-16 right-16 flex gap-4 z-20 group-hover:translate-x-0 translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all flex items-center justify-center shadow-2xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all flex items-center justify-center shadow-2xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-16 left-16 flex gap-4 z-20">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative h-10 w-2 flex items-center justify-center touch-none"
          >
            <div className={`h-full w-0.5 rounded-full transition-all duration-700 ${
              index === currentIndex ? "bg-accent scale-y-125" : "bg-white/20 group-hover:bg-white/40"
            }`} />
            {index === currentIndex && (
               <motion.div 
                 layoutId="slider-dot-active"
                 className="absolute inset-0 bg-accent/20 blur-md rounded-full -z-10"
               />
            )}
          </button>
        ))}
      </div>

      {/* Decorative Brand Elements */}
      <div className="absolute top-12 right-12 z-10 opacity-20 hidden md:block">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] vertical-text transform rotate-180">
          Muhyo Tech Editorial
        </div>
      </div>
    </div>
  );
}
