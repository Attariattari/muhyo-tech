"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("System Failure Detected:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-rose-500 p-12 text-center font-mono">
      <h1 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">
        CRITICAL_SYSTEM_ERROR
      </h1>
      <div className="max-w-xl p-8 border border-rose-900 bg-rose-900/10 rounded-xl mb-12">
        <p className="text-sm uppercase font-black opacity-60 mb-4 tracking-widest">
          Error Log
        </p>
        <p className="text-white opacity-80 leading-relaxed italic border-l-2 border-rose-500 pl-4 text-left">
          {error.message ||
            "Unknown anomaly detected in core execution thread."}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-12 py-5 bg-rose-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-rose-500 transition-colors"
        >
          Attempt Hot-Reset &rarr;
        </button>
        <Link
          href="/"
          className="px-12 py-5 border border-rose-900 rounded-full hover:bg-rose-900/20 transition uppercase tracking-widest text-xs font-bold flex items-center justify-center"
        >
          Abort to Nexus
        </Link>
      </div>
    </div>
  );
}
