defmodule ShopWeb.Schema do
  use Absinthe.Schema

  alias ShopWeb.Resolvers


  object :menu do
    field :id, :id 
    field :name, :string
  end


  object :order do
    field :id, :id
    field :order_id, :string
    field :status, :string
    field :price, :string
  end

  object :orders do
    field :orders, list_of(:order)
  end

  object :shop_info do
    field :shop_name, :string
    field :shop_splash_img, :string
    field :shop_description, :string
    field :order, :order
    field :menu, :menu
  end

  query do
    @desc "get all orders"
    field :all_orders, list_of(:order) do
      resolve(&Resolvers.list_orders/3)
    end

    @desc "load shop"
    field :shop_info, :shop_info do
      resolve(&Resolvers.load_shop/2)
    end

  end

  mutation do
    @desc "create a new order"
    field :create_order, :order do
      arg(:price, non_null(:string))

      resolve(&Resolvers.create_order/3)
    end
  end
end
