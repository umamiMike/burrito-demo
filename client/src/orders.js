import { useState } from "react";
/* order modal 
  shows a picture of the order type
  a list of topping selectors
  a running amount
    sums amt of order type + each selected topping amt
  a button 
*/

export const Orders = () => {
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

  const OrderCard = (order) => {
    let { name, amt } = order;
    const [check, changeCheck] = useState(false);
    return (
      <div className="order_type">
        <img
          alt="alt"
          src={`https://fakeimg.pl/100x100/?text=${order.name} image`}
        />
        <button className="order_button" onClick={() => changeCheck(!check)}>
          +
        </button>
      </div>
    );
  };
  const OrderCards = () => {
    const DOM = state.order_types.map((order) => {
      return OrderCard(order);
    });
    return DOM;
  };

  return (
    <div className="order-container">
      <h2> Select 1 to start your order</h2>
      <div className="order_list">
        <OrderCards />
      </div>
    </div>
  );
};
