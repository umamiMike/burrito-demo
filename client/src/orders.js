/* order modal 
  shows a picture of the order type
  a list of topping selectors
  a running amount
    sums amt of order type + each selected topping amt
  a button 
*/

/*  list of order_types
  a card
  - [ ] for each order
  - [ ]  useState
   picture
   click 
    brings up an order modal
  */
export const Orders = () => {
  const state = {
    order_types: [
      {
        name: "burrito",
        amt: 5.99,
        toppings: [
          { name: "sour cream", amt: 1.99, selected: false },
          { name: "guac", amt: 3.99, selected: false },
        ],
      },
      {
        name: "taco",
        amt: 8.0,
        toppings: [
          { name: "sour cream", amt: 1.99, selected: false },
          { name: "chilis", amt: 2.99, selected: false },
        ],
      },
    ],
  };
  const OrderCards = () => {
    const DOM = state.order_types.map((order) => {
      return (
        <div className="order_type">
          <img
            alt="alt"
            src={`https://fakeimg.pl/100x100/?text=${order.name} image`}
          />
          <div>{order.name}</div>
          <button className="order_button" value="schmalue">
            foooo press me
          </button>
        </div>
      );
    });
    return DOM;
  };

  return (
    <div className="order_list">
      Which would you like to order?
      <OrderCards />
    </div>
  );
};
