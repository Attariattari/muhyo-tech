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
      className={`py-32 px-6 md:px-12 lg:px-20 mx-auto max-w-[1400px] overflow-hidden ${className}`}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-accent/30" />
            <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.5em] italic">
              {subtitle || "Technical Overview"}
            </h4>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase italic leading-none">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className={i % 2 !== 0 ? "text-transparent stroke-text" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <div className="max-w-xl h-[1px] bg-gradient-to-r from-accent/20 to-transparent" />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export const Card = ({ children, className = "" }) => (
  <div
    className={`glass p-10 rounded-[2.5rem] hover-glow transition-all duration-500 border border-white/5 shadow-2xl ${className}`}
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
    primary:
      "bg-accent text-accent-foreground shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.5)]",
    secondary:
      "bg-background/40 backdrop-blur-md text-foreground border border-white/10 hover:bg-white/5",
    outline:
      "border-2 border-accent text-accent hover:bg-accent/10 shadow-lg shadow-accent/5",
  };
  return (
    <button
      className={`px-10 py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all duration-500 transform active:scale-95 flex items-center justify-center gap-3 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
