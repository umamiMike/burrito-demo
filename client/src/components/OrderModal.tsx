import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ALL_ITEMS, MUTATE_ITEM } from '../queries';

import { guid } from '../utils';
import { AppContext } from '../AppContext';
import { Topping } from './Topping';
import type { MenuItem, ToppingType } from '../baseState';

type Image = {
  name: string;
  url: string;
  styles: string;
};

function OrderImage(props: Image) {
  const { url, name, styles } = props;
  return (
    <div className={`${styles} `}>
      <img
        alt={name}
        src={url}
      />
    </div>
  );
}

export function OrderModal() {
  const { loading, error, data } = useQuery(ALL_ITEMS);
  const ctx = useContext(AppContext);
  const { state, dispatch } = ctx;

  const selected = state.menu_items.find(
    (el: MenuItem) => el.name === state.selected.name,
  );
  // eslint-disable-next-line max-len
  const Toppings = selected?.toppings.map((t: ToppingType) => (
    <Topping key={guid()} topping={t} />
  ));

  const splashname = `${selected?.name} %0A splash image %0A `;

  return (
    <div key="555" className="overlay">
      <div className="flex-row  bg-gray-100 shadow-md overflow-hidden  ">
        <div className="">
          <button
            className="p-1 w-5 h-5 uppercase "
            type="button"
            onClick={() => {
              dispatch({ type: 'CANCEL_ORDER' });
            }}
          >
            <IoIosCloseCircleOutline size="20px" />
          </button>
        </div>
        { OrderImage({
          name: splashname, url: 'https://fakeimg.pl/320x120/', styles: 'p-4-rounded-lg',
        })}
        <div className="grid  gap-2 w-full">
          { Toppings }
        </div>
        <button
          type="button"
          className="bg-orange-300 rounded-full px-4 font-bold m-2"
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART' });
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
