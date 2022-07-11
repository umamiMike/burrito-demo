export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOPPING":
      let acart = state.cart;
      console.log(acart);
      return state;
    case "START_ORDER":
      console.log("order started");
      console.log(action.payload);

      return {
        ...state,
        cart: { items: [action.payload], price: action.payload.amt },
      };
    case "CANCEL_ORDER":
      return { ...state, cart: {} };
    default:
      return state;
  }
};
