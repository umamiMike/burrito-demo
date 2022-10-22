defmodule Burritos.Repo.Migrations.CreateBurritos do
  use Ecto.Migration

  def change do
    create table(:burritos, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :state, :json
      timestamps()
    end
  end
end
