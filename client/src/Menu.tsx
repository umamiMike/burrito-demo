import React, { useContext } from 'react';
import { MenuCard } from './MenuCard';
import { AppContext } from './AppContext';

export function Menu() {
  const { state, dispatch } = useContext(AppContext);
  const { menuItems } = state;
  const Items = menuItems.map((item) => MenuCard(item, dispatch));
  return (
    <div className="flex flex-col">
      { Items }
    </div>
  );
}
