import { useContext, useState } from "react";
import { OrderImage } from "../FakeImage";
import { guid } from "../utils";
import AppContext from "../AppContext";
import { Topping } from "./Topping";

export const OrderModal = () => {
  const ctx = useContext(AppContext);

  const selected = ctx.stateValue.menu_items.find(
    (el) => el.name === ctx.stateValue.selected.name
  );

  const Toppings = () => {
    return selected.toppings.map((t) => {
      return <Topping key={guid()} topping={t} />;
    });
  };

  return (
    <div key="555" className="overlay">
      <div className="overflow-y-scroll bg-gray-100 shadow-md scrollbar modal">
        <div className=" h-1/2 grid gap-2 rounded-md border-bottom">
          <button
            className="w-[32px] uppercase rounded-full bg-emerald-500"
            type="button"
            onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
          >
            x
          </button>
          <OrderImage name="item splash" w="300" h="100" />
        </div>
        <Toppings />
      </div>
    </div>
  );
};
