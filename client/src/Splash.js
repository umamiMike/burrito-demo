export const Splash = (ctx) => {
  return (
    <div>
      <h2>{ctx.props.shop_name}</h2>
      {ctx.props.shop_description}
      <img className="" alt="alt" src={ctx.props.shop_splash_img} />
    </div>
  );
};
