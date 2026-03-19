"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export const socialsList = portfolioData.siteConfig.socials;

export default function SocialLinks({ 
  className = "flex gap-4 items-center flex-wrap", 
  iconSize = "w-5 h-5", 
  buttonClassName = "w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center transition-all duration-300",
  variant = "glass" // 'glass', 'solid', or 'outline'
}) {
  return (
    <div className={className}>
      {socialsList.map((social, i) => {
        // Strip any base tailwind hover states passed from parents so our custom hover works perfectly
        const cleanedButtonClassName = buttonClassName.replace(/hover:[^\s]+/g, "");

        return (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.1, 
              y: -4,
              color: social.color,
              backgroundColor: `${social.color}1A`, // 10% opacity
              borderColor: `${social.color}80`,    // 50% opacity
              boxShadow: `0 10px 25px -5px ${social.color}66` // 40% opacity
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`relative overflow-hidden ${cleanedButtonClassName}`}
            aria-label={social.name}
            title={social.name}
          >
            <social.icon className={`relative z-10 ${iconSize}`} />
          </motion.a>
        );
      })}
    </div>
  );
}
