defmodule BurritosWeb.Schema do
  use Absinthe.Schema
  # Example data
  # @desc "An item"

  alias BurritosWeb.Resolvers
  alias Burritos.Order

  object :item do
    field :id, :id
    field :name, :string
  end

  object :items do
    field :items, list_of(:item)
  end

  object :order do
    field :id, :id
    field :status, :string
    field :price, :float
  end

  object :orders do
    field :orders, list_of(:order)
  end


  query do
    @desc "get all items"
    field :all_items, list_of(:item) do
      resolve(&Resolvers.list_items/3)
    end

    @desc "get all orders"
    field :all_orders, list_of(:order) do
      resolve(&Resolvers.list_orders/3)
    end
  end

  mutation do
    @desc "create a new item"
    field :add_item, :items do
      arg(:id, non_null(:string))
      arg(:name, non_null(:string))

      resolve(&Resolvers.add_item/3)
    end

    @desc "create a new order"
    field :add_order, :orders do
      arg(:id, non_null(:string))
      arg(:name, non_null(:string))

      resolve(&Resolvers.add_order/3)
    end
  end
end

