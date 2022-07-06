import { Orders } from "./orders";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { useReducer } from "react";

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

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <Orders />
      </div>
    </AppContext.Provider>
  );
};

export default App;
