import React from 'react';
import { useDarkMode } from './useDarkMode';

export const App = () => {
  let isDarkMode = useDarkMode();
  return (
    <div
      style={{
        height: 500,
        width: 500,
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? 'black' : 'white',
      }}
    >
      Here's some content
    </div>
  );
};
