"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, Loader2, ShieldCheck, AlertCircle, Laptop } from "lucide-react";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const [passkey, setPasskey] = useState("");
  const [showPasskey, setShowPasskey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passkey) {
      setError("Passkey is required to access the nexus.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passkey }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Identity verified. Accessing Admin Nexus...", {
          icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
        });
        
        // Artificial delay for premium transition
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 800);
      } else {
        setError(data.message || "Invalid credentials provided.");
        toast.error("Authorization failed.");
      }
    } catch (err) {
      setError("System breach or network failure detected.");
      toast.error("CRITICAL: Authentication offline");
    } finally {
      if (!error) setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030712] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg z-10"
      >
        <div className="bg-[#0f172a]/80 backdrop-blur-2xl border border-white/5 p-12 rounded-[2.5rem] shadow-3xl relative overflow-hidden">
          {/* Subtle line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mb-6 shadow-inner group">
                <ShieldCheck className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white mb-3">
              Admin <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">Nexus</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium tracking-tight max-w-[280px]">
              Provide your restricted access token to enter the management environment.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2.5">
              <label className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em] ml-2">
                Executive Authorization Key
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors z-20">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPasskey ? "text" : "password"}
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Insert Key..."
                  className="w-full bg-[#1e293b]/40 border border-white/5 p-5 pl-14 rounded-2xl text-white font-bold text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/30 transition-all placeholder:text-slate-700 backdrop-blur-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPasskey(!showPasskey)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1"
                >
                  {showPasskey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <p className="text-xs font-bold text-red-100 italic uppercase tracking-tight">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-2xl bg-blue-600 text-[#030712] font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Requesting Entry...
                </>
              ) : (
                <>
                  Authorize & Proceed
                  <span className="opacity-50 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-40">
            <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">v1.2.4</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">SECURE_NODE</span>
          </div>
        </div>
        
        <p className="text-center mt-10 text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] opacity-50">
           &copy; {new Date().getFullYear()} Muhyo Tech • Protected Infrastructure
        </p>
      </motion.div>
    </div>
  );
}
