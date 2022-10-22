import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { OrderModal } from './components/OrderModal';
import { guid } from './utils';
import type { MenuItem } from './baseState';

export function Menu() {
  const { state, dispatch } = useContext(AppContext);
  const MenuItemCards = state.menu_items.map((menuItem: MenuItem) => {
    const key = guid();

    return (
      <button
        type="button"
        key={key}
        className=" justify-items-start max-w-screen-md  bg-gray-200 grid grid-cols-2  rounded-md"
        onClick={() => {
          dispatch({ type: 'START_ORDER', payload: menuItem });
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
        <img
          className="max-w-xs"
          alt={menuItem.name}
          src={`/${menuItem.image}`}
        />
      </button>
    );
  });

  return (
    <div className="grid md:grid-cols-2 md:mx-8 gap-4 mx-4  transition-all duration-200">
      { MenuItemCards }
      {state.selected.name && <OrderModal />}
    </div>
  );
}
