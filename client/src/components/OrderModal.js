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
  const splashname = `${selected.name} %0A splash image %0A `;
  console.log(splashname);

  return (
    <div key="555" className="overlay">
      <div className="flex-row overflow-y-scroll bg-gray-100 shadow-md scrollbar modal">
        <div className=" h-1/2 grid gap-2 rounded-md border-bottom max-h-20">
          <button
            className="p-1 h-fit w-fit uppercase rounded-full bg-emerald-500"
            type="button"
            onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
          >
            x
          </button>
        </div>
        <OrderImage name={splashname} w="600" h="300" />

        <div>
          <Toppings />
        </div>
      </div>
    </div>
  );
};
