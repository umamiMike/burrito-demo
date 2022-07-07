import { useContext } from "react";
import AppContext from "../AppContext";

const Topping = ({ name }) => {
  return <div>{name}</div>;
};
export const Modal = () => {
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
        <div className="modal-body">
          {ctx.stateValue.cart.items[0].toppings.map((t) => (
            <Topping name={t.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
