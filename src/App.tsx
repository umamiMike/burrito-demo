import React from "react";
import Menu from "./Menu";
import { AppProvider, AppContext } from "./AppContext";

import Cart from "./Cart";
import Splash from "./Splash";

function App() {
  return (
    <AppProvider>
      <div className="flex-row items-center justify-center max-w-screen-xl space-y-8">
        {/*   <Splash /> */}
        {/*   <Menu /> */}
      </div>
      {/* <Cart /> */}
    </AppProvider>
  );
}

export default App;
