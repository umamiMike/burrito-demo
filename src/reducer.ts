import type { Shop } from './baseState';

export type Action = {
  type: string;
  payload: any;
};

const emptyCart = { name: ' ', price: 0, toppings: [' '] };

export const shopReducer = (state: Shop, action: Action) => {
  switch (action.type) {
    case 'START_ORDER':
      console.log('starting order');
      console.log('action payload is', action.payload);
      const n: Shop = {
        ...state,
        selected: action.payload,
      };
      return n;
      break;
    default:
      return state;
  }
};
