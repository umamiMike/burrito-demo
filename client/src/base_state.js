export const base_state = {
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
