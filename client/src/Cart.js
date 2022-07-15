import { useContext } from "react";
import AppContext from "./AppContext";

export const Cart = () => {
  const ctx = useContext(AppContext);
  const cart = ctx.stateValue.cart;

  let price = cart.price ? "$" + cart.price.toFixed(2) : "";

  const toppings = () => {
    console.log(cart);
    return " ";
  };
  return (
    <div className="fixed  bottom-0 flex-row  p-4 bg-gray-200 gap-3 transition-all duration-100 ease-in-out w-screen h-1/4 ">
      <div className="border-b-[1px] border-gray-400 border-solid ">Cart</div>
      <div className="font-bold"></div>
      <p>
        {" "}
        {`You are ordering a ${ctx.stateValue.cart.name}`}
        <br />
        {`with ${cart.toppings.join(", ")}`}
        {` for   ${price}`}
      </p>
      <button className="text-white bg-yellow-500 rounded-full">
        place your order
      </button>
    </div>
  );
};
