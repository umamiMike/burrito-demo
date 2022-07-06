import { useState } from "react";

export const Checkbox = (value) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.currentTarget.checked);
      }}
    />
  );
};
