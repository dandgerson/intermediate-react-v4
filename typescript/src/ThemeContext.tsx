import { createContext, FunctionComponent, useContext, useState } from "react";

// const [theme, setTheme] = useState('darkblue')

// just mimicing useState hook
export const ThemeContext = createContext<[string, (theme: string) => void]>([
  "",
  () => {},
]);

export const ThemeContextProvider: FunctionComponent<{ value: string }> = ({
  value,
  children,
}) => {
  const themeState = useState(value);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
