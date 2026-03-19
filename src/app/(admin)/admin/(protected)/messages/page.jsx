"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import DataTable from "@/components/admin/DataTable";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { toast } from "sonner";
import { Mail, MailOpen, Trash2, Calendar, User, AtSign, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MessagesPage() {
  const { messages, markAsRead, deleteMessage } = useAdminStore();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const columns = [
    { 
        key: "name", 
        label: "Sender Identity",
        render: (item) => (
            <div className={`flex items-center gap-3 ${!item.isRead ? 'font-black' : 'font-medium opacity-60'}`}>
                <div className={`w-2 h-2 rounded-full ${!item.isRead ? 'bg-accent shadow-[0_0_8px_#90e0ef]' : 'bg-white/10'}`} />
                {item.name}
            </div>
        )
    },
    { key: "email", label: "Contact Endpoint" },
    { key: "subject", label: "Intent / Subject" },
    { key: "date", label: "Transmission Time" },
  ];

  const handleSelect = (msg) => {
    setSelectedMessage(msg);
    if (!msg.isRead) {
        markAsRead(msg.id);
    }
  };

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setIsConfirmOpen(true);
  };

  const onConfirmDelete = () => {
    deleteMessage(deletingId);
    if (selectedMessage?.id === deletingId) {
        setSelectedMessage(null);
    }
    setIsConfirmOpen(false);
    toast.success("Transmission data purged (In-memory)");
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter">Inbound <span className="text-accent underline decoration-accent/20 underline-offset-8">Streams</span></h1>
           <p className="text-muted-foreground mt-4 font-medium tracking-tight">Decipher and respond to global client transmissions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
        <div className="xl:col-span-3">
          <DataTable 
            title="Archives"
            columns={columns}
            data={messages}
            onEdit={handleSelect}
            onDelete={handleDeleteClick}
          />
        </div>

        <div className="xl:col-span-2">
           <AnimatePresence mode="wait">
             {selectedMessage ? (
                <motion.div 
                    key={selectedMessage.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 border border-white/5 bg-white/[0.01] rounded-[3rem] sticky top-32 min-h-[600px] flex flex-col"
                >
                    <div className="flex justify-between items-start mb-10 pb-8 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                <User className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black uppercase italic tracking-tighter">{selectedMessage.name}</h3>
                                <p className="text-xs text-muted-foreground opacity-60 font-medium tracking-widest uppercase mt-1">Inbound Client</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setSelectedMessage(null)}
                            className="p-3 rounded-2xl hover:bg-white/5 border border-white/5 transition-all"
                        >
                            <Trash2 className="w-5 h-5 text-red-500/50 hover:text-red-500" onClick={() => handleDeleteClick(selectedMessage.id)} />
                        </button>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                            <AtSign className="w-3.5 h-3.5" />
                            {selectedMessage.email}
                        </div>
                        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                            <Calendar className="w-3.5 h-3.5" />
                            {selectedMessage.date || 'Received Today'}
                        </div>
                        
                        <div className="mt-12 pt-12 border-t border-white/5">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Transmission Payload</h4>
                             <h2 className="text-2xl font-bold italic text-foreground mb-8 leading-tight tracking-tight underline underline-offset-8 decoration-white/5">
                                "{selectedMessage.subject}"
                             </h2>
                             <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/5 relative group">
                                <MessageCircle className="absolute -top-3 -right-3 w-10 h-10 text-white/[0.02] group-hover:text-accent/10 transition-colors" />
                                <p className="text-base text-muted-foreground leading-[1.8] font-medium italic">
                                    {selectedMessage.message}
                                </p>
                             </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <a 
                            href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                            className="w-full flex items-center justify-center gap-4 py-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all font-black uppercase text-xs tracking-widest group"
                        >
                            Establish Response Protocol
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                &rarr;
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
             ) : (
                <div className="h-full border border-dashed border-white/10 rounded-[3rem] flex flex-col items-center justify-center text-center p-20 opacity-30">
                    <MailOpen className="w-16 h-16 mb-6 stroke-1" />
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">Null Selection</h3>
                    <p className="text-sm font-medium mt-2 leading-relaxed">Select a transmission from the archive <br/>to view its decrypted payload.</p>
                </div>
             )}
           </AnimatePresence>
        </div>
      </div>

      <ConfirmDialog 
        isOpen={isConfirmOpen}
        onConfirm={onConfirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
        title="Purge Transmission?"
        message="This operation permanently removes the message from the system archives. This action is irreversible."
      />
    </div>
  );
}
