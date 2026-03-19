"use client";

import { useState } from "react";
import useAdminStore from "@/lib/store/adminStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { 
  Settings, 
  Save, 
  Shield, 
  Globe, 
  User, 
  Mail, 
  MapPin, 
  Share2, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const settingsSchema = z.object({
  siteTitle: z.string().min(2, "Site title is too short"),
  siteAccent: z.string().min(2, "Accent title is required"),
  adminName: z.string().min(2, "Admin name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(5, "Location is required"),
  github: z.string().url("Must be a valid GitHub URL"),
  linkedin: z.string().url("Must be a valid LinkedIn URL"),
  twitter: z.string().url("Must be a valid X/Twitter URL"),
  seoTitle: z.string().min(5, "SEO title is too short"),
  seoDescription: z.string().min(20, "SEO description must be descriptive"),
});

export default function SettingsPage() {
  const { settings, updateSettings, addNotification } = useAdminStore();
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      siteTitle: settings.siteTitle,
      siteAccent: settings.siteAccent,
      adminName: settings.adminName,
      email: settings.email,
      location: settings.location,
      github: settings.socialLinks.github,
      linkedin: settings.socialLinks.linkedin,
      twitter: settings.socialLinks.twitter,
      seoTitle: settings.seo.title,
      seoDescription: settings.seo.description,
    },
  });

  const onSubmit = async (data) => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const formattedData = {
      siteTitle: data.siteTitle,
      siteAccent: data.siteAccent,
      adminName: data.adminName,
      email: data.email,
      location: data.location,
      socialLinks: {
        github: data.github,
        linkedin: data.linkedin,
        twitter: data.twitter,
      },
      seo: {
        title: data.seoTitle,
        description: data.seoDescription,
      }
    };

    updateSettings(formattedData);
    addNotification({
        title: "Settings Synchronized",
        message: "Global system configuration has been updated successfully.",
        type: "success"
    });
    
    toast.success("Settings updated successfully (In-memory)");
    setIsSaving(false);
  };

  const SectionHeader = ({ icon: Icon, title, desc }) => (
    <div className="mb-8 border-b border-white/5 pb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-black uppercase italic tracking-tighter">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground font-medium">{desc}</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="flex justify-between items-end mb-4">
        <div>
           <h1 className="text-4xl font-black italic uppercase tracking-tighter">System <span className="text-accent underline decoration-accent/20 underline-offset-8">Config</span></h1>
           <p className="text-muted-foreground mt-4 font-medium tracking-tight">Manage your global platform settings and SEO metadata.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Brand Identity */}
          <div className="bg-white/[0.01] border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full translate-x-32 -translate-y-32 pointer-events-none group-hover:bg-accent/10 transition-colors" />
            
            <SectionHeader 
              icon={Globe} 
              title="Brand Identity" 
              desc="Configure your public brand and logo naming." 
            />
            
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">Logo Title</label>
                  <input 
                    {...register("siteTitle")}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                  />
                  {errors.siteTitle && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.siteTitle.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">Logo Accent</label>
                  <input 
                    {...register("siteAccent")}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                  />
                  {errors.siteAccent && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.siteAccent.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">Admin Name</label>
                <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <input 
                    {...register("adminName")}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                   />
                </div>
                {errors.adminName && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.adminName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">System Email</label>
                <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <input 
                    {...register("email")}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                   />
                </div>
                {errors.email && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">Location/HQ</label>
                <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <input 
                    {...register("location")}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                   />
                </div>
                {errors.location && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.location.message}</p>}
              </div>
            </div>
          </div>

          {/* Social & SEO */}
          <div className="space-y-8">
            <div className="bg-white/[0.01] border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
               <SectionHeader 
                  icon={Share2} 
                  title="Social Endpoints" 
                  desc="Sync your professional social presence." 
               />
               
               <div className="space-y-4">
                  {[
                    { name: 'github', icon: Github, label: 'GitHub Profile' },
                    { name: 'linkedin', icon: Linkedin, label: 'LinkedIn URL' },
                    { name: 'twitter', icon: Twitter, label: 'X / Twitter' },
                  ].map(platform => (
                    <div key={platform.name} className="space-y-1">
                       <div className="relative">
                          <platform.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            {...register(platform.name)}
                            placeholder={platform.label}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                          />
                       </div>
                       {errors[platform.name] && <p className="text-[10px] text-red-400 font-bold uppercase pl-4">{errors[platform.name].message}</p>}
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
               <SectionHeader 
                  icon={Shield} 
                  title="Search Engine Indexing" 
                  desc="Optimize how your site appears globally." 
               />
               
               <div className="space-y-4 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">SEO Meta Title</label>
                    <input 
                      {...register("seoTitle")}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none" 
                    />
                    {errors.seoTitle && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.seoTitle.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/80 pl-2">SEO Meta Description</label>
                    <textarea 
                      {...register("seoDescription")}
                      rows={3}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all outline-none resize-none" 
                    />
                    {errors.seoDescription && <p className="text-[10px] text-red-400 font-bold uppercase pl-2">{errors.seoDescription.message}</p>}
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-10 border-t border-white/10">
          <button 
            type="submit" 
            disabled={isSaving}
            className="px-12 py-5 bg-accent text-black font-black uppercase text-sm tracking-widest rounded-3xl hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 active:scale-95 disabled:opacity-50 flex items-center gap-4 group"
          >
            {isSaving ? (
              <>
                 <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                 Synchronizing...
              </>
            ) : (
              <>
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Commit System Changes
              </>
            )}
          </button>
        </div>
      </form>

      <div className="p-10 border border-white/5 bg-accent/5 rounded-[3rem] flex items-center justify-between gap-10">
         <div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4 mb-2">
                <Sparkles className="w-8 h-8 text-accent" />
                Live Synchronization
            </h3>
            <p className="text-sm text-muted-foreground font-medium">Any changes committed here will be instantly available across your application state.</p>
         </div>
         <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0a0f1c] bg-white/10 flex items-center justify-center text-[10px] font-black">
                  JD
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#0a0f1c] bg-accent text-black flex items-center justify-center text-xs font-black">
                +12
            </div>
         </div>
      </div>
    </div>
  );
}
