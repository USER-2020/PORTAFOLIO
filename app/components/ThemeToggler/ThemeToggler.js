import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";

export const ThemeToggler = ({ onThemeChangue }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChangue(newTheme); // Notificar al componente padre el cambio de tema
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle Dark Mode"
      className="h-12 w-12 flex items-center justify-center hover:bg-[var(--hover-nav)] rounded-full"
    >
      <span
        className="text-3xl "
      >
        {theme === "light" ? <IconSunHigh /> : <IconMoon />}
      </span>
    </button>
  );
};
