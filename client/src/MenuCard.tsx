import React from 'react';
import type { MenuItem } from './baseState';

export function MenuCard(item: MenuItem, dispatch: any) {
  return (
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          console.log(item);
          dispatch({ type: 'START_ORDER', payload: item });
        }}
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-300 "
      >
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">{item.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $
            {item.amt}
          </p>
        </div>
      </a>
  );
}
