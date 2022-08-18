/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { useReducer, createContext } from 'react';
import { reducer } from './reducer';
import { baseState } from './baseState';

const AppContext = createContext(baseState);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, baseState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
