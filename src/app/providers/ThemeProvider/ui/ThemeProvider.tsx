import { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,
} from '../lib/ThemeContext';

// eslint-disable-next-line max-len
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
// localStorage.getItem(LOCAL_STORAGE_THEME_KEY) преобразовали к типу Theme,
// а если localStorage пустой то Theme.LIGHT
