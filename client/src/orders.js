import { Checkbox } from "./checkbox";
import { useState } from "react";

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
    const [show, setShow] = useState(false);

    return (
      <div className="order_type">
        <img
          alt="alt"
          src={`https://fakeimg.pl/100x100/?text=${order.name} image`}
        />
        <button className="order_button" onClick={() => setShow(true)}>
          {order.name} +
        </button>
        <Modal show={show} setShow={setShow} toppings={order.toppings} />
      </div>
    );
  };
  const Toppings = (toppings) => {
    const toppingsDOM = toppings.map((topping) => {
      return Checkbox(topping.name, topping.amt);
    });
    return <ul className="toppings">{toppingsDOM}</ul>;
  };

  /* order modal 
  shows a picture of the order type
  a list of topping selectors
  a running amount
    sums amt of order type + each selected topping amt
  a button 
*/
  const Modal = ({ toppings, show, setShow }) => {
    const content = show && (
      <div className="overlay">
        <div className="modal">
          <button
            className="modal-close"
            type="button"
            onClick={() => setShow(false)}
          >
            x
          </button>
          <div className="modal-body">{Toppings(toppings)}</div>
        </div>
      </div>
    );

    return content;
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
