"use client";

import { Bell, Search, User, LogOut, ExternalLink, Settings, X, Check, Trash2, ShieldCheck, Mail, Cpu, UserCheck, MessageSquare, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import useAdminStore from "@/lib/store/adminStore";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [session, setSession] = useState(null);
  const { notifications, fetchNotifications, updateNotification, deleteNotification, settings } = useAdminStore();
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Fetch Session
    fetch("/api/admin/me")
      .then(res => res.json())
      .then(data => setSession(data));

    // Initial Fetch
    fetchNotifications();

    // Authority Event Stream (Real-time SSE)
    const eventSource = new EventSource("/api/admin/events");

    eventSource.addEventListener("notification", (e) => {
        const notif = JSON.parse(e.data);
        // Sync Store (Add to top of list if not exists)
        const currentNotifs = useAdminStore.getState().notifications;
        if (!currentNotifs.some(n => n.id === notif.id)) {
            useAdminStore.getState().setData('notifications', [notif, ...currentNotifs]);
            playNotificationSound();
            triggerBrowserNotification(notif);
            toast.info(notif.title, { description: notif.message });
        }
    });

    eventSource.addEventListener("user", (e) => {
        const data = JSON.parse(e.data);
        if (data.forceLogout && session && data.email === session.email) {
            playNotificationSound();
            toast.error("Authority Revoked", { description: "Your access has been terminated by Super Admin." });
            setTimeout(() => {
                fetch("/api/admin/logout", { method: "POST" }).then(() => {
                    window.location.href = "/admin/login";
                });
            }, 2000);
        }
    });

    return () => eventSource.close();
  }, [session]);

  const playNotificationSound = () => {
    try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, context.currentTime);
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, context.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0, context.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(context.currentTime + 0.3);
    } catch (e) { /* Audio policy */ }
  };

  const triggerBrowserNotification = (notif) => {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification(`[Nexus Log] ${notif.title}`, {
            body: notif.message,
            icon: "/favicon.ico"
        });
    }
  };

  const unreadCount = useMemo(() => notifications.filter(n => n.status === 'unread').length, [notifications]);
  const latestNotifications = useMemo(() => notifications.slice(0, 10), [notifications]);

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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search resources..."
            className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all w-80 text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
          <Link 
            href="/" 
            target="_blank"
            className="p-2.5 hover:bg-white/5 rounded-xl text-slate-500 hover:text-blue-500 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </Link>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2.5 hover:bg-white/5 rounded-xl transition-all ${showNotifications ? 'bg-white/5 text-blue-500 shadow-xl' : 'text-slate-500 hover:text-foreground'}`}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-blue-500 text-[9px] font-black text-white rounded-full border-2 border-[#0a0f1c] flex items-center justify-center animate-bounce shadow-xl">
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
                className="absolute right-0 mt-4 w-[400px] bg-[#0d1526] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50 backdrop-blur-2xl"
              >
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <h3 className="text-sm font-black uppercase tracking-widest text-white italic italic-tighter">Authority Monitor</h3>
                  <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-500 rounded-md font-black uppercase tracking-widest border border-blue-500/20">{unreadCount} New Logs</span>
                </div>
                
                <div className="max-h-[480px] overflow-y-auto custom-scrollbar">
                  {latestNotifications.length > 0 ? (
                    latestNotifications.map((n) => {
                      const Icon = n.type === 'USER_REQUEST' ? UserCheck : n.type === 'MESSAGE' ? MessageSquare : Cpu;
                      const isUnread = n.status === 'unread';

                      return (
                        <div 
                          key={n.id} 
                          className={`p-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors relative group ${isUnread ? 'bg-blue-500/[0.03]' : ''}`}
                        >
                          <div className="flex gap-4">
                            <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center border-2 border-white/5 flex-shrink-0 transition-transform ${isUnread ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' : 'bg-slate-500/5 text-slate-600'}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-4 mb-1">
                                    <h4 className={`text-xs font-bold truncate ${isUnread ? 'text-white' : 'text-slate-500'}`}>{n.title}</h4>
                                    <span className="text-[9px] text-slate-600 font-bold whitespace-nowrap uppercase tracking-tighter">{formatDistanceToNow(new Date(n.createdAt))} ago</span>
                                </div>
                                <p className={`text-[11px] leading-relaxed truncate-2-lines ${isUnread ? 'text-slate-300' : 'text-slate-600 opacity-60'}`}>{n.message}</p>
                                
                                <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {isUnread && (
                                    <button 
                                      onClick={() => updateNotification(n.id, 'read')}
                                      className="text-[9px] font-black uppercase tracking-widest text-blue-500 hover:text-white flex items-center gap-1 transition-colors"
                                    >
                                      <Check className="w-3 h-3" /> Stabilize
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => deleteNotification(n.id)}
                                    className="text-[9px] font-black uppercase tracking-widest text-red-500/60 hover:text-red-500 flex items-center gap-1 transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" /> Purge
                                  </button>
                                  {n.type === 'USER_REQUEST' && (
                                      <Link 
                                        href="/admin/users" 
                                        className="text-[9px] font-black uppercase tracking-widest text-white hover:text-blue-500 ml-auto"
                                        onClick={() => setShowNotifications(false)}
                                      >
                                        Authorize →
                                      </Link>
                                  )}
                                </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div className="p-16 text-center text-slate-600 italic">
                      <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-20" />
                      <p className="text-xs font-bold uppercase tracking-widest">Authority Status Normal</p>
                      <p className="text-[10px] opacity-50 mt-1 uppercase">No security events recorded</p>
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/admin/notifications" 
                  className="block p-4 text-center text-[10px] font-black uppercase tracking-widest text-white bg-blue-600/10 hover:bg-blue-600 transition-all border-t border-white/5 active:scale-95"
                  onClick={() => setShowNotifications(false)}
                >
                  Enter Nexus Log
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/admin/settings" className="p-2.5 hover:bg-white/5 rounded-xl text-slate-500 hover:text-foreground transition-all">
          <Settings className="w-5 h-5" />
        </Link>

        <div className="h-8 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-3 pl-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-white tracking-tight leading-none mb-1">{settings.adminName}</span>
            <div className="flex items-center gap-1 opacity-70">
                <ShieldCheck className="w-3 h-3 text-blue-500" />
                <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{session?.role || "Synchronizing..."}</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-xl shadow-blue-500/20 group hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[10px] bg-[#0a0f1c] flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
