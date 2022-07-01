import { useState } from "react";
import { guid } from "../utils";

export const Checkbox = (label, value) => {
  const [check, changeCheck] = useState(false);
  const gid = guid();
  return (
    <li key={gid} className="topping">
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
