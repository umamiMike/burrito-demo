import { useContext, useState } from "react";
import { OrderImage } from "../FakeImage";
import { guid } from "../utils";
import AppContext from "../AppContext";
import { Topping } from "./Topping";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
      <div className="flex-row  bg-gray-100 shadow-md overflow-hidden  ">
        <div className="">
          <button
            className="p-1 w-5 h-5 uppercase "
            type="button"
            onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
          >
            <IoIosCloseCircleOutline size="20px" />
          </button>
        </div>

        <OrderImage name={splashname} w="600" h="140" styles="p-4 rounded-lg" />

        <div className="grid gap-4">
          <Toppings />
        </div>
      </div>
    </div>
  );
};
