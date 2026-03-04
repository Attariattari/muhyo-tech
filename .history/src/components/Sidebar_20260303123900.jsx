"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
  GripVertical,
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        document.documentElement.style.setProperty("--sidebar-width", "0px");
      } else {
        document.documentElement.style.setProperty(
          "--sidebar-width",
          isCollapsed ? "100px" : "300px",
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isCollapsed]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Mobile Glass Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-20 bg-background/60 backdrop-blur-xl border-b border-white/5 z-[60] px-8 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center overflow-hidden shadow-lg shadow-accent/20">
            <img
              src="/logo.png"
              alt="Muhyo Tech"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-black text-foreground tracking-tighter uppercase italic">
            Muhyo
            <span className="text-accent underline decoration-accent/30 underline-offset-4">
              Tech
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent hover:bg-accent/10 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Modern Desktop Sidebar */}
      <aside
        className={`fixed left-4 top-4 bottom-4 glass-dark rounded-[2.5rem] z-50 hidden lg:flex flex-col transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-white/10 shadow-2xl group ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo Section - Perfectly Centered */}
        <div
          className={`pt-10 mb-12 flex items-center transition-all duration-500 ${isCollapsed ? "justify-center px-0" : "gap-4 px-6"}`}
        >
          <div className="relative group/logo">
            {/* Atmospheric Aura Glow */}
            <div className="absolute inset-0 bg-accent blur-3xl opacity-20 group-hover/logo:opacity-60 transition-all duration-1000 scale-150" />

            {/* Kinetic Orbital Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6px] border border-accent/20 rounded-[1.2rem] border-dashed"
            />

            {/* The Insignia Box */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-background/80 to-muted/30 border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-6 backdrop-blur-xl group-hover/logo:border-accent/30 overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-xl font-black text-foreground tracking-tighter leading-none italic uppercase whitespace-nowrap">
                Muhyo Tech
              </span>
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mt-1 whitespace-nowrap opacity-60">
                Studio V4.0
              </span>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-grow px-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group/link ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-0 bg-white/5 border border-white/5 rounded-2xl z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={`p-2.5 rounded-xl transition-all duration-300 ${isActive ? "bg-accent/10 border border-accent/20" : "bg-transparent border border-transparent group-hover/link:border-white/10 group-hover/link:bg-white/5"}`}
                  >
                    <link.icon
                      size={20}
                      className={`icon-scale transition-colors ${isActive ? "text-accent" : "text-muted-foreground group-hover/link:text-foreground"}`}
                    />
                  </div>
                  {!isCollapsed && (
                    <span className="text-[11px] font-black uppercase tracking-[0.25em]">
                      {link.name}
                    </span>
                  )}
                </div>

                {isActive && !isCollapsed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 mt-auto space-y-4">
          <div
            className={`flex items-center transition-all duration-300 ${isCollapsed ? "justify-center" : "justify-between px-2"}`}
          >
            {!isCollapsed && (
              <span className="text-xs font-black text-muted-foreground/30 uppercase tracking-widest italic">
                Theme Mode
              </span>
            )}
            <div className="p-1 rounded-xl bg-white/5 border border-white/5">
              <ThemeToggle />
            </div>
          </div>

          <Link
            href="/resume"
            className="relative h-14 w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-accent to-blue-600 text-white font-black uppercase text-[10px] tracking-[0.2em] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
          >
            <FileUser size={18} />
            {!isCollapsed && <span>Resume</span>}
          </Link>
        </div>

        {/* Minimalist Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-20 glass-dark border border-white/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:h-24 group/toggle"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </aside>

      {/* Futuristic Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-[#0a0f1c] z-[70] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-black text-white italic tracking-tighter uppercase">
                Muhyo
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                  Tech
                </span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-6 rounded-3xl border transition-all ${
                        isActive
                          ? "bg-accent/10 border-accent/20 text-accent shadow-xl shadow-accent/5"
                          : "border-transparent text-muted-foreground/60 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <link.icon
                          size={26}
                          className={
                            isActive ? "text-accent" : "text-muted-foreground"
                          }
                        />
                        <span className="text-2xl font-black uppercase tracking-widest italic">
                          {link.name}
                        </span>
                      </div>
                      <GripVertical size={20} className="text-white/10" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-6">
              <div className="flex items-center justify-between p-6 glass-dark rounded-3xl border border-white/5">
                <span className="font-black text-muted-foreground/40 uppercase tracking-[0.3em] text-[10px] italic">
                  Environment Theme
                </span>
                <ThemeToggle />
              </div>
              <Link
                href="/resume"
                className="w-full h-20 flex items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-accent to-blue-600 text-white font-black uppercase tracking-[0.4em] text-sm shadow-2xl shadow-accent/20"
                onClick={() => setIsOpen(false)}
              >
                <FileUser size={24} />
                Access Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
