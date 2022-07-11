import { useContext } from "react";
import { guid } from "./utils";
import AppContext from "./AppContext";

export const Cart = () => {
  const ctx = useContext(AppContext);
  let price = ctx.stateValue.cart.price
    ? "$" + ctx.stateValue.cart.price.toFixed(2)
    : "";
  return (
    <div className="grid grid-cols-4">
      Cart
      <div className="font-bold"></div>
      {price}
      <button className="text-white bg-yellow-500 rounded-full">
        place your order
      </button>
    </div>
  );
};
