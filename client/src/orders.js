import { useContext } from "react";
import { Checkbox } from "./components/Checkbox";
import { guid } from "./utils";
import AppContext from "./AppContext";

// array of toppings
// create set of toppings from all orders in list

export const Orders = () => {
  const ctx = useContext(AppContext);
  const Splash = () => {
    return (
      <div>
        {ctx.shop_description}
        <img className="" alt="alt" src={ctx.shop_splash_img} />
      </div>
    );
  };

  const OrderCards = () => {
    return ctx.order_types.map((order) => {
      return (
        <div className="flex m-1 bg-gray-400 place-content-around">
          <Checkbox className="w-1" id="foo" label="foo" value="foo" />
          <div> {order.name}</div>
          <div>${order.amt}</div>
        </div>
      );
    });
  };
  return (
    <div className="order-container">
      <Splash />
      <div className="flex-row m-4 border-2 border-grey-300">
        <OrderCards />
      </div>
      <div className="order_list"></div>
    </div>
  );
};
