import React, { useContext } from 'react';
import type { MenuItem } from './baseState';

export function MenuCard(item: MenuItem) {
  return (
      <a
        href="/"
        className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-300"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/images/burrito.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">
            Heading
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            menus item description
          </p>
        </div>
      </a>
  );
}
