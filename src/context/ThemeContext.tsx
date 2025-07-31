import React, { createContext, useState, useEffect } from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";
interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} h-screen`}>{children}</div>
    </ThemeContext.Provider>
  );
};