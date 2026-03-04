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
    <section
      id={id}
      className={`py-24 px-3 md:px-8 lg:px-12 mx-auto max-w-7xl overflow-hidden ${className}`}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
            {subtitle || "Overview"}
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full opacity-30"></div>
        </motion.div>
      )}
      {children}
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
