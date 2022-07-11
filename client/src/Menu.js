import { useContext, useState } from "react";
import { guid } from "./utils";
import AppContext from "./AppContext";
import { Splash } from "./Splash";
import { OrderModal } from "./components/OrderModal";
import { OrderImage } from "./FakeImage";

export const Menu = () => {
  const ctx = useContext(AppContext);

  const MenuItemCards = () => {
    return ctx.stateValue.menu_items.map((order) => {
      const key = guid();

      return (
        <div
          key={key}
          className="items-center align-middle shadow-md grid grid-cols-4 place-content-stretch rounded-xl"
          onClick={() => {
            ctx.stateDispatch({ type: "START_ORDER", payload: order });
          }}
        >
          <OrderImage key={guid} args={{ name: order.name, w: 120, h: 65 }} />
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
      {ctx.stateValue.cart.items && <OrderModal />}
    </div>
  );
};
