import { Toppings } from "./toppings";
import { Orders } from "./orders";
// import { useState } from "react";

/* holdovers from toy gql implementation
// import { ALL_ITEMS, MUTATE_ITEM } from "./queries";
this is how to query all items
const { loading, error, data } = useQuery(ALL_ITEMS, {});

*/

const App = () => {
  // state is a convenience until I get a handle on the DOM, then
  // load graphql query for initial state
  // mutation on place order button click
  const state = {
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

  // src/orders.js

  return (
    <div className="App">
      <Orders />
      {Toppings(state)}
    </div>
  );
};

export default App;
