import React, { useContext } from 'react';
import { MenuCard } from './MenuCard';
import { AppContext } from './AppContext';

export function Menu() {
  const { state } = useContext(AppContext);
  const menuItems = state.menu_items.map((el) => MenuCard(el));
  return (
    { menuItems }
  );
}
