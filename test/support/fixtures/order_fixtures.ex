defmodule Shop.OrderFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Shop.Order` context.
  """

  @doc """
  Generate a burrito.
  """
  def shop_fixture(attrs \\ %{}) do
    {:ok, burrito} =
      attrs
      |> Enum.into(%{
        name: "some name",
        toppings: "some toppings"
      })
      |> Shop.Order.create_burrito()

    burrito
  end
end
