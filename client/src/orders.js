import { Checkbox } from "./checkbox";
import { useState, useEffect } from "react";
import { FakeIMG } from "./fake-image";
import { base_state } from "./base_state";

export const Orders = () => {
  // src/base_state.js
  const [st, state_handler] = useState(base_state);

  const OrderCard = (order) => {
    const [show, setShow] = useState(false);
    const [amt, amtHandler] = useState(order.amt);

    return (
      <div>
        <div onClick={() => setShow(true)} className="order_type">
          {FakeIMG(order.name, 100, 60)}
        </div>
        <Modal
          show={show}
          amt={amt}
          setShow={setShow}
          toppings={order.toppings}
          name={order.name}
        />
        <p>{() => amtHandler(amt + 1)}</p>
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
  // note passing through the
  const Modal = ({ name, amt, toppings, show, setShow }) => {
    // const [amount, amountHandler] = useState(amt);
    let amount = amt;
    <h1> {amount} </h1>;
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
      <div className="code">
        <pre>
          <code>{JSON.stringify(st, null, "\t")}</code>
        </pre>
      </div>
    </div>
  );
};
