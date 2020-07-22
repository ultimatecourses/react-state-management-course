import React from 'react';
import { useStorage } from './useStorage';

export const App = () => {
  let [count, setCount] = useStorage('count', 0);

  return <div onClick={() => setCount(count + 1)}>The count is: {count}</div>;
};
