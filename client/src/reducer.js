export const reducer = (state, action) => {
  switch (action.type) {
    case "START_ORDER":
      return {
        ...state,
        selected: {
          ...state.selected,
          name: action.payload.name,
          price: action.payload.amt,
        },
      };
    case "ADD_MENU_ITEM":
      return state;
    case "REMOVE_MENU_ITEM":
      return state;
    case "ADD_TOPPING":
      console.log("add topping");
      let theseToppings = state.selected.toppings
        ? state.selected.toppings
        : [];
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price + action.payload.value,
          toppings: [...state.selected.toppings, `${action.payload.name}`],
        },
      };
    case "REMOVE_TOPPING":
      console.log("remove topping");
      let filteredToppings = state.selected.toppings.filter(
        (el) => el != action.payload.name
      );

      return {
        ...state,
        selected: {
          ...state.selected,
          name: state.selected.name,
          price: state.selected.price - action.payload.value,
          toppings: filteredToppings,
        },
      };
    case "CANCEL_ORDER":
      return { ...state, selected: {}, cart: {} };
    default:
      return state;
  }
};
