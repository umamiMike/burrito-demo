export const reducer = (state, action) => {
  switch (action.type) {
    case "START_ORDER":
      return {
        ...state,
        cart: { items: [action.payload], price: action.payload.amt },
      };
    case "ADD_MENU_ITEM":
      return state;
    case "REMOVE_MENU_ITEM":
      return state;
    case "REMOVE_TOPPING":
      return state;
    case "ADD_TOPPING":
      return state;
    case "CANCEL_ORDER":
      return { ...state, cart: {} };
    default:
      return state;
  }
};
