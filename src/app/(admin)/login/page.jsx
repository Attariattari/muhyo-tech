"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, User, LogIn, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simple mock login
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] px-6">
      <div className="w-full max-w-md glass p-12 rounded-3xl border border-border/10 space-y-10 shadow-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-black text-white tracking-[0.2em] mb-2 uppercase">
            Admin Access
          </h2>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Provide secure credentials to proceed
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-secondary tracking-widest ml-1">
              Username
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-blue-500 transition-colors" />
              <input
                placeholder="Admin"
                className="w-full bg-slate-900 border border-slate-800 p-4 pl-12 rounded-xl text-sm font-bold text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-secondary tracking-widest ml-1">
              Secure Passkey
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-blue-500 transition-colors" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-800 p-4 pl-12 rounded-xl text-sm font-bold text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                required
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase text-sm tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Authorize Entry"
            )}
            {!loading && <LogIn className="w-4 h-4" />}
          </button>
        </form>

        <p className="text-center text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">
          Secure Muhyo Panel v1.0
        </p>
      </div>
    </div>
  );
}
