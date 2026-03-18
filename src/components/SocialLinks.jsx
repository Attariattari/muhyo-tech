"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Facebook } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hi Ghulam Muhyo Din! I came across your portfolio and would love to connect. Are you available to discuss a potential project or collaboration?"
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const socialsList = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ghulam-muhyo-din-web-designer/",
    color: "#0077b5",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    url: `https://wa.me/923224458481?text=${whatsappMessage}`,
    color: "#25D366",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Attariattari",
    color: "#ffffff",
  },
  {
    name: "X (Twitter)",
    icon: XIcon,
    url: "https://x.com/GhulamMuhyo",
    color: "#ffffff",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/MuhammadMuhyoDinAttari",
    color: "#1877f2",
  },
];

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
