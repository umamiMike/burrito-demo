import { useContext, useState } from "react";
import { guid } from "./utils";
import AppContext from "./AppContext";
import { Splash } from "./Splash";
import { Modal } from "./components/Modal";
import { FakeImage } from "./FakeImage";

// array of toppings
// create set of toppings from all orders in list

export const Menu = () => {
  const ctx = useContext(AppContext);

  const MenuItemCards = () => {
    return ctx.stateValue.order_types.map((order) => {
      const key = guid();

      return (
        <div
          key={key}
          className="items-center align-middle shadow-md grid grid-cols-4 place-content-stretch rounded-xl"
          onClick={() => {
            ctx.stateDispatch({ type: "START_ORDER", payload: order });
          }}
        >
          <FakeImage args={{ name: order.name, l: 64, w: 64 }} />
          <div className="w-1 font-bold"> {order.name}</div>
          <div className="order-description"> {order.description}</div>
          <div className="align-">${order.amt}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex-row items-center justify-start ">
      <Splash className="" props={ctx.stateValue} />
      <div className="flex-row border border-black">
        <MenuItemCards />
      </div>
      {ctx.stateValue.cart.items && <Modal />}
    </div>
  );
};
