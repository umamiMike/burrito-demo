export const Splash = (ctx) => {
  return (
    <div className="flex-row bg-gray-100 shadow-sm">
      <h2>{ctx.props.shop_name}</h2>
      {ctx.props.shop_description}
      <img className="object-fit" alt="alt" src={ctx.props.shop_splash_img} />
    </div>
  );
};
