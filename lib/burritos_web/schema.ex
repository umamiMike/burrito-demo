defmodule BurritosWeb.Schema do
  use Absinthe.Schema
  # Example data
  # @desc "An item"

  alias BurritosWeb.Resolvers

  object :menu_item do
    field :id, :id
    field :name, :string
  end

  object :items do
    field :items, list_of(:menu_item)
  end

  query do
    @desc "get all items"
    field :all_items, list_of(:menu_item) do
      resolve(&Resolvers.Item.list_items/3)
    end
  end

  mutation do
    @desc "create a new item"
    field :add_item, :items do
      arg(:id, non_null(:string))
      arg(:name, non_null(:string))

      resolve(&Resolvers.Item.add_item/3)
    end
  end
end

defmodule BurritosWeb.Resolvers.Item do
  @items [%{id: "foo", name: "Foo"}, %{id: "bar", name: "Bar"}]

  def list_items(_parent, _args, _resolution) do
    {:ok, @items}
  end

  def add_item(_parent, args, _resolution) do
    item = %{id: args.id, name: args.name}
    all_items = [item | @items]
    {:ok, %{items: all_items}}
  end
end
