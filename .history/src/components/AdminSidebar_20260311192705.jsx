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
        ADMIN<span className="text-accent">.</span>
      </div>

      <nav className="flex-1 min-h-0 p-6 space-y-2 mt-4 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-3 rounded-xl transition-all group ${
classNames({
                  "bg-accent/10 text-accent border border-accent/20": isActive,
                  "text-muted-foreground hover:text-foreground hover:bg-white/5": !isActive
                }) // Note: I should probably just use template literals as before for consistency
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
