import { Checkbox } from "./checkbox";
import { useState, useEffect } from "react";

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

  const [st, state_handler] = useState(state);
  useEffect(() => {});

  const FakeIMG = (fakename, l, w) => {
    return (
      <img
        className="order-img"
        alt="alt"
        src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${fakename} image`}
      />
    );
  };
  const OrderCard = (order) => {
    const [show, setShow] = useState(false);

    return (
      <div className="order_type">
        {FakeIMG(order.name, 100, 60)}
        <button className="order_button" onClick={() => setShow(true)}>
          +
        </button>
        <Modal
          show={show}
          setShow={setShow}
          toppings={order.toppings}
          name={order.name}
        />
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
  const Modal = ({ name, toppings, show, setShow }) => {
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
          <div className="modal-body">
            {FakeIMG(name, 100, 100)}
            {Toppings(toppings)}
          </div>
        </div>
      </div>
    );
    return content;
  };

  const OrderCards = () => {
    const DOM = st.order_types.map((order) => {
      return OrderCard(order);
    });
    return DOM;
  };

  return (
    <div className="order-container">
      <div className="order_list">
        <OrderCards />
      </div>
    </div>
  );
};
