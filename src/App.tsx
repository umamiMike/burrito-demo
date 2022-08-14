import React from 'react';
import { ShopProvider } from './AppContext';

import Splash from './Splash';

const App: React.FC = () => (
  <ShopProvider>
    <div className="flex-row items-center justify-center max-w-screen-xl space-y-8">
      <Splash />
    </div>
    {/* <Cart /> */}
  </ShopProvider>
);

export default App;
