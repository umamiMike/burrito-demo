import { useContext } from "react";
import { Checkbox } from "./components/Checkbox";
import { guid } from "./utils";
import AppContext from "./AppContext";

// array of toppings
// create set of toppings from all orders in list

export const Orders = () => {
  const ctx = useContext(AppContext);

  console.log(ctx);
  return (
    <div className="order-container">
      <div className="order_list"></div>
    </div>
  );
};
