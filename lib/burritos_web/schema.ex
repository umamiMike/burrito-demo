defmodule BurritosWeb.Schema do
  use Absinthe.Schema
  # Example data
  # @desc "An item"

  alias BurritosWeb.Resolvers

  object :item do
    field :id, :id
    field :name, :string
  end

  query do
    @desc "get all items"
    field :all_items, list_of(:item) do
      resolve(&Resolvers.Item.list_items/3)
    end
  end
end

defmodule BurritosWeb.Resolvers.Item do
  @items [%{id: "foo", name: "Foo"}, %{id: "bar", name: "Bar"}]

  def list_items(_parent, _args, _resolution) do
    {:ok, @items}
  end
end
