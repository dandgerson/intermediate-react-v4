import { createContext, useContext, useState } from "react";

// const [theme, setTheme] = useState('darkblue')

// just mimicing useState hook
export const ThemeContext = createContext(["", () => {}]);

export const ThemeContextProvider = ({ value, children }) => {
  const themeState = useState(value);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
