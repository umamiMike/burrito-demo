import { Checkbox } from "./components/Checkbox";
import { useState } from "react";
import { base_state } from "./base_state";
import { OrderCard } from "./components/OrderCard";
import { CodeView } from "./components/CodeView";

export const Orders = () => {
  const [st, state_handler] = useState(base_state);
  const Toppings = (toppings) => {
    const toppingsDOM = toppings.map((topping) => {
      return Checkbox(topping.name, topping.amt);
    });
    return <ul className="toppings">{toppingsDOM}</ul>;
  };

  // src/Modal.js
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
      {CodeView(st)}
    </div>
  );
};
