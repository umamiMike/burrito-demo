import { Checkbox } from "./checkbox";

export const Toppings = (state) => {
  /*
        toppings: [
          { name: "sour cream", amt: 1.99, selected: false },
          { name: "guac", amt: 3.99, selected: false },
*/
  const { toppings } = state.order_types.find((ot) => ot.name === "burrito");
  const toppingsDOM = toppings.map((topping) => {
    return Checkbox(topping.name, topping.amt);
  });
  // const topps, handler = useState(toppings)
  return <ul className="toppings">{toppingsDOM}</ul>;
};
