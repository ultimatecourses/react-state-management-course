import { useEffect, useState } from 'react';

let initiallyDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useDarkMode = () => {
  let [dark, setDark] = useState(initiallyDark);

  const listener = (event) => {
    setDark(event.matches);
  };

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', listener);

    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', listener);
  }, []);

  return dark;
};
