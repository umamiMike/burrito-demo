defmodule ShopWeb.Router do
  use ShopWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: ShopWeb.Schema

    forward "/", Absinthe.Plug, schema: ShopWeb.Schema
  end
end
