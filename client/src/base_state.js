export const base_state = {
  shop_splash_img: "https://i.imgur.com/jBzfI4t.jpg",
  shop_description: "A festive place to eat your foods",
  order_types: [
    {
      name: "burrito",
      amt: 5.99,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "guac", amt: 3.99, selected: false },
      ],
    },
    {
      name: "taco",
      amt: 8.0,
      toppings: [
        { name: "sour cream", amt: 1.99, selected: false },
        { name: "chilis", amt: 2.99, selected: false },
      ],
    },
  ],
};
