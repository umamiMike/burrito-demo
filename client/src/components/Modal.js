import { FakeIMG } from "./FakeImage";
import { Toppings } from "./Toppings";
export const Modal = ({ name, amt, toppings, show, setShow }) => {
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
