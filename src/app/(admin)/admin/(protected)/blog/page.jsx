"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import DataTable from "@/components/admin/DataTable";
import FormModal from "@/components/admin/FormModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";
import { Edit, Star, StarOff } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(10, "Title is too short"),
  slug: z.string().min(3, "Slug is required"),
  summary: z.string().min(20, "Summary is too short"),
  image: z.string().url("Must be a valid image URL"),
  author: z.string().min(2, "Author is required"),
  authorRole: z.string().min(2, "Author role is required"),
  category: z.string().min(2, "Category is required"),
  readTime: z.string().min(2, "Read time is required"),
  tags: z.string().transform(val => val.split(',').map(s => s.trim())),
  content: z.string().min(50, "Content must be more substantive"),
  featured: z.boolean().default(false),
});

export default function BlogPage() {
  const { portfolioData, updateBlogs } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const columns = [
    { 
        key: "image", 
        label: "Image",
        render: (item) => (
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-white/10 shadow-lg relative group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                {item.featured && (
                    <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shadow-xl" />
                    </div>
                )}
            </div>
        )
    },
    { key: "title", label: "Editorial Title" },
    { key: "category", label: "Category" },
    { key: "author", label: "Author" },
    { key: "readTime", label: "Reading Scale" },
    { 
        key: "featured", 
        label: "Status",
        render: (item) => (
            <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border ${item.featured ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 'bg-white/5 text-muted-foreground border-white/10'}`}>
                {item.featured ? 'Featured' : 'Standard'}
            </span>
        )
    },
  ];

  const fields = [
    { name: "title", label: "Editorial Title", placeholder: "e.g. The Future of AI in DevEx", required: true },
    { name: "slug", label: "Editorial Slug", placeholder: "e.g. future-of-ai-devex", required: true },
    { name: "image", label: "Featured Image URL", placeholder: "https://images.unsplash.com/...", required: true },
    { name: "author", label: "Author Identity", placeholder: "Pir Ghulam Muhyo Din", required: true },
    { name: "authorRole", label: "Professional Role", placeholder: "Founder & Lead Architect", required: true },
    { name: "category", label: "Stream Category", placeholder: "Engineering, Strategy, AI", required: true },
    { name: "readTime", label: "Estimated Read (min)", placeholder: "8 min read", required: true },
    { name: "tags", label: "Editorial Tags (comma separated)", placeholder: "AI, Tech, Future", fullWidth: true, required: true },
    { name: "summary", label: "Editorial Abstract", type: "textarea", fullWidth: true, required: true },
    { name: "content", label: "Full Content (HTML/Markdown)", type: "textarea", fullWidth: true, required: true },
  ];

  const handleAdd = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const handleEdit = (blog) => {
    const formatted = {
        ...blog,
        tags: blog.tags.join(', ')
    };
    setEditingBlog(formatted);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setIsConfirmOpen(true);
  };

  const onConfirmDelete = () => {
    const newList = portfolioData.blogs.filter(b => b.id !== deletingId);
    updateBlogs(newList, "delete");
    setIsConfirmOpen(false);
    toast.error("Editorial removed (In-memory)");
  };

  const onSubmit = async (data) => {
    // Simulate network latency for UX
    await new Promise(resolve => setTimeout(resolve, 600));

    if (editingBlog) {
      const newList = portfolioData.blogs.map(b => 
        b.id === editingBlog.id ? { ...data, id: b.id, date: b.date } : b
      );
      updateBlogs(newList, "update");
      toast.success("Editorial updated (In-memory)");
    } else {
      const newBlog = {
        ...data,
        id: Math.max(0, ...portfolioData.blogs.map(b => b.id)) + 1,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      };
      updateBlogs([...portfolioData.blogs, newBlog], "add");
      toast.success("New editorial published (In-memory)");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter italic">Editorial <span className="text-accent underline decoration-accent/20 underline-offset-8">Core</span></h1>
           <p className="text-muted-foreground mt-4 font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">Manage your digital publications and engineering insights.</p>
        </div>
      </div>

      <DataTable 
        title="Journal"
        columns={columns}
        data={portfolioData.blogs}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AnimatePresence>
        {isModalOpen && (
          <FormModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={editingBlog ? "Edit Editorial" : "Publish Insight"}
            schema={blogSchema}
            defaultValues={editingBlog}
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
            title="Retract Editorial?"
            message="This operation hides the post from the dashboard logic. Database synchronization required for public removal."
          />
        )}
      </AnimatePresence>
    </div>
  );
}
