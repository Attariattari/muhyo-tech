"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid login credentials.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-60px)]">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-slate-800 border-white/5 border rounded shadow-2xl flex flex-col gap-4 w-96"
      >
        <h1 className="text-3xl font-bold mb-4">Secure Gateway</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm opacity-60">Admin Key</label>
          <input
            type="password"
            placeholder="Enter Key..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-black/40 border border-white/10 rounded focus:border-cyan-500 outline-none transition"
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-3 bg-cyan-600 hover:bg-cyan-500 rounded font-bold transition"
        >
          Authorize &rarr;
        </button>
      </form>
    </main>
  );
}
