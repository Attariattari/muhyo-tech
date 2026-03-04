"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 border-b border-border/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Muhyo
          <span className="text-accent underline decoration-accent/30 underline-offset-4">
            Tech
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-small font-bold text-foreground/70 hover:text-accent transition-all tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/resume"
            className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground text-small font-black tracking-widest uppercase hover:brightness-110 transition-all hover-glow"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1 transition-transform active:scale-90"
          >
            {isOpen ? (
              <X size={24} className="icon-scale" />
            ) : (
              <Menu size={24} className="icon-scale" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden glass border-b border-border absolute w-full"
          >
            <div className="px-6 py-10 flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-foreground hover:text-accent tracking-widest uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/resume"
                className="w-full text-center py-4 rounded-xl bg-accent text-accent-foreground font-black tracking-widest uppercase shadow-lg shadow-accent/20"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
