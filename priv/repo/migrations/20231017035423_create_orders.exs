defmodule Shop.Repo.Migrations.CreateOrders do
  use Ecto.Migration

  def change do
    create table(:orders) do
      add :order_id, :uuid
      add :price, :decimal
      add :status, :string

      timestamps()
    end
  end
end
