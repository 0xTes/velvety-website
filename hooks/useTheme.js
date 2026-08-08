"use client";

import { useEffect, useState } from "react";

/**
 * Manages dark/light mode.
 * Reads from localStorage, writes to <html data-theme="...">.
 * Safe for SSR — defaults to "dark" on the server.
 */
export function useTheme() {
  const [theme, setTheme] = useState("dark");

  // Initialise from localStorage once on the client
  useEffect(() => {
    const saved = localStorage.getItem("velvety-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("velvety-theme", next);
  };

  return { theme, toggleTheme };
}
