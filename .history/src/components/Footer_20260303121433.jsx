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
            <h4 className="text-foreground font-bold mb-6 uppercase text-small tracking-[0.3em]">
              Navigation
            </h4>
            <ul className="space-y-3 text-small text-muted-foreground/70">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase text-small tracking-[0.3em]">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-xl glass hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Github size={20} className="icon-scale" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-xl glass hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin size={20} className="icon-scale" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="p-3 rounded-xl glass hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Twitter size={20} className="icon-scale" />
              </a>
              <a
                href="mailto:contact@muhyo.tech"
                className="p-3 rounded-xl glass hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail size={20} className="icon-scale" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 text-small">
          <p className="text-muted-foreground/60 font-medium">
            &copy; {new Date().getFullYear()} Muhyo Tech. Built with Precision &
            Heart.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 font-black uppercase tracking-[0.2em] text-accent hover:opacity-70 group transition-all"
          >
            Back to Top{" "}
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform icon-scale"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
