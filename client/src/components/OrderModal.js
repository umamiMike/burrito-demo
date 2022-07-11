import { useContext } from "react";
import { OrderImage } from "../FakeImage";
import { guid } from "../utils";
import AppContext from "../AppContext";
import { Checkbox } from "./Checkbox";

const Topping = ({ topping }) => {
  let { name, amt, selected } = topping;
  return (
    <div className="grid grid-cols-4">
      <OrderImage args={{ name: name, w: 64, h: 64 }} />

      <div>{name}</div>
      <div>{amt} </div>
      <div>
        <Checkbox value={amt} />
      </div>
    </div>
  );
};

export const OrderModal = () => {
  const ctx = useContext(AppContext);
  return (
    <div key="555" className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
        >
          x
        </button>
        <div className="modal-body grid gap-2">
          {ctx.stateValue.cart.items[0].toppings.map((t) => (
            <Topping key={guid()} topping={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
