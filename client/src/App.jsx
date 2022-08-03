import { useReducer } from 'react';
import { Menu } from './Menu';
import baseState from './baseState';
import AppContext from './AppContext';
import { reducer } from './reducer';
import { Cart } from './Cart';
import { Splash } from './Splash';

function App() {
  const [state, dispatch] = useReducer(reducer, baseState);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="max-w-screen-xl items-center justify-center flex-row space-y-8">
        <Splash props={state} />
        <Menu />
      </div>
      <Cart />
    </AppContext.Provider>
  );
}

export default App;
