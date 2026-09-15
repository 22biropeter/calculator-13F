import { createContext, useState } from "react";
import React from "react";

type ThemeContextType = {
  theme: number,
  nextTheme: () => void
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {

  const [theme, setTheme] = useState<number>(0);

  function nextTheme() {
    setTheme((prevTheme) => (prevTheme + 1) % 3);
  }

  return (
    <ThemeContext.Provider value={{ theme, nextTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
};

export default ThemeContextProvider