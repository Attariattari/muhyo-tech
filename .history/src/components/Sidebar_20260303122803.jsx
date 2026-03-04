"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import {
  Home,
  User,
  Cpu,
  Code2,
  FileText,
  Mail,
  Menu,
  X,
  FileUser,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Cpu },
  { name: "Projects", href: "/projects", icon: Code2 },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border/10 z-[60] px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black text-foreground tracking-tighter"
        >
          MUHYO<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-accent/10 text-accent"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <aside className="fixed left-0 top-0 h-screen w-20 xl:w-72 bg-background border-r border-border/10 z-50 hidden lg:flex flex-col transition-all duration-500 ease-in-out group">
        <div className="p-8 flex items-center justify-center xl:justify-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-black text-xl shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]">
            M
          </div>
          <span className="hidden xl:block text-xl font-black text-foreground tracking-tighter">
            Muhyo Tech
          </span>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all relative group/link ${
                  isActive
                    ? "bg-accent/10 text-accent font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <link.icon
                  size={22}
                  className={`transition-transform duration-300 group-hover/link:scale-110 ${isActive ? "text-accent" : ""}`}
                />
                <span className="hidden xl:block text-small font-black uppercase tracking-[0.2em]">
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute left-0 w-1 h-8 bg-accent rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 space-y-4">
          <div className="xl:flex items-center justify-between hidden px-2">
            <span className="text-xs font-black text-muted-foreground/50 uppercase tracking-widest">
              Theme
            </span>
            <ThemeToggle />
          </div>

          <Link
            href="/resume"
            className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-accent text-accent-foreground font-black uppercase text-xs tracking-widest hover-glow transition-all ${!isOpen && "xl:px-0"}`}
          >
            <FileUser size={18} />
            <span className="hidden xl:block text-small">Resume</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-background z-[70] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-black text-xl">
                  M
                </div>
                <span className="text-xl font-black text-foreground tracking-tighter">
                  Muhyo Tech
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl bg-muted/50 text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-grow space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-accent/10 border-accent/20 text-accent"
                        : "border-transparent text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <link.icon size={22} />
                      <span className="text-lg font-black uppercase tracking-widest">
                        {link.name}
                      </span>
                    </div>
                    {isActive && <ArrowRight size={18} />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-6 pt-8 border-t border-border/10">
              <Link
                href="/resume"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-accent text-accent-foreground font-black uppercase tracking-widest shadow-xl shadow-accent/20"
                onClick={() => setIsOpen(false)}
              >
                <FileUser size={20} />
                Download Resume
              </Link>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl">
                <span className="font-bold text-muted-foreground uppercase tracking-widest text-xs">
                  Switch Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[65]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
