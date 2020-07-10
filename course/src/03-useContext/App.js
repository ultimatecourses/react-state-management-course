import React from 'react';
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import { AppProvider } from './appContext';

export const App = () => {
  return (
    <AppProvider>
      <div>
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  );
};
