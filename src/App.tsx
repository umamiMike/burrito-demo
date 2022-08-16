import React, { useReducer } from 'react';
import { Menu } from './Menu';
import AppContext from './AppContext';
import { reducer } from './reducer';
import { Cart } from './Cart';
import { Splash } from './Splash';
import { State, baseState } from './baseState';

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  const [state, dispatch] = useReducer(reducer, baseState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="max-w-screen-xl items-center justify-center flex-row space-y-8">
        <Splash props={state} />
        <Menu />
      </div>
      <Cart />
    </AppContext.Provider>
  );
}

export default App;
