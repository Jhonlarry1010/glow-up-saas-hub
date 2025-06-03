
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'rainbow' | 'monochrome';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getBackgroundClasses: () => string;
  getTextClasses: () => {
    primary: string;
    secondary: string;
    muted: string;
  };
  getCardClasses: () => string;
  getButtonClasses: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('rainbow');

  const getBackgroundClasses = () => {
    switch (theme) {
      case 'monochrome':
        return 'bg-gradient-to-br from-white via-gray-100 to-gray-200';
      default:
        return 'bg-gradient-to-br from-purple-400 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-600';
    }
  };

  const getTextClasses = () => {
    switch (theme) {
      case 'monochrome':
        return {
          primary: 'text-gray-900',
          secondary: 'text-gray-700',
          muted: 'text-gray-600'
        };
      default:
        return {
          primary: 'text-white',
          secondary: 'text-white/90',
          muted: 'text-white/80'
        };
    }
  };

  const getCardClasses = () => {
    switch (theme) {
      case 'monochrome':
        return 'bg-white/90 backdrop-blur-md border-gray-300/50 hover:bg-white';
      default:
        return 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15';
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case 'monochrome':
        return 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900 border-gray-400/50';
      default:
        return 'bg-white/20 hover:bg-white/30 text-white border-white/30';
    }
  };

  const value = {
    theme,
    setTheme,
    getBackgroundClasses,
    getTextClasses,
    getCardClasses,
    getButtonClasses,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
