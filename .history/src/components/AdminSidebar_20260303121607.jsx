"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  LogOut,
  ChevronRight,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects-management", icon: Briefcase },
  { name: "Blogs", href: "/blogs-management", icon: FileText },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-[#0a0f1c] border-r border-border flex flex-col z-20">
      <div className="p-8 border-b border-border/10 text-xl font-black text-white tracking-[0.4em] uppercase">
        ADMIN<span className="text-accent">_</span>
      </div>

      <nav className="flex-grow p-5 space-y-3 mt-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                isActive
                  ? "bg-accent/10 text-accent border border-accent/20 shadow-lg shadow-accent/5"
                  : "text-slate-500 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon
                  size={20}
                  className={`icon-scale ${isActive ? "text-accent" : "group-hover:text-accent"}`}
                />
                <span className="font-bold text-small uppercase tracking-widest">
                  {link.name}
                </span>
              </div>
              {isActive ? (
                <motion.div
                  layoutId="active-dot"
                  className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                />
              ) : (
                <ChevronRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-slate-600"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t border-border/10">
        <Link
          href="/logout"
          className="flex items-center gap-4 p-4 text-red-400/60 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all font-bold text-small uppercase tracking-widest group"
        >
          <LogOut
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
