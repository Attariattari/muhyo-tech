"use client";

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
  Users,
  ShieldCheck,
  Bell,
  Activity,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ADMIN_NAVIGATION_LINKS } from "@/lib/constants";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import useAdminStore from "@/lib/store/adminStore";

const ICON_MAP = {
  LayoutDashboard,
  Briefcase,
  Cpu,
  FileText,
  Code2,
  MessageSquare,
  Settings,
  Users,
  Bell,
  Activity,
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState(null);
  const { notifications } = useAdminStore();

  useEffect(() => {
    fetch("/api/admin/me")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        toast.success("Security nexus disconnected.");
        router.push("/admin/login");
      }
    } catch (err) {
      toast.error("Logout failed. Security failure.");
    }
  };

  const unreadLogCount = notifications.filter(n => n.status === 'unread').length;

  // Manually ensure Notifications is in the nav or use constant
  // Actually, I'll update constants.js too or just add it here temporarily
  const extraLinks = [
      { name: "Notifications", href: "/admin/notifications", icon: "Bell", badge: unreadLogCount > 0 ? unreadLogCount : null },
  ];

  // Filter links based on role
  const baseLinks = [...ADMIN_NAVIGATION_LINKS];
  // Ensure Notifications is added if not there
  if (!baseLinks.find(l => l.name === "Notifications")) {
      baseLinks.splice(1, 0, extraLinks[0]);
  }

  const filteredLinks = baseLinks.filter(link => {
      if (link.name === "Users") return session?.role === "super-admin";
      if (link.name === "Notifications") return session?.role === "super-admin";
      return true;
  });

  return (
    <div className="fixed left-0 top-0 w-72 h-full bg-[#0a0f1c] border-r border-white/5 flex flex-col z-20 shadow-2xl">
      {/* Branding */}
      <div className="p-10 border-b border-white/5 bg-gradient-to-b from-blue-500/5 to-transparent">
        <Link href="/admin/dashboard" className="flex flex-col gap-2 mb-2 group">
            <div className="flex items-center gap-3 font-black text-white tracking-[0.3em] uppercase italic group-hover:scale-105 transition-transform origin-left">
                <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">MUHYO</span>
                <span>NEXUS</span>
            </div>
            {session && (
                <div className="flex items-center gap-2 mt-4 px-3 py-1.5 bg-blue-500/10 rounded-[0.75rem] w-fit border border-blue-500/20 shadow-lg shadow-blue-500/5 group-hover:bg-blue-500/20 transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[9px] font-black uppercase text-blue-400 tracking-[0.2em]">{session.role}</span>
                </div>
            )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 min-h-0 p-8 space-y-2 mt-4 overflow-y-auto custom-scrollbar font-sans">
        {filteredLinks.map((link) => {
          const IconComponent = ICON_MAP[link.icon] || FileText;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group relative ${
                isActive
                  ? "bg-blue-600/10 text-blue-400 border border-blue-600/30 shadow-xl shadow-blue-600/5"
                  : "text-slate-500 hover:text-white hover:bg-white/[0.03] border border-transparent"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-1 rounded-lg transition-colors ${isActive ? 'text-blue-500' : 'text-slate-600 group-hover:text-blue-500/60'}`}>
                    <IconComponent className="w-5 h-5" />
                </div>
                <span className="font-bold text-[11px] uppercase tracking-widest">{link.name}</span>
              </div>
              
              <div className="flex items-center gap-3">
                  {link.badge && (
                      <span className="px-2 py-0.5 bg-blue-500 text-[9px] font-black text-white rounded-md animate-pulse">
                        {link.badge}
                      </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* External & Security */}
      <div className="p-8 border-t border-white/5 space-y-4 bg-gradient-to-t from-blue-500/5 to-transparent">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 p-4 text-red-100 hover:text-white hover:bg-red-500 rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 cursor-pointer shadow-xl shadow-red-500/10"
        >
          <LogOut className="w-4 h-4" />
          <span>Revoke Access</span>
        </button>
        
        <div className="flex flex-col gap-2 p-2 pt-4 opacity-30">
             <div className="flex items-center gap-2">
                 <ShieldAlert className="w-3 h-3 text-slate-500" />
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Security Encrypted</span>
             </div>
             <p className="text-[7px] font-bold text-slate-600 uppercase tracking-tighter">Nexus Authorization Alpha v2.0</p>
        </div>
      </div>
    </div>
  );
}
