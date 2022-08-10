import React, { createContext, useReducer, Dispatch } from 'react';
import reducer from './reducer';
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

const AppContext = createContext<{
  state: App;
  dispatch: Dispatch<App>;
}>({
  state: baseState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, baseState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
