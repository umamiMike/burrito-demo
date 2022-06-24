import { useState } from "react";
import { FakeIMG } from "./FakeImage";
import { Modal } from "./Modal";

export const OrderCard = (order) => {
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
