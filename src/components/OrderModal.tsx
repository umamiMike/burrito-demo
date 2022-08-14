import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import OrderImage from '../FakeImage';
import guid from '../guid';
import AppContext from '../AppContext';
import Topping from './Topping';

const OrderModal = () => {
  const ctx: React.Context<any> = useContext(AppContext);

  const selected = ctx.stateValue.menu_items.find(
    (el: any) => el.name === ctx.stateValue.selected.name,
  );

  const Toppings = () => selected.toppings.map((t: any) => <Topping key={guid()} topping={t} />);
  const splashname = `${selected.name} %0A splash image %0A `;

  return (
    <div key="555" className="overlay">
      <div className="flex-row  bg-gray-100 shadow-md overflow-hidden  ">
        <div className="">
          <button
            className="p-1 w-5 h-5 uppercase "
            type="button"
            onClick={() => ctx.stateDispatch({ type: 'CANCEL_ORDER' })}
          >
            <IoIosCloseCircleOutline size="20px" />
          </button>
        </div>
        <OrderImage name={splashname} w="600" h="140" styles="p-4 rounded-lg" />
        <div className="grid  gap-2 w-full">
          <Toppings />
        </div>
        <button
          type="submit"
          className="bg-orange-300 rounded-full px-4 font-bold m-2"
          onClick={() => {
            ctx.stateDispatch({ type: 'ADD_TO_CART' });
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};
export default OrderModal;
