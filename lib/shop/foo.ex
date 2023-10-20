defmodule Shop.Foo do
  @moduledoc """
  The Foo context.
  """

  import Ecto.Query, warn: false
  alias Shop.Repo

  alias Shop.Foo.Orders

  @doc """
  Returns the list of order.

  ## Examples

      iex> list_order()
      [%Orders{}, ...]

  """
  def list_order do
    Repo.all(Orders)
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
  def get_orders!(id), do: Repo.get!(Orders, id)

  @doc """
  Creates a orders.

  ## Examples

      iex> create_orders(%{field: value})
      {:ok, %Orders{}}

      iex> create_orders(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_orders(attrs \\ %{}) do
    %Orders{}
    |> Orders.changeset(attrs)
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
  def update_orders(%Orders{} = orders, attrs) do
    orders
    |> Orders.changeset(attrs)
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
  def delete_orders(%Orders{} = orders) do
    Repo.delete(orders)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking orders changes.

  ## Examples

      iex> change_orders(orders)
      %Ecto.Changeset{data: %Orders{}}

  """
  def change_orders(%Orders{} = orders, attrs \\ %{}) do
    Orders.changeset(orders, attrs)
  end
end
