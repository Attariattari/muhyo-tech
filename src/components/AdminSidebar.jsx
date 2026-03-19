"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  LogOut,
  ChevronRight,
  Settings,
  Cpu,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import { ADMIN_NAVIGATION_LINKS } from "@/lib/constants";
import { toast } from "sonner";

const ICON_MAP = {
  LayoutDashboard,
  Briefcase,
  Cpu,
  FileText,
  Code2,
  MessageSquare,
  Settings,
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        toast.success("Identity revoked. Redirecting...");
        router.push("/admin/login");
      }
    } catch (err) {
      toast.error("Logout failed. System failure.");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-card border-r border-border flex flex-col z-20 shadow-2xl">
      <div className="p-8 border-b border-border text-2xl font-black text-foreground tracking-widest uppercase italic border-l-4 border-accent">
        ADMIN
        <span className="text-accent underline decoration-accent/30 underline-offset-8">
          .
        </span>
      </div>

      <nav className="flex-1 min-h-0 p-6 space-y-2 mt-4 overflow-y-auto font-sans">
        {ADMIN_NAVIGATION_LINKS.map((link) => {
          const IconComponent = ICON_MAP[link.icon] || FileText;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-3 rounded-xl transition-all group ${
                isActive
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-border/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <IconComponent
                  className={`w-5 h-5 ${isActive ? "text-accent" : "group-hover:text-accent"}`}
                />
                <span className="font-semibold text-sm tracking-tight">{link.name}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 text-red-100 hover:text-white hover:bg-red-500 rounded-xl transition-all font-semibold text-sm active:scale-95 cursor-pointer shadow-lg shadow-red-500/10"
        >
          <LogOut className="w-5 h-5" />
          <span>Revoke Identity</span>
        </button>
      </div>
    </div>
  );
}
