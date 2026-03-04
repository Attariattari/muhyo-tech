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
          className="text-center mb-20"
        >
          <span className="text-small font-black uppercase text-accent tracking-[0.4em] mb-4 block">
            {subtitle || "Core Overview"}
          </span>
          <h2 className="text-foreground tracking-tight max-w-3xl mx-auto">
            {title}
          </h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full opacity-30 mt-8"></div>
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
    className={`glass p-10 rounded-3xl hover-glow transition-all group ${className}`}
  >
    {Icon && (
      <div className="mb-8 inline-block p-4 rounded-xl bg-accent/5 text-accent border border-accent/10 group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} className="icon-scale" />
      </div>
    )}
    {title && (
      <h3 className="card-title mb-3 text-foreground tracking-tight">
        {title}
      </h3>
    )}
    {subtitle && (
      <p className="card-description mb-6 leading-relaxed">{subtitle}</p>
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
      "bg-accent text-accent-foreground shadow-xl shadow-accent/20 hover:brightness-110",
    secondary:
      "bg-secondary/10 text-foreground border border-border/10 hover:bg-secondary/20",
    outline: "border-2 border-accent text-accent hover:bg-accent/10",
  };
  return (
    <button
      className={`button-text inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl tracking-widest uppercase transition-all duration-300 transform active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} className="icon-scale" />}
    </button>
  );
};
