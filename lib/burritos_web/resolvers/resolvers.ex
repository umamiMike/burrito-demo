defmodule BurritosWeb.Resolvers do
  @items [%{id: "foo", name: "Foo"}, %{id: "bar", name: "Bar"}]

  def list_items(_parent, _args, _resolution) do
    {:ok, @items}
  end

  def add_item(_parent, args, _resolution) do
    item = %{id: args.id, name: args.name}
    all_items = [item | @items]
    {:ok, %{items: all_items}}
  end

  @orders [
    %{id: 1, status: "started", price: 6.56 }, 
    %{id: 2, status: "completed", price: 5.22 }, 
  ]

  def list_orders(_parent, _args, _resolution) do
    {:ok, @orders}
  end

  def add_order(_parent, args, _resolution) do
    order = %{id: args.id, name: args.name}
    all_orders = [order | @orders]
    {:ok, %{items: all_orders}}
  end





end
