defmodule Burritos.Repo do
  use Ecto.Repo,
    otp_app: :burritos,
    adapter: Ecto.Adapters.Postgres
end
