import React from 'react';
import { OrderImage } from './FakeImage';

export function Splash(ctx) {
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4">
        <h2 className="">{ctx.props.shop_name}</h2>
        <div className="font-bold">{ctx.props.shop_description}</div>
      </div>
      <div className=" ">
        <OrderImage name={ctx.props.shop_name} w="1280" h="200" />
      </div>
    </div>
  );
}