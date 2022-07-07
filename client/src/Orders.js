import { useContext } from "react";
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
          className="flex border-b-4 border-gray-300 shadow-xl w-half rounded-xl hover:bg-gray-50 "
          onClick={() => {
            ctx.stateDispatch({ type: "start_order", payload: order });
          }}
        >
          <div> {order.name}</div>
          <div className="order-description"> {order.description}</div>
          <div>${order.amt}</div>
        </div>
      );
    });
  };
  return (
    <div className="flex-row items-center justify-start min-h-screen ">
      <Splash className="max-w-half" props={ctx.stateValue} />
      <div className="flex-row shadow-xl">
        <OrderCards />
      </div>
    </div>
  );
};
