import { Orders } from "./Orders";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="App">
        <Orders />
      </div>
    </AppContext.Provider>
  );
};

export default App;
