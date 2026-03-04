"use client";

import { motion } from "framer-motion";

export const SectionWrapper = ({
  children,
  id,
  className = "",
  title,
  subtitle,
}) => {
  return (
    <section id={id} className={`py-32 relative ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            {subtitle || "Overview"}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter uppercase italic">
            {title}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full opacity-50"></div>
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export const Card = ({ children, className = "" }) => (
  <div
    className={`glass p-8 rounded-2xl hover-glow transition-all ${className}`}
  >
    {children}
  </div>
);

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-accent text-accent-foreground shadow-lg shadow-accent/20",
    secondary: "bg-muted text-foreground border border-border",
    outline: "border-2 border-accent text-accent hover:bg-accent/10",
  };
  return (
    <button
      className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 transform active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
