type Topping = {
  name: string;
  amt: string;
};

export type Cart = { price: number; toppings: Topping[] };

export const cartReducer = () => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: {} };
    case 'CANCEL_ORDER':
      return { ...state, selected: {}, cart: {} };
    default:
      return state;
  }
};
