defmodule Shop.OrderTest do
  use Shop.DataCase

  alias Shop.Order

  describe "shops" do
    alias Shop.Order.Shop

    import Shop.OrderFixtures

    @invalid_attrs %{name: nil, toppings: nil}

    test "list_shops/0 returns all burritos" do
      burrito = burrito_fixture()
      assert Order.list_shops() == [burrito]
    end

    test "get_burrito!/1 returns the burrito with given id" do
      burrito = burrito_fixture()
      assert Order.get_burrito!(burrito.id) == burrito
    end

    test "create_burrito/1 with valid data creates a burrito" do
      valid_attrs = %{name: "some name", toppings: "some toppings"}

      assert {:ok, %Shop{} = burrito} = Order.create_shop(valid_attrs)
      assert shop.name == "some name"
      assert shop.toppings == "some toppings"
    end


    test "create_burrito/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Order.create_burrito(@invalid_attrs)
    end

    test "update_burrito/2 with valid data updates the burrito" do
      burrito = burrito_fixture()
      update_attrs = %{name: "some updated name", toppings: "some updated toppings"}

      assert {:ok, %Shop{} = shop} = Order.update_burrito(burrito, update_attrs)
      assert shop.name == "some updated name"
      assert shop.toppings == "some updated toppings"
    end

    test "update_burrito/2 with invalid data returns error changeset" do
      burrito = burrito_fixture()
      assert {:error, %Ecto.Changeset{}} = Order.update_burrito(burrito, @invalid_attrs)
      assert burrito == Order.get_burrito!(burrito.id)
    end

    test "delete_burrito/1 deletes the burrito" do
      burrito = burrito_fixture()
      assert {:ok, %Shop{}} = Order.delete_shop(burrito)
      assert_raise Ecto.NoResultsError, fn -> Order.get_burrito!(burrito.id) end
    end

    test "change_shop/1 returns a burrito changeset" do
      burrito = burrito_fixture()
      assert %Ecto.Changeset{} = Order.change_burrito(burrito)
    end
  end
end
