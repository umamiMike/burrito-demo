import React, { createContext } from 'react';
import baseState from './baseState';

type AppContextProviderProps = {
  children: React.ReactNode;
};
const AppContext = createContext(baseState);

export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <AppContext.Provider value={baseState}>{children}</AppContext.Provider>
  );
}

export default AppContext;
