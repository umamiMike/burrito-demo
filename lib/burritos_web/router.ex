defmodule BurritosWeb.Router do
  use BurritosWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: BurritosWeb.Schema

    forward "/", Absinthe.Plug, schema: BurritosWeb.Schema
  end
end
