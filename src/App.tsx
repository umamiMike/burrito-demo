import React, { useReducer } from 'react';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  return (
    <AppProvider>
      <div className="max-w-screen-xl items-center justify-center flex-row space-y-8">
        <Splash />
      </div>
    </AppProvider>
  );
}

export default App;
