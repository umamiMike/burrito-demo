import { OrderImage } from "./FakeImage";
export const Splash = (ctx) => {
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4">
        <h2 className="">{ctx.props.shop_name}</h2>

        <div className="font-bold">{ctx.props.shop_description}</div>
      </div>
      <OrderImage name="shop name" w="300" h="64" />
    </div>
  );
};
