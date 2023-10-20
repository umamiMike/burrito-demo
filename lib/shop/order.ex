defmodule Shop.Order do
  @moduledoc """
  The Foo context.
  """

  import Ecto.Query, warn: false
  alias Shop.Repo

  alias Shop.Orders.Order

  @doc """
  Returns the list of order.

  ## Examples

      iex> list_order()
      [%Orders{}, ...]

  """
  def list_orders do
    Repo.all(Order)
  end

  @doc """
  Gets a single orders.

  Raises `Ecto.NoResultsError` if the Orders does not exist.

  ## Examples

      iex> get_orders!(123)
      %Orders{}

      iex> get_orders!(456)
      ** (Ecto.NoResultsError)

  """
  def get_order!(id), do: Repo.get!(Order, id)

  @doc """
  Creates a orders.

  ## Examples

      iex> create_orders(%{field: value})
      {:ok, %Order{}}

      iex> create_orders(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_order(attrs \\ %{}) do
    %Order{}
    |> Order.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a orders.

  ## Examples

      iex> update_orders(orders, %{field: new_value})
      {:ok, %Orders{}}

      iex> update_orders(orders, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_order(%Order{} = order, attrs) do
    order
    |> Order.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a orders.

  ## Examples

      iex> delete_orders(orders)
      {:ok, %Orders{}}

      iex> delete_orders(orders)
      {:error, %Ecto.Changeset{}}

  """
  def delete_order(%Order{} = order) do
    Repo.delete(order)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking orders changes.

  ## Examples

      iex> change_orders(orders)
      %Ecto.Changeset{data: %Orders{}}

  """
  def change_order(%Order{} = order, attrs \\ %{}) do
    Order.changeset(order, attrs)
  end
end
