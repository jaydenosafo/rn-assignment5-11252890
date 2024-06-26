// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleTheme = () => {
    setIsEnabled(prevState => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isEnabled, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
