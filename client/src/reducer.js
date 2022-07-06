export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOPPING":
      return {
        ...state,
        cart: [action.item],
      };
    default:
      return state;
  }
};
