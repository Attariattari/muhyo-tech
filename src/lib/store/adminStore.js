import { create } from 'zustand';
import { toast } from 'sonner';
import { portfolioData as initialData, resumeData as initialResume } from '@/lib/data';

const useAdminStore = create((set, get) => ({
  // Core Data (Flat for direct reactivity)
  projects: initialData.projects || [],
  services: initialData.services || [],
  blogs: initialData.blogs || [],
  skills: initialData.skills || [],
  resumeData: initialResume || {
    experience: [],
    education: [],
    skills: [],
    stats: [],
  },
  messages: initialData.messages || [],
  
  // Backward compatibility object for components like Dashboard
  portfolioData: {
    projects: initialData.projects || [],
    services: initialData.services || [],
    blogs: initialData.blogs || [],
    skills: initialData.skills || [],
  },

  settings: {
    adminName: initialData.profile?.name || "Pir Ghulam Muhyo Din",
    siteTitle: initialData.siteConfig?.navbar?.logo?.title || "Muhyo Tech",
    siteAccent: initialData.siteConfig?.navbar?.logo?.accent || "Solutions",
    email: initialData.profile?.email || "MuhyoTech@gmail.com",
    location: initialData.profile?.location || "Lahore, Pakistan",
    socialLinks: {
        github: initialData.profile?.socials?.github || "https://github.com/Attariattari",
        linkedin: initialData.profile?.socials?.linkedin || "https://linkedin.com",
        twitter: initialData.profile?.socials?.twitter || "https://x.com",
    },
    seo: {
        title: "Muhyo Tech - Senior Solution Architect",
        description: initialData.profile?.longDescription || "Architecting high-performance digital ecosystems.",
    },
    notificationsEnabled: true,
  },
  
  // Users & Notifications Integration
  users: [],
  notifications: [],

  // Update Actions
  updateResume: (data) => set({ resumeData: data }),
  updateSettings: (data) => set({ settings: { ...get().settings, ...data } }),
  
  addNotification: async (notification) => {
      // In a real environment, this might POST to an API. 
      // For now, we simulate by adding to local state if we want to show it in UI immediately.
      const newNotification = {
          id: `sys-${Date.now()}`,
          createdAt: new Date().toISOString(),
          status: 'unread',
          ...notification
      };
      set(state => ({ notifications: [newNotification, ...state.notifications] }));
  },

  // Legacy Update Methods (Backward Compatibility)
  updateProjects: (data) => set(state => ({ 
      projects: data, 
      portfolioData: { ...state.portfolioData, projects: data } 
  })),
  updateServices: (data) => set(state => ({ 
      services: data, 
      portfolioData: { ...state.portfolioData, services: data } 
  })),
  updateBlogs: (data) => set(state => ({ 
      blogs: data, 
      portfolioData: { ...state.portfolioData, blogs: data } 
  })),
  updateSkills: (data) => set(state => ({ 
      skills: data, 
      portfolioData: { ...state.portfolioData, skills: data } 
  })),

  // Initial Sync Methods
  setData: (type, data) => set(state => {
      const newState = { [type]: data };
      if (['projects', 'services', 'blogs', 'skills'].includes(type)) {
          newState.portfolioData = { ...state.portfolioData, [type]: data };
      }
      return newState;
  }),

  // Actions: USERS
  fetchUsers: async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      set({ users: data.users || [] });
    } catch (err) {
      console.error("Authority breach: Failed to synchronize user directory.");
    }
  },

  updateUserStatus: async (email, action) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        body: JSON.stringify({ email, action }),
      });
      if (res.ok) {
        toast.success(`User ${email} ${action === 'approve' ? 'authorized' : 'denied'}.`);
        await get().fetchUsers();
        await get().fetchNotifications();
      } else {
        const result = await res.json();
        toast.error(result.message || "Action failed.");
      }
    } catch (err) {
      toast.error("Network authority offline.");
      console.error("Authority fail: Status update denied.");
    }
  },

  // Actions: NOTIFICATIONS
  fetchNotifications: async () => {
    try {
      const res = await fetch("/api/admin/notifications");
      const data = await res.json();
      set({ notifications: data.notifications || [] });
    } catch (err) {
      console.error("Signal lost: Failed to catch administrative alerts.");
    }
  },

  updateNotification: async (id, status) => {
    try {
      const res = await fetch("/api/admin/notifications", {
        method: "POST",
        body: JSON.stringify({ action: "UPDATE_STATUS", id, status }),
      });
      if (res.ok) {
        await get().fetchNotifications();
      }
    } catch (err) {
      console.error("Write fail: Status persistence error.");
    }
  },

  deleteNotification: async (id) => {
    try {
      const res = await fetch("/api/admin/notifications", {
        method: "POST",
        body: JSON.stringify({ action: "DELETE", id }),
      });
      if (res.ok) {
        await get().fetchNotifications();
      }
    } catch (err) {
      console.error("Purge fail: Event record locked.");
    }
  },
}));

export default useAdminStore;
