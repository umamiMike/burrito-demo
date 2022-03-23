import { useState } from "react";

export const Checkbox = (label, value) => {
  const [check, changeCheck] = useState(false);
  return (
    <li className="">
      <label>
        {label}
        {value}
        <input
          type="checkbox"
          checked={check}
          onChange={() => changeCheck(!check)}
        />
      </label>
    </li>
  );
};
