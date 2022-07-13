export const base_state = {
  shop_splash_img: "https://i.imgur.com/jBzfI4t.jpg",
  shop_description: "A festive place to eat your foods",
  shop_name: "The Burrito Code",
  menu_items: [
    {
      name: "burrito",
      description: "a yummy deep fried steak thingy",
      amt: 5.99,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "extra cheese", amt: 0.99, selected: false },
        { name: "guac", amt: 3.99, selected: false },
      ],
    },
    {
      name: "taco",
      description: "shredded beef or chickn with cheese and sauce",
      amt: 8.0,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "chilis", amt: 2.99, selected: false },
      ],
    },
  ],
  selected: {},
  cart: {},
};
