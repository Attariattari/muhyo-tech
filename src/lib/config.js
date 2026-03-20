export const SITE_URL = 
  process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.NODE_ENV === "production" 
    ? "https://muhyo-tech.vercel.app" 
    : "http://localhost:3000");
