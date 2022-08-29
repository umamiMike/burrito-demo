import React from 'react';
import { useQuery } from '@apollo/client';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';
import { Menu } from './Menu';
import { Cart } from './Cart';
import { ALL_ITEMS, MUTATE_ITEM } from './queries';

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  const { loading, error, data } = useQuery(ALL_ITEMS);
  console.log(data);
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
