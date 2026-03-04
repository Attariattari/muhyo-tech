"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsManagement() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-white tracking-widest uppercase">
            Project Management
          </h1>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Organize and Expand Your Portfolio
          </p>
        </div>
        <button className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 active:scale-95">
          <Plus className="w-4 h-4" /> Add New Case Study
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
          <input
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 p-5 pl-14 rounded-2xl text-sm font-bold text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
          />
        </div>
        <button className="px-8 py-5 rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:text-white transition-colors">
          <Filter className="w-4 h-4" /> Filter By Stack
        </button>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="border-b border-slate-800 bg-slate-900 sticky top-0">
            <tr>
              <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">
                Project Title
              </th>
              <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">
                Category
              </th>
              <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">
                Tech Stack
              </th>
              <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">
                Visibility
              </th>
              <th className="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {projects.map((p, i) => (
              <motion.tr
                key={p.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-slate-800/20 transition-colors group"
              >
                <td className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden border border-slate-700/50">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 0 ? "1498050108023-c5249f4df085" : "1461749280684-dccba630e2f6"}?auto=format&fit=crop&q=80&w=200`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white group-hover:text-blue-500 transition-colors">
                        {p.title}
                      </div>
                      <div className="text-[10px] font-medium text-slate-500 mb-2 truncate max-w-[200px]">
                        {p.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-8">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase text-blue-500 tracking-widest">
                    {p.purpose}
                  </span>
                </td>
                <td className="p-8">
                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] font-bold px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 tracking-widest uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                      Published
                    </span>
                  </div>
                </td>
                <td className="p-8 text-right">
                  <div className="flex justify-end gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 rounded-xl bg-slate-800 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600/20 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex justify-center">
        <button className="text-[9px] font-black uppercase text-slate-600 tracking-[0.4em] hover:text-slate-400 transition-colors">
          Portfolio System Active
        </button>
      </div>
    </div>
  );
}
