defmodule Burritos.Order.Burrito do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "burritos" do
    field :name, :string
    field :toppings, :json

    timestamps()
  end

  @doc false
  def changeset(burrito, attrs) do
    burrito
    |> cast(attrs, [:name, :toppings])
    |> validate_required([:name, :toppings])
  end
end
