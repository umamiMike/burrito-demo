defmodule Shop.Orders.Order do
  use Ecto.Schema
  import Ecto.Changeset


  schema "orders" do
    field :price, :decimal
    field :status, Ecto.Enum, values: [:started, :cancelled, :completed]
    field :order_id, Ecto.UUID, autogenerate: true

    timestamps()
  end

  @doc false
  def changeset(order, attrs) do
    order
    |> cast(attrs, [:price, :status])
    |> validate_required([:price, :status])
  end
end
