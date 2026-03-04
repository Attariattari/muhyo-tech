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
      className={`py-24 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl overflow-hidden ${className}`}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-accent text-small font-black uppercase tracking-[0.3em] mb-4">
            {subtitle || "Overview"}
          </h4>
          <h2 className="mb-4">{title}</h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full opacity-30"></div>
        </motion.div>
      )}
      {children}
    </section>
  );
};

export const Card = ({
  children,
  title,
  subtitle,
  className = "",
  icon: Icon,
}) => (
  <div
    className={`glass p-8 rounded-2xl hover-glow transition-all group ${className}`}
  >
    {Icon && (
      <div className="mb-6 inline-block p-4 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} className="icon-scale" />
      </div>
    )}
    {title && (
      <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
        {title}
      </h3>
    )}
    {subtitle && (
      <p className="text-sm md:text-base leading-relaxed">{subtitle}</p>
    )}
    {children}
  </div>
);

export const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) => {
  const variants = {
    primary:
      "bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:brightness-110",
    secondary:
      "bg-muted text-foreground border border-border hover:bg-border/50",
    outline: "border-2 border-accent text-accent hover:bg-accent/10",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-small tracking-widest uppercase transition-all duration-300 transform active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} className="icon-scale" />}
    </button>
  );
};
