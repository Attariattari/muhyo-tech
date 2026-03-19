"use client";

import { useState, useEffect } from "react";
import useAdminStore from "@/lib/store/adminStore";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Search, Filter, ShieldCheck, Mail, Calendar, UserCheck, UserX, Loader2, Trash2, ShieldAlert, AlertCircle, RefreshCw } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

export default function UserManagementPage() {
    const { users, fetchUsers, updateUserStatus } = useAdminStore();
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers().then(() => setLoading(false));
        
        // Listen for real-time updates from Topbar SSE (via store refresh)
        const eventSource = new EventSource("/api/admin/events");
        eventSource.addEventListener("user", () => {
             fetchUsers();
        });
        return () => eventSource.close();
    }, []);

    const filteredUsers = users.filter(u => {
        const matchesSearch = u.email.toLowerCase().includes(search.toLowerCase()) || 
                              u.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "all" || u.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleAction = async (email, action) => {
        toast.promise(updateUserStatus(email, action), {
            loading: `Executing ${action} protocol...`,
            success: `User authority recalibrated: ${action}`,
            error: "Protocol failure. Nexus locked."
        });
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
             <Loader2 className="w-12 h-12 text-blue-500 animate-spin opacity-50 mb-6" />
             <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] animate-pulse">Syncing Authority Records...</p>
        </div>
    );

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                <div>
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white mb-2">
                        User <span className="text-blue-500">Directory</span>
                    </h1>
                    <p className="text-slate-400 text-sm font-medium tracking-tight opacity-70">
                        Manage administrative roles and access authorizations.
                    </p>
                </div>
                
                <div className="flex items-center gap-4">
                    <button onClick={() => fetchUsers()} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all">
                        <RefreshCw className="w-5 h-5" />
                    </button>
                    <div className="px-5 py-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        <div>
                             <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Total Personnel</p>
                             <p className="text-xl font-bold text-white">{users.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search by name or email hash..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#0f172a]/40 border border-white/5 p-4 pl-12 rounded-2xl text-white text-sm outline-none focus:border-blue-500/30 transition-all backdrop-blur-md"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {['all', 'pending', 'approved', 'denied', 'removed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                                statusFilter === status 
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20' 
                                : 'bg-[#0f172a]/40 text-slate-500 border-white/5 hover:border-blue-500/30'
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Personnel Identity</th>
                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Authority Status</th>
                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Commissioned</th>
                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <AnimatePresence mode="popLayout">
                            {filteredUsers.length === 0 ? (
                                <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <td colSpan={4} className="p-20 text-center text-slate-600 italic uppercase font-black text-[10px] tracking-[0.5em]">No personnel records found in this sector.</td>
                                </motion.tr>
                            ) : filteredUsers.map((u) => (
                                <motion.tr 
                                    key={u.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                                                u.status === 'removed' ? 'bg-red-500/5 border-red-500/10 text-red-500/40' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'
                                            }`}>
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`text-sm font-black italic ${u.status === 'removed' ? 'text-slate-600 line-through' : 'text-white'}`}>{u.name}</p>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{u.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${
                                            u.status === 'approved' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                            u.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 animate-pulse' :
                                            u.status === 'removed' ? 'bg-red-600/20 text-red-400 border-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.2)]' :
                                            'bg-red-500/10 text-red-500 border-red-500/20'
                                        }`}>
                                            {u.status === 'removed' && <AlertCircle className="w-3 h-3" />}
                                            {u.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span className="text-xs font-bold">{format(new Date(u.createdAt), "MMM d, yyyy")}</span>
                                            </div>
                                            <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest mt-1">
                                                {format(new Date(u.createdAt), "HH:mm:ss")} UTC
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-end gap-3">
                                            {u.role === 'super-admin' ? (
                                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 italic tracking-[0.2em] bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20 select-none">
                                                    <ShieldCheck className="w-4 h-4" /> Root
                                                </div>
                                            ) : (
                                                <div className="flex gap-2">
                                                    {u.status !== 'approved' && (
                                                        <button 
                                                            onClick={() => handleAction(u.email, 'approve')}
                                                            className="p-3 bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-lg group/btn"
                                                            title="Authorize Personnel"
                                                        >
                                                            <UserCheck className="w-5 h-5 group-active/btn:scale-90 transition-transform" />
                                                        </button>
                                                    )}
                                                    {u.status !== 'denied' && u.status !== 'removed' && (
                                                        <button 
                                                            onClick={() => handleAction(u.email, 'deny')}
                                                            className="p-3 bg-orange-600/10 text-orange-500 border border-orange-600/20 rounded-xl hover:bg-orange-600 hover:text-white transition-all shadow-lg group/btn"
                                                            title="Deny Access"
                                                        >
                                                            <UserX className="w-5 h-5 group-active/btn:scale-90 transition-transform" />
                                                        </button>
                                                    )}
                                                    {u.status !== 'removed' && (
                                                        <button 
                                                            onClick={() => handleAction(u.email, 'remove')}
                                                            className="p-3 bg-red-600/10 text-red-500 border border-red-600/20 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg group/btn"
                                                            title="Blacklist User"
                                                        >
                                                            <Trash2 className="w-5 h-5 group-active/btn:scale-90 transition-transform" />
                                                        </button>
                                                    )}
                                                    {u.status === 'removed' && (
                                                        <span className="text-[9px] text-red-500 font-black uppercase tracking-widest border border-red-500/20 px-4 py-2 rounded-xl bg-red-500/5 select-none animate-pulse">
                                                            Node Locked (24h)
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Footer Alert */}
            <div className="mt-12 p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-center gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                    <ShieldAlert className="w-6 h-6 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                     <p className="text-[10px] font-black uppercase text-blue-400 tracking-[0.3em] mb-1">Administrative Protocol</p>
                     <p className="text-sm text-slate-500 font-medium tracking-tight">Super Admin actions are final. Authorizing or removing personnel will broadcast immediately across the Authority Nexus.</p>
                </div>
            </div>
        </div>
    );
}
