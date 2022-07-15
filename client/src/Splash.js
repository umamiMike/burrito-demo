import { OrderImage } from "./FakeImage";
export const Splash = (ctx) => {
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4">
        <h2 className="">{ctx.props.shop_name}</h2>
        <div className="font-bold">{ctx.props.shop_description}</div>
      </div>
      <div className="max-h-32 overflow-hidden">
        <OrderImage name="shop name" w="1280" h="100" />
      </div>
    </div>
  );
};
