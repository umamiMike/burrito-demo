type Topping = {
  name: string;
  amt: string;
};
type MenuItem = {
  name: string;
  description: string;
  amt: number;
  toppings: Topping[];
};

type Shop = {
  name: string;
  splash_img: string;
  description: string
}

type App = {
  shop: Shop;
  menu_items: MenuItem[];
  selected: { price: number; toppings: Topping[] };
};
export {
  Topping, Shop, App, MenuItem,
};
