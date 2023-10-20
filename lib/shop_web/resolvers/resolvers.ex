defmodule ShopWeb.Resolvers do

  alias Shop.Order

  # TODO: convert to actual database 
  def load_shop(_parent, _args_resolution) do
    shopinfo = %{
      shop_name: "A am the name of a shop",
      shop_splash_img: "urllocationplace",
      shop_description: "some description of a greate shop",
      order: %{id: 1, name: "order "},
      menu: %{id: 1, name: "menu"}
    }

    {:ok, shopinfo}
  end

  def add_item(_parent, args, _resolution) do
    item = %{id: args.id, name: args.name}
    all_items = [item | @items]
    {:ok, %{items: all_items}}
  end


  def list_orders(_parent, _args, _resolution) do
    all_orders =
      Order.list_orders()
    {:ok, all_orders}
  end

  def create_order(_parent, args, _resolution) do
    {:ok, %{order_id: order_id }}  = Order.create_order(%{price: args.price, status: :started }) |> IO.inspect(label: "order")

    {:ok, %{order_id: order_id }}
  end
end
