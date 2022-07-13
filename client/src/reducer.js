export const reducer = (state, action) => {
  switch (action.type) {
    case "START_ORDER":
      console.log("order_started");
      let newstate = {
        ...state,
        selected: { name: action.payload.name, price: action.payload.amt },
      };
      console.log("newstate after order started", newstate);
      return newstate;
    case "ADD_MENU_ITEM":
      return state;
    case "REMOVE_MENU_ITEM":
      return state;
    case "ADD_TOPPING":
      console.log("action payload value", action.payload.value);
      let toppingstate = {
        ...state,
        selected: {
          name: state.selected.name,
          price: state.selected.price + action.payload.value,
        },
      };
      console.log("state after adding topping", toppingstate.selected.price);
      return toppingstate;
    case "REMOVE_TOPPING":
      let rtoppingstate = {
        ...state,
        selected: {
          name: state.selected.name,
          price: state.selected.price - action.payload.value,
        },
      };
      console.log("price after removing topping", rtoppingstate.selected.price);
      return rtoppingstate;
    case "CANCEL_ORDER":
      return { ...state, cart: {} };
    default:
      return state;
  }
};
