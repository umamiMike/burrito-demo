import React, { useContext } from 'react';
import { guid } from './utils';
import AppContext from './AppContext';
import { OrderModal } from './components/OrderModal';
import { OrderImage } from './FakeImage';

export function Menu() {
  const ctx = useContext(AppContext);

  const MenuItemCards = () => ctx.stateValue.menu_items.map((menuItem) => {
    const key = guid();

    return (
      <button
        type="button"
        key={key}
        className=" justify-items-start max-w-screen-md  bg-gray-200 grid grid-cols-2 place-content-stretch rounded-md"
        onClick={() => {
          ctx.stateDispatch({ type: 'START_ORDER', payload: menuItem });
        }}
      >
        <div className="p-4">
          <div className="text-xl font-bold ">
            {' '}
            {menuItem.name}
          </div>
          <div className="item-description">
            {' '}
            {menuItem.description}
          </div>
          <div className="border-solid border-l-[2px]  item-amt justify-self-end ">
            $
            {menuItem.amt}
          </div>
        </div>
        <OrderImage
          key={guid}
          name={menuItem.name}
          w={120}
          h={120}
          styles="border-none overflow-clip justify-self-end rounded-md"
        />
      </button>
    );
  });

  return (
    <div className="grid md:grid-cols-2 md:mx-8 gap-4 mx-4  transition-all duration-200">
      <MenuItemCards />
      {ctx.stateValue.selected.name && <OrderModal />}
    </div>
  );
}
