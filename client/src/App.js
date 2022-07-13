import { Menu } from "./Menu";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";
import { Cart } from "./Cart";
import { Splash } from "./Splash";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="flex-row space-y-8">
        <Splash className="" props={state} />
        <Menu />
      </div>
      <Cart />
    </AppContext.Provider>
  );
};

export default App;
