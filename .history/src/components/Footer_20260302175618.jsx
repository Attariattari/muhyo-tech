"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card/20 border-t border-border mt-20 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Muhyo
              <span className="text-accent underline decoration-accent/30 underline-offset-4">
                Tech
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
              A professional portfolio by Muhyo Tech. Crafting high-performance
              digital solutions with premium aesthetics and cross-platform
              compatibility.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase text-xs tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase text-xs tracking-widest">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                className="p-2 rounded-full glass hover-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full glass hover-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full glass hover-glow"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@muhyo.tech"
                className="p-2 rounded-full glass hover-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhyo Tech. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:opacity-80 group transition-all"
          >
            Back to Top{" "}
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
