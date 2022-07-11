import { OrderImage } from "./FakeImage";
export const Splash = (ctx) => {
  return (
    <div className="top-0 flex-row bg-gray-100 shadow-sm max-w-half">
      <h2>{ctx.props.shop_name}</h2>
      {ctx.props.shop_description}
      <OrderImage args={{ name: "mexican", w: 900, h: 200 }} />
    </div>
  );
};
