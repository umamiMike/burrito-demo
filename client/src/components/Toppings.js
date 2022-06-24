import { Checkbox } from "./Checkbox";

export const Toppings = (toppings) => {
  const toppingsDOM = toppings.map((topping) => {
    return Checkbox(topping.name, topping.amt);
  });
  return <ul className="toppings">{toppingsDOM}</ul>;
};
