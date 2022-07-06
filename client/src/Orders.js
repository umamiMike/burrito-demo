import { useContext } from "react";
import { Checkbox } from "./components/Checkbox";
import { guid } from "./utils";
import AppContext from "./AppContext";
import { Splash } from "./Splash";

// array of toppings
// create set of toppings from all orders in list

export const Orders = () => {
  const ctx = useContext(AppContext);
  // src/Splash.js

  const OrderCards = () => {
    return ctx.stateValue.order_types.map((order) => {
      const key = guid();
      return (
        <div
          key={key}
          className="w-full border-2 border-b-4 border-gray-300 rounded-xl hover:bg-gray-50 "
        >
          <Checkbox className="w-1" id={key} value="foo" />
          <div> {order.name}</div>
          <div className="order-description"> {order.description}</div>
          <div>${order.amt}</div>
        </div>
      );
    });
  };
  return (
    <div className="flex-row items-center justify-start min-h-screen order-container">
      <Splash props={ctx.stateValue} />
      <div className="flex-row shadow-xl">
        <OrderCards />
        <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
          start your order
        </button>
      </div>
      <div className="order_list"></div>
    </div>
  );
};
