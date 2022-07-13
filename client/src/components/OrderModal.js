import { useContext, useState } from "react";
import { OrderImage } from "../FakeImage";
import { guid } from "../utils";
import AppContext from "../AppContext";
import { Checkbox } from "./Checkbox";

const Topping = ({ topping }) => {
  let { name, amt, selected } = topping;
  const ctx = useContext(AppContext);
  const [isChecked, setChecked] = useState(false);
  const handleChange = (e) => {
    // // e.preventDefault();
    ctx.stateDispatch({
      type: "ADD_TOPPING",
      payload: { value: amt, name: name },
    });
    console.log(ctx.stateValue.selected);
  };

  function FOO() {
    console.log("foooooooo is function");
  }
  const REMOVE = () => {
    return ctx.stateDispatch({
      type: "REMOVE_TOPPING",
      payload: { value: amt, name: name },
    });
  };
  return (
    <div className="grid grid-cols-4">
      <div>
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          value={amt}
          name={name}
        />
      </div>
      <div>{name}</div>
      <div>{amt} </div>
    </div>
  );
};

export const OrderModal = () => {
  const ctx = useContext(AppContext);
  const selected = ctx.stateValue.menu_items.find(
    (el) => el.name === ctx.stateValue.selected.name
  );
  return (
    <div key="555" className="overlay">
      <div className="overflow-scroll bg-gray-100 shadow-md modal">
        <div className=" h-1/2 grid gap-2 rounded-md border-bottom">
          <button
            className="w-[32px] uppercase rounded-full bg-emerald-500"
            type="button"
            onClick={() => ctx.stateDispatch({ type: "CANCEL_ORDER" })}
          >
            x
          </button>
          <OrderImage name="splash" w="300" h="100" />
          {selected.toppings.map((t) => (
            <Topping key={guid()} topping={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
