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

  mutation do
    @desc "create a new item"
    field :addItem, :item do
      arg(:id, non_null(:string))
      arg(:name, non_null(:string))

      resolve(&Web.NewsResolver.create_link/3)
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

    {:ok, [@items | item]}
  end
end
