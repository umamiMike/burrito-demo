import { useState, useContext } from "react";
import { FakeIMG } from "./FakeImage";
import { Modal } from "./Modal";
import AppContext from "../AppContext";
import { guid } from "../utils";

export const OrderCard = (order) => {
  const [show, setShow] = useState(false);
  const [amt, amtHandler] = useState(order.amt);
  const st = useContext(AppContext);
  const clickHandler = () => {
    setShow(true);
    console.log(st);
  };
  return (
    <div key={guid()}>
      <div onClick={clickHandler} className="order_type">
        {FakeIMG(order.name, 100, 60)}
      </div>
      <Modal
        show={show}
        amt={amt}
        setShow={setShow}
        toppings={order.toppings}
        name={order.name}
      />
    </div>
  );
};
