import { FakeIMG } from "./FakeImage";
import { guid } from "../utils";
import { Checkbox } from "./Checkbox";

export const Modal = ({ name, amt, toppings, show, setShow }) => {
  const Toppings = (toppings) => {
    return toppings.map((topping) => {
      return Checkbox(topping.name, topping.amt);
    });
  };

  const content = show && (
    <div key={guid()} className="overlay">
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
          <ul className="toppings">{Toppings(toppings)}</ul>
        </div>
      </div>
    </div>
  );
  return content;
};
