export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOPPING":
      return {
        ...state,
        cart: [action.item],
      };
    case "start_order":
      console.log("order started");
      console.log(action.payload);

      let newstate = { ...state, cart: action.payload };
      console.log(newstate);
      return newstate;
    default:
      return state;
  }
};
