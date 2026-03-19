"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import DataTable from "@/components/admin/DataTable";
import FormModal from "@/components/admin/FormModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { z } from "zod";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";

const skillSchema = z.object({
  name: z.string().min(2, "Skill name is required"),
  level: z.string().transform(val => parseInt(val)).pipe(z.number().min(0).max(100, "Level must be between 0 and 100")),
  category: z.string().min(2, "Category is required"),
});

export default function SkillsPage() {
  const { portfolioData, updateSkills } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const columns = [
    { key: "name", label: "Technical Proficiency" },
    { 
        key: "level", 
        label: "Expertise Rank",
        render: (item) => (
            <div className="flex items-center gap-4 min-w-[140px]">
                <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${item.level}%` }} />
                </div>
                <span className="text-[10px] font-black tabular-nums text-foreground opacity-80">{item.level}%</span>
            </div>
        )
    },
    { key: "category", label: "Segment" },
  ];

  const fields = [
    { name: "name", label: "Skill Name", placeholder: "e.g. Next.js Architecture", required: true },
    { name: "level", label: "Proficiency Level (0-100)", placeholder: "95", type: "number", required: true },
    { name: "category", label: "Technical Category", placeholder: "e.g. Frontend, Backend, Infra", required: true },
  ];

  const handleAdd = () => {
    setEditingSkill(null);
    setIsModalOpen(true);
  };

  const handleEdit = (skill) => {
    setEditingSkill({ ...skill, level: String(skill.level) });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setIsConfirmOpen(true);
  };

  const onConfirmDelete = () => {
    const newList = portfolioData.skills.filter((sk, i) => i !== deletingId);
    updateSkills(newList, "delete");
    setIsConfirmOpen(false);
    toast.error("Skill record purged (In-memory)");
  };

  const onSubmit = async (data) => {
    // Simulate network latency for UX
    await new Promise(resolve => setTimeout(resolve, 600));

    if (editingSkill) {
        const newList = portfolioData.skills.map((sk, i) => 
            i === Number(editingSkill.index) ? data : sk
        );
        updateSkills(newList, "update");
        toast.success("Skill matrix updated (In-memory)");
    } else {
        updateSkills([...portfolioData.skills, data], "add");
        toast.success("New technical ability registered (In-memory)");
    }
    setIsModalOpen(false);
  };

  // Need to provide index for the state updates
  const dataWithIndex = portfolioData.skills.map((sk, i) => ({ ...sk, id: i, index: i }));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter">Skill <span className="text-accent underline decoration-accent/20 underline-offset-[10px]">Matrix</span></h1>
           <p className="text-muted-foreground mt-4 font-medium tracking-tight">Calibrate your technical arsenal for maximum market impact.</p>
        </div>
      </div>

      <DataTable 
        title="Technical Stack"
        columns={columns}
        data={dataWithIndex}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AnimatePresence>
        {isModalOpen && (
          <FormModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={editingSkill ? "Recalibrate Skill" : "Inject New Skill"}
            schema={skillSchema}
            defaultValues={editingSkill}
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
            title="Burn Skill Signature?"
            message="This operation removes the skill from your display layer. Permanent when database is connected."
          />
        )}
      </AnimatePresence>
    </div>
  );
}
