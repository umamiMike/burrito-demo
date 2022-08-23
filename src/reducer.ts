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
    case 'ADD_TOPPING':
      // if checked add the string
      // if checked and exists in array remove string from array
      console.log(action.payload);
      console.log('toppins');
      // console.log(...state.selected.toppings);
      return state;
      // return {
      //   ...state,
      //   selected: {
      //     ...state.selected,
      //     price: state.selected.price + action.payload.value,
      //     toppings: [...state.selected.toppings.concat([action.payload.name])],
      //   },
      // };
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
