import type { Shop } from './baseState';

export type Action = {
  type: string;
  payload: any;
};

const emptyCart = { name: ' ', price: 0, toppings: [' '] };

export const shopReducer = (state: Shop, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
