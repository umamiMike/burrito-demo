import { useState } from "react";
import { reducer } from "./reducer";
import AppContext from "./AppContext";

export const Checkbox = (value) => {
  const ctx = useContext(AppContext);
  const dispatch = ctx.stateDispatch;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={(e) => {}}
    />
  );
};
