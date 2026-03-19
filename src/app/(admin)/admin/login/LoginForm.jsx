"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, Loader2, ShieldCheck, Mail, Key, CheckCircle2, Clock, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export default function LoginForm() {
  const [view, setView] = useState("login"); // login, setup, verify, pending, success
  const [email, setEmail] = useState("");
  const [passkey, setPasskey] = useState("");
  const [code, setCode] = useState("");
  const [showPasskey, setShowPasskey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newPasskey, setNewPasskey] = useState("");
  const router = useRouter();

  // Real-time Authority Tracing (SSE)
  useEffect(() => {
    if (view !== "pending" || !email) return;

    const eventSource = new EventSource("/api/admin/events");

    eventSource.addEventListener("user", (e) => {
        const data = JSON.parse(e.data);
        if (data.email === email && data.status === 'approved') {
            toast.success("Identity Authorized. Access granted.");
            playSuccessSound();
            
            if ("Notification" in window && Notification.permission === "granted") {
                new Notification("[Nexus Gateway] Identity Authorized", {
                    body: "The Super Admin has approved your request. Access node active."
                });
            }
            
            eventSource.close();
            setView("login");
        }
    });

    return () => eventSource.close();
  }, [view, email]);

  const playSuccessSound = () => {
    try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(1046.50, context.currentTime); // C6
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, context.currentTime + 0.1);
        gain.gain.linearRampToValueAtTime(0, context.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(context.currentTime + 0.5);
    } catch (e) { /* Audio policy */ }
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!email) return setError("Email is required.");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/verify-request", {
        method: "POST",
        body: JSON.stringify({ email, type: view === "setup" ? "setup" : "reset" }),
      });
      const data = await res.json();
      if (data.success) {
        toast.info("Verification code sent to your email.");
        if (data.mocked) console.info("DEV MODE - Code:", data.code);
        setView("verify");
      } else {
        setError(data.message || "Failed to send code.");
      }
    } catch (err) {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (code.length < 6) return setError("Enter code.");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/verify-code", {
        method: "POST",
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.pendingApproval) {
            toast.success("Identity verified. Submitting for approval.");
            setView("pending");
        } else {
            setNewPasskey(data.passkey);
            toast.success("Welcome, Super Admin.");
            setView("success");
        }
      } else {
        setError(data.message || "Invalid code.");
      }
    } catch (err) {
      setError("Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, passkey }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Identity verified. Accessing Nexus...");
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Access denied. Credentials mismatch or lack of approval.");
      }
    } catch (err) {
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030712] flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-blue-500/30">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-lg z-10"
      >
        <div className="bg-[#0f172a]/80 backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] shadow-3xl overflow-hidden relative">
          
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                {view === "pending" ? <Clock className="w-10 h-10 text-yellow-500 animate-pulse" /> : <ShieldCheck className="w-10 h-10 text-blue-500" />}
            </div>
            
            <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white mb-3">
              Admin <span className="text-blue-500">Security</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium tracking-tight px-4 opacity-70">
              {view === "setup" ? "Request administrative credentials." : 
               view === "verify" ? "Verify identity to proceed." :
               view === "pending" ? "Awaiting manual approval by Super Admin." :
               view === "success" ? "Super Admin identity verified." :
               "Secure gateway for authorized personnel."}
            </p>
          </div>

          <form 
            onSubmit={
                view === "setup" || view === "reset" ? handleSendCode : 
                view === "verify" ? handleVerify : 
                handleLogin
            } 
            className="space-y-6"
          >
            {view === "setup" || view === "reset" || view === "verify" ? (
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em] ml-2">Secure Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={view === "verify"}
                                placeholder="authority@muhyo.tech"
                                className="w-full bg-[#1e293b]/40 border border-white/5 p-5 pl-14 rounded-2xl text-white font-bold text-sm outline-none focus:border-blue-500/30 backdrop-blur-md disabled:opacity-30"
                                required
                            />
                        </div>
                    </div>
                    {view === "verify" && (
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em] ml-2">Verification Token</label>
                            <div className="relative group">
                                <Key className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="000000"
                                    className="w-full bg-[#1e293b]/40 border border-white/5 p-5 pl-14 rounded-2xl text-white font-bold text-lg tracking-[1em] outline-none focus:border-blue-500/30 backdrop-blur-md"
                                    required
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : view === "pending" ? (
                <div className="bg-yellow-500/5 border border-yellow-500/10 p-10 rounded-3xl text-center space-y-6">
                    <div className="flex justify-center">
                        <Clock className="w-16 h-16 text-yellow-500 animate-pulse" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-2">Manual Approval Required</p>
                        <p className="text-slate-300 text-sm font-bold tracking-tight px-2 leading-relaxed opacity-70">
                            Your identity has been verified. The Super Admin must now approve your access request manually.
                        </p>
                    </div>
                    <div className="pt-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 italic">Check your email for updates.</p>
                    </div>
                </div>
            ) : view === "success" ? (
                <div className="bg-blue-500/5 border border-blue-500/10 p-10 rounded-3xl text-center space-y-6">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Bypass Active: Super Admin</p>
                        <p className="text-3xl font-black italic text-white tracking-[0.2em] bg-blue-500/10 py-5 rounded-2xl border border-white/5 select-all">{newPasskey}</p>
                    </div>
                    <p className="text-[9px] text-yellow-400 font-bold uppercase tracking-widest mt-4 italic opacity-60">Session established. Keep this key safe.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em] ml-2">Authority Identity</label>
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#1e293b]/40 border border-white/5 p-5 pl-14 rounded-2xl text-white font-bold text-sm outline-none focus:border-blue-500/30 backdrop-blur-md"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                             <label className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em]">Secure Passkey</label>
                             <button type="button" onClick={() => setView("reset")} className="text-[9px] font-black uppercase text-slate-500 hover:text-blue-500 transition-colors tracking-widest">Forgot Account?</button>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                            <input
                                type={showPasskey ? "text" : "password"}
                                value={passkey}
                                onChange={(e) => setPasskey(e.target.value)}
                                className="w-full bg-[#1e293b]/40 border border-white/5 p-5 pl-14 rounded-2xl text-white font-bold text-sm outline-none focus:border-blue-500/30 backdrop-blur-md"
                                placeholder="••••••••"
                                required
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
                </div>
            )}

            <AnimatePresence>
                {error && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                        <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
                        <p className="text-[10px] font-black text-red-100 uppercase tracking-tight">{error}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-4 pt-4">
                <button
                    type={view === "success" || view === "pending" ? "button" : "submit"}
                    onClick={() => (view === "success" || view === "pending") && (view === "success" ? router.push("/admin/dashboard") : setView("login"))}
                    disabled={loading}
                    className="w-full py-5 rounded-3xl bg-blue-600 text-[#030712] font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 
                     view === "setup" || view === "reset" ? "Request Verification" : 
                     view === "verify" ? "Authorize Verification" :
                     view === "success" ? "Enter Nexus" : 
                     view === "pending" ? "Back to Login" :
                     "Secure Authorization"}
                </button>
                
                {view === "login" && (
                     <button type="button" onClick={() => setView("setup")} className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors tracking-widest text-center mt-2">
                         Request Access Node?
                     </button>
                )}
            </div>
          </form>

          <p className="text-center mt-12 text-[9px] font-black text-slate-600 uppercase tracking-[0.6em] opacity-40">
             Authority v2.0.1 • SECURE_GATE_ALPHA
          </p>
        </div>
      </motion.div>
    </div>
  );
}
