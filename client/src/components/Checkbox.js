import { useState } from "react";
import { guid } from "../utils";

export const Checkbox = (label, value) => {
  const changeChecked = () => {};
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type="checkbox"
      value={value}
      label={label}
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.currentTarget.checked);
      }}
    />
  );
};
