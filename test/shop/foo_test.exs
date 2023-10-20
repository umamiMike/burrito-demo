defmodule Shop.FooTest do
  use Shop.DataCase

  alias Shop.Foo

  describe "order" do
    alias Shop.Foo.Orders

    import Shop.FooFixtures

    @invalid_attrs %{}

    test "list_order/0 returns all order" do
      orders = orders_fixture()
      assert Foo.list_order() == [orders]
    end

    test "get_orders!/1 returns the orders with given id" do
      orders = orders_fixture()
      assert Foo.get_orders!(orders.id) == orders
    end

    test "create_orders/1 with valid data creates a orders" do
      valid_attrs = %{}

      assert {:ok, %Orders{} = orders} = Foo.create_orders(valid_attrs)
    end

    test "create_orders/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Foo.create_orders(@invalid_attrs)
    end

    test "update_orders/2 with valid data updates the orders" do
      orders = orders_fixture()
      update_attrs = %{}

      assert {:ok, %Orders{} = orders} = Foo.update_orders(orders, update_attrs)
    end

    test "update_orders/2 with invalid data returns error changeset" do
      orders = orders_fixture()
      assert {:error, %Ecto.Changeset{}} = Foo.update_orders(orders, @invalid_attrs)
      assert orders == Foo.get_orders!(orders.id)
    end

    test "delete_orders/1 deletes the orders" do
      orders = orders_fixture()
      assert {:ok, %Orders{}} = Foo.delete_orders(orders)
      assert_raise Ecto.NoResultsError, fn -> Foo.get_orders!(orders.id) end
    end

    test "change_orders/1 returns a orders changeset" do
      orders = orders_fixture()
      assert %Ecto.Changeset{} = Foo.change_orders(orders)
    end
  end
end
