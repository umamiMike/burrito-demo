defmodule Burritos.OrderFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Burritos.Order` context.
  """

  @doc """
  Generate a burrito.
  """
  def burrito_fixture(attrs \\ %{}) do
    {:ok, burrito} =
      attrs
      |> Enum.into(%{
        name: "some name",
        toppings: "some toppings"
      })
      |> Burritos.Order.create_burrito()

    burrito
  end
end
