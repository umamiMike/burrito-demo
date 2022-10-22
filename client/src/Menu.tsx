import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { OrderModal } from './components/OrderModal';
import { OrderImage } from './FakeImage';
import { guid } from './utils';
import type { MenuItem } from './baseState';

export function Menu() {
  const { state, dispatch } = useContext(AppContext);
  const MenuItemCards = state.menu_items.map((menuItem: MenuItem) => {
    const key = guid();

    return (
      <div
        key={key}
        className="card"
      >
        <div className="p-4">
          <div className="text-xl font-bold ">
            <button
              onClick={() => {
                dispatch({ type: 'START_ORDER', payload: menuItem });
              }}
              type="button"
            >
              {' '}
              {menuItem.name}
            </button>
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
          image={menuItem.image}
          name={menuItem.name}
          styles="border-none  justify-self-end rounded-md"
        />
      </div>
    );
  });

  return (
    <div className="grid md:grid-cols-2 md:mx-8 gap-4 mx-4  transition-all duration-200">
      { MenuItemCards }
      {state.selected.name && <OrderModal />}
    </div>
  );
}
