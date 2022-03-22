import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";

const ALL_ITEMS = gql`
  query {
    allItems {
      id
      name
    }
  }
`;

const MUTATE_ITEM = gql`
  mutation AddItem {
    addItem(id: "fooo", name: "fooobian") {
      items {
        name
      }
    }
  }
`;

const Checkbox = (label, value) => {
  const [check, changeCheck] = useState(false);
  return (
    <li>
      <label>
        {label}
        {value}
        <input
          type="checkbox"
          checked={check}
          onChange={() => changeCheck(!check)}
        />
      </label>
    </li>
  );
};

const Toppings = (toppings) => {
  let toppingsDOM = toppings.map((topping) => {
    return Checkbox(topping.name, topping.amt);
  });
  return toppingsDOM;
};

function App() {
  const { loading, error, data } = useQuery(ALL_ITEMS, {});
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

  /* order modal 

  shows a picture of the order type
  a list of topping selectors
  a running amount
    sums amt of order type + each selected topping amt
  a button 

*/

  const { name, amt, toppings } = state.order_types.find(
    (ot) => ot.name == "burrito"
  );

  /*  list of order_types
  a card
  - [ ] for each order
  - [ ]  useState
   picture
   click 
    brings up an order modal
  */
  const Orders = () => {
    return (
      <div className="w-full border  focus black">
        {" "}
        <img src="https://fakeimg.pl/100x100/" />
      </div>
    );
  };

  return (
    <div className="App">
      <Orders />
      <ul>{Toppings(toppings)}</ul>
    </div>
  );
}
export default App;
