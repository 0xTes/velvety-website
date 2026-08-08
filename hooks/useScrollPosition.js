"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current scroll Y position.
 * Used by Navbar (scrolled class) and FloatingCTA (visible class).
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
