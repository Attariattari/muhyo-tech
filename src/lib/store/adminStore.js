import { create } from 'zustand';
import { portfolioData, aboutData, resumeData } from '@/lib/data';

const useAdminStore = create((set) => ({
  // Data from data.js
  portfolioData: { ...portfolioData },
  aboutData: { ...aboutData },
  resumeData: { ...resumeData },

  // Settings state (initialized from SiteConfig)
  settings: {
    siteTitle: portfolioData.siteConfig.navbar.logo.title,
    siteAccent: portfolioData.siteConfig.navbar.logo.accent,
    adminName: resumeData.name,
    email: portfolioData.profile.email,
    location: portfolioData.profile.location,
    socialLinks: { ...portfolioData.profile.socials },
    seo: {
      title: "Muhyo Tech - Portfolio",
      description: portfolioData.siteConfig.hero.description,
    }
  },

  // Notifications state
  notifications: [
    {
      id: "init-1",
      title: "System Online",
      message: "Admin Dashboard successfully synchronized with data.js source.",
      type: "success",
      createdAt: new Date().toISOString(),
      isRead: false
    }
  ],

  // Messages (simulating database)
  messages: portfolioData.messages || [],

  // Universal Notification Trigger
  addNotification: (notification) => set((state) => ({
    notifications: [{
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      isRead: false,
      ...notification
    }, ...state.notifications]
  })),

  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, isRead: true } : n)
  })),

  clearNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),

  // Settings Action
  updateSettings: (newSettings) => {
    set({ settings: newSettings });
    return true;
  },

  // Enhanced CRUD for Projects
  updateProjects: (newProjects, actionType = "update") => {
    set((state) => ({
       portfolioData: { ...state.portfolioData, projects: newProjects }
    }));
    
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: `Project ${actionType === "add" ? "Added" : actionType === "delete" ? "Deleted" : "Modified"}`,
        message: `System state updated for projects module.`,
        type: actionType === "delete" ? "error" : "success"
    });
  },

  // Enhanced CRUD for Services
  updateServices: (newServices, actionType = "update") => {
    set((state) => ({
       portfolioData: { ...state.portfolioData, services: newServices }
    }));
    
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: `Service ${actionType === "add" ? "Deployed" : actionType === "delete" ? "Terminated" : "Recalibrated"}`,
        message: `Global services registry updated.`,
        type: actionType === "delete" ? "error" : "success"
    });
  },

  // CRUD for Blogs
  updateBlogs: (newBlogs, actionType = "update") => {
    set((state) => ({
        portfolioData: { ...state.portfolioData, blogs: newBlogs }
    }));
    
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: `Editorial ${actionType === "add" ? "Published" : actionType === "delete" ? "Archived" : "Updated"}`,
        message: `Content stream synchronized with latest state.`,
        type: actionType === "delete" ? "error" : "success"
    });
  },

  // CRUD for Skills
  updateSkills: (newSkills, actionType = "update") => {
    set((state) => ({
        portfolioData: { ...state.portfolioData, skills: newSkills }
    }));
    
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: `Skill Matrix ${actionType === "delete" ? "Purged" : "Modified"}`,
        message: `Technical proficiency state updated.`,
        type: actionType === "delete" ? "error" : "success"
    });
  },

  // CRUD for Resume
  updateResume: (newResume) => {
    set({ resumeData: newResume });
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: "Resume Updated",
        message: "Professional history and executive profile synchronized.",
        type: "success"
    });
  },

  // Messages Actions
  markAsRead: (id) => set((state) => ({
    messages: state.messages.map(m => m.id === id ? { ...m, isRead: true } : m)
  })),

  deleteMessage: (id) => {
    set((state) => ({
        messages: state.messages.filter(m => m.id !== id)
    }));
    const { addNotification } = useAdminStore.getState();
    addNotification({
        title: "Transmission Deleted",
        message: "Message record removed from secure archives.",
        type: "info"
    });
  },
}));

export default useAdminStore;
