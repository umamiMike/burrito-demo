import { useState, useContext } from "react";
import AppContext from "../AppContext";

export const Checkbox = (value) => {
  const ctx = useContext(AppContext);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={(e) => {
        console.log(value);
        ctx.stateDispatch({ type: "ADD_TOPPING", payload: { value: "bar" } });
        setIsChecked(!isChecked);
      }}
    />
  );
};
