defmodule Shop.Order do
  use Ecto.Schema
  import Ecto.Changeset

  schema "orders" do
    field :price, :decimal
    field :status, Ecto.Enum, values: [:started, :cancelled, :completed]

    timestamps()
  end

  @doc false
  def changeset(order, attrs) do
    order
    |> cast(attrs, [:id, :price, :status])
    |> validate_required([:id, :price, :status])
  end
end
