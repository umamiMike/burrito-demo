/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { StateState } from './baseState';

type Action = {
  type: 'START_ORDER' | 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAR_CART' | 'ADD_MENU_ITEM' | 'REMOVE_MENU_ITEM' | 'ADD_TOPPING' | 'REMOVE_TOPPING' | 'CANCEL_ORDER' | 'CONFIRM_ORDER' | 'SET_SHOP_NAME' | 'SET_SHOP_SPLASH_IMG';
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export const reducer = (state: StateState, action: Action) => {
  switch (action.type) {
    case 'START_ORDER':
      return {
        ...state,
        selected: {
          ...state.selected,
          name: action.payload.name,
          price: action.payload.amt,
          toppings: [],
        },
      };
    case 'ADD_MENU_ITEM':
      return state;
    case 'REMOVE_MENU_ITEM':
      return state;
    case 'ADD_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price + action.payload.value,
          toppings: [...state.selected.toppings, `${action.payload.name}`],
        },
      };
    case 'REMOVE_TOPPING':
      const filteredToppings = state.selected.toppings.filter(
        (el) => el !== action.payload.name,
      );

      return {
        ...state,
        selected: {
          ...state.selected,
          name: state.selected.name,
          price: state.selected.price - action.payload.value,
          toppings: filteredToppings,
        },
      };
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: {} };
    case 'CANCEL_ORDER':
      return { ...state, selected: {}, cart: {} };
    default:
      return state;
  }
};
