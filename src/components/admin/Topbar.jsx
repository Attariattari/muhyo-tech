"use client";

import { Bell, Search, User, LogOut, ExternalLink, Settings, X, Check, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import useAdminStore from "@/lib/store/adminStore";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications, markNotificationAsRead, clearNotification, settings } = useAdminStore();
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="h-20 border-b border-white/5 bg-[#0a0f1c]/80 backdrop-blur-xl sticky top-0 z-30 px-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
          <input
            type="text"
            placeholder="Search resources..."
            className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
          <Link 
            href="/" 
            target="_blank"
            className="p-2.5 hover:bg-white/5 rounded-xl text-muted-foreground hover:text-accent transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </Link>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2.5 hover:bg-white/5 rounded-xl transition-all ${showNotifications ? 'bg-white/5 text-accent' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-accent text-[10px] font-black text-black rounded-full border-2 border-[#0a0f1c] flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-96 bg-[#0d1526] border border-white/10 rounded-3xl shadow-3xl overflow-hidden z-50"
              >
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <h3 className="text-sm font-black uppercase tracking-widest">Notifications</h3>
                  <span className="text-[10px] px-2 py-1 bg-accent/10 text-accent rounded-md font-bold uppercase">{unreadCount} New</span>
                </div>
                
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                  {notifications.length > 0 ? (
                    notifications.map((n) => (
                      <div 
                        key={n.id} 
                        className={`p-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors relative group ${!n.isRead ? 'bg-accent/[0.02]' : ''}`}
                      >
                        <div className="flex gap-4">
                          <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${n.type === 'success' ? 'bg-emerald-500' : n.type === 'error' ? 'bg-red-500' : 'bg-blue-500'} ${!n.isRead ? 'animate-pulse' : 'opacity-20'}`} />
                          <div className="flex-1">
                            <div className="flex justify-between items-start gap-4">
                              <h4 className={`text-xs font-bold ${!n.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>{n.title}</h4>
                              <span className="text-[9px] text-muted-foreground whitespace-nowrap">{formatDistanceToNow(new Date(n.createdAt))} ago</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{n.message}</p>
                            
                            <div className="flex items-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              {!n.isRead && (
                                <button 
                                  onClick={() => markNotificationAsRead(n.id)}
                                  className="text-[9px] font-black uppercase tracking-tighter text-accent hover:underline flex items-center gap-1"
                                >
                                  <Check className="w-3 h-3" /> Mark Read
                                </button>
                              )}
                              <button 
                                onClick={() => clearNotification(n.id)}
                                className="text-[9px] font-black uppercase tracking-tighter text-red-500/60 hover:text-red-500 flex items-center gap-1"
                              >
                                <Trash2 className="w-3 h-3" /> Clear
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-10 text-center text-muted-foreground italic text-xs opacity-50">
                      No recent notifications
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/admin/messages" 
                  className="block p-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-accent border-t border-white/5 bg-white/[0.01] transition-colors"
                  onClick={() => setShowNotifications(false)}
                >
                  View All Activity
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/admin/settings" className="p-2.5 hover:bg-white/5 rounded-xl text-muted-foreground hover:text-foreground transition-all">
          <Settings className="w-5 h-5" />
        </Link>

        <div className="h-8 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-3 pl-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-foreground tracking-tight">{settings.adminName}</span>
            <span className="text-[10px] text-accent font-black uppercase tracking-widest opacity-70">Administrator</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-600 p-0.5 shadow-lg shadow-accent/20">
            <div className="w-full h-full rounded-[10px] bg-[#0a0f1c] flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
