import { Menu } from "./Menu";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";
import { Cart } from "./Cart";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className=" grid gap-4 justify-center py-6 overflow-hidden align-middle mx-{20} bg-gray-50 sm:py-12">
        <Menu />
        <Cart />
      </div>
    </AppContext.Provider>
  );
};

export default App;
