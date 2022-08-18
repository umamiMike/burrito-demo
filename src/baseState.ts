export type Topping = {
  name: string;
  amt: number;
};

export type MenuItem = {
  name: string;
  amt: number;
  description: string;
  toppings: Topping[];
};

type SelectedType = {
  price: number;
  toppings: Topping[];
  name: string;
};
type StateState = {

  shop_name: string;
  shop_splash_img: string;
  shop_description: string;
  menu_items: MenuItem[];
  selected: SelectedType;
  cart: SelectedType;
};
export type State = {
  state: StateState;
  dispatch: React.DispatchWithoutAction;

};

const baseState: any = {
  shop_name: 'Casa de Miguel',
  shop_splash_img: 'https://i.imgur.com/jBzfI4t.jpg',
  shop_description: 'A festive place to eat your foods',
  menu_items: [
    {
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
  ],
  selected: { price: 0.0, toppings: [], name: '' },
  cart: { price: 0.0, toppings: [], name: '' },
};

export { baseState };
