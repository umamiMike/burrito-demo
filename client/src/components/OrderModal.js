import { useContext } from "react";
import { guid } from "../utils";
import AppContext from "../AppContext";

const Topping = ({ topping }) => {
  let { name, amt, selected } = topping;
  return <div>{name}</div>;
};
export const OrderModal = () => {
  const ctx = useContext(AppContext);
  return (
    <div key="555" className="border-black overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
        >
          x
        </button>
        <div className="modal-body">
          {ctx.stateValue.cart.items[0].toppings.map((t) => (
            <Topping key={guid()} topping={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
