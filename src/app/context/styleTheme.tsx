
import React, { createContext, useState, useEffect } from "react";

type StyleThemeProps = {
  children: React.ReactNode;
};

export const StyleThemeContext = createContext({} as any);

export const StyleTheme = ({ children }: StyleThemeProps) => {
  const [theme, setTheme] = useState<string>("dark");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StyleThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </StyleThemeContext.Provider>
  );
};
