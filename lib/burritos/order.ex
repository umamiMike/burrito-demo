defmodule Burritos.Order do
  @moduledoc """
  The Order context.
  """

  import Ecto.Query, warn: false
  alias Burritos.Repo

  alias Burritos.Order.Burrito

  @doc """
  Returns the list of burritos.

  ## Examples

      iex> list_burritos()
      [%Burrito{}, ...]

  """
  def list_burritos do
    Repo.all(Burrito)
  end

  @doc """
  Gets a single burrito.

  Raises `Ecto.NoResultsError` if the Burrito does not exist.

  ## Examples

      iex> get_burrito!(123)
      %Burrito{}

      iex> get_burrito!(456)
      ** (Ecto.NoResultsError)

  """
  def get_burrito!(id), do: Repo.get!(Burrito, id)

  @doc """
  Creates a burrito.

  ## Examples

      iex> create_burrito(%{field: value})
      {:ok, %Burrito{}}

      iex> create_burrito(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_burrito(attrs \\ %{}) do
    %Burrito{}
    |> Burrito.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a burrito.

  ## Examples

      iex> update_burrito(burrito, %{field: new_value})
      {:ok, %Burrito{}}

      iex> update_burrito(burrito, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_burrito(%Burrito{} = burrito, attrs) do
    burrito
    |> Burrito.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a burrito.

  ## Examples

      iex> delete_burrito(burrito)
      {:ok, %Burrito{}}

      iex> delete_burrito(burrito)
      {:error, %Ecto.Changeset{}}

  """
  def delete_burrito(%Burrito{} = burrito) do
    Repo.delete(burrito)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking burrito changes.

  ## Examples

      iex> change_burrito(burrito)
      %Ecto.Changeset{data: %Burrito{}}

  """
  def change_burrito(%Burrito{} = burrito, attrs \\ %{}) do
    Burrito.changeset(burrito, attrs)
  end
end
