import { useState } from "react";

export const Checkbox = (label, value) => {
  const [check, changeCheck] = useState(false);
  return (
    <li className="topping">
      <p>{label}</p>
      <input
        type="checkbox"
        value={value}
        label={label}
        checked={check}
        onChange={() => changeCheck(!check)}
      />
    </li>
  );
};
