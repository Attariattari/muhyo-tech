"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import DataTable from "@/components/admin/DataTable";
import FormModal from "@/components/admin/FormModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";

const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category is required"),
  purpose: z.string().min(2, "Purpose is required"),
  impact: z.string().min(5, "Impact description is required"),
  thumbnail: z.string().url("Must be a valid image URL"),
  techStack: z.string().transform(val => val.split(',').map(s => s.trim())),
  details: z.string().min(20, "Detailed description is required"),
});

export default function ProjectsPage() {
  const { portfolioData, updateProjects } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const columns = [
    { 
        key: "thumbnail", 
        label: "Preview",
        render: (item) => (
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-white/10">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
            </div>
        )
    },
    { key: "title", label: "Project Title" },
    { key: "category", label: "Category" },
    { 
        key: "techStack", 
        label: "Stack",
        render: (item) => (
            <div className="flex flex-wrap gap-1">
                {item.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[9px] px-1.5 py-0.5 bg-accent/10 text-accent rounded-md border border-accent/20 font-bold uppercase tracking-tighter">
                        {tech}
                    </span>
                ))}
                {item.techStack.length > 3 && <span className="text-[9px] text-muted-foreground">+{item.techStack.length - 3}</span>}
            </div>
        )
    },
    { key: "purpose", label: "Purpose" },
  ];

  const fields = [
    { name: "title", label: "Project Title", placeholder: "e.g. Apex E-Commerce", required: true },
    { name: "category", label: "Category", placeholder: "e.g. Web, Mobile, UI/UX", required: true },
    { name: "purpose", label: "Purpose", placeholder: "e.g. Fintech, Healthcare", required: true },
    { name: "thumbnail", label: "Thumbnail URL", placeholder: "https://images.unsplash.com/...", required: true },
    { name: "techStack", label: "Tech Stack (comma separated)", placeholder: "React, Next.js, Node.js", fullWidth: true, required: true },
    { name: "description", label: "Brief Description", type: "textarea", fullWidth: true, required: true },
    { name: "impact", label: "Project Impact", placeholder: "e.g. Increased conversion by 35%", fullWidth: true, required: true },
    { name: "details", label: "Full Details / Case Study", type: "textarea", fullWidth: true, required: true },
  ];

  const handleAdd = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEdit = (project) => {
    // Transform array to comma string for the form
    const formattedProject = {
        ...project,
        techStack: project.techStack.join(', ')
    };
    setEditingProject(formattedProject);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setIsConfirmOpen(true);
  };

  const onConfirmDelete = () => {
    const newProjects = portfolioData.projects.filter(p => p.id !== deletingId);
    updateProjects(newProjects, "delete");
    setIsConfirmOpen(false);
    toast.error("Project deleted successfully (In-memory)");
  };

  const onSubmit = async (data) => {
    // Simulate network latency for UX
    await new Promise(resolve => setTimeout(resolve, 600));

    if (editingProject) {
      const newProjects = portfolioData.projects.map(p => 
        p.id === editingProject.id ? { ...data, id: p.id } : p
      );
      updateProjects(newProjects, "update");
      toast.success("Project updated successfully (In-memory)");
    } else {
      const newProject = {
        ...data,
        id: Math.max(0, ...portfolioData.projects.map(p => p.id)) + 1,
        gallery: [data.thumbnail] // Default gallery
      };
      updateProjects([...portfolioData.projects, newProject], "add");
      toast.success("New project added successfully (In-memory)");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter">Project <span className="text-accent">Nexus</span></h1>
           <p className="text-muted-foreground mt-2 font-medium">Manage and showcase your engineering masterpieces.</p>
        </div>
      </div>

      <DataTable 
        title="Projects"
        columns={columns}
        data={portfolioData.projects}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AnimatePresence>
        {isModalOpen && (
          <FormModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={editingProject ? "Edit Project" : "Create New Project"}
            schema={projectSchema}
            defaultValues={editingProject}
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
            title="Burn Project Record?"
            message="This will remove the project from the dashboard state. Permanent deletion only occurs when saved to the database."
          />
        )}
      </AnimatePresence>
    </div>
  );
}
