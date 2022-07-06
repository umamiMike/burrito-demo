import { Orders } from "./Orders";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";
import { Cart } from "./Cart";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="relative flex flex-col justify-center py-6 overflow-hidden bg-gray-50 sm:py-12">
        <Orders />
        <Cart />
      </div>
    </AppContext.Provider>
  );
};

export default App;
