"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import DataTable from "@/components/admin/DataTable";
import FormModal from "@/components/admin/FormModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";

const serviceSchema = z.object({
  title: z.string().min(5, "Title is too short"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(20, "Description is too short"),
  problemSolved: z.string().min(10, "Problem description is required"),
  banner: z.string().url("Must be a valid image URL"),
  techStack: z.string().transform(val => val.split(',').map(s => s.trim())),
  benefits: z.string().transform(val => val.split(',').map(s => s.trim())),
});

export default function ServicesPage() {
  const { portfolioData, updateServices } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const columns = [
    { 
        key: "banner", 
        label: "Visual",
        render: (item) => (
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <img src={item.banner} alt={item.title} className="w-full h-full object-cover" />
            </div>
        )
    },
    { key: "title", label: "Service Identity" },
    { key: "slug", label: "URL Slug" },
    { 
        key: "techStack", 
        label: "Market Stack",
        render: (item) => (
            <div className="flex flex-wrap gap-1">
                {item.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[9px] px-1.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 font-bold uppercase tracking-tighter">
                        {tech}
                    </span>
                ))}
            </div>
        )
    },
  ];

  const fields = [
    { name: "title", label: "Service Title", placeholder: "e.g. Next-Gen Web Dev", required: true },
    { name: "slug", label: "Module Slug", placeholder: "e.g. web-development", required: true },
    { name: "banner", label: "Hero Banner URL", placeholder: "https://images.unsplash.com/...", required: true },
    { name: "techStack", label: "Technology Stack (comma separated)", placeholder: "React, Next.js, Node.js", fullWidth: true, required: true },
    { name: "benefits", label: "Core Benefits (comma separated)", placeholder: "Speed, Security, SEO", fullWidth: true, required: true },
    { name: "description", label: "Marketing Narrative", type: "textarea", fullWidth: true, required: true },
    { name: "problemSolved", label: "Crisis/Solution Alignment", type: "textarea", placeholder: "What pain point does this solve?", fullWidth: true, required: true },
  ];

  const handleAdd = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const handleEdit = (service) => {
    const formatted = {
        ...service,
        techStack: service.techStack.join(', '),
        benefits: service.benefits.join(', ')
    };
    setEditingService(formatted);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setIsConfirmOpen(true);
  };

  const onConfirmDelete = () => {
    const newList = portfolioData.services.filter(s => s.id !== deletingId);
    updateServices(newList, "delete");
    setIsConfirmOpen(false);
    toast.error("Service decommissioned (In-memory)");
  };

  const onSubmit = async (data) => {
    // Simulate network latency for UX
    await new Promise(resolve => setTimeout(resolve, 600));

    if (editingService) {
      const newList = portfolioData.services.map(s => 
        s.id === editingService.id ? { ...data, id: s.id, process: s.process, features: s.features, faq: s.faq } : s
      );
      updateServices(newList, "update");
      toast.success("Service specs updated (In-memory)");
    } else {
      const newService = {
        ...data,
        id: Math.max(0, ...portfolioData.services.map(s => s.id)) + 1,
        process: [],
        features: [],
        faq: []
      };
      updateServices([...portfolioData.services, newService], "add");
      toast.success("New service deployed (In-memory)");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter">Solution <span className="text-accent underline decoration-accent/20 underline-offset-8">Core</span></h1>
           <p className="text-muted-foreground mt-4 font-medium tracking-tight">Orchestrate the services that drive digital performance.</p>
        </div>
      </div>

      <DataTable 
        title="Services"
        columns={columns}
        data={portfolioData.services}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AnimatePresence>
        {isModalOpen && (
          <FormModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={editingService ? "Recalibrate Service" : "Deploy New Initiative"}
            schema={serviceSchema}
            defaultValues={editingService}
            onSubmit={onSubmit}
            fields={fields}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isConfirmOpen && (
          <ConfirmDialog 
            isOpen={isConfirmOpen}
            onConfirm={onConfirmDelete}
            onCancel={() => setIsConfirmOpen(false)}
            title="Terminate Service Stream?"
            message="This operation terminates the service logic from the dashboard. Live front-end will stay intact until database sync."
          />
        )}
      </AnimatePresence>
    </div>
  );
}
