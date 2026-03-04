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
      <div className="p-8 border-b border-border text-2xl font-black text-white tracking-widest uppercase">
        ADMIN<span className="text-blue-500">.</span>
      </div>

      <nav className="flex-grow p-6 space-y-3 mt-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-4 rounded-xl transition-all group ${
                isActive
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon
                  size={20}
                  className={`icon-scale ${isActive ? "text-accent" : "group-hover:text-accent"}`}
                />
                <span className="text-small font-bold tracking-widest uppercase">
                  {link.name}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border/10">
        <Link
          href="/logout"
          className="flex items-center gap-4 p-4 text-red-400/70 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold text-small tracking-widest uppercase"
        >
          <LogOut size={20} className="icon-scale" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
