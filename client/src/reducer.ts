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
        selected: {
          ...action.payload,
          toppings: [],
          price: action.payload.amt,
        },
      };
      return n;
      break;
    case 'ADD_TOPPING':
      // if checked add the string
      // if checked and exists in array remove string from array

      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price + action.payload.value,
          toppings: state.selected.toppings.concat([action.payload.name]),
        },
      };
      break;
    case 'REMOVE_TOPPING':

      console.log('remove topping ');
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price - action.payload.value,
          toppings: state.selected.toppings.filter((t) => t !== action.payload.name),
        },
      };
      break;
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: { ...emptyCart } };
      break;
    case 'CANCEL_ORDER':
      const con: Shop = { ...state, selected: emptyCart, cart: emptyCart };
      return con;
      break;
    default:
      return state;
  }
};
