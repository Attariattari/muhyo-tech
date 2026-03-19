"use client";

import { Edit, Trash2, Eye, ChevronLeft, ChevronRight, Search, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function DataTable({ 
  title, 
  columns, 
  data, 
  onEdit, 
  onDelete, 
  onAdd,
  searchPlaceholder = "Search..."
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#0a0f1c] border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/[0.02]">
        <div>
          <h2 className="text-2xl font-black text-foreground tracking-tight uppercase italic">{title}</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your {title.toLowerCase()} across the site.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {onAdd && (
            <button 
              onClick={onAdd}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 active:scale-95 whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              Add New
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              {columns.map((col) => (
                <th key={col.key} className="p-5 text-xs font-black uppercase tracking-widest text-muted-foreground opacity-70">
                  {col.label}
                </th>
              ))}
              <th className="p-5 text-xs font-black uppercase tracking-widest text-muted-foreground opacity-70 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? paginatedData.map((item, idx) => (
              <tr 
                key={item.id || idx} 
                className="group border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className="p-5">
                    {col.render ? col.render(item) : (
                      <span className="text-sm font-semibold text-foreground tracking-tight">
                        {item[col.key]}
                      </span>
                    )}
                  </td>
                ))}
                <td className="p-5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2.5 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-accent transition-all">
                        <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(item)}
                      className="p-2.5 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-emerald-500 transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(item.id)}
                      className="p-2.5 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-red-500 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
                <tr>
                    <td colSpan={columns.length + 1} className="py-20 text-center text-muted-foreground font-medium italic opacity-40">
                        No data available in this module.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
        <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
          Showing <span className="text-foreground">{startIndex + 1}</span> to <span className="text-foreground">{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of <span className="text-foreground">{filteredData.length}</span> entries
        </span>
        
        <div className="flex items-center gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-muted-foreground transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                  currentPage === i + 1 
                  ? "bg-accent/10 border border-accent/30 text-accent" 
                  : "border border-white/10 hover:bg-white/5 text-muted-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-muted-foreground transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
