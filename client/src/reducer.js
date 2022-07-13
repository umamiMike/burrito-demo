export const reducer = (state, action) => {
  switch (action.type) {
    case "START_ORDER":
      return {
        ...state,
        selected: { name: action.payload.name, price: action.payload.amt },
      };
    case "ADD_MENU_ITEM":
      return state;
    case "REMOVE_MENU_ITEM":
      return state;
    case "ADD_TOPPING":
      return state;
    // return {
    //   ...state,
    //   selected: {
    //     name: state.selected.name,
    //     price: state.selected.price + action.payload.value,
    //   },
    // };
    case "REMOVE_TOPPING":
      return {
        ...state,
        selected: {
          name: state.selected.name,
          price: state.selected.price - action.payload.value,
        },
      };
    case "CANCEL_ORDER":
      return { ...state, cart: {} };
    default:
      return state;
  }
};
