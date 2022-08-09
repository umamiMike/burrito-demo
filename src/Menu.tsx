import React, { useContext } from "react";
import guid from "./guid";
import AppContext from "./AppContext";
import OrderModal from "./components/OrderModal";
import OrderImage from "./FakeImage";

export default function Menu() {
  const ctx: any = useContext(AppContext);

  const MenuItemCards = () =>
    ctx.stateValue.menu_items.map((menuItem: any) => {
      const key = guid();

      return (
        <div
          key={key.toString()}
          className="bg-gray-200 justify-items-start max-w-screen-md grid grid-cols-2 place-content-stretch rounded-md"
        >
          <div className="p-4">
            <div className="text-xl font-bold "> {menuItem.name}</div>
            <div className="item-description"> {menuItem.description}</div>
            <div className="border-solid border-l-[2px]  item-amt justify-self-end ">
              ${menuItem.amt}
            </div>
          </div>
          <OrderImage
            onKeyPress={() => {
              ctx.stateDispatch({ type: "START_ORDER", payload: menuItem });
            }}
            onClick={() => {
              ctx.stateDispatch({ type: "START_ORDER", payload: menuItem });
            }}
            name={menuItem.name}
            w={120}
            h={120}
            image={
              menuItem.image ? menuItem.image : "http://localhost/image.png"
            }
            styles="border-none overflow-clip justify-self-end rounded-md"
          />
        </div>
      );
    });

  return (
    <div className="mx-4 grid md:grid-cols-2 md:mx-8 gap-4 transition-all duration-200">
      <MenuItemCards />
      {ctx.stateValue.selected.name && <OrderModal />}
    </div>
  );
}
