"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full transition-all duration-300 ease-in-out bg-foreground/5 border border-border hover:bg-foreground/10 hover:border-border hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md dark:bg-black/20 dark:border-border dark:hover:bg-foreground/10 dark:hover:border-border text-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun className="absolute w-5 h-5 transition-all duration-300 transform dark:scale-0 dark:-rotate-90 scale-100 rotate-0" />
        <Moon className="absolute w-5 h-5 transition-all duration-300 transform scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      </div>
    </button>
  );
}
