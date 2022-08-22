/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, createContext, PropsWithChildren } from 'react';
import { shopReducer } from './reducer';
import type { StateState, Shop } from './baseState';
import {  shopInfo } from './baseState';

type Axion = {
  type: string;
  payload: any;
};
export const AppContext = createContext<{ state: Shop ; dispatch: any }>({
  state,
  dispatch: () => null,
});

type HeaderProps = {
  children: any;
};


export const AppProvider: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, shopInfo);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
