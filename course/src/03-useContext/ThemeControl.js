import React from 'react';
import { useAppContext } from './appContext';

export const ThemeControl = () => {
  let { theme, setTheme } = useAppContext();

  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle the theme!
    </div>
  );
};
