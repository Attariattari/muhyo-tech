"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      name: "Total Projects",
      value: "12",
      icon: Briefcase,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      name: "Blog Posts",
      value: "24",
      icon: FileText,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      name: "Messages",
      value: "158",
      icon: MessageSquare,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      name: "Unique Visitors",
      value: "1.2k",
      icon: Users,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-white tracking-widest uppercase">
          Dashboard Overview
        </h1>
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Management Insights & System Health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl group hover:border-blue-500/50 transition-all active:scale-95 cursor-pointer"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white mb-1">
              {stat.value}
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {stat.name}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <h3 className="text-lg font-black text-white uppercase tracking-widest">
              Recent Activity
            </h3>
            <button className="text-[10px] font-black uppercase text-blue-500 tracking-widest hover:underline">
              View All Logs
            </button>
          </div>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-800/40 transition-colors"
            >
              <div className="p-3 rounded-full bg-slate-800 border border-slate-700">
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex-grow">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">
                  2 hours ago
                </div>
                <p className="text-sm text-slate-200 font-medium">
                  New project{" "}
                  <span className="text-blue-500 font-bold">
                    "Quantum E-Commerce"
                  </span>{" "}
                  was successfully published to production.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 rounded-3xl bg-blue-600 border border-blue-500 space-y-8 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
          <h3 className="text-xl font-black text-white uppercase tracking-widest">
            Growth Analytics
          </h3>
          <div className="flex items-end gap-3">
            <div className="text-5xl font-black text-white">+24%</div>
            <TrendingUp className="w-8 h-8 text-white mb-2" />
          </div>
          <p className="text-xs text-blue-100 font-medium leading-relaxed">
            Engagement rate is up by 24% since last month. Most users are
            interested in the{" "}
            <span className="font-bold underline">Next.js 15 blog post</span>.
          </p>
          <button className="w-full py-4 rounded-xl bg-white text-blue-600 font-black uppercase text-[10px] tracking-widest hover:bg-slate-100 transition-colors shadow-xl">
            Detailed Statistics
          </button>
        </div>
      </div>
    </div>
  );
}
