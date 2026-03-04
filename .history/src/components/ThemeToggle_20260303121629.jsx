"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-border bg-card/50 hover:bg-accent/10 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={20} className="text-accent icon-scale" />
      ) : (
        <Moon size={20} className="text-accent icon-scale" />
      )}
    </button>
  );
};
