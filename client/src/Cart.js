import { useContext } from "react";
import AppContext from "./AppContext";

export const Cart = () => {
  const ctx = useContext(AppContext);
  const cart = ctx.stateValue.cart;
  const visible = cart.toppings ? "bottom-0" : " -bottom-1/4";
  let price = cart.price ? "$" + cart.price.toFixed(2) : "";
  const toppings = () => {
    if (cart.toppings)
      return `You are ordering a ${ctx.stateValue.cart.name}
        with ${cart.toppings.join(", ")}
         for   ${price}`;
    // for   ${price}`.match(/,\s*([^,]+)$/)[1];
    return ` `;
  };

  return (
    <div
      className={` ${visible}  p-4 h-1/8 absolute border-t-[1px] ease-in-out overflow-hidden border-gray-400  bottom-0 flex-row bg-gray-200 gap-2 transition-all duration-200 w-screen  `}
    >
      <div className="border-b-[1px] border-gray-400 border-solid ">Cart</div>
      <div className="font-bold"></div>
      <p>{toppings()}</p>
      <button className="text-white bg-yellow-500 rounded-full px-4 py-2 font-bold">
        place your order
      </button>
    </div>
  );
};
