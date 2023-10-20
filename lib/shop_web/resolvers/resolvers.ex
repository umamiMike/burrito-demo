defmodule ShopWeb.Resolvers do
  alias Shop.Order

  @items [%{id: "foo", name: "Foo"}, %{id: "bar", name: "Bar"}]

  def list_items(_parent, _args, _resolution) do
    {:ok, @items}
  end

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

  @orders [
    %{id: 1, status: "started", price: 6.56},
    %{id: 2, status: "completed", price: 5.22}
  ]

  def list_orders(_parent, _args, _resolution) do
    all_orders =
      Shop.list_orders()
      |> Enum.map(fn burr ->
        %{
          id: burr.id,
          status: "started"
        }
      end)

    {:ok, all_orders}
  end

  def create_order(_parent, args, _resolution) do
    order = %{ id: 3, status: "started", price: args.price} 
    all_orders = [order | @orders] 
    {:ok, %{orders: all_orders}}
  end
end
