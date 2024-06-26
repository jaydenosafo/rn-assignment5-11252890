import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, isEnabled, setTheme, setIsEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };