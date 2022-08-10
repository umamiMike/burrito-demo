import React, { createContext, useReducer, Dispatch } from 'react';
import AppReducer from 'AppReducer';
import baseState from './baseState';

type Topping = {
  name: string;
  amt: string;
};
type MenuItem = {
  name: string;
  description: string;
  amt: number;
  toppings: Topping[];
};

type App = {
  shop_name: string;
  shop_splash_img: string;
  shop_description: string;
  menu_items: MenuItem[];
  selected: { price: number; toppings: Topping[] };
};

type AppContextProviderProps = {
  children: React.ReactNode;
  reducer: React.Reducer;
};
const AppContext = createContext(baseState);

const [state, dispatch] = useReducer(AppReducer, baseState);
export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <AppContext.Provider value={{state, dispatch}>{children}</AppContext.Provider>
  );
}

export default AppContext;
