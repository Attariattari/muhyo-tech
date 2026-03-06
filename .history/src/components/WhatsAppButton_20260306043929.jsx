"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const whatsappUrl =
    "https://wa.me/923224458481?text=Hi MuhyoTech! I'd like to discuss a project with you.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="glass-dark p-6 rounded-[2rem] border border-white/10 shadow-2xl max-w-[280px] relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">
                    MuhyoTech
                  </h4>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    Online Now
                  </p>
                </div>
              </div>

              <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                Hi there! 👋 Need help with a project? Let's chat on WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 cursor-pointer relative z-10"
              >
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/30 relative group cursor-pointer border-none outline-none"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 group-hover:hidden" />

        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
