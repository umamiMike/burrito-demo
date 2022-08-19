import React, { useReducer } from 'react';
import { Menu } from './Menu';
import { AppProvider } from './AppContext';
import { Cart } from './Cart';
import { Splash } from './Splash';

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  return (
    <AppProvider>
      <div className="max-w-screen-xl items-center justify-center flex-row space-y-8">
        <Splash />
        <Menu />
      </div>
      <Cart />
    </AppProvider>
  );
}

export default App;
