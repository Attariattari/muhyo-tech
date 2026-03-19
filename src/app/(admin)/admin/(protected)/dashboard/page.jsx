"use client";

import Link from "next/link";
import { 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Cpu, 
  TrendingUp, 
  Users, 
  Zap, 
  Clock,
  ArrowUpRight,
  ChevronRight,
  LayoutDashboard,
  Code2
} from "lucide-react";
import useAdminStore from "@/lib/store/adminStore";
import { ADMIN_NAVIGATION_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

const ICON_MAP = {
  LayoutDashboard,
  Briefcase,
  Cpu,
  FileText,
  Code2,
  MessageSquare,
};

export default function DashboardPage() {
  const { portfolioData, messages } = useAdminStore();
  
  const stats = [
    { 
      label: "Total Projects", 
      value: portfolioData.projects.length, 
      icon: Briefcase, 
      color: "text-cyan-400", 
      bg: "bg-cyan-500/10",
      trend: "+2 this month",
      link: "/admin/projects"
    },
    { 
      label: "Blog Posts", 
      value: portfolioData.blogs.length, 
      icon: FileText, 
      color: "text-violet-400", 
      bg: "bg-violet-500/10",
      trend: "4 featured",
      link: "/admin/blog"
    },
    { 
      label: "Inbound Messages", 
      value: messages.length, 
      icon: MessageSquare, 
      color: "text-emerald-400", 
      bg: "bg-emerald-500/10",
      trend: `${messages.filter(m => !m.isRead).length} unread`,
      link: "/admin/messages"
    },
    { 
      label: "Services Offered", 
      value: portfolioData.services.length, 
      icon: Cpu, 
      color: "text-amber-400", 
      bg: "bg-amber-500/10",
      trend: "Active state",
      link: "/admin/services"
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-foreground leading-none">
            System <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-4 font-medium tracking-tight">Real-time performance analytics and content orchestration center.</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-2 rounded-2xl">
            <span className="flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-xl text-[10px] uppercase font-black tracking-widest border border-accent/20 animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#90e0ef]" />
                System Operational
            </span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-2 pr-4 tabular-nums">
                v2.4.0-Stable
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 border border-white/5 bg-white/[0.02] rounded-[2.5rem] hover:border-accent/30 transition-all duration-500 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} blur-[60px] translate-x-16 -translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="flex justify-between items-start relative z-10 mb-6">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <Link href={stat.link} className="p-2.5 rounded-xl border border-white/5 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative z-10">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-2">{stat.label}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-foreground tabular-nums tracking-tighter italic">{stat.value}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent/80 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1">Units</span>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">{stat.trend}</span>
                <TrendingUp className={`w-3 h-3 ${stat.color} opacity-40`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
           <div className="p-10 border border-white/5 bg-white/[0.01] rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full translate-x-40 -translate-y-40 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-10">
                <div>
                   <h2 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                      <Zap className="w-8 h-8 text-accent fill-accent/20" />
                      Quick Access Modules
                   </h2>
                   <p className="text-sm text-muted-foreground mt-2 font-medium">Direct navigation to system management core components.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {ADMIN_NAVIGATION_LINKS.filter(l => l.name !== 'Dashboard').map((link) => {
                    const Icon = ICON_MAP[link.icon] || FileText;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="p-6 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-accent/40 hover:bg-white/[0.04] transition-all group/link flex flex-col gap-4 active:scale-95"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground group-hover/link:text-accent group-hover/link:bg-accent/10 transition-colors border border-white/10">
                           <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover/link:text-foreground transition-colors">{link.name}</span>
                      </Link>
                    );
                 })}
              </div>
           </div>

           <div className="p-10 border border-white/5 bg-[#0d1526]/50 rounded-[3rem] relative overflow-hidden">
               <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                    <Clock className="w-8 h-8 text-accent" />
                    System Status
                  </h2>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: "Memory Usage", val: "42%", color: "bg-blue-500" },
                    { label: "CPU Load", val: "18%", color: "bg-emerald-500" },
                    { label: "DB Latency", val: "24ms", color: "bg-amber-500" },
                  ].map(item => (
                    <div key={item.label} className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/70 px-2">
                          <span>{item.label}</span>
                          <span className="text-foreground">{item.val}</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: item.val }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${item.color} rounded-full opacity-80`} 
                          />
                       </div>
                    </div>
                  ))}
               </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="p-8 border border-white/5 bg-accent/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent opacity-80 mb-6 block leading-none">Global Broadcast</span>
                <h3 className="text-2xl font-black text-foreground italic leading-tight uppercase tracking-tighter mb-4">
                  Everything is <span className="text-accent underline decoration-accent/20 underline-offset-8 italic uppercase">Optimized</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium mb-8">
                  Your portfolio is currently serving 12 active components with a 100% lighthouse score across all metrics.
                </p>
                <Link href="/" target="_blank" className="inline-flex items-center justify-center gap-3 w-full py-4 bg-accent text-black font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-accent/90 transition-all active:scale-[0.98]">
                   Preview Site Content
                   <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
           </div>

           <div className="p-8 border border-white/5 bg-white/[0.01] rounded-[2.5rem] relative overflow-hidden">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">Recent Activity</h3>
                <div className="space-y-6">
                    {[
                      { type: "Update", user: "Pir Ghulam", module: "Projects", time: "2h ago" },
                      { type: "Delete", user: "Admin", module: "Blog", time: "5h ago" },
                      { type: "Create", user: "Pir Ghulam", module: "Services", time: "1d ago" },
                    ].map((act, i) => (
                      <div key={i} className="flex gap-4 group cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                            <Users className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-accent" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="text-[11px] font-bold text-foreground tracking-tight underline-offset-4 group-hover:underline transition-all">
                              {act.user} <span className="text-muted-foreground opacity-50 lowercase font-normal">performed</span> {act.type}
                            </p>
                            <span className="text-[9px] uppercase font-black tracking-widest text-accent/60 opacity-60 flex items-center gap-2 mt-1">
                                {act.module}
                                <div className="w-1 h-1 rounded-full bg-white/10" />
                                {act.time}
                            </span>
                        </div>
                      </div>
                    ))}
                </div>
           </div>
        </div>
      </div>
    </div>
  );
}
