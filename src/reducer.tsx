function reducer(state: any, action: any) {
  const filteredToppings = state.selected.toppings.filter(
    (el: any) => el !== action.payload.name,
  );
  switch (action.type) {
    case 'START_ORDER':
      return {
        ...state,
        selected: {
          ...state.selected,
          name: action.payload.name,
          price: action.payload.amt,
          toppings: [],
        },
      };
    case 'ADD_MENU_ITEM':
      return state;
    case 'REMOVE_MENU_ITEM':
      return state;
    case 'ADD_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price + action.payload.value,
          toppings: [...state.selected.toppings, `${action.payload.name}`],
        },
      };
    case 'REMOVE_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          name: state.selected.name,
          price: state.selected.price - action.payload.value,
          toppings: filteredToppings,
        },
      };
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: {} };
    case 'CANCEL_ORDER':
      return { ...state, selected: {}, cart: {} };
    default:
      return state;
  }
}
export default reducer;
