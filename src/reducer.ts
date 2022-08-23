import type { Shop } from './baseState';

export type Action = {
  type: string;
  payload: any;
};

const emptyCart = { name: '', price: 0, toppings: [] };

export const shopReducer = (state: Shop, action: Action) => {
  switch (action.type) {
    case 'START_ORDER':
      const n: Shop = {
        ...state,
        selected: action.payload,
      };
      return n;
      break;
    case 'CANCEL_ORDER':
      console.log('cancelling order');
      console.log(state);
      const con: Shop = { ...state, selected: emptyCart, cart: emptyCart };
      return con;
      break;
    default:
      return state;
  }
};
