import { Menu } from "./Menu";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";
import { Cart } from "./Cart";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  console.log(state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="flex ">
        <Menu />
        <Cart />
      </div>
    </AppContext.Provider>
  );
};

export default App;
