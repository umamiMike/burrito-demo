import { useState, useContext } from "react";
import AppContext from "../AppContext";

export const Checkbox = (props) => {
  let { name, value } = props;
  const ctx = useContext(AppContext);
  let isChecked = false;

  const handleChange = () => {
    if (isChecked === true) {
      ctx.stateDispatch({
        type: "ADD_TOPPING",
        payload: { value: value, name: name },
      });
    } else {
      ctx.stateDispatch({
        type: "REMOVE_TOPPING",
        payload: { value: value, name: name },
      });
    }
    isChecked = !isChecked;
  };

  return (
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={(e) => {
        handleChange();
      }}
    />
  );
};
