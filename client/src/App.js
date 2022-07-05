import { Orders } from "./orders";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { guid } from "./utils";
const App = () => {
  return (
    <AppContext.Provider value={base_state}>
      <div className="App">
        <Orders />
      </div>
    </AppContext.Provider>
  );
};

export default App;
