export type ToppingType = {
  name: string;
  amt: number;
};

export type MenuItem = {
  name: string;
  amt: number;
  description: string;
  toppings: ToppingType[];
  image: string;
};

type SelectedType = {
  price: number;
  toppings: ToppingType[] ;
  name: string;
};

export type Shop = {
  shop_name: string;
  shop_splash_img: string;
  shop_description: string;
  selected: SelectedType;
  cart: SelectedType;
  menu_items: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    image: '/images/burrito.png',
    name: 'burrito',
    description: 'a yummy deep fried steak thingy',
    amt: 5.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    image: '/images/burrito.png',
    name: 'chicken burrito',
    description: 'a yummy deep fried chickeny delight',
    amt: 6.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    name: 'taco',
    image: 'images/taco.png',
    description: 'shredded beef or chicken with cheese and salsa',
    amt: 8.0,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'rice and beans', amt: 2.99 },
      { name: 'chilis', amt: 2.95 },
      { name: 'grilled onions', amt: 0.95 },
      { name: 'grilled red onions', amt: 0.95 },
      { name: 'extra dope cheese', amt: 0.95 },
      { name: 'grilled onions', amt: 0.95 },
    ],
  },
  {
    image: '/images/taco.png',
    name: 'taco extreme',
    description:
        ' a whole bunch of shredded beef or chicken with cheese and salsa',
    amt: 8.0,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'rice and beans', amt: 2.99 },
      { name: 'chilis', amt: 2.95 },
      { name: 'grilled onions', amt: 0.95 },
      { name: 'grilled red onions', amt: 0.95 },
      { name: 'extra dope cheese', amt: 0.95 },
      { name: 'grilled onions', amt: 0.95 },
    ],
  },
];

export const shopInfo: Shop = {
  shop_name: 'Casa de Miguel',
  shop_splash_img: 'https://i.imgur.com/jBzfI4t.jpg',
  shop_description: 'A festive place to (not actually) eat your food',
  selected: { price: 0, name: '', toppings: [] },
  cart: { price: 0, name: '', toppings: [] },
  menu_items: menuItems,
};

export type Cart = {
  selected?: SelectedType;
  cart?: SelectedType;

};

export const cart: Cart = {
  selected: { price: 0, name: '', toppings: [] },
  cart: { price: 0, name: '', toppings: [] },
};
