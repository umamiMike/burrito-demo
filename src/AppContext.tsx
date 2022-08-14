import React, {
  useMemo, createContext, useReducer, Dispatch,
} from 'react';
import {
  App, Shop,
} from './types';
import reducer from './reducer';

const shopData = {
  name: 'Casa de Miguel',
  splash_img: 'https://i.imgur.com/jBzfI4t.jpg',
  description: 'A festive place to eat your foods',
};

const ShopContext = createContext<{
  state: Shop;
  dispatch: Dispatch<App>;
}>({
  state: shopData,
  dispatch: () => null,
});

export type Cart = { price: number; toppings: Topping[] };

const cart: Cart = { price: 0, toppings: [] };

export const CartContext = createContext<{
  state: Cart
  dispatch: Dispatch<Cart>;
}>({
  state: cart,
  dispatch: () => null,
});

const ShopProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, shopData);

  const memoState = useMemo(() => ({ state, dispatch }), []);
  return (
    <ShopContext.Provider value={memoState}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
