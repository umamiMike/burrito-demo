import { useContext } from "react";
import { guid } from "./utils";
import AppContext from "./AppContext";

export const Cart = () => {
  const ctx = useContext(AppContext);
  let price = ctx.stateValue.cart.price
    ? "$" + ctx.stateValue.cart.price.toFixed(2)
    : "";
  return (
    <div className="">
      Cart
      <div className="font-bold"></div>
      {price}
      <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
        place your order
      </button>
    </div>
  );
};
