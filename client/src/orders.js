import { useContext } from "react";
import { Checkbox } from "./components/Checkbox";
import { guid } from "./utils";
import AppContext from "./AppContext";
import { Splash } from "./Splash";

// array of toppings
// create set of toppings from all orders in list

export const Orders = () => {
  const ctx = useContext(AppContext);
  console.log(ctx);
  // src/Splash.js

  return (
    <div className="flex-row items-center justify-start min-h-screen order-container">
      <Splash props={ctx} />
      <div className="flex-row shadow-xl">
        <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
          start your order
        </button>
      </div>
      <div className="order_list"></div>
    </div>
  );
};
