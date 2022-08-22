/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, createContext, PropsWithChildren } from 'react';
import { reducerFn } from './reducer';
import type { StateState, Foo } from './baseState';
import { baseState, foo } from './baseState';

type Axion = {
  type: string;
  payload: any;
};
export const AppContext = createContext<{ state: Foo ; dispatch: any }>({
  state: baseState,
  dispatch: () => null,
});

type HeaderProps = {
  children: any;
};

export const fooReducer = (state: Foo, action: Axion) => {
  switch (action.type) {
    case 'CANCEL_ORDER':
      return { ...state };
    default:
      return state;
  }
};

export const AppProvider: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(fooReducer, foo);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
