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
    image: 'images/burrito.png',
    name: 'Ground Beef Burrito',
    description: 'Everything you want after a long day',
    amt: 5.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    image: 'images/burrito.png',
    name: 'Chicken Burrito',
    description: 'Spicy or mild, melt-in-your-mouth good ',
    amt: 6.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    name: 'Taco',
    image: 'images/taco.png',
    description: 'shredded beef or chicken with cheese and salsa',
    amt: 2.0,
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
    image: 'images/extreme-burrito.png',
    name: 'Burrito Extreme',
    description:
        'The word extreme was invented for this Burrito, Loaded with all the goods',
    amt: 3.50,
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
  shop_description: 'Food that Makes Your Taste Buds Sing',
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
