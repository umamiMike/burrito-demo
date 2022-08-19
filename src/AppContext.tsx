/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, createContext, PropsWithChildren } from 'react';
import { reducer } from './reducer';
import type { StateState } from './baseState';
import { baseState } from './baseState';

export const AppContext = createContext<{ state: StateState ; dispatch: any }>({
  state: baseState,
  dispatch: () => null,
});

type HeaderProps = {
  children: any;
};

export const AppProvider: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, baseState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
