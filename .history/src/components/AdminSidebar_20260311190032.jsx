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

      <nav className="flex-grow p-6 space-y-2 mt-4 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-3 rounded-xl transition-all group ${
                isActive
                  ? "bg-blue-600/20 text-blue-500 border border-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <link.icon
                  className={`w-5 h-5 ${isActive ? "text-blue-500" : "group-hover:text-blue-500"}`}
                />
                <span className="font-semibold text-sm">{link.name}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="w-1.5 h-1.5 rounded-full bg-blue-500"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border">
        <Link
          href="/logout"
          className="flex items-center gap-3 p-3 text-red-400/70 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors font-semibold text-sm"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
