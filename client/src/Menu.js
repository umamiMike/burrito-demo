import { useContext } from "react";
import { guid } from "./utils";
import AppContext from "./AppContext";
import { Splash } from "./Splash";
import { OrderModal } from "./components/OrderModal";
import { OrderImage } from "./FakeImage";

export const Menu = () => {
  const ctx = useContext(AppContext);

  const MenuItemCards = () => {
    return ctx.stateValue.menu_items.map((menu_item) => {
      const key = guid();

      return (
        <div
          key={key}
          className="items-center bg-gray-200 gap-2 grid grid-cols-4 place-content-stretch rounded-md"
          onClick={() => {
            ctx.stateDispatch({ type: "START_ORDER", payload: menu_item });
          }}
        >
          <OrderImage
            key={guid}
            name={menu_item.name}
            w={64}
            h={32}
            styles=" align-middle border-none"
          />
          <div className="text-xl font-bold "> {menu_item.name}</div>
          <div className="order-description"> {menu_item.description}</div>
          <div className="align-">${menu_item.amt}</div>
        </div>
      );
    });
  };

  return (
    <div className="items-center grid gap-4 ">
      <Splash className="" props={ctx.stateValue} />
      <div className="grid gap-2">
        <MenuItemCards />
      </div>
      {ctx.stateValue.selected.name && <OrderModal />}
    </div>
  );
};
